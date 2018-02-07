/**
 * @file 时间轴
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src/tools';

const demo1 = {
    title: '基本用法',
    description: '最简单的用法',
    name: 'demo1',
    config: {
        type: 'anchor',
        content: [
            {
                type: 'anchor-link',
                href: '#demo1',
                title: 'demo1'
            },
            {
                type: 'anchor-link',
                href: '#demo2',
                title: 'demo2'
            }
        ]
    }
};

export default class Anchor extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-anchor.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1);
    }
}