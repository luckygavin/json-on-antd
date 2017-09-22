/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本',
    description: '最简单的用法。',
    config: [
        {
            type: 'popconfirm',
            title: 'Are you sure delete this task?',
            okText: 'Yes',
            cancelText: 'No',
            content: {
                type: 'html',
                content: '<a href="#">Delete</a>'
            },
            onConfirm: v=>console.log('confirm'),
            onCancel: v=>console.log('cancel')
        }
    ]
};

const demo2 = {
    title: '展示位置',
    description: '位置有十二个方向。如需箭头指向目标元素中心，可以设置 arrowPointAtCenter。',
    config: [
        {
            type: 'popconfirm',
            placement: 'left',
            title: 'Are you sure delete this task?',
            content: {
                type: 'button',
                content: 'Left'
            }
        },
        {
            type: 'popconfirm',
            placement: 'top',
            title: 'Are you sure delete this task?',
            content: {
                type: 'button',
                content: 'Top'
            }
        },
        {
            type: 'popconfirm',
            placement: 'bottom',
            title: 'Are you sure delete this task?',
            content: {
                type: 'button',
                content: 'Bottom'
            }
        },
        {
            type: 'popconfirm',
            placement: 'right',
            title: 'Are you sure delete this task?',
            content: {
                type: 'button',
                content: 'Right'
            }
        }
    ]
};

export default class Popconfirm extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-popconfirm.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2);
    }
}