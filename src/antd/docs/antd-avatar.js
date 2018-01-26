/**
 * @file 头像
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本用法',
    description: '最简单的用法',
    config: [
        {
            type: 'div',
            content: [
                {
                    type: 'avatar',
                    size: 'large',
                    icon: 'user',
                    style: {
                        display: 'inline-block',
                        margin: '5px'
                    }
                },
                {
                    type: 'avatar',
                    icon: 'user',
                    style: {
                        display: 'inline-block',
                        margin: '5px'
                    }
                },
                {
                    type: 'avatar',
                    size: 'small',
                    icon: 'user',
                    style: {
                        display: 'inline-block',
                        margin: '5px'
                    }
                }
            ]
        },
        {
            type: 'div',
            content: [
                {
                    type: 'avatar',
                    size: 'large',
                    shape: 'square',
                    icon: 'user',
                    style: {
                        display: 'inline-block',
                        margin: '5px'
                    }
                },
                {
                    type: 'avatar',
                    shape: 'square',
                    icon: 'user',
                    style: {
                        display: 'inline-block',
                        margin: '5px'
                    }
                },
                {
                    type: 'avatar',
                    size: 'small',
                    shape: 'square',
                    icon: 'user',
                    style: {
                        display: 'inline-block',
                        margin: '5px'
                    }
                }
            ]
        }
    ]
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
        },
        {
            type: 'avatar',
            style: {
                backgroundColor: '#87d068',
                display: 'inline-block',
                margin: '5px'
            },
            icon: 'user'
        },
        {
            type: 'avatar',
            style: {
                color: '#f56a00',
                backgroundColor: '#fde3cf',
                display: 'inline-block',
                margin: '5px'
            },
            content: 'U'
        },
        {
            type: 'avatar',
            src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            style: {
                display: 'inline-block',
                margin: '5px'
            }
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
export default class Avatar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-avatar.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3);
    }
}