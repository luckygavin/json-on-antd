/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

const demo1 = {
    title: '后端获取数据',
    description: '采用后端获取数据及分页等',
    config: [
        {
            type: 'table',
            name: 'newtable2',
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    width: 40,
                },
                {title: '机房', dataIndex: 'name', key: 'name', width: 60, filter: {type: 'input'}},
                {title: '名称（实时翻译）', dataIndex: 'idcId', width: 120, enum: {
                    url: 'docs/php/data.php',
                    realtime: {
                        key: 'idcIds',
                        comma: false
                    }
                }},
                {
                    title: '地区',
                    dataIndex: 'region',
                    key: 'region',
                    width: 60,
                    cellRowSpan: (v, row) => {
                        if (v === '华北') {
                            return row.id === 1 ? 4 : 0;
                        } else {
                            return 1;
                        }
                    },
                    filter: {
                        type: 'radio',
                        options: ['华北', '华南', '华东']
                    }
                },
                {title: '数组', dataIndex: 'arr', render(v) {
                    return {
                        type: 'span',
                        content: v,
                        colSpan: 2
                    }
                }},
                {title: '描述', dataIndex: 'description', render(v) {
                    return {
                        type: 'span',
                        content: v,
                        colSpan: 2
                    };
                }}
            ],
            title: {
                // text: 'Table后端分页表格',
                basicWidget: ['filter', 'setPageSize',
                    {
                        name: 'selctAll',
                        icon: 'like-o',
                        text: '自定义全选',
                        onClick: function(table) {
                            return table.selectAll();
                        }
                    }, 'export', 'switchTags'],
                menuWidget: ['refresh', 'fullScreen', 'setPageSize'],
                extra: [{
                    type: 'button',
                    mode: 'primary',
                    icon: 'sync',
                    content: '刷新',
                    control: 'newtable2.refresh'
                }]
            },
            source: {
                url: 'docs/php/data.php',
                method: 'get',
                paramsHandler(params) {
                    // 增加 index 参数
                    // params.index = params.page - 1;
                    return params;
                },
                handler(data) {
                    return data.map(v=>{
                        v.idcId = v.id;
                        v.arr = [1,2,3];
                        // v.arr = {a: 1, b: 2, c: 3};
                        return v;
                    });
                },
                onError() {
                    return false;
                }
            },
            params: {},
            rowKey: 'id',
            pagination: {
                pageType: 'server',
                pageSize: 5
                // paramIndex: {
                //     page: 'pageNum',
                //     size: 'pageSize'
                // }
            },
            bordered: true,
            // rowSelection: {
            //     // 指定满足某些条件时复选框不可选
            //     // disabledRow: function (record) {
            //     //     return true;
            //     // }
            // },
            rowTooltips: v => v.description,
            expanded: {
                expandedRowRender: v => v.description
            }
        }
    ]
};

const dataSource = [
    {key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号', sex: '男', json: {a: 1, b: 2}, html: '<i>表格</i>', duration: '2017-05-21 00:00:00', customRender: '1'},
    {key: '2',name: '胡彦祖',age: 42,address: '西湖区湖底公园2号',sex: 'femal', json: [{a: 1, b: 2}, {a: 3, b: 4}], html: '<i>表格</i>', duration: '2017-05-21 00:00:00', customRender: '2'},
    {key: '3', name: '胡彦祖彦斌', age: 52, address: '东湖区湖底公园3号东湖区湖底公园3号东湖区湖底公园3号', sex: '女', json: {a: '哈哈', b: 2}, html: '<i>表格</i>', duration: '2017-05-21 00:00:00', customRender: '3'},
    {key: '4', name: '胡彦祖彦斌', age: 62, address: '东湖区湖底公园3号东湖区湖底公园3号东湖区湖底公园3号', sex: '女', json: {a: '哈哈', b: 2}, html: '<i>表格</i>', duration: '2017-05-21 00:00:00', customRender: '4'}
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        filter: {
            type: 'checkbox',
            options: ['斌', '祖', '西']
        }
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        filter: {
            type: 'checkbox'
        },
        display: false
    },
    {title: '年龄', dataIndex: 'age', key: 'age'},
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
        filter: {
            type: 'input'
        },
        ellipsis: true
    },
    {title: 'JSON字段', dataIndex: 'json', key: 'json', textType: 'json'},
    {title: 'html字段', dataIndex: 'html', key: 'html', textType: 'html'},
    {
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
    },
    {
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
    }
];

const demo2 = {
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
            type: 'button',
            content: '获取Table当前数据',
            onClick: () => {
                console.log(UF('newtable2').getValues());
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
                basicWidget: [
                    {
                        name: 'filter',
                        blacklist: ['json']
                    },
                    'setPageSize',
                    'export',
                    'switchTags',
                    'refresh',
                    'fullScreen',
                    'showAllTags'
                ],
                menuWidget: ['export', 'switchTags', 'refresh', 'fullScreen', 'showAllTags', 'setPageSize'],
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
        }
    ]

};

// 下拉框数据字典
const selectData = {
    "1" : "男",
    "2" : "女"
}

const columns3 = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        editable: {
            api: 'docs/php/submit.php',
            type: "input",
            name: "name",
            rules: {
                equired: true,
                message: "必填项"
            },
            icon: {
                editIcon: {
                    mode: "tool",
                    style: {
                        color: "red"
                    }
                }
            }
        },
    }, {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        editable: {
            api: {
                url: 'docs/php/submit.php',
                method: 'get'
            },
            type: "select",
            name: "sex",
            rules: {
                equired: true,
                message: "必选项"
            },
            options: [
                {
                    label: "男",
                    value: '1',
                },
                {
                    label: "女",
                    value: '2',
                }
            ]
        },
        render: (text, record, index) => {
            return {
                type: "p",
                content: selectData[text]
            }
        }
    },{
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        editable: {
            api: 'docs/php/submit.php',
            type: "inputNumber",
            name: "age",
            rules: {
                equired: true,
                type: "number",
                message: "必须为数字",
            }
        }
    }, {
        title: '同意协议',
        dataIndex: 'agreement',
        key: 'agreement',
        editable: {
            api: 'docs/php/submit.php',
            type: "switch",
            name: "agreement",
        },
        render: (text, record, index) => {
            let showText = !!text
                ? '是'
                : '否';
            return {
                type: "p",
                content: showText
            }
        }
    }, {
        title: '身份数据',
        dataIndex: 'data',
        key: 'data',
        textType: 'json',
        editable: {
            api: 'docs/php/submit.php',
            type: "textarea",
            name: "data",
            rules: {
                equired: true,
                message: "必填项"
            },
        },
    }
];

const editDataSource = [
    {key: '1', name: '胡彦斌', age: 30, sex: '1', agreement: true, data: [{id: 111111, company: "baidu"}]},
    {key: '2', name: '胡彦祖', age: 42, sex: '2', agreement: false, data: [{id: 222222, company: "baidu"}]},
    {key: '3', name: '胡彦祖彦斌', age: 52, sex: '2', agreement: true, data: [{id: 33333}, {company: "baidu"}]},
    {key: '4', name: '胡彦祖彦斌', age: 62,sex: '1', agreement: false, data: [{id: 444444, company: "baidu"}]}
];

const demo3 = {
    title: '创建一个可行内编辑的表格',
    description: '可行内编辑的表格.',
    config: [
        {
            type: 'table',
            name: 'newtable3',
            rowKey: 'key',
            columns: columns3,
            rowSelection: {
                type: 'checkbox',
                selections: true,
            },
            title: {
                text: '可行内编辑的表格',
            },
            bordered: true,
            data: editDataSource
        }
    ]

};
export default class TableApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1, demo2, demo3);
    }
}
