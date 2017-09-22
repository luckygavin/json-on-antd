/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基础栅格',
    description: '从堆叠到水平排列。使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。',
    config: [
        {
            type: 'row',
            style: {textAlign: 'center', background: 'rgba(0, 160, 233, 0.7)'},
            content: [
                {
                    type: 'col',
                    span: 12,
                    content: 'col-12'
                },
                {
                    type: 'col',
                    span: 12,
                    style: {background: '#00a0e9'},
                    content: 'col-12'
                }
            ]
        },
        {
            type: 'row',
            style: {textAlign: 'center', background: 'rgba(0, 160, 233, 0.7)', marginTop: 8},
            content: [
                {
                    type: 'col',
                    span: 8,
                    content: 'col-8'
                },
                {
                    type: 'col',
                    span: 8,
                    style: {background: '#00a0e9'},
                    content: 'col-8'
                },
                {
                    type: 'col',
                    span: 8,
                    content: 'col-8'
                }
            ]
        },
        {
            type: 'row',
            style: {textAlign: 'center', background: 'rgba(0, 160, 233, 0.7)', marginTop: 8},
            content: [
                {
                    type: 'col',
                    span: 6,
                    content: 'col-6'
                },
                {
                    type: 'col',
                    span: 6,
                    style: {background: '#00a0e9'},
                    content: 'col-6'
                },
                {
                    type: 'col',
                    span: 6,
                    content: 'col-6'
                },
                {
                    type: 'col',
                    span: 6,
                    style: {background: '#00a0e9'},
                    content: 'col-6'
                }
            ]
        }
    ]
};

const demo2 = {
    title: '区块间隔',
    description: '栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔。(n 是自然数)',
    config: [
        {
            type: 'row',
            gutter: 16,
            style: {textAlign: 'center'},
            content: [
                {
                    type: 'col',
                    span: 6,
                    content: {
                        type: 'div',
                        style: {background: '#00a0e9'},
                        content: 'col-6'
                    }
                },
                {
                    type: 'col',
                    span: 6,
                    content: {
                        type: 'div',
                        style: {background: '#00a0e9'},
                        content: 'col-6'
                    }
                },
                {
                    type: 'col',
                    span: 6,
                    content: {
                        type: 'div',
                        style: {background: '#00a0e9'},
                        content: 'col-6'
                    }
                },
                {
                    type: 'col',
                    span: 6,
                    content: {
                        type: 'div',
                        style: {background: '#00a0e9'},
                        content: 'col-6'
                    }
                }
            ]
        }
    ]
};

export default class GridApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-grid.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2);
    }
}
