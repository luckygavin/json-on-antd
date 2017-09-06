/**
 * @file 自动补全AutoComplete-Demo
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Demo from '../base/Demo.js';
import UF from 'uf/tools';
let dataSource1 = [];
const demo1 = {
    title: '基本用法',
    description: '基本使用。通过 options 设置自动补全的后缀',
    config: {
        type: 'auto-complete',
        style: {width: '80%'},
        name: 'auto-complete-demo1',
        options: ['@baidu.com', '@163.com', '@qq.com'],
        placeholder: 'input here',
        onSelect: function(value) {
            console.log(value);
        }
    }
};
const demo2 = {
    title: '具有清除功能',
    description: '通过 allowClear 设置清除功能，同时设定默认value',
    config: {
        type: 'auto-complete',
        style: {width: '80%'},
        name: 'auto-complete-demo2',
        options: ['@baidu.com', '@163.com', '@qq.com'],
        value: '123123',
        allowClear: true,
        onChange: function(value) {
            console.log(value);
        }
    }
};

export default class Button extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-auto-complete.md';
        this.__init();
    }

    render() {
        return <Demo list={[demo1, demo2]} />;
    }
}