/**
 * @file Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from './markdown.md';

let demo1 = {
    title: '基本用法',
    description: '当前文档的解析效果展示',
    config: {
        type: 'markdown',
        // tables: false,
        // highlight: true,
        docs: `${md}`
    }
};

export default class MarkdownApp extends BaseDoc {
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
