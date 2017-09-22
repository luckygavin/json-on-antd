/**
 * @file 第三方组件列表
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

export default class IntroductionApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'introduction.md';
        this.__init();
    }
}
