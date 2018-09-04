/**
 * @file Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

const data = {
    id: 1,
    name: 'TC',
    object_table: 'idc_info',
    object_id: '2',
    description: '土城机房 北京市朝阳区裕民中路乙3号A座 7层',
    zone: 'China',
    net_area: 'beijing',
    area_id: '1',
    ip_conversion_rule: '65536',
    budget_status: 'yes',
    self_build: '0',
    region: '华北'
};

const demo1 = {
    title: '基本用法',
    description: '默认效果',
    config: {
        type: 'list',
        columns: [
            {title: 'ID', dataIndex: 'id'},
            {title: '机房', dataIndex: 'name'},
            {title: '名称', dataIndex: 'idcId'},
            {title: '地区', dataIndex: 'region'},
            {title: '描述', dataIndex: 'description'}
        ],
        data: data,
        layout: {
            labelCol: 1,
            labelStyle: {minWidth: 60}
        }
    }
};

const demo2 = {
    title: '无边框',
    description: '无边框样式',
    config: {
        type: 'list',
        columns: [
            {title: 'ID', dataIndex: 'id'},
            {title: '机房', dataIndex: 'name'},
            {title: '名称', dataIndex: 'idcId'},
            {title: '地区', dataIndex: 'region'},
            {title: '描述', dataIndex: 'description'}
        ],
        data: data,
        bordered: false
    }
};

export default class ListApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemo(demo1, demo2);
    }

}
