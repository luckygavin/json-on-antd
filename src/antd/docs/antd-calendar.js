/**
 * @file 日历
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本用法',
    description: '最简单的用法',
    config: {
        type: 'avatar',
        // onPanelChange: function(value, mode) {
        //     console.log(value, mode);
        // }
    }
};

const demo2 = {
    title: '类型',
    description: '支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。',
    config: [
        {
            type: 'avatar',
            style: {
                display: 'inline-block',
                margin: '5px'
            },
            content: 'UMP'
        }
    ]
};

const demo3 = {
    title: '带徽标的头像',
    description: '通常用于消息提示',
    config: [
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 1,
                content: {
                    type: 'avatar',
                    shape: 'square',
                    icon: 'user'
                }
            },
        },
        {
            type: 'badge',
            dot: true,
            content: {
                type: 'avatar',
                shape: 'square',
                icon: 'user'
            }
        }
    ]
};
export default class Calendar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-calendar.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3);
    }
}