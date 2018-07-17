/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

import UF from 'src';


const demo1 = {
    title: '网络服务台 - 我的工单页面',
    config: {
        type: 'div',
        style: {padding: '20px', background: '#f7f7f7'},
        content: {
            type: 'layout',
            content: [
                {
                    type: 'sider',
                    name: 'my-sider',
                    style: {background: '#333744'},
                    content: [
                        {
                            type: 'div',
                            style: {padding: 12},
                            content: [
                                {
                                    type: 'icon',
                                    mode: 'customer-service',
                                    style: {color: '#fff', fontSize: '22px'}
                                }
                            ]
                        },
                        {
                            type: 'menu',
                            mode: 'inline',
                            theme: 'dark',
                            defaultOpenKeys: ['worksheet', 'setting'],
                            selectedKeys: ['mine'],
                            items: [
                                {
                                    key: 'worksheet',
                                    title: '工单',
                                    childItems: [
                                        {
                                            key: 'create',
                                            title: '创建工单'
                                        },
                                        {
                                            key: 'mine',
                                            title: '我的工单'
                                        }
                                    ]
                                },
                                {
                                    key: 'setting',
                                    title: '系统管理',
                                    childItems: [
                                        {
                                            key: 'home',
                                            title: '首页配置'
                                        },
                                        {
                                            key: 'service',
                                            title: '服务目录配置'
                                        },
                                        {
                                            key: 'help',
                                            title: '帮助中心配置'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'layout',
                    content: [
                        {
                            type: 'header',
                            style: { background: '#fff', padding: 0,height: '48px', lineHeight: '48px'},
                            content: [
                                {
                                    type: 'icon',
                                    mode: 'menu-fold',
                                    style: {fontSize: '18px', lineHeight: '48px', marginLeft: '10px'},
                                    onClick: v=>UF('my-sider').set({
                                        collapsed: !UF('my-sider').get('collapsed')
                                    })
                                },
                                {
                                    type: 'menu',
                                    style: {float: 'right'},
                                    mode: 'horizontal',
                                    items: [
                                        {
                                            icon: 'schedule',
                                            title: '工单'
                                        },
                                        {
                                            icon: 'trophy',
                                            title: '控制台'
                                        },
                                        {
                                            icon: 'contacts',
                                            title: 'lingjing'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'breadcrumb',
                            items: [
                                {path: 'index', breadcrumbName: 'Home'},
                                {path: 'worksheet', breadcrumbName: '我的工单'}
                            ]
                        },
                        {
                            type: 'content',
                            style: {padding: '20px', background: '#fff'},
                            content: [
                                {
                                    type: 'div',
                                    style: {marginBottom: '10px'},
                                    content: {
                                        type: 'radio',
                                        name: 'my-radio-button',
                                        showAsButton: true,
                                        value: 'finished',
                                        size: 'large',
                                        options: [
                                            {label: '待处理工单', value: 'pendding'},
                                            {label: '已完成工单', value: 'finished'}
                                        ],
                                        onChange: e=>{
                                            var status = e.target.value;
                                            UF('my-table').set({
                                                title: {
                                                    text: status === 'pendding' ? '待处理工单' : '已完成工单'
                                                },
                                                params: {
                                                    type: status
                                                }
                                            });
                                        }
                                    }
                                },
                                {
                                    type: 'table',
                                    title: '待处理工单',
                                    name: 'my-table',
                                    // size: 'small',
                                    source: 'docs/php/data.php',
                                    params: {
                                        type: 'finished'
                                    },
                                    columns: [
                                        {title: '工单编号', dataIndex: 'id'},
                                        {title: '标题', dataIndex: 'title'},
                                        {title: '类型', dataIndex: 'type'},
                                        {title: '创建人', dataIndex: 'creator'},
                                        {title: '提出人', dataIndex: 'proposer'},
                                        {title: '提交时间', dataIndex: 'create_time'},
                                        {title: '状态', dataIndex: 'status'},
                                        {title: '接手人', dataIndex: 'handle_person'},
                                    ],
                                    pagination: {
                                        pageSize: 6,
                                        showQuickJumper: true,
                                        showCount: true
                                    },
                                    title: {
                                        text: '待处理工单',
                                        basicControls: ['filter', 'refresh', 'setPageSize'],
                                        showText: false
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};

const demo2 = {
    title: '带路由的页面',
    config: {
        type: 'iframe',
        src: 'docs/demo/router.php#/card',
    }
};

export default class Page extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'configure-page.md';
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}