/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';

export default class Card extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-card.md';
        this.__init();
    }

    // render() {
    //     return <div id="demo-content"></div>;
    // }
}