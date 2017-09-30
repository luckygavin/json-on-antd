/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

import UF from 'uf/tools';


const Data = JSON.parse('{"endSheet":[{"id":"49","title":"test工单统计","type":"服务报障","relate_service":"9","content":"<p><strong>test工单统计</strong></p>","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-22 11:04:25","proposer":"","upvote":0,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"46","title":"等发达","type":"服务报障","relate_service":"9","content":"<p>d&#39;f&#39;d&#39;f</p>","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-20 16:29:46","proposer":"","upvote":1,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"36","title":"ddd","type":"服务报障","relate_service":"9","content":"","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-17 00:10:20","proposer":"","upvote":0,"ostatus":"2","handle_person":"liuzhibin02"},{"id":"31","title":"M1机房交换机故障网络抖动严重业务及时迁移和切走","type":"服务报障","relate_service":"14","content":"1、外网网络抖动，严重影响用户使用。请及时切走业务。2、外网网络抖动，严重影响用户使用。请及时切走业务。3、外网网络抖动，严重影响用户使用。请及时切走业务。4、外网网络抖动，严重影响用户使用。请及时切走业务。5、外网网络抖动，严重影响用户使用。请及时切走业务。6、外网网络抖动，严重影响用户使用。7、请及时切走业务。外网网络抖动，严重影响用户使用。8、请及时切走业务。","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-16 16:44:45","proposer":"","upvote":1,"ostatus":"2","handle_person":"lingjing"},{"id":"1","title":"test001","type":"服务报障","relate_service":"13","content":"ccc","creator":"liuzhibin02","status":"处理完成","priority":"普通","create_time":"2017-06-13 10:19:18","proposer":"","upvote":1,"ostatus":"2","handle_person":"lingjing"}],"processSheet":[{"id":"45","title":"ates","type":"服务报障","relate_service":"9","content":"<p>fdaf</p>","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-20 16:27:38","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"28","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-16 14:57:10","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"27","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-16 14:55:17","proposer":"","upvote":0,"ostatus":"1","handle_person":"liuzhibin02"},{"id":"26","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:54:59","proposer":"","upvote":0,"ostatus":"0","handle_person":"lingjing"},{"id":"25","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:50:47","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"24","title":"eeee","type":"服务咨询","relate_service":"9","content":"eeeeeeeee","creator":"liuzhibin02","status":"未处理","priority":"普通","create_time":"2017-06-16 14:49:25","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"23","title":"【BGW】TC机房网络故障","type":"服务报障","relate_service":"12","content":"网络设备异常。运营商电路切断。导致异常。请求紧急处理","creator":"liuzhibin02","status":"未处理","priority":"紧急","create_time":"2017-06-16 14:41:51","proposer":"","upvote":0,"ostatus":"0","handle_person":"[无]"},{"id":"15","title":"a","type":"服务报障","relate_service":"40","content":"a","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"2017-06-14 13:35:22","proposer":"","upvote":0,"ostatus":"1","handle_person":"[无]"},{"id":"2","title":"test001","type":"服务咨询","relate_service":"13","content":"cccfff","creator":"liuzhibin02","status":"进行中","priority":"普通","create_time":"0000-00-00 00:00:00","proposer":"","upvote":1,"ostatus":"1","handle_person":"zhanghenghua"}]}');

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
                            content: [
                                {
                                    type: 'sub-menu',
                                    key: 'worksheet',
                                    title: '工单',
                                    content: [
                                        {
                                            type: 'menu-item',
                                            key: 'create',
                                            content: '创建工单'
                                        },
                                        {
                                            type: 'menu-item',
                                            key: 'mine',
                                            content: '我的工单'
                                        }
                                    ]
                                },
                                {
                                    type: 'sub-menu',
                                    key: 'setting',
                                    title: '系统管理',
                                    content: [
                                        {
                                            type: 'menu-item',
                                            key: 'home',
                                            content: '首页配置'
                                        },
                                        {
                                            type: 'menu-item',
                                            key: 'service',
                                            content: '服务目录配置'
                                        },
                                        {
                                            type: 'menu-item',
                                            key: 'help',
                                            content: '帮助中心配置'
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
                                    content: [
                                        {
                                            type: 'menu-item',
                                            content: [
                                                {type: 'icon', mode: 'schedule'},
                                                '工单'
                                            ]
                                        },
                                        {
                                            type: 'menu-item',
                                            content: [
                                                {type: 'icon', mode: 'trophy'},
                                                '控制台'
                                            ]
                                        },
                                        {
                                            type: 'menu-item',
                                            content: [
                                                {type: 'icon', mode: 'contacts'},
                                                'lingjing'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'breadcrumb',
                            style: {margin: '12px 24px', background: '#ececec'},
                            options: [
                                'Home',
                                '我的工单'
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
                                        value: 'pendding',
                                        size: 'large',
                                        options: [
                                            {label: '待处理工单', value: 'pendding'},
                                            {label: '已完成工单', value: 'finished'}
                                        ],
                                        onChange: e=>{
                                            var status = e.target.value;
                                            UF('my-loading').set({loading: true});
                                            UF('my-table').set({title: status === 'pendding' ? '待处理工单' : '已完成工单'});
                                            setTimeout(function() {
                                                UF('my-loading').set({loading: false});
                                                UF('my-table').set({
                                                    data: status === 'pendding' ? Data.processSheet : Data.endSheet
                                                });
                                            }, 1500);
                                        }
                                    }
                                },
                                {
                                    type: 'loading',
                                    name: 'my-loading',
                                    content: {
                                        type: 'table2',
                                        title: '待处理工单',
                                        name: 'my-table',
                                        tags: {
                                            id: '工单编号',
                                            title: '标题',
                                            type: '类型',
                                            creator: '创建人',
                                            proposer: '提出人',
                                            create_time: '提交时间',
                                            status: '状态',
                                            handle_person: '接手人'
                                        },
                                        pager: {
                                            pageSize: 8,
                                            showQuickJumper: true,
                                            showCount: true
                                        },
                                        cfg: {checkBox: false},
                                        display: {
                                            basic: ['filter', 'refresh', 'setPageSize'],
                                            showText: false
                                        },
                                        data: Data.processSheet
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
        type: 'div',
        style: {minHeight: 250},
        content: {
            type: 'iframe',
            src: 'docs/demo/router.php#/card'
        }
    }
};

export default class Info extends BaseDoc {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo2, demo1);
    }
}