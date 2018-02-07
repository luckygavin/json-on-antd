/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

export default class Info extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'configure-api.md';
        this.__init();
    }
}