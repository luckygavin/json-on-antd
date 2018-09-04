/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';

const demo1 = {
    title: '基本使用',
    description: '基本使用。',
    config: {
        type: 'select',
        name: 'my-select',
        value: 'Apple',
        options: [
            {label: 'Apple', value: 'Apple'},
            {label: 'Pear', value: 'Pear', disabled: true},
            {label: 'Orange', value: 'Orange'}
        ]
    }
};

const demo2 = {
    title: '带搜索框',
    description: '展开后可对选项进行搜索。',
    config: {
        type: 'select',
        name: 'my-select2',
        style: {width: 200},
        showSearch: true,
        allowClear: true,
        onChange: v=>console.log(v),
        options: ['Apple', 'Pear', 'Orange']
    }
};

const demo3 = {
    title: '多选模式',
    description: '可以选择多个',
    config: [
        {
            type: 'button',
            content: '全选',
            onClick() {
                UF('my-select3').selectAll();
            }
        },
        {
            type: 'select',
            name: 'my-select3',
            style: {width: '100%', marginTop: 10},
            mode: 'multiple',
            value: ['Apple'],
            options: ['Apple', 'Pear', 'Orange']
        }
    ]
};

const demo4 = {
    title: '任意输入',
    description: '可以把随意输入的内容作为选项并选中。',
    config:[
        {
            type: 'select',
            style: {width: '100%'},
            mode: 'tags',
            placeholder: '标签模式',
            options: ['Apple', 'Pear', 'Orange']
        },
        {
            type: 'select',
            style: {width: '100%'},
            mode: 'combobox',
            style: {marginTop: 10},
            placeholder: '单选模式',
            options: ['Apple', 'Pear', 'Orange']
        }
    ]
};


export default class Select extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-select.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}