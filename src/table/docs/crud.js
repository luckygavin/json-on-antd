/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src/tools';
import md from './crud.md';

const columns1 = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
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
    },
    {
        title: '操作',
        dataIndex: '_operation',
        render() {
            return [
                {type: 'a', content: '编辑', action: 'edit'},
                {type: 'a', content: '删除', action: 'delete'}
            ];
        }
    },
];
const demo1 = {
    title: 'Crud 扩展功能展示',
    description: 'Table中提供了增删改查等功能的配置',
    config: [
        {
            type: 'table',
            name: 'newtable',
            columns: columns1,
            title: {
                text: null,
                basicWidget: [{name: 'filter', text: '快捷查询'}],
                extra: [
                    {type: 'button', mode: 'primary', content: '新增', action: 'add'},
                    {type: 'button', mode: 'primary', content: '查询', action: 'search'},
                    {type: 'button', mode: 'primary', content: '批量编辑', action: 'batchEdit'},
                    {type: 'button', mode: 'primary', content: '批量删除', action: 'batchDelete'}
                ]
            },
            source: 'docs/php/data.php',
            pagination: {
                pageType: 'server'
            },
            rowSelection: {
                selections: true
            },
            crud: {
                add: {
                    title: '新增机房:',
                    api: 'docs/php/submit.php',
                    method: 'post',
                    form: {
                        items: [
                            {type: 'input', label: '机房', name: 'name', rules: {required: true}},
                            {type: 'input', label: '地区', name: 'region', rules: {required: true}},
                            {type: 'textarea', label: '描述', name: 'description'}
                        ]
                    }
                },
                edit: {
                    title: '编辑机房信息:',
                    api: 'docs/php/submit.php',
                    forbidden: 'id'
                },
                search: {
                    title: '高级搜索:',
                    remove: 'description'
                },
                delete: {
                    title: '删除机房:',
                    api: 'docs/php/submit.php',
                    render: row=>{
                        return {
                            type: 'html',
                            content: '确定要<span class="remind">删除</span>『 <span class="wgt7">' + row.name + '</span> 』机房吗?'
                        };
                    }
                },
                batchEdit: {
                    // action 声明还是使用批量导入类型的功能，相当于另一种批量导入
                    title: '批量更新:',
                    width: 800,
                    api: '?r=batchUpdate',
                    method: 'post',
                    keys: 'id,name,region,description',
                    okText: '更新',
                    content: 'aaa'
                },
                batchDelete: {
                    title: '批量删除:',
                    api: '?r=batchDelete',
                    okText: '批量删除',
                    render: rows=>{
                        return {
                            type: 'div',
                            content: [
                                {type: 'html', content: '确定要<span class="remind">批量删除</span>以下选中机房吗？'},
                                {type: 'html', content: '<p style="margin: 5px 0">' + rows.map(v=>v.name).join(', ') + '</p>'}
                            ]
                        };
                    }
                }
            }
        }
    ]
}
export default class TableCrudApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}
