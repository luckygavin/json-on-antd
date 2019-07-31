/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '一个例子',
    description: '最常见的布局。',
    config: {
        type: 'layout',
        style: {marginTop: 30},
        content: [
            {
                type: 'header',
                style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                content: 'Header'
            },
            {
                type: 'content',
                content: {
                    type: 'layout',
                    content: [
                        {
                            type: 'sider',
                            style: {background: '#3ba0e9', color: '#fff', textAlign: 'center', lineHeight: '120px'},
                            content: 'Sider'
                        },
                        {
                            type: 'content',
                            style: {background: '#108ee9', color: '#fff', textAlign: 'center', minHeight: '120px', lineHeight: '120px'},
                            content: 'Content'
                        }
                    ]
                }
            },
            {
                type: 'footer',
                style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                content: 'Footer'
            }
        ]
    }
};

export default class Layout extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'configure-layout.md';
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}