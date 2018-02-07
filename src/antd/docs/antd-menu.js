/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src/tools';

const demo1 = {
    title: '顶部导航',
    description: '水平的顶部导航菜单。',
    config: {
        type: 'menu',
        mode: 'horizontal',
        items: [
            {
                key: 'mail',
                icon: 'mail',
                title: 'Navigation One'
            },
            {
                key: 'app',
                icon: 'appstore',
                title: 'app'
            },
            {
                key: 'setting',
                icon: 'setting',
                title: 'Navigation Tree - Submenu',
                childItems: [
                    {
                        mode: 'group',
                        title: 'Item 1',
                        childItems: [
                            {
                                key: 'setting:1',
                                title: 'Option 1'
                            },
                            {
                                key: 'setting:2',
                                title: 'Option 2'
                            }
                        ]
                    }
                ]
            },
            {
                key: 'baidu',
                title: {
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
        items: [
            {
                key: 'sub1',
                title: 'Navigation One - Submenu',
                icon: 'setting',
                childItems: [
                    {
                        mode: 'group',
                        title: 'Item 1',
                        childItems: [
                            {
                                key: '1',
                                title: 'Option 1'
                            },
                            {
                                key: '2',
                                title: 'Option 2'
                            }
                        ]
                    },
                    {
                        mode: 'group',
                        title: 'Item 2',
                        childItems: [
                            {
                                key: '3',
                                title: 'Option 3'
                            },
                            {
                                key: '4',
                                title: 'Option 4'
                            }
                        ]
                    }
                ]
            },
            {
                key: 'mail',
                icon: 'mail',
                title: 'Navigation Two'
            },
            {
                key: 'app',
                icon: 'appstore',
                title: 'Navigation Tree'
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
            items: [
                {
                    key: 'sub1',
                    icon: 'setting',
                    title: 'Navigation One',
                    childItems: [
                        {
                            key: '1',
                            title: 'Option 1'
                        },
                        {
                            key: '2',
                            title: 'Option 2'
                        },
                        {
                            key: '3',
                            title: 'Option 3'
                        },
                        {
                            key: '4',
                            title: 'Option 4'
                        }
                    ]
                },
                {
                    key: 'mail',
                    icon: 'mail',
                    title: 'Navigation Two'
                },
                {
                    key: 'app',
                    disabled: true,
                    icon: 'appstore',
                    title: 'Navigation Tree'
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
        return this.__getDemoSingle(demo1, demo2, demo3);
    }
}