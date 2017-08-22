/**
 * @file 配置化树形控件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'uf/form';

import BaseDoc from 'docs/app/BaseDoc.js';

export default class TreeApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = 'tree.md';
    }
    onSubmit(value) {
        console.log(value);
    }
    render() {
        return (
            <div className="umpui-component">
                <h1 className="umpui-layer umpui-title">Tree 树形控件</h1>
                <div className="umpui-block">
                    
                </div>
                {/*this.__getDoc()*/}
            </div>
        );
    }

}
