/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';

const demo1 = {
    title: '一个例子',
    description: '最基本的组件交互模型，点击加减按钮，进度条会随之一起增减。',
    config: [
        {
            type: "progress",
            name: "my-progress2",
            percent: 10
        },
        {
            type: "button-group",
            style: {
                marginTop: 10
            },
            content: [
                {
                    type: "button",
                    icon: "minus",
                    onClick: function onClick(v) {
                        var progress = UF('my-progress2');
                        progress.set({
                            percent: progress.get('percent') - 10
                        });
                    }
                },
                {
                    type: "button",
                    icon: "plus",
                    onClick: function onClick(v) {
                        var progress = UF('my-progress2');
                        progress.set({
                            percent: progress.get('percent') + 10
                        });
                    }
                }
            ]
        }
    ]
};

export default class Call extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'configure-call.md';
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }
}