/**
 * @file ReactModal 适用于弹出层快速提交表单
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button} from 'antd';
import {BaseComponent} from 'uf/component';
import {Utils} from 'uf/utils';
import UF from 'uf/tools';

import './style.scss';
const defaultEventList = ['onCancel'];

class NewModal extends BaseComponent {
    constructor(props) {
        super(props);
        // 给__props增加一些默认的事件处理函数
        this.__props = {
            onCancel: this.onCancel.bind(this)
        };
        this.__init();
    }
    show(e) {
        this.set({visible: true});
    }
    close() {
        this.set({visible: false});
    }
    // 默认点击取消时的处理逻辑
    onCancel() {
        this.close();
    }
    render() {
        return <Modal {...this.__props}/>;
    }
}

// 统一处理config（某些属性需要二次解析）
function message(type, config) {
    for (let v of ['title', 'content']) {
        if (config[v] && !Utils.typeof(config[v], 'string')) {
            config[v] = UF.init(config[v]);
        }
    }
    return Modal[type](config);
}

NewModal.info = message.bind(null, 'info');
NewModal.success = message.bind(null, 'success');
NewModal.error = message.bind(null, 'error');
NewModal.warning = message.bind(null, 'warning');
NewModal.confirm = message.bind(null, 'confirm');

export default NewModal;
