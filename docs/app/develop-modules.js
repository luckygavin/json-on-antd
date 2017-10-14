/**
 * @file 模块开发说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'uf/tools';

export default class Modules extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'develop-modules.md';
        this.__init();
    }
}