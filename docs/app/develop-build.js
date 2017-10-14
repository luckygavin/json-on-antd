/**
 * @file 第二种开发模式
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

export default class Build extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'develop-build.md';
        this.__init();
    }
}