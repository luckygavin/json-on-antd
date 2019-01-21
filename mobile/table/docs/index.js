/**
 * @file Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

const dataSource = [
    {area: '北京', stock: 622, futureSuply: '23123', totalSuply: '12243', totalRequied: 2343, areaStock: '2333'},
    {area: '北京', stock: 6232, futureSuply: '23123', totalSuply: '13243', totalRequied: 2343, areaStock: '2333'},
    {area: '北京', stock: 322, futureSuply: '23123', totalSuply: '12243', totalRequied: 2343, areaStock: '2333'},
];

let demo1 = {
    title: '基本用法',
    description: '',
    config: {
        type: 'table',
        name: 'newtable',
        rowKey: 'key',
        columns: [
            {title: '区域', dataIndex: 'area'},
            {title: '存量', dataIndex: 'stock'},
            {title: '未来12月', dataIndex: 'futureSuply'},
            {title: '总资源供给', dataIndex: 'totalSuply'},
            {title: '总资源需求', dataIndex: 'totalRequied'},
            {title: '区域冗余', dataIndex: 'areaStock'}
        ],
        data: dataSource,
    }
};

export default class TableApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}
