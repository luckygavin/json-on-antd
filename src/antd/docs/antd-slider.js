/**
 * @file 滑动输入
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本用法',
    description: '',
    config: [
    ]
};

export default class Affix extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-slider.md';
        this.__init();
    }

    // render() {
    //     return this.__getDemo(demo1);
    // }
}