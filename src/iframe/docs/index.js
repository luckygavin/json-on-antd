/**
 * @file 配置化树形控件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from './markdown.md';

let demo1 = {
    title: '基本用法',
    description: '默认高度自动根据内容调整',
    config: {
        type: 'iframe',
        src: 'docs/demo/router.php#/',
        height: 300,
        // mode: 'auto' // default
        // mode: 'fixed'
        // mode: 'max'
    }
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
