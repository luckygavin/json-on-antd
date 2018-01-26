/**
 * @file ReactModal 适用于弹出层快速提交表单
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.js';

export default class FormModal extends Modal {
    __init(...params) {
        super.__init(...params);
        // form配置处理
        let formConf = Object.assign({
            type: 'form',
            wrappedComponentRef: inst=>{
                this.formRef = inst;
            }
        }, this.__props.form);
        // 兼容 formData 置于不同位置
        formConf.formData = formConf.formData || this.__props.params;
        // 可以写其他内容在content中，置于form之上
        this.__props.children = this.__props.children || [];
        this.__props.children.push(this.__analysis(formConf));
    }
    // 重写父组件中定义的show函数
    show(data) {
        super.show(data, ()=>{
            this.formRef.resetValues(data);
        });
    }
    // 重写父组件中定义的close函数
    close() {
        super.close(()=>{
            this.formRef.resetValues();
        });
    }
    // 重写父组件中定义的获取参数函数
    _getParams() {
        let values = this.formRef && this.formRef.getValues();
        if (values) {
            // console.log(values);
            return Object.assign({}, this.__props.params, values);
        }
        return null;
    }
}
