/**
 * @file 时间轴
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'uf/tools';

const demo1 = {
    title: '常见用法',
    description: '常用的时间轴用法',
    config: {
        type: 'timeline',
        pending: {
            type: 'p',
            content: '至今'
        },
        content: [
            {
                type: 'timeline-item',
                content: '出生：1992',
            },
            {
                type: 'timeline-item',
                content: '小学：1997',
                color: 'green'
            },
            {
                type: 'timeline-item',
                content: '中学：2005',
                color: 'red'
            },
            {
                type: 'timeline-item',
                content: [
                    {
                        type: 'p',
                        content: '大学：2011'
                    },
                    {
                        type: 'p',
                        content: '大一'
                    },
                    {
                        type: 'p',
                        content: '大二'
                    },
                    {
                        type: 'p',
                        content: '大三'
                    },
                    {
                        type: 'p',
                        content: '大四'
                    },
                ],
                color: '#8085e9'
            },
            {
                type: 'timeline-item',
                dot: {
                    type: 'icon',
                    mode: 'heart-o'
                },
                content: '研究生：2015'
            }
        ]
    }
};

export default class Timeline extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-timeline.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1);
    }
}