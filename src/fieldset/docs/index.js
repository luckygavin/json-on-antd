/**
 * @file Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

let demo1 = {
    title: '基本用法',
    description: '',
    config: {
        type: 'fieldset',
        title: '这是标题',
        content: [
            {
                type: 'alert',
                mode: 'info',
                message: 'Informational Notes',
                showIcon: true
            },
            {
                type: 'alert',
                mode: 'info',
                message: 'Informational Notes',
                showIcon: true
            }
        ]
    }
};

export default class FieldsetApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}
