/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from './crud.md';

const demo1 = {
    title: 'Crud 扩展功能展示',
    description: 'Table中提供了增删改查等功能的配置',
    config: [
        {
            type: 'table',
            name: 'newtable',
            columns: [
                {title: 'ID', dataIndex: 'id'},
                {title: '机房', dataIndex: 'name'},
                {
                    title: '名称',
                    dataIndex: 'idcId',
                    enum: {
                        url: 'http://uf.baidu.com/docs/php/data.php',
                        handler: function (data) {
                            return data.map(item=>(
                                {key: item.id, value: item.name}
                            ));
                        }
                    }
                },
                {title: '地区', dataIndex: 'region'},
                {title: '描述', dataIndex: 'description'},
                {
                    title: '操作',
                    dataIndex: '_operation',
                    width: 100,
                    render() {
                        return [
                            {type: 'a', content: '编辑', action: 'edit'},
                            {type: 'a', content: '删除', action: 'delete'},
                            {type: 'a', content: '详情', action: 'details'}
                        ];
                    }
                }
            ],
            title: {
                text: null,
                basicWidget: [{name: 'filter', text: '快捷查询'}],
                extra: [
                    {type: 'button', mode: 'primary', content: '新增', action: 'add'},
                    {type: 'button', mode: 'primary', content: '批量编辑', action: 'batchEdit'},
                    {type: 'button', mode: 'primary', content: '批量删除', action: 'batchDelete'},
                    {type: 'button', mode: 'primary', content: '批量查询', action: 'batchSearch', actived: true}
                ]
            },
            // source: 'docs/php/data.php',
            source: {
                url: 'docs/php/data.php',
                handler(data) {
                    return data.map(v=>{
                        v.idcId = v.id;
                        return v;
                    });
                }
            },
            pagination: {
                pageType: 'client'
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
                            {type: 'select', label: '名称', name: 'idcId', rules: {required: true}},
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
                details: {
                    title: '查看详情',
                    list: null,
                    posRank: 'content|render|form',
                    content: {
                        type: 'alert',
                        mode: 'info',
                        message: '默认复用Table组件的columns配置，可通过使用list属性或者render来自定义详情展示形式',
                        showIcon: true
                    }
                },
                search: {
                    position: 'beforeHeader',
                    type: 'form',
                    layout: {type: 'inline'},
                    size: 'default',
                    items: [
                        {type: 'input', label: '机房', name: 'name', style: {width: 90}},
                        {type: 'select', label: '名称', name: 'idcId', style: {width: 90}},
                        {type: 'input', label: '地区', name: 'region', style: {width: 90}},
                        {type: 'button', mode: 'primary', name: 'submit', action: 'submit', content: '查询'}
                    ]
                },
                batchSearch: {
                    position: 'afterHeader',
                    size: 'default',
                    title: [
                        {type: 'span', content: '批量查询', style: {display: 'inline-block', marginRight: 10, fontWeight: 700}},
                        {type: 'button', size: 'small', mode: 'default', content: '清空', action: 'reset'},
                        {type: 'button', size: 'small', mode: 'primary', content: '查询', action: 'submit'}
                    ],
                    content: {
                        type: 'div',
                        style: {padding: '7px 0'},
                        content: '请在下方的输入框中输入机房名称进行查询，每个记录请用英文逗号(,)或换行相隔。'
                    },
                    form: {
                        layout: {wrapperCol: 24},
                        items: [
                            {type: 'textarea', name: 'batchSearch', rows: 8}
                        ]
                    },
                    footer: null
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
                    api: {
                        url: 'docs/php/submit.php',
                        method: 'put',
                        contentType: 'application/json',
                        paramsHandler(params) {
                            return {data: JSON.stringify(params)};
                        }
                    },
                    method: 'post',
                    keys: 'name,idcId,region,description',
                    keysHandler: {
                        // 源数据转换成字符串展示到页面的批量编辑框时，对每个字段的处理逻辑
                        stringify: function (key, text, record) {
                            if (key === 'description') {
                                return '就是这么任性';
                            }
                            return text;
                        },
                        // 对用户输入的数据进行解析转换，将每个字段转换成提交给后端的数据
                        parse: function (key, text) {
                            if (key === 'description') {
                                return '这里可以格式化用户输入的内容';
                            }
                            return text;
                        },
                    },
                    okText: '更新',
                    content: '提示信息：xxx'
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
