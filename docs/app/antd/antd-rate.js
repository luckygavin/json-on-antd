/**
 * @file 评分
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';

const demo1 = {
    title: '基本用法',
    description: '最简单的用法',
    config: {
        type: 'rate',
        value: 3,
        onChange: function(value) {
            console.log(value);
        }
    }
};

const demo2 = {
    title: '半星及文案',
    description: '支持选中半星',
    config: {
        type: 'rate',
        value: 2.5,
        allowHalf: true
    }
};

const demo3 = {
    title: '其他符号',
    description: '可以将星星替换为其他字符，比如字母，数字，字体图案甚至中文',
    config: [
        {
            type: 'rate',
            value: 2.5,
            style: {
                display: 'block',
                marginBottom: '10px'
            },
            allowHalf: true,
            character: {
                type: 'icon',
                mode: 'heart'
            }
        },
        {
            type: 'rate',
            value: 2.5,
            allowHalf: true,
            style: {
                display: 'block',
                marginBottom: '10px'
            },
            character: 'A'
        },
        {
            type: 'rate',
            value: 2.5,
            allowHalf: true,
            character: '好'
        }
    ]
};

const demo4 = {
    title: '只读',
    description: '只读，无法进行交互',
    config: {
        type: 'rate',
        value: 2.5,
        allowHalf: true,
        disabled: true
    }
};

export default class Rate extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-rate.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}