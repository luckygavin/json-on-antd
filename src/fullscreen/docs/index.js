/**
 * @file Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

let demo1 = {
    title: '基本用法',
    description: '点击图标全屏展示',
    config: {
        type: 'fullscreen',
        content: {
            type: 'div',
            mode: 'simple',
            style: {
                padding: 10,
                width: '100%',
                height: '100%',
                background: '#ffffdd'
            },
            content: '任意内容'
        }
    }
};

export default class FieldsetApp extends BaseDoc {
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
