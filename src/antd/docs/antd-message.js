/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';

const demo1 = {
    title: '各种提示类型',
    description: '包括成功、失败、警告、信息。',
    config: [
        {
            type: 'button',
            content: 'Success',
            onClick: v=>UF.message.success({
                type: 'div',
                content: 'Success message.'
            })
        },
        {
            type: 'button',
            content: 'Info',
            onClick: v=>UF.message.info('Info message.')
        },
        {
            type: 'button',
            content: 'Warning',
            onClick: v=>UF.message.warning('Warning message.')
        },
        {
            type: 'button',
            content: 'Error',
            onClick: v=>UF.message.error('Error message.')
        }
    ]
};

const demo2 = {
    title: '加载中',
    description: '进行全局 loading，异步自行移除。例如操作执行完成后，执行`message`返回的句柄，即可销毁loading提示',
    config: [
        {
            type: 'button',
            content: 'Display a loading indicator',
            onClick: v=>{
                var hide = UF.message.loading('Success message.', 0);
                setTimeout(hide, 3000);
            }
        }
    ]
};

export default class Message extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-message.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2);
    }
}