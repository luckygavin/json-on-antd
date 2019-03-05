/**
 * @file 第三方组件列表
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../../markdown/mobile/update-log.md';

export default class UpdateLogApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.className = 'log';
        this.__init();
    }
}
 