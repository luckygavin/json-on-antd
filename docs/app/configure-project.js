/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

import UF from 'uf/tools';

const demo1 = {
    title: '包含多个页面的项目',
    description: '因为内容较多，此处是引入了一个子页面。具体使用可见[此链接](docs/demo/router.php#/)',
    config: {
        type: 'iframe',
        src: 'docs/demo/router.php#/',
    }
};

export default class Project extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'configure-project.md';
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}