/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Demo from '../base/Demo.js';

const demo1 = {
    title: '按钮类型',
    description: '按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次',
    config: [
        {
            type: 'button',
            mode: 'primary',
            style: {margin: '0 8px 8px 0'},
            content: 'Primary'
        },
        {
            type: 'button',
            mode: 'default',
            style: {margin: '0 8px 8px 0'},
            content: 'Default'
        },
        {
            type: 'button',
            mode: 'dashed',
            style: {margin: '0 8px 8px 0'},
            content: 'Dashed'
        },
        {
            type: 'button',
            mode: 'danger',
            style: {margin: '0 8px 8px 0'},
            content: 'Danger'
        }
    ]
};
const demo2 = {
    title: '按钮类型',
    description: '按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次',
    config: [
        {
            type: 'button',
            style: {margin: '0 8px 8px 0'},
            content: '取消'
        },
        {
            type: 'button',
            mode: 'primary',
            style: {margin: '0 8px 8px 0'},
            content: '确定'
        }
    ]
};

export default class Button extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-button.md';
        this.__init();
    }
    render() {
        return <Demo list={[demo1, demo2]}/>;
    }
}