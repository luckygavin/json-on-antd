/**
 * @file 配置化树形控件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import Tree from 'uf/tree';
import Demo from './base/Demo.js';
import BaseDoc from 'docs/app/BaseDoc.js';

const treeData = [
    {
        name: '0-0',
        key: '0-0',
        isLeaf: false,
        disableCheckbox: false,
        disabled: false,
        type: 'leval1', // 用途：指定展开到哪一层
        children: [
            {
                name: '0-0-0',
                key: '0-0-0',
                isLeaf: true,
                // disableCheckbox: false, //此项可去，默认为false
                disabled: true, // 不响应,  //此项也可去，默认为true
                type: 'leval2'
            },
            {
                name: '0-0-1',
                key: '0-0-1',
                // isLeaf: false,
                disableCheckbox: false,
                disabled: false,
                type: 'leval2',
                children: [
                    {
                        name: '0-0-1-0',
                        key: '0-0-1-0',
                        disableCheckbox: true, // 复选框不可选，只针对checkbox配置中checkable: true有效
                        disabled: false,
                        type: 'leval3',
                        // isLeaf: true
                    },
                    {
                        name: '0-0-1-1',
                        key: '0-0-1-1',
                        disableCheckbox: false,
                        disabled: false,
                        type: 'leval3',
                        // isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        name: '0-1',
        key: '0-1',
        isLeaf: false,
        disableCheckbox: false,
        disabled: false,
        type: 'leval1',
        children: [
            {
                // 此节点会触发异步请求，因为满足isLeaf: false,children: []，效果可与树形图展示1中0-1-0节点展开进行对比
                name: '0-1-0',
                key: '0-1-0',
                // isLeaf: false,
                type: 'leval2',
                disableCheckbox: false,
                disabled: false,
                children: []
            }
        ]
    }
];
const treeConfig = {
    type: 'tree',
    style: {
        // 必须为符合react语法的css样式
        width: '300px',
        paddingTop: '10px',
        backgroundColor: '#fbfbfb'
    },
    expand: {
        // 全部为可选项，可写可不写
        defaultExpandAll: false, // 默认展开所有树节点，默认值为false
        // defaultExpandedKeys: [], // 默认展开指定的树节点，默认值为[],数组不为空时屏蔽defaultExpandAll
        // expandLeavals: ['leval1', 'leval2'], // 展开哪一层，由data数据中的type字段决定，此配置会屏蔽defaultExpandAll，defaultExpandedKeys
        expandedKeys: ['0-0-1', '0-1'], // (受控）展开指定的树节点，默认值为[], 设定之后屏蔽defaultExpandAll，defaultExpandedKeys, expandToLeaval
        autoExpandParent: true, // 是否自动展开父节点，默认值为true,ture->如果某节点是展开的则其父节点自动展开，false->某节点展开的，但是其父节点是收缩的，只有将父节点展开才能看到某节点的展开情况
        onExpand: function(expandedKeys, e) {
            console.log('onExpand:', expandedKeys);
        }
    },
    checkbox: {
        // 全部为可选项
        checkable: true, // 显示多选框,默认为false
        // checkedKeys: ['0-0-1-0', '0-1'], // 默认为空, 配置此项之后会屏蔽defaultCheckedKeys属性
        checkStrictly: false, // 父子之间的选中是否受关联, 默认值为false：true->不关联，此时必须要设定checkedKeys，否则会报错,false->关联
        defaultCheckedKeys: ['0-0-1-1'], // 默认选中选框，只有在不舍得checedKeys时有用
        onCheck: function(checkedKeys, e) {
            console.log('onCheck:', checkedKeys);
        }
    },
    select: {
        defaultSelectedKeys: ['0-1'], // 默认选中节点，默认为[]
        // selectedKeys: [],// 受控选中节点，此配置项将屏蔽defaultSelectedKeys配置, 默认不配置
        multiple: true, // 支持点选多个节点（节点本身)，默认值为false
        onSelect: function(selectedKeys, e) {
            console.log('onSelect', e);
        }
    },
    search: {
        enable: true, // 树搜索功能，默认值为false
        onlyShowSearchResult: true // 仅展示搜索的结果, 默认为true
    },
    loadData: {
        enable: true, // 开启异步请求功能，默认为false，只有为true时以下几项配置才有效
        source: 'docs/php/tree-data.php', // 异步请求地址
        params: ['key', 'type'] // 异步请求所需要的各种参数，这些参数要在数据中包含
        // 请求回来的数据格式必须是
        // {
        //     status: 0/1, // 0成功，1失败(注意是number类型)
        //     data: ['key'], // 请求回来的子节点数据
        //     msg: '', // 请求结果文字表述
        // }
    },
    widthResize: {
        resizeAble: true, // 允许改变宽度
        minWidth: '200px',
        maxWidth: '500px'
    },
    data: treeData
};
const treeConfig2 = {
    type: 'tree',
    style: {
        // 必须为符合react语法的css样式
        width: '300px',
        padding: '10px',
        border: '1px dashed #eaeaea'
    },
    expand: {
        // 全部为可选项，可写可不写
        defaultExpandAll: false, // 默认展开所有树节点，默认值为false
        // defaultExpandedKeys: [], // 默认展开指定的树节点，默认值为[],数组不为空时屏蔽defaultExpandAll
        // expandLeavals:['leval1', 'leval2'], // 展开到哪一层，由data数据中的type字段决定，此配置会屏蔽defaultExpandAll，defaultExpandedKeys
        expandedKeys: ['0-0-1', '0-1'], // (受控）展开指定的树节点，默认值为[], 设定之后屏蔽defaultExpandAll，defaultExpandedKeys, expandToLeaval
        autoExpandParent: true, // 是否自动展开父节点，默认值为true,ture->如果某节点是展开的则其父节点自动展开，false->某节点展开的，但是其父节点是收缩的，只有将父节点展开才能看到某节点的展开情况
        onExpand: function(expandedKeys, e) {
            // console.log('onExpand:', expandedKeys);
        }
    },
    select: {
        defaultSelectedKeys: ['0-1'], // 默认选中节点，默认为[]
        // selectedKeys: [],// 受控选中节点，此配置项将屏蔽defaultSelectedKeys配置, 默认不配置
        onSelect: function(selectedKeys, e) {
            // console.log('onSelect', selectedKeys);
        }
    },
    showLine: true,
    data: treeData
};

const demo1 = {
    title: '具有搜索功能的树形图',
    description: '此示例具有多选，复选框，搜索等功能',
    config: treeConfig
};
const demo2 = {
    title: '带有连接线的树',
    description: '同级别树节点有连接线相连，并且展开关闭的图标会有所变化',
    config: treeConfig2
};
export default class TreeApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = 'tree.md';
        this.__init();
    }
    render() {
        return this.__getDemo(demo1, demo2);
    }

}
