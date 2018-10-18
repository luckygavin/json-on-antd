/**
 * @file Table扩展 - 搜索/过滤相关逻辑实现
 * @author liuzechun@baidu.com
 * */
import React, {Component} from 'react';
import {Input, Icon} from 'antd';
import {Utils} from 'src/utils';


/* 自定义单字段过滤-通过输入筛选 *************************************************************************************/

class FilterInput extends Component {
    constructor(props) {
        super(props);
        this.parent = props.parent;
        this.state = {
            value: props.value
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.value !== nextProps.value) {
            this.setState({value: nextProps.value});
        }
    }
    onChange(e) {
        const value = e.target.value;
        this.setState({value});
    }
    render() {
        return <Input placeholder="Search"
            value={this.state.value || ''}
            onChange={this.onChange.bind(this)}
            onPressEnter={()=>{
                this.props.onPressEnter(this.state.value);
            }}
        />;
    }
}


/* 过滤工具类 (原生过滤附带的一些逻辑) *************************************************************************************/

export class Filter {
    constructor(parent) {
        this.parent = parent;
        this.filterParams = null;
        this.filterConditions = {};
        this.oldFilterConditions = {};
    }
    clearState() {
        this.filterConditions = {};
    }

    // 当过滤选项发生变化时，如果是后端分页，则增加相应参数
    handleChange(filterParams, oldFilterParams = {}) {
        let newParams = Utils.copy(filterParams);
        let oParams = this.parent.__filtered.source.params || {};
        // 移除无效参数
        for (let i of Object.keys(oldFilterParams).concat(Object.keys(newParams))) {
            if (!Utils.empty(newParams[i])) {
                if (Utils.typeof(newParams[i], 'array')) {
                    newParams[i] = newParams[i].join(',');
                }
                oParams[i] = newParams[i];
            } else {
                delete oParams[i];
            }
        }
        if (this.parent.__filtered.source.params || !Utils.empty(oParams)) {
            // 直接修改 this.parent.__filtered 上的值，过滤变化时本身会触发onPageChange，表格会刷新，无需再重新set
            // TODO: 感觉这样不是很优雅
            // this.parent.set({params: newParams});
            this.parent.__filtered.source.params = oParams;
        }
    }

    // 处理单行过滤相关配置参数
    handleFilterConf(filter, dataIndex) {
        if (!filter.type) {
            // 若没有配置type则直接返回
            return;
        }
        if (filter.type === 'checkbox' || filter.type === 'radio') {
            // 多选框或单选框筛选
            let filterObj = {
                options: null,
                filterMultiple: false,
                onFilter: null
            };
            if (!!filter.options) {
                // 用户配置了options,则将用户配置进行转换
                filterObj.filters = Utils.toOptions(filter.options).map(o => {
                    return {text: o.label, value: o.value};
                });
            } else {
                // 用户没有配置options，则将该字段的所有可能值展示出来
                filterObj.filters = this.getAllFilterValue(dataIndex);
            }
            filterObj.filterMultiple = filter.type === 'checkbox' ? true : false;
            filterObj.onFilter = (value, record) => {
                return record[dataIndex].indexOf(value) !== -1;
            };
            return filterObj;
        } else if (filter.type === 'input') {
            // 通过输入筛选
            let filterObj = {
                filterDropdown: null,
                filterIcon: <Icon type="filter"
                    style={{color: !!this.filterConditions[dataIndex] ? '#108ee9' : '#aaa'}}
                />
            };
            filterObj.filterDropdown = <div className="custom-filter-dropdown">
                <FilterInput value={this.filterConditions[dataIndex]}
                    onPressEnter={this.onFilterData.bind(this, dataIndex)}/>
            </div>;
            return filterObj;
        }
    }
    // 过滤
    onFilterData(dataIndex, value) {
        // 对查询值进行存储
        this.filterConditions[dataIndex] = value;
        if (this.parent.serverPaging) {
            let oldFilterParams = Utils.copy(this.oldFilterConditions);
            let newParams = Utils.copy(this.filterConditions);
            this.oldFilterConditions = newParams;
            this.handleChange(newParams, oldFilterParams);
            this.parent.getData(1);
            return;
        }
        let data = this.parent.state.completeData;
        // 对数据进行单列过滤
        if (!Utils.empty(this.filterConditions)) {
            data = this.handleFilterData(data);
        }
        this.parent.__setProps({data});
    }
    handleFilterData(filteredData) {
        let data = [];
        let needFilterData = !!filteredData ? filteredData : this.parent.state.completeData;
        // 如果传入filteredData,则在filteredData基础上筛选
        // 如果没有传入如果传入filteredData，则在全量数据上进行筛选
        data = needFilterData.filter(record => {
            let flag = true;
            for (let cdit in this.filterConditions) {
                if (record[cdit].toString().indexOf(this.filterConditions[cdit]) === -1) {
                    flag = false;
                    break;
                }
            }
            return flag;
        });
        return data;
    }
    getAllFilterValue(dataIndex) {
        let obj = {};
        let result = [];
        let data = this.parent.state.completeData;
        for (let i = 0; i < data.length; i++) {
            // 用obj存储所有可能的字段
            if (data[i][dataIndex] && !obj[data[i][dataIndex]]) {
                obj[data[i][dataIndex]] = 1;
            }
        }
        // 将obj转换为数组
        for (let key in obj) {
            result.push({text: key, value: key});
        }
        return result;
    }
}


/* 模糊搜索功能 ****************************************************************************************************/

export class FuzzyFilter extends Component {
    constructor(props) {
        super(props);
        this.parent = props.parent;
        // 过滤字段黑名单/白名单
        this.globalFilterList = props.globalFilterList;
        this.state = {
            // 存储模糊搜索输入的值
            filterValue: ''
        };
        // 模糊搜索时，延迟150ms执行
        this.onFilterData = Utils.debounce(this.onFilterData, 150);
    }
    clearState() {
        this.setState({filterValue: ''});
    }

    // 过滤输入框点回车搜索时 (用于后端分页)
    onFilterSearch(value) {
        // 如果为后端分页，则不立刻搜索，onSearch 时才会搜索
        if (!this.parent.serverPaging) {
            return;
        }
        // 在原有参数基础上，追加一个search参数
        // let oParams = this.parent.__filtered.source.params || {};
        let oParams = this.parent.__props.params || {};
        // 默认参数名称为search，可修改
        oParams[this.props.paramIndex || 'search'] = value;
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
        this.onFilterData();
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
    // 非React组件，需手动调用
    render() {
        return <Input.Search name="filter"
            placeholder={this.props.placeholder}
            {...this.props.others}
            value={this.state.filterValue}
            onChange={this.onFilterChange.bind(this)}
            onSearch={this.onFilterSearch.bind(this)}
        />;
    }
}