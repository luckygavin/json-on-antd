/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本用法',
    description: '可用与不可用复选框',
    config: [
        {
            type: 'checkbox',
            checked: true,
            onChange: function(e) {console.log(e.target.checked)}
        },
        {
            type: 'checkbox',
            checked: false,
            disabled: true
        },
        {
            type: 'checkbox',
            checked: true,
            disabled: true
        },
    ]
};
const demo2 = {
    title: 'Checkbox组',
    description: '由数组生成复选框组',
    config: {
        type: 'checkbox-group',
        options: [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
        ],
        value: ['Pear'],
        onChange: function(checkedValues) {
            console.log('checked = ', checkedValues);
        }
    }
};

export default class Checkbox extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-checkbox.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2);
    }
}