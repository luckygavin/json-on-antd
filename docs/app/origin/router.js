/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

import UF from 'uf/tools';

const demo1 = {
    title: '基本用法',
    description: '简单的弹框用法。',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: '点击弹出',
            onClick: ()=>UF('my-modal').show()
        },
        {
            type: 'modal',
            name: 'my-modal',
            visible: false,
            title: '基本弹框',
            content: {
                type: 'html',
                content: '<p>Some contents...</p><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p>'
            }
        }
    ]
};

export default class RouterApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'router.md';
        this.__init();
    }
    render() {
        return this.__getDemo(demo1);
    }
}
