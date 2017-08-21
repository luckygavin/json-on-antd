/**
 * @file 第三方组件列表
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from './BaseDoc.js';

export default class StandardApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = 'third-party.md';
    }
    render() {
        return (<div className="umpui-component">
            <h1 className="umpui-layer umpui-title">第三方组件汇总</h1>
            {this.__getDoc()}
        </div>);
    }
}
