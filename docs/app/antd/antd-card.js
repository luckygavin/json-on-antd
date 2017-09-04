/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';

const demo1 = {
    title: '典型卡片',
    description: '包含标题、内容、操作区域。',
    config: {
        type: 'card',
        title: 'Card title',
        extra: {
            type: 'a',
            content: 'More',
        },
        content: {
            type: 'html',
            content: '包含标题<p class="test" style="background-color:#eee;">包含标题、内容、操作区域的卡片内容区域</p><p>包含标题、内容、操作区域的卡片内容区域</p><p>包含标题、内容、操作区域的卡片内容区域</p>'
        }
    }
};

const demo2 = {
    title: '无边框',
    description: '在灰色背景上使用无边框的卡片。',
    config: {
        type: 'div',
        style: {padding: 30, background: '#ececec'},
        content: {
            type: 'card',
            bordered: false,
            style: {width: 300},
            title: 'Card title',
            content: '包含标题、内容、操作区域的卡片内容区域'
        }
    }
};

const demo3 = {
    title: '预加载的卡片',
    description: '数据读入前会有文本块样式。',
    config: {
        type: 'card',
        title: 'Card title',
        loading: true,
        content: '包含标题、内容、操作区域的卡片内容区域'
    }
};

const demo4 = {
    title: '简洁卡片',
    description: '只包含内容区域。',
    config: {
        type: 'card',
        style: {width: 300},
        content: '包含标题、内容、操作区域的卡片内容区域'
    }
};


export default class Card extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-card.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}