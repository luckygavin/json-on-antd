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
                text: 'Table Crud 功能展示',
                basicControls: [],
            },
            source: 'docs/php/data.php',
            pagination: {
                pageType: 'server'
            },
            crud: {
                add: {
                    title: '新增部件:',
                    width: 800,
                    api: 'docs/php/submit.php',
                    method: 'post',
                    autoReload: true,
                    form: {
                        layout: {
                            type: 'horizontal',
                            labelCol: 7,
                            wrapperCol: 14
                        },
                        items: [
                            {
                                type: 'select',
                                label: '机房',
                                name: 'name',
                                rules: [{required: true, message: '机房不能为空'}],
                                source: 'docs/php/data.php',
                                sourceHandler: data=>data.map(v=>{
                                    return {value: v.name, label: v.name};
                                })
                            },
                            {type: 'input', label: '地区', name: 'region', required: true},
                            {type: 'input', label: '描述', name: 'description', required: true}
                        ]
                    }
                },
                // 复用了 add 的配置
                edit: {
                    title: '编辑部件:',
                    forbidden: 'name'
                },
                delete: {
                    title: '删除部件:',
                    api: 'docs/php/submit.php',
                    autoReload: true
                },
                batchAdd: {
                    title: '批量导入:',
                    width: 800,
                    api: 'docs/php/submit.php',
                    method: 'post',
                    autoReload: true,
                    okText: '导入',
                    content: {
                        type: 'html',
                        content: '提示信息。。。'
                    }
                },
                batchEdit: {
                    title: '批量更新:',
                    api: 'docs/php/submit.php',
                    autoReload: true,
                    // 需编辑的数据的字段列表
                    keys: 'id,name,region,description',
                    okText: '更新',
                    content: {
                        type: 'html',
                        content: '提示信息。。。'
                    }
                },
                batchDelete: {
                    title: '批量删除:',
                    api: 'docs/php/submit.php',
                    autoReload: true,
                    okText: '批量报废'
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
