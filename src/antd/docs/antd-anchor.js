/**
 * @file 时间轴
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';

const demo1 = {
    title: '基本用法',
    description: '最简单的用法',
    name: 'demo1',
    config: {
        type: 'anchor',
        mode: 'scroll',
        scrollOffset: 100,
        items: [
            {
                targetId: '-',
                title: '何时使用'
            },
            {
                targetId: '-anchor',
                title: '# anchor'
            },
            {
                targetId: '-item-',
                title: 'item'
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