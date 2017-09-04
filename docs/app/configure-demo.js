/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Uf from 'uf/tools';

const Config = {
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
                            onClick: v=>Uf.get('my-sider').setOption({
                                collapsed: !Uf.get('my-sider').getOption('collapsed')
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
                    content: [
                        {type: 'breadcrumb-item', content: 'Home'},
                        {type: 'breadcrumb-item', content: '我的工单'}
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
                                size: 'large',
                                options: [
                                    {label: '待处理工单', value: 'pendding'},
                                    {label: '已完成工单', value: 'finished'}
                                ]
                            }
                        },
                        {
                            type: 'table',
                            config: {title: 'Table前端分页表格测试',name: 'testtable',tags: {id: 'ID',username: {title: '用户名',sort: true,editCfg: {edit: true,elemType: 'text'}},passwd: {title: '密码',sort(row1, row2) {if (row1['passwd'] < row2['passwd']) {return 1;} else if (row1['passwd'] > row2['passwd']) {return -1;} else {return 0;}},render: function render(v, row) {let style = {color: 'red'};return React.createElement('span',{style: style},v);}},sex: {title: '性别',editCfg: {edit: true,elemType: 'radioGroup',options: [{label: '女', value: 'femal'},{label: '男', value: 'male'}]}},like: {title: '爱好',display: false,ellipsis: true,style: {width: '100px', color: 'green'},className: 'test-class',editCfg: {edit: true,elemType: 'checkbox',options: [{label: '苹果', value: 'apple'},{label: '香蕉', value: 'banana'},{label: '梨子', value: 'pear'}]}},department: {title: '部门',editCfg: {edit: true,elemType: 'select',options: {all: '请选择',sys: '系统部',ps: '大搜',cloud: '公有云'}}},marry: {title: '是否结婚',display: false,editCfg: {edit: true,elemType: 'radio'}},html: {title: '展示html',type: 'html', display: false},desc: {title: '描述',display: false,type: 'edit'},json: {type: 'JSON',display: false,title: 'JSON字段',display: false},_operation: {title: '自定义操作',render: ()=>{return <div className="operation"><a>编辑</a><a>删除</a></div>;}}},pager: {pageSize: 4,showQuickJumper: true},cfg: {checkBox: true,expand: 'expand',tips: 'tips'},display: {basic: ['filter', 'refresh', 'export', 'editTable', 'fullScreen', 'showAllTags'],menus: ['refresh', 'export', 'fullScreen', 'switchTags', 'setPageSize'],retract: false,custom: {basic: [{name: 'customButton',icon: 'fa fa-book',text: '自定义:全选',onClick: table=>table.checkAll()}],menus: [{name: 'customButton',icon: 'fa fa-book',text: '获取选中行',onClick: table=>console.log(table.getSelectedData())}]}}},
                            data: [{id: 1,html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',sex: 'femal',like: '我可以自己控制样式',marry: '否',username: 'luyongfang',department: 'sys',passwd: 'xiaolu',expand: '<strong>任意的html片段</strong>',desc: 'ABC',json: [{"tool_id": "3"}]}, {id: 2,html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',sex: 'male',like: '也可以自定义class',marry: '是',department: 'sys',username: 'zhuyu02',passwd: 'zhuyu02',expand: '<strong>任意的html片段</strong>',desc: '幽默大师',tips: '说个笑话!',json: {a: 1, b: 2}}, {id: 3,html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',sex: 'male',marry: '是',like: 'pear',department: 'sys',username: 'zhuyu02',passwd: 'zhuyu02',expand: '<strong>任意的html片段</strong>',desc: '幽默大师',tips: '爱豪说为啥不是死鱼!',json: {a: 1, b: 2}}, {id: 4,html: '<a href="http://www.baidu.com" target="_blank">百度<a/>',sex: 'male',marry: '是',department: 'sys',like: 'banana,pear',username: 'wangyang21',passwd: 'wangyang21',expand: '<strong>任意的html片段</strong>',desc: '自称咸鱼',tips: '不能选择！',json: {a: 1, b: 2},disabled: true}]

                        }
                    ]
                }
            ]
        }
    ]
}
};

export default class Info extends BaseDoc {
    constructor(props) {
        super(props);
        this.__init();
    }
    componentDidMount() {
        Uf.init(Config, 'configure-content');
    }
    render() {
        return <div id="configure-content"></div>;
    }
}