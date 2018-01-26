/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

import UF from 'uf/tools';
import md from './markdown.md';

const demo1 = {
    title: '带路由的页面',
    config: {
        type: 'iframe',
        src: 'docs/demo/router.php#/card'
    }
};

export default class RouterApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}
