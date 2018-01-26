/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'uf/tools';

const demo1 = {
    title: '各种大小',
    description: '小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。',
    config: [
        {
            type: 'loading',
            size: 'small',
            style: {marginRight: 16},
            loading: true
        },
        {
            type: 'loading',
            style: {marginRight: 16},
            loading: true
        },
        {
            type: 'loading',
            size: 'large',
            loading: true
        }
    ]
};

const demo2 = {
    title: '卡片加载中',
    description: '可以直接把内容内嵌到 Loading 中，将现有容器变为加载状态。',
    config: [
        {
            type: 'loading',
            name: 'my-loading',
            loading: true,
            content: {
                type: 'alert',
                mode: 'info',
                description: 'Further details about the context of this alert.'
            }
        },
        {
            type: 'div',
            style: {marginTop: 10},
            content: [
                'Loading state: ',
                {
                    type: 'switch',
                    checked: true,
                    onChange: v=>UF('my-loading').loading(v)
                }
            ]
        }
    ]
};

const demo3 = {
    title: '自定义描述文案',
    description: '自定义描述文案。',
    config: [
        {
            type: 'loading',
            loading: true,
            tip: 'Loading...',
            content: {
                type: 'alert',
                mode: 'info',
                message: 'Alert message title',
                description: 'Further details about the context of this alert.'
            }
        }
    ]
};

const demo4 = {
    title: '延迟',
    description: '延迟显示 loading 效果。当 loading 状态在 delay 时间内结束，则不显示 loading 状态。',
    config: [
        {
            type: 'loading',
            name: 'my-loading2',
            delay: 500,
            content: {
                type: 'alert',
                mode: 'info',
                description: 'Further details about the context of this alert.'
            }
        },
        {
            type: 'div',
            style: {marginTop: 10},
            content: [
                'Loading state: ',
                {
                    type: 'switch',
                    onChange: v=>UF('my-loading2').set({loading: v})
                }
            ]
        }
    ]
};

export default class Loading extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-loading.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}