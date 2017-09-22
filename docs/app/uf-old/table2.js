/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import Table2 from 'uf/table';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '旧表格组件示例',
    description: '临时使用。',
    config: {
        type: 'table2',
        title: 'Table前端分页表格测试',
        name: 'testtable',
        tags: {
            id: 'ID',
            username: {
                title: '用户名',
                sort: true
            },
            passwd: {
                title: '密码',
                sort(row1, row2) {
                    if (row1['passwd'] < row2['passwd']) {
                        return 1;
                    } else if (row1['passwd'] > row2['passwd']) {
                        return -1;
                    } else {
                        return 0;
                    }
                },
                render: function render(v, row) {
                    let style = {
                        color: 'red'
                    };
                    return React.createElement(
                        'span',
                        {style: style},
                        v
                    );
                }
            },
            sex: {
                title: '性别'
            },
            like: {
                title: '爱好',
                ellipsis: true,
                style: {width: '100px', color: 'green'},
                className: 'test-class'
            },
            department: {
                title: '部门'
            },
            marry: {
                title: '是否结婚',
                display: false
            },
            html: {
                title: '展示html',
                type: 'html'
            },
            desc: {
                title: '描述',
                display: false,
                type: 'edit'
            },
            json: {
                type: 'JSON',
                title: 'JSON字段',
                display: true
            },
            _operation: {
                title: '自定义操作',
                render: ()=>{
                    return <div className="operation">
                        <a>编辑</a>
                        <a>删除</a>
                    </div>;
                }
            }
        },
        pager: {
            pageSize: 2,
            showQuickJumper: true,
            // size: '',
            // simple: true
            showCount: true
        },
        cfg: {
            checkBox: true,
            // rowCheck: false,
            expand: 'expand',
            tips: 'tips'
        },
        display: {
            basic: ['filter', 'refresh', 'export', 'fullScreen', 'showAllTags'],
            menus: ['refresh', 'export', 'fullScreen', 'switchTags', 'setPageSize'],
            retract: false, // retract 表格是否默认收起
            custom: {
                basic: [{
                    name: 'customButton',
                    icon: 'fa fa-book',
                    text: '自定义:全选',
                    onClick: table=>table.checkAll()
                }],
                menus: [{
                    name: 'customButton',
                    icon: 'fa fa-book',
                    text: '获取选中行',
                    onClick: table=>console.log(table.getSelectedData())
                }]
            }
        },
        data: [
            {
                id: 1,
                html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',
                sex: 'femal',
                like: '我可以自己控制样式',
                marry: '否',
                username: 'luyongfang',
                department: 'sys',
                passwd: 'xiaolu',
                expand: '<strong>任意的html片段</strong>',
                desc: 'ABC',
                json: [{"tool_id": "3"}]
            }, {
                id: 2,
                html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',
                sex: 'male',
                like: '也可以自定义class',
                marry: '是',
                department: 'sys',
                username: 'zhuyu02',
                passwd: 'zhuyu02',
                expand: '<strong>任意的html片段</strong>',
                desc: '幽默大师',
                tips: '说个笑话!',
                json: {a: 1, b: 2}
            }, {
                id: 3,
                html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',
                sex: 'male',
                marry: '是',
                like: 'pear',
                department: 'sys',
                username: 'zhuyu02',
                passwd: 'zhuyu02',
                expand: '<strong>任意的html片段</strong>',
                desc: '幽默大师',
                tips: '爱豪说为啥不是死鱼!',
                json: {a: 1, b: 2}
            }, {
                id: 4,
                html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',
                sex: 'male',
                marry: '是',
                department: 'sys',
                like: 'banana,pear',
                username: 'wangyang21',
                passwd: 'wangyang21',
                expand: '<strong>任意的html片段</strong>',
                desc: '自称咸鱼',
                tips: '不能选择！',
                json: {a: 1, b: 2},
                disabled: true
            }
        ]
    }
};

export default class TableApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'table2.md';
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}
