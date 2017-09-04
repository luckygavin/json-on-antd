/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';

const body = {
    type: 'html',
    content: '<p>Content</p><p>Content</p><p>Content</p>'
};

const demo1 = {
    title: '基本',
    description: '最简单的用法，浮层的大小由内容区域决定。',
    config: {
        type: 'popover',
        title: 'Title',
        body: body,
        content: {
            type: 'button',
            mode: 'primary',
            content: 'Hover me'
        }
    }
};

const demo2 = {
    title: '三种触发方式',
    description: '鼠标移入、聚集、点击。',
    config: [
        {
            type: 'popover',
            trigger: 'hover',
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                style: {margin: '0 10px 6px 0'},
                content: 'Hover me'
            }
        },
        {
            type: 'popover',
            trigger: 'focus',
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                style: {margin: '0 10px 6px 0'},
                content: 'Focus me'
            }
        },
        {
            type: 'popover',
            trigger: 'click',
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                style: {margin: '0 10px 6px 0'},
                content: 'Click me'
            }
        }
    ]
};

const demo3 = {
    title: '展示位置',
    description: '位置有十二个方向。',
    config: [
        {
            type: 'popover',
            placement: 'left',
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                style: {margin: '0 10px 6px 0'},
                content: 'Left'
            }
        },
        {
            type: 'popover',
            placement: 'top',
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                style: {margin: '0 10px 6px 0'},
                content: 'Top'
            }
        },
        {
            type: 'popover',
            placement: 'bottom',
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                style: {margin: '0 10px 6px 0'},
                content: 'Bottom'
            }
        },
        {
            type: 'popover',
            placement: 'right',
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                style: {margin: '0 10px 6px 0'},
                content: 'Right'
            }
        }
    ]
};

const demo4 = {
    title: '箭头指向',
    description: '设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。',
    config: [
        {
            type: 'popover',
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                style: {margin: '0 10px 6px 0'},
                content: 'Align edge / 边缘对齐'
            }
        },
        {
            type: 'popover',
            arrowPointAtCenter: true,
            title: 'Title',
            body: body,
            content: {
                type: 'button',
                content: 'Arrow points to center / 箭头指向中心'
            }
        }
    ]
};


export default class Popover extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-popover.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}