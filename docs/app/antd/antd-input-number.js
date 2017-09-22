/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本用法',
    description: '数字输入框。',
    config: [{
        type: 'input-number',
        min: 1,
        max: 5,
        value: 3,
        onChange: function(v) {
            console.log(v);
        }
    }]
};
const demo2 = {
    title: '小数',
    description: '和原生的数字输入框一样，value 的精度由 step 的小数位数决定。',
    config: [{
        type: 'input-number',
        min: 0,
        max: 1,
        step: 0.1,
        onChange: function(v) {
            console.log(v);
        }
    }]
};
const demo3 = {
    title: '格式化展示',
    description: '通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。',
    config: [{
        type: 'input-number',
        value: 100,
        formatter: function(v) {
            return v + '%';
        },
        onChange: function(v) {
            return ('' + v).replace('%', '');
        }
    }]
};

export default class InputNumber extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-input-number.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3);
    }
}