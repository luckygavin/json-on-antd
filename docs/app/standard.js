/**
 * @file 开发规范
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from './BaseDoc.js';

export default class StandardApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = 'standard.md';
    }
    render() {
        return (<div className="umpui-component">
            <h1 className="umpui-layer umpui-title">开发规范</h1>
            {this.__getDoc()}
        </div>);
    }
}
