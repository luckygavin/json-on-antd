/**
 * @file 第三方组件列表
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from './BaseDoc.js';

export default class StandardApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'third-party.md';
        this.__init();
    }
}
