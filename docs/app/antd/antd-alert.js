/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';

const demo1 = {
    title: '基本四种样式',
    description: '最简单的用法，适用于简短的警告提示。',
    config: [
        {
            type: 'alert',
            mode: 'success',
            message: 'Success Text'
        },
        {
            type: 'alert',
            mode: 'info',
            message: 'Info Text'
        },
        {
            type: 'alert',
            mode: 'warning',
            message: 'Warning Text'
        },
        {
            type: 'alert',
            mode: 'error',
            message: 'Error Text'
        }
    ]
};

const demo2 = {
    title: '可关闭的警告提示',
    description: '显示关闭按钮，点击可关闭警告提示。',
    config: [
        {
            type: 'alert',
            mode: 'success',
            description: 'Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text',
            closable: true
        },
        {
            type: 'alert',
            mode: 'error',
            description: 'Error Description Error Description Error Description Error Description Error Description Error Description',
            message: 'Error Text',
            closable: true
        }
    ]
};

const demo3 = {
    title: '图标',
    description: '可口的图标让信息类型更加醒目。',
    config: [
        {
            type: 'alert',
            mode: 'success',
            message: 'Success Tips',
            showIcon: true
        },
        {
            type: 'alert',
            mode: 'info',
            message: 'Informational Notes',
            showIcon: true
        },
        {
            type: 'alert',
            mode: 'warning',
            message: 'Warning',
            description: 'This is a warning notice about copywriting.',
            showIcon: true
        },
        {
            type: 'alert',
            mode: 'error',
            message: 'Error',
            description: 'This is an error message about copywriting.',
            showIcon: true
        }
    ]
};

const demo4 = {
    title: '自定义关闭',
    description: '可以自定义关闭，自定义的文字会替换原先的关闭 Icon.',
    config: {
        type: 'alert',
        mode: 'info',
        message: 'Info Text',
        closeText: 'Close Now'
    }
};

export default class Alert extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-alert.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}