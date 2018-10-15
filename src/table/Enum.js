/**
 * @file Table扩展 - 枚举类型字段翻译相关逻辑实现
 * @author liuzechun@baidu.com
 * */

import {Utils} from 'src/utils';
import {Modal} from 'antd';

export default class Enum {
    constructor(tools) {
        this.tools = tools;
        // 是否正在加载数据
        this.loading = false;
        this.requestCount = 0;
        // 存储全部枚举数据，{[key || id]: [value]}
        this.data = {};
        // 如果value是字符串或数字，再存储一份反向关系，{[value]: [key]}
        this.dataReverse = {};

        // 实时翻译相关属性，为避免相互影响，参数尽量分开
        this.realtimeConfs = {};
    }
    // 传入 columns 配置，判断是否有枚举类型字段并做相应处理
    init(columns) {
        for (let item of columns) {
            if (item.enum) {
                // 已经穷举，无需获取。格式为 enum: [{key: value}]
                if (Utils.typeof(item.enum, 'array')) {
                    this.save(item.dataIndex, item.enum);
                // 实时翻译
                } else if (Utils.typeof(item.enum, 'object') && item.enum.realtime) {
                    let others = others = {
                        // 参数属性
                        key: 'ids',
                        // 是否逗号分隔
                        comma: true
                    };
                    if (Utils.typeof(item.enum.realtime, 'object')) {
                        Object.assign(others, item.enum.realtime);
                    }

                    let conf = Utils.clone(item.enum);
                    if (!conf.paramsHandler) {
                        conf.paramsHandler = (params) => {
                            let values = params.map(v => v[item.dataIndex]);
                            return {
                                [others.key]: others.comma ? values.join(',') : values
                            };
                        };
                    }
                    this.realtimeConfs[item.dataIndex] = conf;
                // 全量枚举
                } else {
                    this.save(item.dataIndex, []);
                    // 需要异步获取数据的情况
                    this.start();
                    this.tools.execAjax({
                        // 默认开启缓存
                        cache: true,
                        ...Utils.varietyFormat(item.enum, 'url'),
                        success: data => {
                            this.save(item.dataIndex, data);
                            this.complete();
                        },
                        error: err => {
                            this.complete();
                        }
                    });
                }
            }
        }
    }
    start() {
        this.loading = true;
        this.requestCount++;
    }
    complete() {
        this.requestCount--;
        this.finish();
    }
    // 请求完成
    finish() {
        if (this.requestCount <= 0) {
            this.loading = false;
            this.tools.continue();
        }
    }
    // 把数组格式化成键值对并存储
    save(dataIndex, list) {
        // 如果原来有值，则再原列表上追加
        let result = this.data[dataIndex] || {};
        let reverseResult = this.dataReverse[dataIndex] || {};
        // 如果数据格式为 [{id:'',name:'',key:'',value:''}]
        if (Utils.typeof(list, 'array')) {
            for (let v of list) {
                let key = v.id || v.key;
                let value = v.name || v.value;
                result[key] = value;
                if (Utils.typeof(value, ['string', 'number'])) {
                    reverseResult[value] = key;
                }
            }
        // 数据格式为 {key:value, key:value}
        } else if (Utils.typeof(list, 'object')) {
            for (let i in list) {
                result[i] = list[i];
                if (Utils.typeof(list[i], ['string', 'number'])) {
                    reverseResult[list[i]] = i;
                }
            }
        }

        this.data[dataIndex] = result;
        this.dataReverse[dataIndex] = reverseResult;
    }

    /*** Table.js 中的功能 ******************************************************************* */
    // 处理列配置，进行枚举替换
    handleColumn(item) {
        if (this.data[item.dataIndex] && !item._enumed) {
            // 标记为已处理，无需重复处理
            item._enumed = true;
            // 如果原本已存在render，则需要执行原render
            let orender = item.render;
            item.render = (v, row, ...params)=>{
                let display = this.data[item.dataIndex][v];
                // 无法翻译是是否允许为空，默认无法翻译是展示空
                if (display === undefined) {
                    if (Utils.typeof(item.enum, 'object') && item.enum.allowEmpty === false) {
                        display = v;
                    } else {
                        display = '';
                    }
                }
                // 将翻译后的结果存入行数据中
                row[`${item.dataIndex}.fyi`] = display;
                return orender ? orender(display, row, ...params) : display;
            };
        }
        return item;
    }
    // 实时翻译
    realtimeTrans(list) {
        return new Promise(resolve=>{
            if (Utils.empty(this.realtimeConfs)) {
                resolve();
            }
            let count = 0;
            let finish = ()=>{
                (--count === 0) && resolve();
            };
            for (let i in this.realtimeConfs) {
                count++;
                this.tools.execAjax({
                    // 默认开启缓存
                    cache: true,
                    ...this.realtimeConfs[i],
                    params: list,
                    success: data => {
                        this.save(i, data);
                        finish();
                    },
                    error: finish
                });
            }
        });
    }

    /*** Crud.js 中功能 ******************************************************************* */
    // 处理新增/编辑的 form.items 配置，自动增加options
    handleForm(items) {
        return (items || []).map(item => {
            if (item) {
                // if (Utils.typeof(item, 'object')) {
                // 支持使用自定义组件，会取最终的根类型进行判断
                let {type, name} = this.tools.getConf(item);
                if (['select', 'radio', 'checkbox-group'].indexOf(type) > -1 && Utils.empty(item.options)
                    && this.data[name]) {
                    item.options = Utils.toOptions(this.data[name]);
                }
                // } else {
                //     item = this.handleForm(item)
                // }
            }
            return item;
        });
    }
    // 把一个数据列表中的枚举字段的id转换为枚举的值，key => value
    encodeEnum(list) {
        let error = [];
        let result = (list || []).map((item, index)=>{
            return Utils.each(item, (v, i) => {
                if (this.data[i]) {
                    if (this.data[i][v] !== undefined) {
                        return this.data[i][v];
                    } else {
                        error.push(`第【${index + 1}】行数据【${v}】解析时出现错误，已展示源数据，请注意！`);
                        return v;
                    }
                }
                return v;
            });
        });
        if (error.length > 0) {
            // 使报错弹框晚于原来弹框的创建
            setTimeout(()=>{
                Modal.warning({
                    title: '注意：',
                    content: error.join('\n')
                });
            }, 10);
        }
        return result;
    }
    // 把一个数据列表中的枚举字段的值转换为id，value => key
    decodeEnum(list) {
        let error = [];
        let result = (list || []).map((item, index)=>{
            return Utils.each(item, (v, i) => {
                if (this.dataReverse[i]) {
                    if (this.dataReverse[i][v] !== undefined) {
                        return this.dataReverse[i][v];
                    } else {
                        error.push(`第【${index + 1}】行数据的值【${v}】无效，请检查！`);
                        return '';
                    }
                }
                return v;
            });
        });
        if (error.length > 0) {
            Modal.error({
                title: '注意：',
                content: error.join('\n')
            });
            return false;
        }
        return result;
    }
}
