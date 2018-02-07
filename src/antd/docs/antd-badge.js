/**
 * @file 徽标数
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src/tools';

const example = {
    type: 'span',
    style: {
        display: 'inline-block',
        width: '42px',
        height: '42px',
        borderRadius: '6px',
        backgroundColor: '#eee'
    }
};
const demo1 = {
    title: '基本用法',
    description: '简单的徽章展示，当count为0时，默认不显示，但是可以使用showZero修改为显示',
    config: [
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 5,
                content: example
            }
        },
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 0,
                showZero: true,
                content: example
            }
        },
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 0,
                dot: true,
                content: example
            }
        }
    ]
};

const demo2 = {
    title: '独立使用',
    description: '不包裹任何元素即是独立使用，可自定样式展现。',
    config: [
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 25
            }
        },
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 4,
                style: {
                    'backgroundColor': '#fff',
                    color: '#999',
                    boxShadow: '0 0 0 1px #d9d9d9 inset'
                }
            }
        },
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 109,
                style: {
                    backgroundColor: '#87d068'
                }
            }
        }
    ]
};

const demo3 = {
    title: '封顶数字',
    description: '超过overflowCount的会显示为${overflowCount}+，默认的overflowCount为99',
    config: [
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 99,
                content: example
            }
        },
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 100,
                content: example
            }
        },
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 99,
                overflowCount: 10,
                content: example
            }
        },
        {
            type: 'span',
            content: {
                type: 'badge',
                count: 1000,
                overflowCount: 999,
                content: example
            }
        }
    ]
};

const demo4 = {
    title: '状态点',
    description: '用于表示状态的小圆点',
    config: [
        {
            type: 'badge',
            status: 'success',
            text: 'success'
        },
        {
            type: 'br'
        },
        {
            type: 'badge',
            status: 'error',
            text: 'error'
        },
        {
            type: 'br'
        },
        {
            type: 'badge',
            status: 'default',
            text: 'default'
        },
        {
            type: 'br'
        },
        {
            type: 'badge',
            status: 'processing',
            text: 'processing'
        },
        {
            type: 'br'
        },
        {
            type: 'badge',
            status: 'warning',
            text: 'warning'
        }
    ]
};

const demo5 = {
    title: '动态',
    description: '展示动态变化的效果',
    config: [
        {
            type: 'span',
            style: {
                display: 'inline-block',
                marginRight: '15px'
            },
            content: {
                type: 'badge',
                count: 5,
                name: 'myBadge',
                content: example
            }
        },
        {
            type: 'button-group',
            content: [
                {
                    type: 'button',
                    content: {
                        type: 'icon',
                        mode: 'minus'
                    },
                    onClick: function() {
                        var count = UF('myBadge').getOption('count');
                        count--;
                        if (count < 0) {
                            count = 0;
                        }
                        UF('myBadge').set({count: count});
                    }
                },
                {
                    type: 'button',
                    content: {
                        type: 'icon',
                        mode: 'plus'
                    },
                    onClick: function() {
                        var count = UF('myBadge').getOption('count');
                        count++;
                        UF('myBadge').set({count: count});
                    }
                }
            ]
        }
    ]
};
export default class Badge extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-badge.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4, demo5);
    }
}