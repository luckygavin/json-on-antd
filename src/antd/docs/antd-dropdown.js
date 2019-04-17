/**
 * @file 下拉菜单
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const menu = {
    type: 'menu',
    items: [
        {
            key: 1,
            title: 'this is the 1st menu item',
            onClick() {
                console.log('onclick test');
            }
        },
        {
            key: 2,
            link: 'http://www.map.baidu.com/',
            title: 'this is the 2nd menu item'
        },
        {
            key: 3,
            link: 'http://ww.taobao.com/',
            title: 'this is the 3rd menu item'
        }
    ]
};
const demo1 = {
    title: '基本用法',
    description: '最简单的下拉菜单，通过trigger属性配置如何触发，关于更多的Menu样式可参考Menu组件',
    config: {
        type: 'dropdown',
        overlay: menu,
        trigger: ['click'],
        content: {
            type: 'a',
            // href: '#',
            content: ['Click me', {
                type: 'icon',
                mode: 'down'
            }]
        },
        onVisibleChange: function(flag) {
            console.log('visible:', flag);
        }
    }
};
const demo2 = {
    title: '弹出位置',
    description: '支持6个弹出位置',
    config: [
        {
            type: 'dropdown',
            overlay: menu,
            placement: 'bottomLeft',
            content: {
                type: 'button',
                content: 'bottomLeft',
                style: {
                    margin: '0px 15px 15px 0px'
                },
            }
        },
        {
            type: 'dropdown',
            overlay: menu,
            placement: 'bottomCenter',
            content: {
                type: 'button',
                content: 'bottomCenter',
                style: {
                    margin: '0px 15px 15px 0px'
                },
            }
        },
        {
            type: 'dropdown',
            overlay: menu,
            placement: 'bottomRight',
            content: {
                type: 'button',
                content: 'bottomRight',
                style: {
                    margin: '0px 15px 15px 0px'
                },
            }
        },
        {
            type: 'dropdown',
            overlay: menu,
            placement: 'topLeft',
            content: {
                type: 'button',
                content: 'topLeft',
                style: {
                    margin: '0px 15px 15px 0px'
                },
            }
        },
        {
            type: 'dropdown',
            overlay: menu,
            placement: 'topCenter',
            content: {
                type: 'button',
                content: 'topCenter',
                style: {
                    margin: '0px 15px 15px 0px'
                },
            }
        },
        {
            type: 'dropdown',
            overlay: menu,
            placement: 'topRight',
            content: {
                type: 'button',
                content: 'topRight',
                style: {
                    margin: '0px 15px 15px 0px'
                },
            }
        }
    ]
};
const demo3 = {
    title: '带下拉框的按钮',
    description: '左边是按钮，右边是额外的相关功能菜单',
    config: {
        type: 'dropdown-button',
        overlay: menu,
        content: 'Dropdown-Button'
    }
};

export default class Dropdown extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-dropdown.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3);
    }
}