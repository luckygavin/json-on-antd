/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import {Utils} from 'uf/utils';
import Uf from 'uf/tools';

const content = [
    {
        type: 'tab-pane',
        key: '1',
        tab: 'Tab 1',
        content: 'Content of Tab Pane 1'
    },
    {
        type: 'tab-pane',
        key: '2',
        tab: 'Tab 2',
        content: 'Content of Tab Pane 2'
    },
    {
        type: 'tab-pane',
        key: '3',
        tab: 'Tab 3',
        content: 'Content of Tab Pane 3'
    }
];

const demo1 = {
    title: '基本',
    description: '默认选中第一项。',
    config: {
        type: 'tabs',
        activeKey: '1',
        content: content
    }
};

const demo2 = {
    title: '图标',
    description: '有图标的标签。',
    config: {
        type: 'tabs',
        activeKey: '1',
        content: [
            {
                type: 'tab-pane',
                key: '1',
                tab: {
                    type: 'span',
                    content: [
                        {type: 'icon', mode: 'apple'},
                        'Tab 1'
                    ]
                },
                content: 'Content of Tab Pane 1'
            }
        ]
    }
};

const demo3 = {
    title: '迷你型',
    description: '用在弹出框等较狭窄的容器内。',
    config: {
        type: 'tabs',
        activeKey: '1',
        size: 'small',
        content: content
    }
};

const demo4 = {
    title: '位置',
    description: '有四个位置，tabPosition="left|right|top|bottom"。',
    config: [
        {
            type: 'div',
            content: [
                'Tab position: ',
                {
                    type: 'select',
                    value: 'top',
                    options: ['top', 'bottom', 'left', 'right'],
                    onChange: v=>Uf('my-tabs').setOption({tabPosition: v})
                }
            ]
        },
        {
            type: 'tabs',
            name: 'my-tabs',
            tabPosition: 'top',
            style: {marginTop: 16},
            activeKey: '1',
            size: 'small',
            content: content
        }
    ]
};

const demo5 = {
    title: '卡片式页签',
    description: '另一种样式的页签，不提供对应的垂直样式。',
    config: {
        type: 'tabs',
        mode: 'card',
        activeKey: '1',
        content: content
    }
};

export default class Tabs extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-tabs.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4, demo5);
    }
}