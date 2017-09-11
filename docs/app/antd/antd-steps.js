/**
 * @file 步骤条
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Uf from 'uf/tools';
import Demo from '../base/Demo.js';

const demo1 = {
    title: '基本用法',
    description: '简单的步骤条',
    config: {
        type: 'steps',
        current: 1,
        content: [
            {
                type: 'step',
                title: 'Finished',
                description: 'This is the description'
            },
            {
                type: 'step',
                title: 'In Progress',
                description: 'This is the description'
            },
            {
                type: 'step',
                title: 'Waiting',
                description: 'This is the description'
            }
        ]
    }
};
const demo2 = {
    title: '带图标的步骤条',
    description: '通过设置step的icon属性，可以启用自定义图标',
    config: {
        type: 'steps',
        content: [
            {
                type: 'step',
                status: 'finish',
                title: 'Login',
                icon: {
                    type: 'icon',
                    mode: 'user'
                }
            },
            {
                type: 'step',
                status: 'finish',
                title: 'Verification',
                icon: {
                    type: 'icon',
                    mode: 'solution'
                }
            },
            {
                type: 'step',
                status: 'process',
                title: 'Pay',
                icon: {
                    type: 'icon',
                    mode: 'credit-card'
                }
            },
            {
                type: 'step',
                status: 'wait',
                title: 'Done',
                icon: {
                    type: 'icon',
                    mode: 'smile-o'
                }
            }
        ]
    }
};
const demo3 = {
    title: '竖直方向的步骤条',
    description: '简单的竖直方向的步骤条',
    config: {
        type: 'steps',
        current: 1,
        direction: 'vertical',
        content: [
            {
                type: 'step',
                title: 'Finished',
                description: 'This is the description'
            },
            {
                type: 'step',
                title: 'In Progress',
                description: 'This is the description'
            },
            {
                type: 'step',
                title: 'Waiting',
                description: 'This is the description'
            }
        ]
    }
};
const demo4 = {
    title: '步骤运行错误',
    description: '使用steps的status属性来指定当前步骤的状态',
    config: {
        type: 'steps',
        current: 1,
        status: 'error',
        content: [
            {
                type: 'step',
                title: 'Finished',
                description: 'This is the description'
            },
            {
                type: 'step',
                title: 'In Progress',
                description: 'This is the description'
            },
            {
                type: 'step',
                title: 'Waiting',
                description: 'This is the description'
            }
        ]
    }
};
const demo5 = {
    title: '点状步骤条',
    description: '包含步骤点的进度条',
    config: {
        type: 'steps',
        current: 1,
        progressDot: true,
        content: [
            {
                type: 'step',
                title: 'Finished',
                description: 'This is the description'
            },
            {
                type: 'step',
                title: 'In Progress',
                description: 'This is the description'
            },
            {
                type: 'step',
                title: 'Waiting',
                description: 'This is the description'
            }
        ]
    }
};

export default class Steps extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-steps.md';
        this.__init();
    }

    render() {
        return <Demo single={true} list={[demo1, demo2, demo3, demo4, demo5]} />;
    }
}