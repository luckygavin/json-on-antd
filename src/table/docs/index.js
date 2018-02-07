/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src/tools';
import md from './markdown.md';

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    sex: '男',
    json: {
        a: 1,
        b: 2
    },
    html: '<i>表格</i>',
    duration: '2017-05-21 00:00:00',
    customRender: '1'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园2号',
    sex: 'femal',
    json: [
        {
            a: 1,
            b: 2
        },
        {
            a: 3,
            b: 4
        }
    ],
    html: '<i>表格</i>',
    duration: '2017-05-21 00:00:00',
    customRender: '2'
}, {
    key: '3',
    name: '胡彦祖彦斌',
    age: 52,
    address: '东湖区湖底公园3号东湖区湖底公园3号东湖区湖底公园3号',
    sex: '女',
    json: {a: '哈哈', b: 2},
    html: '<i>表格</i>',
    duration: '2017-05-21 00:00:00',
    customRender: '3'
}, {
    key: '4',
    name: '胡彦祖彦斌',
    age: 62,
    address: '东湖区湖底公园3号东湖区湖底公园3号东湖区湖底公园3号',
    sex: '女',
    json: {a: '哈哈', b: 2},
    html: '<i>表格</i>',
    duration: '2017-05-21 00:00:00',
    customRender: '4'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    filterConfig: {
        filterType: 'checkbox',
        filters: ['斌', '祖']
    }
}, {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    filterConfig: {
        filterType: 'checkbox'
    },
    display: false
},{
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    filterConfig: {
        filterType: 'input'
    }
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    filterConfig: {
        filterType: 'input'
    },
    ellipsis: true
}, {
    title: 'JSON字段',
    dataIndex: 'json',
    key: 'json',
    textType: 'json'
}, {
    title: 'html字段',
    dataIndex: 'html',
    key: 'html',
    textType: 'html'
}, {
    title: '时间段',
    dataIndex: 'duration',
    key: 'duration',
    textType: 'duration',
    render: function (text, record, index) {
        return {
            type: 'span',
            style: {
                color: '#0aea0a'
            },
            content: text
        };
    }
}, {
    title: '自定义render',
    dataIndex: 'customRender',
    key: 'customRender',
    render: function (text, record, index) {
        return {
            type: 'span',
            style: {
                color: '#0aea0a'
            },
            content: text
        };
    }
}];

const demo1 = {
    title: '基本用法',
    description: '简单的表格，最后一列是各种操作。',
    config: [
        {
            type: 'button',
            content: '为table组件set数据',
            onClick: () => {
                UF('newtable1').set({
                    rowSelection: {
                        selectedRowKeys: ['4'],
                    },
                    data: [dataSource[3]]
                });
            }
        },
        {
            type: 'table',
            name: 'newtable1',
            rowKey: 'key',
            columns,
            rowSelection: {
                type: 'checkbox',
                selections: true,
                selectedRowKeys: ['3'],
                // 指定满足某些条件时复选框不可选
                disabledRow: function(record) {
                    return record.name === '胡彦祖' || record.age === 32
                }
            },
            // pagination: {
            //     // pageSize: 3
            //     showSizeChanger: true,
            //     pageSizeOptions: ['1', '2', '3', '4']
            // },
            // pagination: false,
            title: {
                text: 'Table前端分页表格测试',
                basicControls: [
                    {
                        name: 'filter',
                        blacklist: ['json']
                    },
                    'setPageSize',
                    {
                        name: 'selctAll',
                        icon: 'like-o',
                        text: '自定义全选',
                        onClick: function(table) {
                            return table.selectAll();
                        }

                    },
                    'export', 'switchTags', 'refresh', 'fullScreen', 'showAllTags'],
                menuControls: ['export', 'switchTags', 'refresh', 'fullScreen', {
                        name: 'selctAll2',
                        icon: 'like',
                        text: '自定义全选',
                        onClick: function(table) {
                            return table.selectAll();
                        }
                    }, 'showAllTags', 'setPageSize'],
                showText: false,
            },
            bordered: true,
            data: dataSource,
            // source: 'docs/php/download.php',
            // params: {
            //     "isExport": true,
            //     "container_id": 484,
            //     "zone": "china",
            //     "type": "server"
            // },
            // method: 'get'
        }
    ]

};
const columns2 = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        filterConfig: {
            filterType: 'checkbox'
        }
    },
    {
        title: '机房',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '地区',
        dataIndex: 'region',
        key: 'region'
    },
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description'
    }
];
const demo2 = {
    title: '后端获取数据',
    description: '采用后端获取数据及分页等',
    config: [
        {
            type: 'table',
            name: 'newtable',
            columns: columns2,
            title: {
                text: 'Table后端分页表格',
                basicControls: ['filter', 'setPageSize',
                    {
                        name: 'selctAll',
                        icon: 'like-o',
                        text: '自定义全选',
                        onClick: function(table) {
                            return table.selectAll();
                        }

                    },'export', 'switchTags', 'refresh', 'fullScreen', 'showAllTags'],
                menuControls: ['refresh', 'fullScreen', {
                        name: 'selctAll2',
                        icon: 'like',
                        text: '自定义全选',
                        onClick: function(table) {
                            return table.selectAll();
                        }
                    }, 'setPageSize']
            },
            source: 'docs/php/data.php',
            params: {
                "isExport": true,
                "container_id": 484,
                "zone": "china",
                "type": "server"
            },
            method: 'get',
            rowKey: 'id',
            pagination: {
                pageType: 'server'
            },
            rowSelection: {
                selections: true
            }
        }
    ]
}
export default class TableApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1, demo2);
    }
}
