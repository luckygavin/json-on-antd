/**
 * @file 开发规范
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

export default class StandardApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'standard.md';
        this.__init();
    }
}
