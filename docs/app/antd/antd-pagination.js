/**
 * @file 分页
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Uf from 'uf/tools';
import Demo from '../base/Demo.js';

const demo1 = {
    title: '基本用法',
    description: '基础分页，规定每页展示数目，并且显示数据总条数',
    config: {
        type: 'pagination',
        current: 3,
        total: 500,
        pageSize: 50,
        onChange: function(page) {
            console.log('Page:', page);
        }
    }
};
const demo2 = {
    title: '改变',
    description: '改变每页显示条目数',
    config: {
        type: 'pagination',
        current: 3,
        total: 500,
        showSizeChanger: true,
        pageSizeOptions: ['10', '25', '50'],
        onShowSizeChange: function(current, pageSize) {
            console.log(current, pageSize);
        }
    }
};
const demo3 = {
    title: '跳转',
    description: '快速跳转到某一页',
    config: {
        type: 'pagination',
        current: 3,
        total: 500,
        showQuickJumper: true,
        onChange: function(pageNumber) {
            console.log('Page:', pageNumber);
        }
    }
};
const demo4 = {
    title: '迷你',
    description: '迷你版本',
    config: {
        type: 'pagination',
        current: 3,
        total: 500,
        size: 'small',
        showQuickJumper: true,
        showSizeChanger: true,
        onChange: function(pageNumber) {
            console.log('Page:', pageNumber);
        }
    }
};
const demo5 = {
    title: '简洁',
    description: '简单的翻页',
    config: {
        type: 'pagination',
        current: 3,
        total: 500,
        pageSize: 10,
        simple: true,
        showQuickJumper: true,
        showSizeChanger: true,
        onChange: function(pageNumber) {
            console.log('Page:', pageNumber);
        }
    }
};
const demo6 = {
    title: '总数',
    description: '通过设置showTotal展示总共有多少数据',
    config: {
        type: 'pagination',
        total: 85,
        showTotal: function(total) {
            return '共' + total + '条';
        },
        pageSize: 20,
        current: 1
    }
};

export default class Pagination extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-pagination.md';
        this.__init();
    }

    render() {
        // return this.__getDemo(demo1, demo2, demo3, demo4, demo5, demo6);
        return <Demo single={true} list={[demo1, demo2, demo3, demo4, demo5, demo6]} />;
    }
}