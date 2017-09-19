/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import UF from 'uf/tools';

const demo1 = {
    title: '进度条',
    description: '标准的进度条。',
    config: [
        {
            type: 'progress',
            percent: 30
        },
        {
            type: 'progress',
            percent: 50,
            status: 'active'
        },
        {
            type: 'progress',
            percent: 70,
            status: 'exception'
        },
        {
            type: 'progress',
            percent: 100
        },
        {
            type: 'progress',
            percent: 50,
            showInfo: false
        }
    ]
};

const demo2 = {
    title: '进度圈',
    description: '圈形的进度。',
    config: [
        {
            type: 'progress',
            mode: 'circle',
            percent: 75
        },
        {
            type: 'progress',
            mode: 'circle',
            percent: 100
        }
    ]
};

const demo3 = {
    title: '小型进度条',
    description: '适合放在较狭窄的区域内。',
    config: [
        {
            type: 'progress',
            strokeWidth: 5,
            percent: 30
        },
        {
            type: 'progress',
            strokeWidth: 5,
            percent: 50,
            status: 'active'
        },
        {
            type: 'progress',
            strokeWidth: 5,
            percent: 70,
            status: 'exception'
        },
        {
            type: 'progress',
            strokeWidth: 5,
            percent: 100
        }
    ]
};

const demo4 = {
    title: '小型进度圈',
    description: '小一号的圈形进度。',
    config: [
        {
            type: 'progress',
            mode: 'circle',
            width: 80,
            percent: 30
        },
        {
            type: 'progress',
            mode: 'circle',
            width: 80,
            percent: 50,
            status: 'active'
        },
        {
            type: 'progress',
            mode: 'circle',
            width: 80,
            percent: 70,
            status: 'exception'
        },
        {
            type: 'progress',
            mode: 'circle',
            width: 80,
            percent: 100
        }
    ]
};

const demo5 = {
    title: '进度圈动态展示',
    description: '会动的进度条才是好进度条。',
    config: [
        {
            type: 'progress',
            mode: 'circle',
            name: 'my-progress',
            percent: 50
        },
        {
            type: 'button-group',
            content: [
                {
                    type: 'button',
                    icon: 'minus',
                    onClick: v=>{
                        var progress = UF('my-progress');
                        var current = progress.get('percent');
                        progress.set({
                            percent: current - 10
                        })
                    }
                }
            ]
        }
    ]
};

const demo6 = {
    title: '动态展示进度条',
    description: '会动的进度条才是好进度条。',
    config: [
        {
            type: 'progress',
            name: 'my-progress2',
            percent: 10
        },
        {
            type: 'button-group',
            style: {marginTop: 10},
            content: [
                {
                    type: 'button',
                    icon: 'minus',
                    onClick: v=>{
                        var progress = UF('my-progress2');
                        var current = progress.get('percent');
                        progress.set({
                            percent: current - 10
                        })
                    }
                },
                {
                    type: 'button',
                    icon: 'plus',
                    onClick: v=>{
                        var progress = UF('my-progress2');
                        var current = progress.get('percent');
                        progress.set({
                            percent: current + 10
                        })
                    }
                },
            ]
        }
    ]
};

const demo7 = {
    title: '自定义文字格式',
    description: '`format` 属性指定格式。',
    config: [
        {
            type: 'progress',
            mode: 'circle',
            percent: 75,
            format: v=>`${v} Days`
        },
        {
            type: 'progress',
            mode: 'circle',
            percent: 100,
            format: v=>'Done'
        }
    ]
};

const demo8 = {
    title: '仪表盘',
    description: '通过设置 `mode=dashboard`，可以很方便地实现仪表盘样式的进度条。',
    config: [
        {
            type: 'progress',
            mode: 'dashboard',
            percent: 75
        }
    ]
};

export default class Progress extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-progress.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4, demo5, demo6, demo7, demo8);
    }
}