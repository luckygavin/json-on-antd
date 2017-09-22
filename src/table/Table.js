/**
 * @file 表格组件
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';
import {Utils, Ajax} from 'uf/utils';
import {Table} from 'antd';

import './style.scss';

export default class NewTable extends BaseComponent {
    // 以下是函数定义
    constructor(props) {
        super(props);
        this.__init();
    }

    render() {
        return <Table {...this.__props} />;
    }
}
