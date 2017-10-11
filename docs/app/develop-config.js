/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'uf/tools';

export default class Config extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'develop-config.md';
        this.__init();
    }
}