/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Demo from '../base/Demo.js';

const demo1 = {
    title: '基本结构',
    description: '典型的页面布局。',
    config: [
        {
            type: 'layout',
            content: [
                {
                    type: 'header',
                    style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                    content: 'Header'
                },
                {
                    type: 'content',
                    style: {background: '#108ee9', color: '#fff', textAlign: 'center', minHeight: '120px', lineHeight: '120px'},
                    content: 'Content'
                },
                {
                    type: 'footer',
                    style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                    content: 'Footer'
                }
            ]
        },
        {
            type: 'layout',
            style: {marginTop: 30},
            content: [
                {
                    type: 'header',
                    style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                    content: 'Header'
                },
                {
                    type: 'content',
                    content: {
                        type: 'layout',
                        content: [
                            {
                                type: 'sider',
                                style: {background: '#3ba0e9', color: '#fff', textAlign: 'center', lineHeight: '120px'},
                                content: 'Sider'
                            },
                            {
                                type: 'content',
                                style: {background: '#108ee9', color: '#fff', textAlign: 'center', minHeight: '120px', lineHeight: '120px'},
                                content: 'Content'
                            }
                        ]
                    }
                },
                {
                    type: 'footer',
                    style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                    content: 'Footer'
                }
            ]
        },
        {
            type: 'layout',
            style: {marginTop: 30},
            content: [
                {
                    type: 'header',
                    style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                    content: 'Header'
                },
                {
                    type: 'content',
                    content: {
                        type: 'layout',
                        content: [
                            {
                                type: 'content',
                                style: {background: '#108ee9', color: '#fff', textAlign: 'center', minHeight: '120px', lineHeight: '120px'},
                                content: 'Content'
                            },
                            {
                                type: 'sider',
                                style: {background: '#3ba0e9', color: '#fff', textAlign: 'center', lineHeight: '120px'},
                                content: 'Sider'
                            }
                        ]
                    }
                },
                {
                    type: 'footer',
                    style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                    content: 'Footer'
                }
            ]
        },
        {
            type: 'layout',
            style: {marginTop: 30},
            content: [
                {
                    type: 'sider',
                    style: {background: '#3ba0e9', color: '#fff', textAlign: 'center', lineHeight: '120px'},
                    content: 'Sider'
                },
                {
                    type: 'content',
                    content: {
                        type: 'layout',
                        content: [
                            {
                                type: 'header',
                                style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                                content: 'Header'
                            },
                            {
                                type: 'content',
                                style: {background: '#108ee9', color: '#fff', textAlign: 'center', minHeight: '120px', lineHeight: '120px'},
                                content: 'Content'
                            },
                            {
                                type: 'footer',
                                style: {background: '#7dbcea', color: '#fff', textAlign: 'center'},
                                content: 'Footer'
                            }
                        ]
                    }
                }                
            ]
        }
    ]
};

const demo2 = {
    title: '上中下布局',
    description: '最基本的『上-中-下』布局。一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。',
    config: {
        type: 'layout',
        content: [
            {
                type: 'header',
                content: [
                    {type: 'div', className: 'logo'},
                    {
                        type: 'menu',
                        theme: 'dark',
                        mode: 'horizontal',
                        defaultSelectedKeys: ['2'],
                        style: {lineHeight: '64px'},
                        content: [
                            {
                                type: 'menu-item',
                                key: '1',
                                content: 'nav 1'
                            },
                            {
                                type: 'menu-item',
                                key: '2',
                                content: 'nav 2'
                            },
                            {
                                type: 'menu-item',
                                key: '3',
                                content: 'nav 3'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'content',
                style: {padding: '0 50px'},
                content: [
                    {
                        type: 'breadcrumb',
                        style: {margin: '12px 0'},
                        content: [
                            {type: 'breadcrumb-item', content: 'Home'},
                            {type: 'breadcrumb-item', content: 'List'},
                            {type: 'breadcrumb-item', content: 'App'}
                        ]
                    },
                    {
                        type: 'div',
                        style: {background: '#fff', padding: 24, minHeight: 280},
                        content: 'Content'
                    }
                ]
            },
            {
                type: 'footer',
                style: {textAlign: 'center'},
                content: 'Uf ©2017 Created by Liuzechun'
            }
        ]
    }
}

const demo3 = {
    title: '顶部-侧边布局-通栏',
    description: '同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。',
    config: {
        type: 'layout',
        content: [
            {
                type: 'header',
                content: [
                    {type: 'div', className: 'logo'},
                    {
                        type: 'menu',
                        theme: 'dark',
                        mode: 'horizontal',
                        defaultSelectedKeys: ['2'],
                        style: {lineHeight: '64px'},
                        content: [
                            {
                                type: 'menu-item',
                                key: '1',
                                content: 'nav 1'
                            },
                            {
                                type: 'menu-item',
                                key: '2',
                                content: 'nav 2'
                            },
                            {
                                type: 'menu-item',
                                key: '3',
                                content: 'nav 3'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'layout',
                content: [
                    {
                        type: 'sider',
                        width: 200,
                        style: {background: '#fff'},
                        content: {
                            type: 'menu',
                            mode: 'inline',
                            selectedKeys: ['1'],
                            defaultOpenKeys: ['sub1'],
                            style: {height: '100%', borderRight: 0},
                            content: [
                                {
                                    type: 'sub-menu',
                                    key: 'sub1',
                                    title: [
                                        {type: 'icon', mode: 'user'},
                                        'subnav 1'
                                    ],
                                    content: [
                                        {type: 'menu-item', key: '1', content: 'option 1'},
                                        {type: 'menu-item', key: '2', content: 'option 2'},
                                        {type: 'menu-item', key: '3', content: 'option 3'}
                                    ]
                                },
                                {
                                    type: 'sub-menu',
                                    key: 'sub2',
                                    title: [
                                        {type: 'icon', mode: 'laptop'},
                                        'subnav 2'
                                    ],
                                    content: [
                                        {type: 'menu-item', key: '4', content: 'option 4'},
                                        {type: 'menu-item', key: '5', content: 'option 5'},
                                        {type: 'menu-item', key: '6', content: 'option 6'}
                                    ]
                                },
                                {
                                    type: 'sub-menu',
                                    key: 'sub3',
                                    title: [
                                        {type: 'icon', mode: 'notification'},
                                        'subnav 3'
                                    ],
                                    content: [
                                        {type: 'menu-item', key: '7', content: 'option 7'},
                                        {type: 'menu-item', key: '8', content: 'option 8'},
                                        {type: 'menu-item', key: '9', content: 'option 9'}
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        type: 'content',
                        style: {padding: '0 24px 24px'},
                        content: [
                            {
                                type: 'breadcrumb',
                                style: {margin: '12px 0'},
                                content: [
                                    {type: 'breadcrumb-item', content: 'Home'},
                                    {type: 'breadcrumb-item', content: 'List'},
                                    {type: 'breadcrumb-item', content: 'App'}
                                ]
                            },
                            {
                                type: 'div',
                                style: {background: '#fff', padding: 24, minHeight: 280},
                                content: 'Content'
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const demo4 = {
    title: '顶部-侧边布局',
    description: '拥有顶部导航及侧边栏的页面，多用于展示类网站。',
    config: {
        type: 'layout',
        content: [
            {
                type: 'header',
                content: [
                    {type: 'div', className: 'logo'},
                    {
                        type: 'menu',
                        theme: 'dark',
                        mode: 'horizontal',
                        defaultSelectedKeys: ['2'],
                        style: {lineHeight: '64px'},
                        content: [
                            {
                                type: 'menu-item',
                                key: '1',
                                content: 'nav 1'
                            },
                            {
                                type: 'menu-item',
                                key: '2',
                                content: 'nav 2'
                            },
                            {
                                type: 'menu-item',
                                key: '3',
                                content: 'nav 3'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'content',
                style: {padding: '0 50px'},
                content: [
                    {
                        type: 'breadcrumb',
                        style: {margin: '12px 0'},
                        content: [
                            {type: 'breadcrumb-item', content: 'Home'},
                            {type: 'breadcrumb-item', content: 'List'},
                            {type: 'breadcrumb-item', content: 'App'}
                        ]
                    },
                    {
                        type: 'layout',
                        content: [
                            {
                                type: 'sider',
                                width: 200,
                                style: {background: '#fff'},
                                content: {
                                    type: 'menu',
                                    mode: 'inline',
                                    selectedKeys: ['1'],
                                    defaultOpenKeys: ['sub1'],
                                    style: {height: '100%', borderRight: 0},
                                    content: [
                                        {
                                            type: 'sub-menu',
                                            key: 'sub1',
                                            title: [
                                                {type: 'icon', mode: 'user'},
                                                'subnav 1'
                                            ],
                                            content: [
                                                {type: 'menu-item', key: '1', content: 'option 1'},
                                                {type: 'menu-item', key: '2', content: 'option 2'},
                                                {type: 'menu-item', key: '3', content: 'option 3'}
                                            ]
                                        },
                                        {
                                            type: 'sub-menu',
                                            key: 'sub2',
                                            title: [
                                                {type: 'icon', mode: 'laptop'},
                                                'subnav 2'
                                            ],
                                            content: [
                                                {type: 'menu-item', key: '4', content: 'option 4'},
                                                {type: 'menu-item', key: '5', content: 'option 5'},
                                                {type: 'menu-item', key: '6', content: 'option 6'}
                                            ]
                                        },
                                        {
                                            type: 'sub-menu',
                                            key: 'sub3',
                                            title: [
                                                {type: 'icon', mode: 'notification'},
                                                'subnav 3'
                                            ],
                                            content: [
                                                {type: 'menu-item', key: '7', content: 'option 7'},
                                                {type: 'menu-item', key: '8', content: 'option 8'},
                                                {type: 'menu-item', key: '9', content: 'option 9'}
                                            ]
                                        }
                                    ]
                                }
                            },
                            {
                                type: 'content',
                                style: {padding: '0 24px 24px'},
                                content: [
                                    {
                                        type: 'div',
                                        style: {background: '#fff', padding: 24, minHeight: 280},
                                        content: 'Content'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

export default class LayoutApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-layout.md';
        this.__init();
    }

    render() {
        return <Demo single={true} list={[demo1, demo2, demo3, demo4]}/>;
    }
}
