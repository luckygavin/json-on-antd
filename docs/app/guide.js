/**
 * @file 第三方组件列表
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

export default class GuideApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'guide.md';
        this.__init();
    }
}
