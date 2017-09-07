/**
 * @file 固钉
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';

const demo1 = {
    title: '基本用法',
    description: '固钉距离可视区上下边缘固定的距离，并且可获取是否是固定状态',
    config: [
        {
            type: 'affix',
            offsetTop: 120,
            content: {
                type: 'button',
                mode: 'primary',
                content: '120px to affix top'
            },
            onChange: function(affixed) {
                console.log(affixed);
            }
        },
        {
            type: 'affix',
            offsetBottom: 120,
            style: {
                marginTop: '15px'
            },
            content: {
                type: 'button',
                mode: 'primary',
                content: '120px to affix button'
            }
        },
    ]
};

export default class Affix extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-affix.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1);
    }
}