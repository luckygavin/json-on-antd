/**
 * @file 标签
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'uf/tools';

const demo1 = {
    title: '基本用法',
    description: '基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose afterClose 两个事件。',
    config: [
        {
            type: 'tag',
            content: 'Tag 1',
            style: {
                margin: '8px'
            }
        },
        {
            type: 'tag',
            content: {
                type: 'a',
                content: 'Link',
                href: 'http://www.baidu.com/'
            },
            style: {
                margin: '8px'
            }
        },
        {
            type: 'tag',
            content: 'Tag 2',
            closable: true,
            onClose: function(e) {
                console.log(e);
            },
            style: {
                margin: '8px'
            }
        },
        {
            type: 'tag',
            content: 'Prevent Default',
            closable: true,
            onClose: function(e) {
                e.preventDefault();
                console.log('Clicked! But prevent default.');
            },
            style: {
                margin: '8px'
            }
        }
    ]
};

const demo2 = {
    title: '多彩标签',
    description: '我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。',
    config: [
        {
            type: 'div',
            content: [
                {
                    type: 'tag',
                    content: 'pink',
                    color: 'pink',
                    style: {
                        margin: '8px'
                    }
                },
                {
                    type: 'tag',
                    content: 'red',
                    color: 'red',
                    style: {
                        margin: '8px'
                    }
                },
                {
                    type: 'tag',
                    content: 'orange',
                    color: 'orange',
                    style: {
                        margin: '8px'
                    }
                },
                {
                    type: 'tag',
                    content: 'green',
                    color: 'green',
                    style: {
                        margin: '8px'
                    }
                },
                {
                    type: 'tag',
                    content: 'cyan',
                    color: 'cyan',
                    style: {
                        margin: '8px'
                    }
                },
                {
                    type: 'tag',
                    content: 'blue',
                    color: 'blue',
                    style: {
                        margin: '8px'
                    }
                },
                {
                    type: 'tag',
                    content: 'purple',
                    color: 'purple',
                    style: {
                        margin: '8px'
                    }
                },
                {
                    type: 'tag',
                    content: '#f50',
                    color: '#f50',
                    style: {
                        margin: '8px'
                    }
                },
                {
                    type: 'tag',
                    content: '#2db7f5',
                    color: '#2db7f5',
                    style: {
                        margin: '8px'
                    }
                }
            ]
        }
    ]
};

const demo3 = {
    title: '可选择',
    description: '可通过checkable-tag实现类似checkbox的效果，点击切换选中效果',
    config: [
        {
            type: 'checkable-tag',
            content: 'tag1',
            checked: true,
            name: 'myTag',
            onChange: function(checked) {
                console.log(checked);
                UF('myTag').set({
                    checked: checked
                });
            }
        }
    ]
};
export default class Tag extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-tag.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3);
    }
}