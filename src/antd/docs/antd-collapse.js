/**
 * @file 按钮
 * **/
import React from 'react';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import {Utils} from 'src/utils';
import UF from 'src';

const content = [
    {
        type: 'panel',
        key: '1',
        header: 'This is panel header 1',
        content: 'content 1'
    },
    {
        type: 'panel',
        key: '2',
        header: 'This is panel header 2',
        content: 'content 2'
    }
    ,
    {
        type: 'panel',
        key: '3',
        header: 'This is panel header 3',
        content: 'content 3'
    }
];

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
};

const demo1 = {
    title: '折叠面板',
    description: '可以同时展开多个面板，这个例子默认展开了第一个。',
    config: [
        {
            type: 'collapse',
            activeKey: ['1'],
            name: 'collapse-control',
            content: content
        },
        {
            type: 'button',
            content: '关闭第一个面板',
            onClick() {
                UF('collapse-control').close('1');
            }
        }
    ]
};

const demo2 = {
    title: '手风琴',
    description: '手风琴，每次只打开一个tab。默认打开第一个。',
    config: {
        type: 'collapse',
        accordion: true,
        activeKey: ['1'],
        content: content
    }
};

const demo3 = {
    title: '简洁风格',
    description: '一套没有边框的简洁样式。',
    config: {
        type: 'collapse',
        bordered: false,
        activeKey: ['1'],
        content: content
    }
};

const demo4 = {
    title: '自定义面板',
    description: '自定义各个面板的背景色、圆角和边距。',
    config: {
        type: 'collapse',
        bordered: false,
        activeKey: ['1'],
        content: Utils.clone(content).map(v=>{v.style = customPanelStyle; return v;})
    }
};

export default class Collapse extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-collapse.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}