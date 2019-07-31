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
    description: '组件为惰性加载，使用到时才会动态加载所需库。使用`ueditor`组件进行编辑，用`ueditor-parse`进行展示',
    config: [
        {
            type: 'ueditor',
            name: 'my-editor',
            style: {marginBottom: '10px'},
            data: '123',
            simple: false
        },
        {
            type: 'button',
            content: '获取内容',
            onClick() {
                let result = UF('my-editor').getContent();
                UF('u-parse').set({content: result});
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
        },
        {
            type: 'card',
            title: 'Ueditor内容展示：',
            style: {marginTop: 10},
            content: {
                type: 'ueditor-parse',
                name: 'u-parse',
                content: '<p>123</p>'
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
