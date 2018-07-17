/**
 * @file 配置化树形控件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

let demo1 = {
    title: '基本用法',
    description: '默认高度自动根据内容调整',
    config: [
        {
            type: 'ueditor',
            name: 'my-editor',
            style: {marginBottom: '10px'},
            simple: true
        },
        {
            type: 'button',
            content: '获取内容',
            onClick() {
                let result = UF('my-editor').getContent();
                UF.message.info(result, 3);
            }
        },
        {
            type: 'button',
            content: '不可编辑',
            onClick() {
                UF('my-editor').setDisabled();
            }
        },
        {
            type: 'button',
            content: '追加内容',
            onClick() {
                UF('my-editor').setContent('追加内容', true);
            }
        }
    ]
};

export default class ExportApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }

}
