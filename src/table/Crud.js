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
        this.config = null;
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
        if (newEnum !== this.currentEnum) {
            this.currentEnum = newEnum;
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
        let config = props.config;
        let result = {};
        // 额外存储的临时配置，用于配置复用
        let tempConf = {};
        for (let i in config) {
            // let item = Utils.copy(config[i]);
            let item = this.__getConf(Utils.copy(config[i]));
            let action = this._getAction(i);
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
                    item = this.handleReuse(item, tempConf['add']);
                    item.okText = item.okText || '提交';
                    item.api.method = item.api.method || 'put';
                    break;
                // 搜索弹框的配置
                case 'search':
                    // search 的表单可以复用 add 的配置，并移除必填限制以及校验规则
                    if (!item.form && tempConf['add']) {
                        item.form = Utils.clone(tempConf['add'].form);
                        // 移除必填限制以及校验规则
                        item.form.items.forEach(v=>{
                            delete v.rules;
                            delete v.required;
                        });
                    }
                    // 处理复用相关参数
                    item.title = item.title || '搜索：';
                    item = this.handleReuse(item, tempConf['add']);
                    item.okText = item.okText || '搜索';
                    // 点击搜索时，对Table进行赋值操作
                    this._inject(item, 'onSubmit', params=>{
                        this.parent.set({params});
                    });
                    break;
                // 删除确认框的配置
                case 'delete':
                    // 默认把参数处理为：只返回 id（rowKey对应的字段）
                    item.title = item.title || '删除：';
                    item.api.method = item.api.method || 'delete';
                    item.api.paramsHandler = item.api.paramsHandler || (
                        params=>({[this.parent.rowKey]: params[this.parent.rowKey]})
                    );
                    item.render = item.render || (()=>('确定要删除吗？'));
                    item.okText = item.okText || '删除';
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
                    // batchAdd 可以复用 batchEdit 的配置，可以减少配置书写
                    tempConf['batchEdit'] && (item = Object.assign(Utils.clone(tempConf['batchEdit']), item));
                    item.okText = item.okText || '提交';
                    // form 需用指定的，此弹框用户传入的form配置无效
                    item.form = Utils.clone(batchAddFormConf);
                    item.api.method = item.api.method || 'post';
                    // 只有第一次调用执行
                    if (!nextProps) {
                        this._bindParamsHandler(i, item);
                    }
                    break;
                // 批量新增弹框的配置
                case 'batchEdit':
                    // batchEdit 可以复用 batchAdd 的配置，可以减少配置书写
                    tempConf['batchAdd'] && (item = Object.assign(Utils.clone(tempConf['batchAdd']), item));
                    item.okText = item.okText || '提交';
                    // form 需用指定的，此弹框用户传入的form配置无效
                    item.form = Utils.clone(batchAddFormConf);
                    item.api.method = item.api.method || 'put';
                    // 只有第一次调用执行
                    if (!nextProps) {
                        this._bindParamsHandler(i, item);
                    }
                    break;
                // 批量删除确认框的配置
                case 'batchDelete':
                    // 默认把参数处理为：只返回英文逗号分隔的 id[s]（rowKey对应的字段）如：{ids: 123,456}
                    item.api.method = item.api.method || 'delete';
                    item.api.paramsHandler = item.api.paramsHandler || (params=>({
                        [`${this.parent.rowKey}s`]: params.map(v=>v[this.parent.rowKey]).join(',')
                    }));
                    item.render = item.render || (()=>('确定要执行『 批量删除 』操作吗？'));
                    break;
                // 展示信息弹框配置。会在render中传入当前数据
                case 'show':
                default:
                    item.okText = item.okText || '关闭';
                    item.footer = item.footer !== undefined ? item.footer : [{
                        type: 'button', mode: 'primary', action: 'cancel', content: item.okText
                    }];
                    break;
            }
            item.type = item.type || 'modal';
            item.name = this._getModalName(i);
            item.key = item.name;
            // 默认点击提交时自动刷新表格。
            if (item.autoReload !== false) {
                // 不用this.parent._inject，edit复用add的配置时，这里回把两个同样的函数合并到一起，导致table刷新两次
                this._inject(item, 'onSuccess', ()=>{
                    return new Promise((resolve, reject)=>{
                        setTimeout(()=>{
                            this.parent.refreshTable();
                            resolve();
                        }, +item.autoReload || 0);
                    });
                });
            }
            // 如果存在form，则对items进行处理
            if (item.form && item.form.items) {
                item.form.items = this.handleFormItems(item.form.items);
            }
            result[i] = item;
            // 存储的复用配置用action做区分
            tempConf[action] = item;
        }
        this.oConfig = result;
        this.config = Object.values(result);
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
        reuseConf && (item = Object.assign(Utils.clone(reuseConf), item));
        // 可以通过forbidden字段指定编辑的时候哪些字段不可编辑。便于复用add的form时
        if (item.forbidden && item.form) {
            item.form.forbidden = item.forbidden.split(',');
            delete item.forbidden;
        }
        // 在form.items中过滤掉需要删除的属性
        if (item.remove && item.form) {
            item.form.items = item.form.items.filter(v=>item.remove.split(',').indexOf(v.name) === -1);
            delete item.remove;
        }
        return item;
    }

    // 展示各种弹框框
    showCrud(key, ...params) {
        let action = this._getAction(key);
        let modal = this.__getComponent(this._getModalName(key));
        if (modal) {
            // 除批量编辑需要额外操作，其他都是直接展示即可
            switch (action) {
                case 'batchEdit':
                    this._showBatchEdit(key);
                    break;
                case 'batchDelete':
                    this._showBatchDelete(key);
                    break;
                case '_showBatchShow':
                    this._showBatchShow(key);
                    break;
                default:
                    modal.show(...params, this.parent);
            }
        }
    }

    // 获取crud中某项配置的action属性：如果没有action属性，则返回配置的key值
    _getAction(key) {
        let config = this.props.config;
        return (config[key] && config[key].action) || key;
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
                tmp += ((row[v] !== undefined || row[v] !== null) ? row[v] : '') + ',';
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
            if (row.trim()) {
                let values = row.trim().split(',');
                if (values.length !== keys.length) {
                    error.push(`第【${index + 1}】行数据字段位数不正确，请检查！`);
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
    _showBatchEdit(key) {
        let datas = this.parent.getSelected();
        if (!(datas && datas.length > 0)) {
            message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
            return;
        }
        if (this.oConfig[key] && this.oConfig[key].keys) {
            datas = this.enum.encodeEnum(datas);
            let str = this._getStrByList(key, datas);
            let modal = this.__getComponent(this._getModalName(key));
            modal && modal.show({data: str});
        } else {
            console.error('there is no property "batchEdit" or "batchEdit.keys" in table config');
        }
    }
    // 绑定校验逻辑
    _bindParamsHandler(key, item) {
        let ohandler = item.api.paramsHandler;
        item.api.paramsHandler = (params, ...others) => {
            let datas = this._getListByStr(key, params.data);
            if (!datas) {
                return false;
            }
            // 数据格式为 {data: 'json'}
            let result = {data: JSON.stringify(this.enum.decodeEnum(datas))};
            (ohandler) && (result = ohandler(result));
            return result;
        };
    }
    // 展示批量删除框
    _showBatchDelete(key) {
        let datas = this.parent.getSelected();
        if (!(datas && datas.length > 0)) {
            message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
            return;
        }
        let modal = this.__getComponent(this._getModalName(key));
        modal && modal.show(datas);
    }
    // 批量展示数据。即展示表格中的选中的数据
    _showBatchShow(key) {
        let datas = this.parent.getSelected();
        if (!(datas && datas.length > 0)) {
            message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
            return;
        }
        let modal = this.__getComponent(this._getModalName(key));
        modal && modal.show(datas);
    }

    render() {
        return <div>{this.parent.__analysis(this.config)}</div>;
    }
}