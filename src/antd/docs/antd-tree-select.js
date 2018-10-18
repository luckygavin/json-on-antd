/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import {Utils} from 'src/utils';
import UF from 'src';

const treeData = [{
    label: 'Node1',
    value: '0-0',
    children: [{
        label: 'Child Node1',
        value: '0-0-0'
    }]
}, {
    label: 'Node2',
    value: '0-1',
    children: [{
        label: 'Child Node3',
        value: '0-1-0'
    }, {
        label: 'Child Node4',
        value: '0-1-1'
    }, {
        label: 'Child Node5',
        value: '0-1-2'
    }]
}];

const demo1 = {
    title: '基本使用',
    description: '基本使用。',
    config: {
        type: 'tree-select',
        style: {width: '100%'},
        showSearch: true,
        treeDefaultExpandAll: true,
        treeData: treeData
    }
};

const demo2 = {
    title: '异步加载',
    description: '通过`source`加载树形列表，接口返回数据格式见底部。',
    config: {
        type: 'tree-select',
        style: {width: '100%'},
        multiple: true,
        treeCheckable: true,
        source: 'docs/php/tree-data.php?all=true'
    }
};

const demo3 = {
    title: '多选',
    description: '多选和勾选框功能。',
    config: [
        {
            type: 'tree-select',
            style: {width: '100%'},
            multiple: true,
            source: 'docs/php/tree-data.php?all=true'
        },
        {
            type: 'tree-select',
            style: {width: '100%', marginTop: 10},
            multiple: true,
            treeCheckable: true,
            showCheckedStrategy: 'SHOW_PARENT',
            source: 'docs/php/tree-data.php?all=true'
        }
    ]
};

const demo4 = {
    title: '搜索功能',
    description: '在下拉中显示搜索框(仅在单选模式下生效)',
    config: {
        type: 'tree-select',
        style: {width: '100%'},
        showSearch: true,
        treeNodeFilterProp: 'title',
        source: 'docs/php/tree-data.php?all=true',
        onChange: () => {
            console.log(1);
        }
    }
};

export default class TreeSelect extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-tree-select.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}