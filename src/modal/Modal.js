/**
 * @file ReactModal 适用于弹出层快速提交表单
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button} from 'antd';
import {BaseComponent} from 'uf/component';
// import Form from 'uf/form';

import './style.scss';
const defaultEventList = ['onCancel'];

class NewModal extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
        this.afterInit();
    }
    // 给props增加一些默认的事件处理函数
    afterInit() {
        for (let v of defaultEventList) {
            if (!this.__props[v]) {
                this.__props[v] = this[v].bind(this);
            }
        }
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

NewModal.info = Modal.info;
NewModal.success = Modal.success;
NewModal.error = Modal.error;
NewModal.warning = Modal.warning;
NewModal.confirm = Modal.confirm;

export default NewModal;
