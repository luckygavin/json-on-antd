/**
 * @file Table扩展 - 增删改查等功能
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {message, Modal} from 'antd';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

export default class Crud extends BaseComponent {
    constructor(props) {
        super(props, 'table-crud');
        // 其本身无需初始化组件
        // this.__init();
        this.parent = props.parent;
        this.enum = props.enum;
        // 存储table的全部字段名称对应关系，以在form中复用
        this.columnName = {};
        for (let v of this.parent.columns) {
            this.columnName[v.dataIndex] = v.title;
        }
        this.configBefore = null;
        this.configAfter = null;
        this.oConfig = null;
        this.init();
    }
    // 不必多次刷新
    shouldComponentUpdate(nextProps, nextState) {
        if (this.refresh) {
            this.refresh = false;
            return true;
        }
        return false;
    }
    componentWillReceiveProps(nextProps) {
        let newEnum = JSON.stringify(nextProps.enum.data);
        let newConf = JSON.stringify(nextProps.config);
        if (newEnum !== this.currentEnum || newConf !== this.currentConf) {
            this.currentEnum = newEnum;
            this.currentConf = newConf;
            this.refresh = true;
            this.init(nextProps);
        }
    }
    init(nextProps) {
        const props = nextProps || this.props;
        this.enum = props.enum;
        // 批量导入/编辑的表单配置
        let batchAddFormConf = {
            layout: {
                type: 'vertical'
            },
            items: [{
                type: 'textarea', name: 'data', default: '', required: true,
                rows: 6, style: {width: '100%'}
            }]
        };
        let config = props.config || {};
        let result = {};
        // 额外存储的临时配置，用于配置复用
        let tempConf = {};
        for (let i in config) {
            // let item = Utils.copy(config[i]);
            let item = this.__getConf(Utils.copy(config[i]));
            let action = this._getAction(i);
            // api属性不能复用
            item.api = this.__formatApi(item.api);
            switch (action) {
                // 新增弹框的配置
                case 'add':
                    // add 可以复用 edit 的配置，可以减少配置书写
                    item.title = item.title || '新增：';
                    tempConf['edit'] && (item = Object.assign(Utils.clone(tempConf['edit']), item));
                    item.okText = item.okText || '提交';
                    item.api.method = item.api.method || 'post';
                    break;
                // 编辑弹框的配置
                case 'edit':
                    // 处理复用相关参数
                    item.title = item.title || '编辑：';
                    item.okText = item.okText || '提交';
                    item.api.method = item.api.method || 'put';
                    // paramsHandler 执行之前执行
                    // 过滤掉翻译字段 xxx_fyi
                    item.api._paramsHandler = params => {
                        for (let i in this.enum.data) {
                            delete params[`${i}_fyi`];
                        }
                        return params;
                    };
                    item = this.handleReuse(item, tempConf['add']);
                    break;
                // 搜索弹框的配置
                case 'search':
                    // 点击搜索时，对Table进行赋值操作
                    this._inject(item, 'onSubmit', params => {
                        this.parent.set({params});
                    });
                    // 如果没定义type，则使用默认处理逻辑
                    if (!item.type) {
                        // 处理复用相关参数
                        item.title = item.title || '高级查询：';
                        item.okText = item.okText || '查询';
                        item = this.handleReuse(item, tempConf['add']);
                        // 移除必填限制以及校验规则
                        if (item.form) {
                            item.form.items.forEach(v => {
                                delete v.rules;
                                delete v.required;
                            });
                        }
                        break;
                    }
                // 删除确认框的配置
                case 'delete':
                    // 默认把参数处理为：只返回 id（rowKey对应的字段）
                    item.title = item.title || '删除：';
                    item.api.method = item.api.method || 'delete';
                    item.api.paramsHandler = item.api.paramsHandler || (
                        params => ({[this.parent.rowKey]: params[this.parent.rowKey]})
                    );
                    item.render = item.render || (() => ('确定要删除吗？'));
                    item.okText = item.okText || '删除';
                    break;
                // 批量查询
                case 'batchSearch':
                    item.okText = item.okText || '查询';
                    break;
                // 批量展示table中选中的数据
                case 'batchShow':
                    item.okText = item.okText || '关闭';
                    item.footer = item.footer !== undefined ? item.footer : [{
                        type: 'button', mode: 'primary', action: 'cancel', content: item.okText
                    }];
                    break;
                // 批量新增弹框的配置
                case 'batchAdd':
                    item.okText = item.okText || '提交';
                    // form 需用指定的，此弹框用户传入的form配置无效
                    item.form = Utils.clone(batchAddFormConf);
                    item.api.method = item.api.method || 'post';
                    this._bindParamsHandler(i, item);
                    break;
                // 批量新增弹框的配置
                case 'batchEdit':
                    item.okText = item.okText || '提交';
                    // form 需用指定的，此弹框用户传入的form配置无效
                    item.form = Utils.clone(batchAddFormConf);
                    item.api.method = item.api.method || 'put';
                    this._bindParamsHandler(i, item);
                    // batchEdit 可以复用 batchAdd 的配置，可以减少配置书写
                    item = this.handleReuse(item, tempConf['batchAdd']);
                    break;
                // 批量删除确认框的配置
                case 'batchDelete':
                    // 默认把参数处理为：只返回英文逗号分隔的 id[s]（rowKey对应的字段）如：{ids: 123,456}
                    item.api.method = item.api.method || 'delete';
                    item.api.paramsHandler = item.api.paramsHandler || (params => ({
                        [`${this.parent.rowKey}s`]: params.map(v => v[this.parent.rowKey]).join(',')
                    }));
                    item.render = item.render || (() => ('确定要执行『 批量删除 』操作吗？'));
                    break;
                // 详情框的配置
                case 'details':
                    item = this.handleDetails(item);
                    if (item.list) {
                        const list = item.list;
                        item.render = row => {
                            return Object.assign({
                                type: 'list',
                                bordered: false,
                                data: row
                            }, list);
                        }
                        delete item.list;
                    }
                // break;
                // 展示信息弹框配置。会在render中传入当前数据
                case 'show':
                default:
                    item.okText = item.okText || '关闭';
                    item.footer = item.footer !== undefined ? item.footer : [{
                        type: 'button', mode: 'primary', action: 'cancel', content: item.okText
                    }];
                    break;
            }
            if (item.position && item.position !== 'modal') {
                item.type = item.type || 'dashboard';
            }
            item.type = item.type || 'modal';
            item.name = this._getModalName(i);
            item.key = item.name;
            // 默认点击提交时自动刷新表格。
            if (item.autoReload !== false) {
                // 不用this.parent._inject，edit复用add的配置时，这里回把两个同样的函数合并到一起，导致table刷新两次
                this._inject(item, 'onSuccess', () => {
                    return new Promise((resolve, reject) => {
                        // 删除数据时，当删除最后一页数据后，分页应该往前调1页
                        let pageNum = this.getLastPageNum(item, action);
                        setTimeout(() => {
                            this.parent.getData(pageNum);
                            resolve();
                        }, +item.autoReload || 0);
                    });
                });
            }
            // 如果存在form，则对items进行处理
            if (item.form && item.form.items) {
                item.form.items = this.handleFormItems(item.form.items);
            }
            if (item.type === 'form' && item.items) {
                item.key = Utils.uniqueId();
                item.items = this.handleFormItems(item.items);
            }
            result[i] = item;
            // 存储的复用配置用action做区分
            tempConf[action] = item;
        }
        this.oConfig = result;
        this.configBefore = Object.values(result).filter(v=>v.position === 'beforeHeader');
        this.configAfter = Object.values(result).filter(v => v.position !== 'beforeHeader');
    }
    getLastPageNum(item, action) {
        let pagination = this.parent.pagination;
        let pageNum = pagination.current;
        if (action.indexOf('elete') > -1) {
            let lastPageNum = Math.ceil(pagination.total / pagination.pageSize);
            let deleteNum = 0;
            if (pagination.current >= lastPageNum) {
                if (action === 'delete') {
                    deleteNum = 1;
                } else if (action === 'batchDelete') {
                    deleteNum = this.parent.getSelected().length;
                }
                let newLastPageNum = Math.ceil((pagination.total - deleteNum) / pagination.pageSize);
                if (newLastPageNum < lastPageNum) {
                    pageNum = newLastPageNum;
                }
            }
        }
        return pageNum;
    }
    // 如果存在form，则对items进行处理
    handleFormItems(items) {
        // 如果没写label，则复用table的title
        for (let v of items) {
            let {label, name} = this.__getConf(v);
            if (!label && this.columnName[name]) {
                v.label = this.columnName[name];
                v.label += (v.label.indexOf(':') > -1 ? '' : ': ');
            }
        }
        // 处理新增/编辑的 form.items 配置，枚举类型转自动添加options
        items = this.enum.handleForm(items);
        return items;
    }
    // 处理配置复用相关参数
    handleReuse(item, reuseConf) {
        // 可以复用的配置，以减少配置书写
        if (reuseConf) {
            item = Object.assign(Utils.clone(reuseConf), item);
            // 如果未配置api.url，则复用api配置
            if (!item.api.url) {
                item.api = Object.assign({}, reuseConf.api, item.api);
            }
        }

        // 可以通过forbidden字段指定编辑的时候哪些字段不可编辑。便于复用add的form时
        if (item.forbidden && item.form) {
            item.form.forbidden = item.forbidden.split(',');
            delete item.forbidden;
        }
        // 在form.items中过滤掉需要删除的属性
        if (item.remove && item.form) {
            item.form.items = item.form.items.filter(v => item.remove.split(',').indexOf(v.name) === -1);
            delete item.remove;
        }
        return item;
    }
    // 详情框配置处理
    handleDetails(item) {
        // 如果详情框既没有配置list，又没有配置render，则复用table的column部分属性
        if (!item.list && !item.render) {
            let columns = [];
            for (let v of this.parent.columns) {
                let column = {title: v.title, dataIndex: v.dataIndex, render: v.render};
                if (v.dataIndex === '_operation') {
                    continue;
                }
                // 如果是翻译字段，则将dataIndex改为翻译后的字段
                if (v.enum && !v.render) {
                    column.dataIndex = `${column.dataIndex}_fyi`;
                    column.render = i => i;
                }
                // 去掉长字符串折叠
                if (v.ellipsis || !column.render) {
                    delete column.render;
                }
                columns.push(column);
            }
            item.list = {columns};
        }
        return item;
    }

    // 展示各种弹框框
    showCrud(key, record, ...params) {
        let visibale = params[1];
        let action = this._getAction(key);
        let modal = this.__getComponent(this._getModalName(key));
        if (modal) {
            // 除批量编辑需要额外操作，其他都是直接展示即可
            switch (action) {
                case 'batchEdit':
                    this._showBatchEdit(key, visibale);
                    break;
                case 'batchDelete':
                    this._showBatchDelete(key, visibale);
                    break;
                case '_showBatchShow':
                    this._showBatchShow(key, visibale);
                    break;
                default:
                    modal.show(record, visibale);
            }
        }
    }

    // 获取crud中某项配置的action属性：如果没有action属性，则返回配置的key值
    _getAction(key) {
        let config = this.props.config;
        // COMPAT: action 参数为兼容以前用法，不可删除
        return (config[key] && (config[key].mode || config[key].action)) || key;
    }
    // 生成弹框名称，唯一，table的key+crud的key
    _getModalName(key) {
        // 如果用户自己配了name，使用用户的name
        let config = this.props.config;
        if (config[key] && config[key].name) {
            return config[key].name;
        }
        return `__${this.parent.key}-${key}`;
    }
    // 生成批量编辑的字符串
    _getStrByList(key, list) {
        let keys = this.oConfig[key].keys.split(',');
        let str = '';
        for (let row of list) {
            let tmp = '';
            for (let v of keys) {
                let value = row[v];
                // tmp += ((value !== undefined || value !== null) ? value : '') + ',';
                // 当数据为对象或数组时，格式化成字符串
                if (Utils.typeof(value, ['object', 'array'])) {
                    tmp += JSON.stringify(value);
                } else if (value === undefined || value === null) {
                    tmp += '';
                } else {
                    tmp += value;
                }
                tmp += ',';
            }
            str += tmp.slice(0, -1) + '\n';
        }
        return str;
    }
    // 根据字符串转换成要提交的数据对象
    _getListByStr(key, str) {
        let keys = this.oConfig[key].keys.split(',');
        let strArr = str.split('\n');
        let result = [];
        let error = [];
        strArr.forEach((row, index) => {
            row = row.trim();
            if (row) {
                // 处理包含json串的情况
                // 目前只支持结构比较简单的json串
                const jsonReg = /\[.*?\]|\{.*?\}/g;
                let jsonHolder = {};
                let count = 0;
                row = row.replace(jsonReg, str => {
                    let tmpName = `$jsonHolder${++count}`;
                    jsonHolder[tmpName] = str;
                    return tmpName;
                });
                // 分离后再把占位符复原
                let values = row.split(',').map(v => {
                    if (v.indexOf('$jsonHolder') > -1) {
                        // 并把json转换为原数据格式
                        return JSON.parse(jsonHolder[v]);
                    }
                    return v;
                });

                if (values.length !== keys.length) {
                    let gap = values.length - keys.length;
                    error.push(`第【${index + 1}】行数据字段位数不正确(${(gap > 0 ? '多出' : '缺失') + gap}个字段)，请检查！`);
                }
                let item = {};
                for (let v of keys) {
                    item[v] = values.shift();
                }
                result.push(item);
            }
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
    // 展示批量编辑框
    _showBatchEdit(key, visibale) {
        let datas = this.parent.getSelected();
        if (!(datas && datas.length > 0)) {
            message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
            return;
        }
        if (this.oConfig[key] && this.oConfig[key].keys) {
            datas = this.enum.encodeEnum(datas);
            let str = this._getStrByList(key, datas);
            let modal = this.__getComponent(this._getModalName(key));
            modal && modal.show({data: str}, visibale);
        } else {
            console.error('there is no property "batchEdit" or "batchEdit.keys" in table config');
        }
    }
    // 绑定校验逻辑
    _bindParamsHandler(key, item) {
        item.api._paramsHandler = params => {
            let datas = this._getListByStr(key, params.data);
            if (!datas) {
                return false;
            }
            // 数据格式为 {data: 'json'}
            return {data: JSON.stringify(this.enum.decodeEnum(datas))};
        };
    }
    // 展示批量删除框
    _showBatchDelete(key, visibale) {
        let datas = this.parent.getSelected();
        if (!(datas && datas.length > 0)) {
            message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
            return;
        }
        let modal = this.__getComponent(this._getModalName(key));
        modal && modal.show(datas, visibale);
    }
    // 批量展示数据。即展示表格中的选中的数据
    _showBatchShow(key, visibale) {
        let datas = this.parent.getSelected();
        if (!(datas && datas.length > 0)) {
            message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
            return;
        }
        let modal = this.__getComponent(this._getModalName(key));
        modal && modal.show(datas, visibale);
    }

    render() {
        return <div className="uf-table-crud">
            <div className="uf-table-crud-before">
                {this.parent.__analysis(this.configBefore)}
            </div>
            {/* 表格的title内容 */}
            {this.props.children}
            <div className="uf-table-crud-after">
                {this.parent.__analysis(this.configAfter)}
            </div>
        </div>;
    }
}