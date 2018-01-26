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
        '见右下角 `灰色` 按钮',
        {
            type: 'backtop'
        }
    ]
};

const demo2 = {
    title: '自定义样式',
    description: '可以自定义回到顶部按钮的样式，限制宽高：40px * 40px。',
    config: [
        '见右下角 `蓝色` 按钮',
        {
            type: 'backtop',
            content: {
                type: 'span',
                content: 'UP',
                style: {display: 'block', height: '40px', width: '40px', lineHeight: '40px', borderRadius: '4px', backgroundColor: '#1088e9', color: '#fff', textAlign: 'center', fontSize: '20px', marginTop: '-50px'}
            }
        }
    ]
};

export default class BackTop extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-backtop.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2);
    }
}