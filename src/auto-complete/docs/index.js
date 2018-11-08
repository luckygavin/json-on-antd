/**
 * @file Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

let dataSource1 = [];
const demo1 = {
    title: '基础补全',
    description: '基本使用。通过 suffix 设置自动补全的后缀',
    config: {
        type: 'local-complete',
        style: {width: '80%'},
        suffix: ['@baidu.com', '@163.com', '@qq.com'],
        // mode: 'multiple',
        placeholder: 'input here',
        onSelect: function(value) {
            console.log(value);
        }
    }
};
const demo2 = {
    title: '异步搜索',
    description: '自动补全和远程数据结合。当设置`mode`为`select-only`时，输入框仅可选补全的内容，不可任意输入',
    config: {
        type: 'auto-complete',
        placeholder: '单选模式（仅能选择，不可任意输入）',
        mode: 'select-only',
        source: {
            url: 'docs/php/data.php?sleep=1',
            paramsHandler: params=>({search: params.value}),
            handler: data=>data.map(v=>{
                return {value: v.id, label: v.name};
            })
        }
    }
};
const demo3 = {
    title: '搜索用户',
    description: '一个带有远程搜索，节流控制，请求时序控制，加载状态的多选示例。输入2个字符后进行补全查询。',
    config: [{
        type: 'auto-complete',
        placeholder: '多选模式',
        mode: 'multiple',
        startSign: 2,
        source: {
            url: 'docs/php/data.php?sleep=1',
            paramsHandler: params=>({search: params.value}),
            handler: data=>data.map(v=>{
                return {value: v.name, label: v.name};
            })
        }
    }]
};
const demo4 = {
    title: '搜索用户',
    description: '同样是一个带有远程搜索功能，不过当搜索不到时也可以录入到框内，从而可直接粘贴多条内容，一般配合`tokenSeparators`属性使用',
    config: [{
        type: 'auto-complete',
        placeholder: '多选模式',
        mode: 'tags',
        tokenSeparators: [';'],
        source: {
            url: 'docs/php/data.php?sleep=1',
            paramsHandler: params=>({search: params.value}),
            handler: data=>data.map(v=>{
                return {value: v.name, label: v.name};
            })
        }
    }]
};


export default class AutoCompleteApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}
