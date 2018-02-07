/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src/tools';

const demo1 = {
    title: '按钮类型',
    description: '按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: 'Primary'
        },
        {
            type: 'button',
            mode: 'default',
            content: 'Default'
        },
        {
            type: 'button',
            mode: 'dashed',
            content: 'Dashed'
        },
        {
            type: 'button',
            mode: 'danger',
            content: 'Danger'
        }
    ]
};
const demo2 = {
    title: '图标按钮',
    description: '当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。',
    config: [
        {
            type: 'button',
            shape: 'circle',
            mode: 'primary',
            icon: 'search'
        },
        {
            type: 'button',
            mode: 'primary',
            icon: 'search',
            content: 'Search'
        },
        {
            type: 'button',
            shape: 'circle',
            icon: 'search'
        },
        {
            type: 'button',
            icon: 'search',
            content: 'Search'
        }
    ]
};

const demo3 = {
    title: '组合按钮',
    description: '可以将多个 `button` 放入 `button-group` 的容器中，使按钮作为一组展示。',
    config: [
        {
            type: 'button-group',
            content: [
                {
                    type: 'button',
                    mode: 'primary',
                    content: [
                        {
                            type: 'icon',
                            mode: 'left'
                        },
                        'Backward'
                    ]
                },
                {
                    type: 'button',
                    mode: 'primary',
                    content: [
                        'Forward',
                        {
                            type: 'icon',
                            mode: 'right'
                        }
                    ]
                }
            ]
        },
        {
            type: 'button-group',
            style: {marginLeft: 10},
            size: 'small',
            content: [
                {
                    type: 'button',
                    mode: 'primary',
                    content: [
                        {
                            type: 'icon',
                            mode: 'left'
                        },
                        'Backward'
                    ]
                },
                {
                    type: 'button',
                    mode: 'primary',
                    content: [
                        'Forward',
                        {
                            type: 'icon',
                            mode: 'right'
                        }
                    ]
                }
            ]
        },
        {
            type: 'div',
            style: {marginTop: 10}
        },
        {
            type: 'button-group',
            content: [
                {
                    type: 'button',
                    content: 'A'
                },
                {
                    type: 'button',
                    disabled: true,
                    content: 'B'
                },
                {
                    type: 'button',
                    mode: 'dashed',
                    content: 'C'
                },
                {
                    type: 'button',
                    mode: 'danger',
                    content: 'D'
                }
            ]
        }
    ]
};
const demo4 = {
    title: '加载中状态',
    description: '添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。',
    config: [
        {
            type: 'button',
            mode: 'primary',
            loading: true,
            content: 'Loading'
        },
        {
            type: 'button',
            mode: 'primary',
            size: 'small',
            loading: true,
            content: 'Loading'
        },
        {
            type: 'button',
            shape: 'circle',
            loading: true
        },
        {
            type: 'button',
            mode: 'primary',
            shape: 'circle',
            loading: true
        },
        {
            type: 'div',
            style: {marginTop: 10}
        },
        {
            type: 'button',
            name: 'my-button1',
            mode: 'primary',
            content: 'Click me!',
            onClick: v=>UF('my-button1').set({
                loading: true
            })
        },
        {
            type: 'button',
            mode: 'primary',
            name: 'my-button2',
            icon: 'poweroff',
            content: 'Click me!',
            onClick: v=>UF('my-button2').set({
                loading: true
            })
        },
    ]
};

        
export default class Button extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-button.md';
        this.__init();
    }
    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}