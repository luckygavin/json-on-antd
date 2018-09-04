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
    }
    // 传入 columns 配置，判断是否有枚举类型字段并做相应处理
    init(columns) {
        let enumList = {};
        for (let item of columns) {
            if (item.enum) {
                // 已经穷举，无需获取。格式为 enum: [{key: value}]
                if (Utils.typeof(item.enum, 'array')) {
                    this.save(item.dataIndex, item.enum);
                } else {
                    this.save(item.dataIndex, []);
                    // 需要异步获取数据的情况
                    this.start();
                    this.tools.execAjax({
                        // 默认开启缓存
                        cache: true,
                        ...this.tools.formatApi(item.enum),
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
        let result = {};
        let reverseResult = {};
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
        if (this.data[item.dataIndex]) {
            item.render = (v, row)=>{
                let display = this.data[item.dataIndex][v];
                // 无法翻译是是否允许为空
                if (display === undefined) {
                    if (Utils.typeof(item.enum, 'object') && item.enum.allowEmpty) {
                        display = '';
                    } else {
                        display = v;
                    }
                }
                // 将翻译后的结果存入行数据中
                row[`${item.dataIndex}_fyi`] = display;
                return display;
            };
        }
        return item;
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
