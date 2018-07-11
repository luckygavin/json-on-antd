/**
 * @file Table扩展 - 搜索/过滤相关逻辑实现
 * @author liuzechun@baidu.com
 * */

import {Utils} from 'src/utils';

export default class Filter {
    constructor(parent) {
        this.parent = parent;
        this.filterValue = '';
        // 过滤字段黑名单/白名单
        this.globalFilterList = null;
    }
    clearState() {
        this.filterValue = '';
    }

    /* 模糊搜索 **********************************************************************/
    // 过滤输入框点回车搜索时 (用于后端分页)
    onFilterSearch(value) {
        // 如果为后端分页，则不立刻搜索，onSearch 时才会搜索
        if (!this.parent.serverPaging) {
            return;
        }
        // 在原有参数基础上，追加一个search参数
        let oParams = this.parent.__filtered.source.params;
        oParams.search = value;
        this.parent.set({params: oParams});
    }
    // 过滤输入框变化时(用于前端分页)
    onFilterChange(e) {
        let iVal = e.target.value;
        this.setState({filterValue: iVal});
        // 如果为后端分页，则不立刻搜索，onSearch 时才会搜索
        if (this.parent.serverPaging) {
            return;
        }
        clearTimeout(this.filterTimer);
        this.filterTimer = setTimeout(()=>{
            this.onFilterData();
        }, 150);
    }
    onFilterData() {
        // 过滤
        let data = this.parent.state.completeData;
        // @bugfix at 2018/01/31 15:38，展示模糊搜索内容时，分页条数及当前分页使用模糊搜索自己的；取消模糊搜索时还原之前的状态
        // Table.js 中的 this.pagination 和 this.parant.__props.pagination 是同一个东西
        let pagination = this.parent.__props.pagination;
        let total = pagination && pagination.total;
        let current = pagination && pagination.current;
        // 对数据进行全局过滤
        if (this.state.filterValue.length !== 0) {
            data = this.doFilterData(this.state.filterValue, data);
            this.cacheTotal = this.cacheTotal || total;
            this.cacheCurrent = this.cacheCurrent || current;
            total = data.length;
            current = 1;
        } else {
            total = this.cacheTotal;
            current = this.cacheCurrent;
            this.cacheTotal = null;
            this.cacheCurrent = null;
        }
        let newProps = {data};
        if (pagination) {
            newProps.pagination = {total, current};
        }
        this.parent.__setProps(newProps);
    }
    // 全局搜索数据
    doFilterData(iVal, content) {
        let strVal = iVal.toLowerCase().replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
        // 过滤使用的数据，如果是有传入的数据则进行过滤，没有则需要进行
        if (strVal) {
            let arrFilterData = [];
            // 字段黑名单/白名单
            let filterlist = this.globalFilterList;
            for (let oRow of content) {
                let row = {};
                let data = [];
                // 按照展示的字段过滤，自定义render字段无效，问题比较大
                for (let i in oRow) {
                    // 把数据的key也全部转换成纯小写
                    row[i.toLowerCase()] = oRow[i];
                    // 如果不在白名单里或者在黑名单里，则跳过此字段
                    if (filterlist && filterlist['whitelist'] && filterlist['whitelist'].indexOf(i) === -1) {
                        continue;
                    } else if (filterlist && filterlist['blacklist'] && filterlist['blacklist'].indexOf(i) !== -1) {
                        continue;
                    }
                    let value = oRow[i];
                    if (Utils.typeof(value, 'string')) {
                        data.push(this.handleString(value));
                    } else if (Utils.typeof(value, 'object')) {
                        data.push(this.parent._getKeyDataOfObject(value));
                    } else if (value) {
                        data.push(value.toString ? value.toString() : value);
                    }
                }

                let str = data.join('\n').toLowerCase();
                // 输入值不是字符串，而是几个词，要拆分后分别查找
                let result = true;
                let keys = strVal.split(/\s+/);
                for (let key of keys) {
                    // update by liuzechun@baidu.com @2016-12-11
                    let orResult = false;
                    // 支持指定字段过滤(如 id:123)，先选出关键词对应的字段，再对字段内容进行检索
                    let [kWord, kVal] = key.split(':');
                    // kv为当前搜索的字段值，如果没有指定字段，则kv为全部字段拼成的字符串
                    let kv = '';
                    if (kVal) {
                        // 如果关键词字段直接为数据的key
                        if (row[kWord] !== undefined) {
                            kv = row[kWord] || '';
                        // 否则在配置的tag里匹配每个tag的中文名
                        } else {
                            for (let item of this.parent.columns) {
                                if (kWord === item.title.toLowerCase()) {
                                    kv = row[item.dataIndex.toLowerCase()];
                                }
                            }
                        }
                        if (typeof kv !== 'string') {
                            kv = typeof kv === 'object' && kv.title || JSON.stringify(kv);
                        }
                        kv = (kv || '').toLowerCase();
                    } else {
                        kv = str;
                        kVal = key;
                    }
                    // 支持使用|搜索，实现或的关系
                    for (let k of kVal.split(/\|+/)) {
                        // 一旦有一个能匹配到，则结果true
                        (!k || kv.indexOf(k) !== -1) && (orResult = true);
                    }
                    // 如果都匹配不到，则此关键字无效，整条数据无效
                    !orResult && (result = false);
                }
                if (result) {
                    arrFilterData.push(oRow);
                }
            }
            // return Utils.clone(arrFilterData);
            return arrFilterData;
        }
        // 清除已勾选内容
        // this.parent.clearSelect();
        return content;
    }
    // 若有html，则剥掉标签
    handleString(string) {
        let pattern1 = /<(\w+).*?>(.*?)<\/\1>/g; // 匹配是否有闭合标签
        if (pattern1.test(string)) {
            return string.replace(/<([/]?\w+).*?>/g, ''); // 剥掉所有标签
        } else {
            return string;
        }
    }
}
