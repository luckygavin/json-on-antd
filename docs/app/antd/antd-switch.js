/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';

const demo1 = {
    title: '基本',
    description: '最简单的用法。',
    config: {
        type: 'switch',
        checked: true
    }
};

const demo2 = {
    title: '两种大小',
    description: 'size="small" 表示小号开关。',
    config: [
        {
           type: 'switch',
        },
        {
           type: 'switch',
           size: 'small'
        }
    ]
};

const demo3 = {
    title: '文字和图标',
    description: '带有文字和图标。',
    config: [
        {
           type: 'switch',
            checkedChildren: '开',
            unCheckedChildren: '关'
        },
        {
           type: 'switch',
            checkedChildren: {
                type: 'icon',
                mode: 'check'
            },
            unCheckedChildren: {
                type: 'icon',
                mode: 'cross'
            }
        }
    ]
};



export default class Switch extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-switch.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3);
    }
}