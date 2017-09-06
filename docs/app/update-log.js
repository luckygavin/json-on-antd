/**
 * @file 第三方组件列表
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from './BaseDoc.js';

export default class UpdateLogApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'update-log.md';
        this.className = 'log';
        this.__init();
    }
}
