/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

import UF from 'uf/tools';
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园2号'
}, {
    key: '3',
    name: '胡彦祖',
    age: 52,
    address: '西湖区湖底公园3号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

const demo1 = {
    title: '基本用法',
    description: '简单的表格，最后一列是各种操作。',
    config: {
        type: 'table',
        columns,
        rowSelection: {
            // selections: false
        },
        dataSource
    }
};

export default class TableApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'table.md';
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}
