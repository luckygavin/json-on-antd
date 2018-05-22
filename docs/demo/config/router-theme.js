define(function(require) {
    var Tab1 = require('Tab1');
    var Tab2 = require('Tab2');
    var Tab3 = require('Tab3');
    var config = {
        type: 'div',
        style: {padding: '20px', background: '#f7f7f7'},
        content: {
            type: 'layout',
            content: [
                {
                    type: 'sider',
                    name: 'theme-sider',
                    className: 'test-menu-dark-sider',
                    content: [
                        {
                            type: 'div',
                            style: {
                                padding: 12
                            },
                            content: [
                                {
                                    type: 'icon',
                                    mode: 'customer-service',
                                    name: 'theme-icon',
                                    style: {color: '#fff', fontSize: '22px'}
                                }
                            ]
                        },
                        {
                            type: 'menu',
                            mode: 'inline',
                            theme: 'dark',
                            name: 'theme-menu',
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
                            style: { background: '#fff', height: '48px', lineHeight: '48px', padding: '0px 15px'},
                            content: [
                                {
                                    type: 'switch',
                                    checked: true,
                                    style: {
                                        marginLeft: '15px'
                                    },
                                    checkedChildren: 'Dark',
                                    unCheckedChildren: 'Light',
                                    onChange: function onChange(v) {
                                        // UF('theme-sider').set({
                                        //     style: v ? {background: '#333744'} : {background: '#fff'}
                                        // })
                                        // UF('theme-icon').set({
                                        //     style: v ? {color: '#fff', fontSize: '22px'} : {color: '#333744', fontSize: '22px'}
                                        // })
                                        return UF('theme-menu').set({
                                                theme: v ? 'dark' : 'light'
                                            });
                                        }
                                },
                                {
                                    type: 'avatar',
                                    // size: 'large',
                                    icon: 'user',
                                    style: {
                                        display: 'inline-block',
                                        margin: '5px',
                                        float: 'right'
                                    }
                                },
                                {
                                    type: 'avatar',
                                    // size: 'large',
                                    shape: 'square',
                                    icon: 'user',
                                    style: {
                                        display: 'inline-block',
                                        margin: '5px',
                                        float: 'right'
                                    }
                                },
                                {
                                    type: 'menu',
                                    style: {float: 'right'},
                                    mode: 'horizontal',
                                    selectedKeys: ['2'],
                                    items: [
                                        {
                                            key: '1',
                                            title: [
                                                {type: 'icon', mode: 'schedule'},
                                                '工单'
                                            ],
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
                                        },
                                        {
                                            key: '2',
                                            title: [
                                                {type: 'icon', mode: 'trophy'},
                                                '控制台'
                                            ]
                                        },
                                        {
                                            key: '3',
                                            title: [
                                                {type: 'icon', mode: 'contacts'},
                                                'lingjing'
                                            ]
                                        }
                                    ]
                                },
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
                            style: {padding: '20px', background: '#fff', minHeight: '500px'},
                            content: {
                                type: 'tabs',
                                mode: 'card',
                                activeKey: '1',
                                content: [
                                    {
                                        type: 'tab-pane',
                                        key: '1',
                                        tab: 'Tab 1',
                                        content: Tab1
                                    },
                                    {
                                        type: 'tab-pane',
                                        key: '2',
                                        tab: 'Tab 2',
                                        content: Tab2
                                    },
                                    {
                                        type: 'tab-pane',
                                        key: '3',
                                        tab: 'Tab 3',
                                        content: Tab3
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    }
    return config;
});