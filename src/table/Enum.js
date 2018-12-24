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
                    let others = {
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
                            if (params.list) {
                                let values = params.list.map(v => v[item.dataIndex]).filter(v => !!v);
                                // 去重
                                values = Utils.distinct(values);
                                params[others.key] = others.comma ? values.join(',') : values;
                                delete params.list;
                                // 如果没需要翻译的key值，则不再调用接口
                                if (params[others.key] === '') {
                                    return false;
                                }
                            }
                            return params;
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
    save(dataIndex, list, saveReverse = true) {
        // 如果原来有值，则再原列表上追加
        let result = this.data[dataIndex] || {};
        // 不管数据格式怎样，通过toOptions转换为一种格式
        list = Utils.toOptions(list);
        for (let v of list) {
            result[v.value] = v.label;
        }
        this.data[dataIndex] = result;
        // 是否存储逆向翻译数据。实时翻译的接口数据，saveReverse === false
        if (saveReverse) {
            let reverseResult = this.dataReverse[dataIndex] || {};
            for (let v of list) {
                if (Utils.typeof(v.label, ['string', 'number', 'boolean'])) {
                    reverseResult[v.label] = v.value;
                }
            }
            this.dataReverse[dataIndex] = reverseResult;
        }
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
                let conf = this.realtimeConfs[i];
                this.tools.execAjax({
                    // 默认开启缓存
                    cache: true,
                    ...conf,
                    paramsHandler: params => {
                        // 不调用实时翻译，也需要调用一下finish
                        conf.paramsHandler && (params = conf.paramsHandler(params));
                        if (params === false) {
                            finish();
                        }
                        return params;
                    },
                    params: Object.assign(conf.params || {}, {
                        list: list
                    }),
                    success: data => {
                        this.save(i, data, false);
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
    // 如果没有传 keys 字段，则处理全部字段
    encodeEnum(list, keys) {
        let error = [];
        let result = (list || []).map((item, index)=>{
            if (!keys) {
                keys = Object.keys(item);
            }
            return Utils.each(Utils.pick(item, keys), (v, i) => {
                if (v !== '' && this.data[i]) {
                    if (this.data[i][v] !== undefined) {
                        return this.data[i][v];
                    } else {
                        error.push(`第【${index + 1}】行字段【${i}】的数据【${v}】解析时出现错误，已留空，如有需要请进行更新！`);
                        return '';
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
                        error.push(`第【${index + 1}】行第【${i}】个字段数据的值【${v}】无效，请检查！`);
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
