/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本',
    description: '最简单的用法。',
    config: {
        type: 'tooltip',
        title: 'Title',
        content: 'Tooltip will show when mouse enter.'
    }
};

const demo2 = {
    title: '位置',
    description: '位置有 12 个方向。',
    config: [
        {
            type: 'tooltip',
            placement: 'left',
            title: 'Title',
            content: ' Left '
        },
        {
            type: 'tooltip',
            placement: 'top',
            title: 'Title',
            content: ' Top '
        },
        {
            type: 'tooltip',
            placement: 'bottom',
            title: 'Title',
            content: ' Bottom '
        },
        {
            type: 'tooltip',
            placement: 'right',
            title: 'Title',
            content: ' Right '
        }
    ]
};

export default class Tooltip extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-tooltip.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2);
    }
}