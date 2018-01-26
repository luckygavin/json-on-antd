/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '单选组合',
    description: '一组互斥的 Radio 配合使用。',
    config: [
        {
            type: 'radio',
            name: 'my-radio2',
            style: {display: 'block', marginBottom: 16},
            options: ['Apple', 'Pear', 'Orange']
        },
        {
            type: 'radio',
            name: 'my-radio',
            options: [
                {label: 'Apple', value: 'Apple'},
                {label: 'Pear', value: 'Pear', disabled: true},
                {label: 'Orange', value: 'Orange'}
            ]
        }
    ]
};
const demo2 = {
    title: '按钮样式',
    description: '按钮样式的单选组合。',
    config: {
        type: 'radio',
        name: 'my-radio-button',
        showAsButton: true,
        options: [
            {label: 'Apple', value: 'Apple'},
            {label: 'Pear', value: 'Pear', disabled: true},
            {label: 'Orange', value: 'Orange'}
        ]
    }
};

export default class Radio extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-radio.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2);
    }
}