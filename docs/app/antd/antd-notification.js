/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Uf from 'uf/tools';

const demo1 = {
    title: '基本',
    description: '最简单的用法，4.5 秒后自动关闭。',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: 'Open the notification box',
            onClick: v=>{
                Uf.notification.open({
                    message: 'Notification Title',
                    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                });
            }
        }
    ]
};

const demo2 = {
    title: '取消关闭的延时',
    description: '自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可。',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: 'Open the notification box',
            onClick: v=>{
                Uf.notification.open({
                    message: 'Notification Title',
                    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                    duration: 0
                });
            }
        }
    ]
};

const demo3 = {
    title: '带有图标的通知提醒框',
    description: '通知提醒框左侧有图标。',
    config: [
        {
            type: 'button',
            content: 'Success',
            onClick: v=>{
                Uf.notification.success({
                    message: 'Notification Title',
                    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                });
            }
        },
        {
            type: 'button',
            content: 'Info',
            onClick: v=>{
                Uf.notification.info({
                    message: 'Notification Title',
                    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                });
            }
        },
        {
            type: 'button',
            content: 'Warning',
            onClick: v=>{
                Uf.notification.warning({
                    message: 'Notification Title',
                    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                });
            }
        },
        {
            type: 'button',
            content: 'Error',
            onClick: v=>{
                Uf.notification.error({
                    message: 'Notification Title',
                    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                });
            }
        }
    ]
};

const demo4 = {
    title: '自定义按钮',
    description: '自定义关闭按钮的样式和文字。',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: 'Open the notification box',
            onClick: v=>{
                Uf.notification.open({
                    message: 'Notification Title',
                    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                    duration: 0,
                    key: 'my-infomation',
                    btn: Uf.init({
                        type: 'button',
                        mode: 'primary',
                        size: 'small',
                        content: 'Confirm',
                        onClick: v=>Uf.notification.close('my-infomation')
                    })
                });
            }
        }
    ]
};

export default class Notification extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-notification.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}