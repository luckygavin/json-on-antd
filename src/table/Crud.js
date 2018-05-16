/**
 * @file Table扩展 - 增删改查等功能
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {message} from 'antd';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

export default class Crud extends BaseComponent {
    constructor(props) {
        super(props);
        // 其本身无需初始化组件
        // this.__init();
        this.parent = props.parent;
        this.config = null;
        this.oConfig = null;
        this.init();
    }
    // 不必多次刷新
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    init() {
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
        let config = this.props.config;
        let result = {};
        // 额外存储的临时配置，用于配置复用
        let tempConf = {};
        for (let i in config) {
            let item = Utils.copy(config[i]);
            let action = this._getAction(i);
            item.api = this.__formatApi(item.api);
            switch (action) {
                // 展示信息弹框配置。会在message中传入当前数据
                case 'show':
                    item.okText = item.okText || '关闭';
                    item.footer = item.footer || [{
                        type: 'button', mode: 'primary', action: 'cancel', content: item.okText
                    }];
                    break;
                // 新增弹框的配置
                case 'add':
                    // add 可以复用 edit 的配置，可以减少配置书写
                    tempConf['edit'] && (item = Object.assign(Utils.clone(tempConf['edit']), item));
                    item.okText = item.okText || '提交';
                    break;
                // 编辑弹框的配置
                case 'edit':
                    // edit 可以复用 add 的配置，可以减少配置书写
                    tempConf['add'] && (item = Object.assign(Utils.clone(tempConf['add']), item));
                    // 可以通过forbidden字段指定编辑的时候哪些字段不可编辑。便于复用add的form时
                    if (item.forbidden && item.form) {
                        item.form.forbidden = item.forbidden.split(',');
                        delete item.forbidden;
                    }
                    item.okText = item.okText || '提交';
                    break;
                // 删除确认框的配置
                case 'delete':
                    // 默认把参数处理为：只返回 id（rowKey对应的字段）
                    item.api.handler = item.api.handler || (
                        params=>({[this.parent.rowKey]: params[this.parent.rowKey]})
                    );
                    item.message = item.message || (()=>('确定要删除吗？'));
                    item.okText = item.okText || '删除';
                    break;
                // 批量展示table中选中的数据
                case 'batchShow':
                    item.okText = item.okText || '关闭';
                    item.footer = item.footer || [{
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
                    break;
                // 批量新增弹框的配置
                case 'batchEdit':
                    // batchEdit 可以复用 batchAdd 的配置，可以减少配置书写
                    tempConf['batchAdd'] && (item = Object.assign(Utils.clone(tempConf['batchAdd']), item));
                    item.okText = item.okText || '提交';
                    // form 需用指定的，此弹框用户传入的form配置无效
                    item.form = Utils.clone(batchAddFormConf);
                    break;
                // 批量删除确认框的配置
                case 'batchDelete':
                    // 默认把参数处理为：只返回英文逗号分隔的 id[s]（rowKey对应的字段）如：{ids: 123,456}
                    item.api.handler = item.api.handler || (params=>({
                        [`${this.parent.rowKey}s`]: params.map(v=>v[this.parent.rowKey]).join(',')
                    }));
                    item.message = item.message || (()=>('确定要执行『 批量删除 』操作吗？'));
                    break;
                default:
                    break;
            }
            item.type = item.type || 'modal';
            item.name = this._getModalName(i);
            // 默认点击提交时自动刷新表格。
            if (item.autoReload !== false) {
                // 不用this.parent._inject，edit复用add的配置时，这里回把两个同样的函数合并到一起，导致table刷新两次
                item.onSuccess = ()=>{
                    return new Promise((resolve, reject)=>{
                        setTimeout(()=>{
                            this.parent.refreshTable();
                            resolve();
                        }, +item.autoReload || 0);
                    });
                };
            }

            result[i] = item;
            // 存储的复用配置用action做区分
            tempConf[action] = item;
        }
        this.oConfig = result;
        this.config = Object.values(result);
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
                    modal.show(...params);
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
            return name;
        }
        return `__${this.parent.key}-${key}`;
    }
    // 展示批量编辑框
    _showBatchEdit(key) {
        let datas = this.parent.getSelected();
        if (!(datas && datas.length > 0)) {
            message.warning('请先在表格中选择至少一条数据，再执行操作。', 3.5);
            return;
        }
        if (this.oConfig[key] && this.oConfig[key].keys) {
            let str = '';
            let keys = this.oConfig[key].keys.split(',');
            for (let row of datas) {
                let tmp = '';
                for (let v of keys) {
                    tmp += `${row[v] || ''},`;
                }
                str += tmp.slice(0, -1) + '\n';
            }
            let modal = this.__getComponent(this._getModalName(key));
            modal && modal.show({data: str});
        } else {
            console.error('there is no property "batchEdit" or "batchEdit.keys" in table config');
        }
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