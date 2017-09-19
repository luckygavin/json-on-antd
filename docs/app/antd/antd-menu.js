/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Demo from '../base/Demo.js';
import UF from 'uf/tools';

const demo1 = {
    title: '顶部导航',
    description: '水平的顶部导航菜单。',
    config: {
        type: 'menu',
        mode: 'horizontal',
        content: [
            {
                type: 'menu-item',
                key: 'mail',
                content: [
                    {type: 'icon', mode: 'mail'},
                    'Navigation One'
                ]
            },
            {
                type: 'menu-item',
                key: 'app',
                disabled: true,
                content: [
                    {type: 'icon', mode: 'appstore'},
                    'Navigation Two'
                ]
            },
            {
                type: 'sub-menu',
                key: 'sub',
                title: [
                    {type: 'icon', mode: 'setting'},
                    'Navigation Tree - Submenu'
                ],
                content: {
                    type: 'menu-item-group',
                    title: 'Item 1',
                    content: [
                        {
                            type: 'menu-item',
                            key: 'setting:1',
                            content: 'Option 1'
                        },
                        {
                            type: 'menu-item',
                            key: 'setting:2',
                            content: 'Option 2'
                        }
                    ]
                }
            },
            {
                type: 'menu-item',
                key: 'baidu',
                content: {
                    type: 'html',
                    content: '<a href="http://www.baidu.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>'
                }
            }
        ]
    }
};
const demo2 = {
    title: '内嵌菜单',
    description: '垂直菜单，子菜单内嵌在菜单区域。',
    config: {
        type: 'menu',
        mode: 'inline',
        style: {width: 240},
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1'],
        content: [
            {
                type: 'sub-menu',
                key: 'sub1',
                title: [
                    {type: 'icon', mode: 'setting'},
                    'Navigation One - Submenu'
                ],
                content: [
                    {
                        type: 'menu-item-group',
                        title: 'Item 1',
                        content: [
                            {
                                type: 'menu-item',
                                key: '1',
                                content: 'Option 1'
                            },
                            {
                                type: 'menu-item',
                                key: '2',
                                content: 'Option 2'
                            }
                        ]
                    },
                    {
                        type: 'menu-item-group',
                        title: 'Item 2',
                        content: [
                            {
                                type: 'menu-item',
                                key: '3',
                                content: 'Option 3'
                            },
                            {
                                type: 'menu-item',
                                key: '4',
                                content: 'Option 4'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'menu-item',
                key: 'mail',
                content: [
                    {type: 'icon', mode: 'mail'},
                    'Navigation Two'
                ]
            },
            {
                type: 'menu-item',
                key: 'app',
                disabled: true,
                content: [
                    {type: 'icon', mode: 'appstore'},
                    'Navigation Tree'
                ]
            }
        ]
    }
};
const demo3 = {
    title: '主题',
    description: '内建了两套主题 light|dark，默认 light。',
    config: [
        {
            type: 'switch',
            checked: true,
            checkedChildren: 'Dark',
            unCheckedChildren: 'Light',
            onChange: v=>UF('my-menu').set({
                theme: v ? 'dark' : 'light'
            })
        },
        {
            type: 'menu',
            name: 'my-menu',
            mode: 'inline',
            theme: 'dark',
            style: {width: 240, marginTop: 10},
            defaultSelectedKeys: ['1'],
            defaultOpenKeys: ['sub1'],
            content: [
                {
                    type: 'sub-menu',
                    key: 'sub1',
                    title: [
                        {type: 'icon', mode: 'setting'},
                        'Navigation One'
                    ],
                    content: [
                        {
                            type: 'menu-item',
                            key: '1',
                            content: 'Option 1'
                        },
                        {
                            type: 'menu-item',
                            key: '2',
                            content: 'Option 2'
                        },
                        {
                            type: 'menu-item',
                            key: '3',
                            content: 'Option 3'
                        },
                        {
                            type: 'menu-item',
                            key: '4',
                            content: 'Option 4'
                        }
                    ]
                },
                {
                    type: 'menu-item',
                    key: 'mail',
                    content: [
                        {type: 'icon', mode: 'mail'},
                        'Navigation Two'
                    ]
                },
                {
                    type: 'menu-item',
                    key: 'app',
                    disabled: true,
                    content: [
                        {type: 'icon', mode: 'appstore'},
                        'Navigation Tree'
                    ]
                }
            ]
        }
    ]
};

export default class Menu extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-menu.md';
        this.__init();
    }

    render() {
        return <Demo single={true} list={[demo1, demo2, demo3]}/>;
    }
}