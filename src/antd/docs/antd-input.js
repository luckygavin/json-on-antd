/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本使用',
    description: '基本使用。',
    config: {
        type: 'input',
        placeholder: '基本使用'
    }
};

const demo2 = {
    title: '前置/后置标签',
    description: '用于配置一些固定组合。',
    config: [
        {
            type: 'input',
            style: {marginBottom: 16},
            placeholder: '基本使用',
            addonBefore: 'Http://',
            addonAfter: '.com',
            value: 'mysite'
        },
        {
            type: 'input',
            style: {marginBottom: 16},
            placeholder: '基本使用',
            addonBefore: {
                type: 'select',
                value: 'Http://',
                options: ['Http://', 'Https://']
            },
            addonAfter: {
                type: 'select',
                value: '.com',
                options: ['.com', '.cn']
            },
            value: 'mysite'
        },
        {
            type: 'input',
            style: {marginBottom: 16},
            placeholder: '基本使用',
            addonAfter: {
                type: 'icon',
                mode: 'setting'
            },
            value: 'mysite'
        }
    ]
};

const demo3 = {
    title: '搜索框',
    description: '带搜索按钮的输入框。点击回车时会触发onSearch函数',
    config: {
        type: 'input-search',
        placeholder: 'input search text',
        style: {width: 200},
        onSearch: function(v) {
            console.log(v);
        }
    }
};

const demo4 = {
    title: '输入框组合',
    description: '输入框的组合展现。',
    config: [
        {
            type: 'input-group',
            content: [
                {
                    type: 'input',
                    style: {width: 100},
                    placeholder: '组合',
                    value: '0571'
                },
                {
                    type: 'input',
                    style: {width: '30%'},
                    placeholder: '输入框',
                    value: '26888888'
                }
            ]
        },
        {
            type: 'input-group',
            compact: true,
            style: {marginTop: 16},
            content: [
                {
                    type: 'select',
                    value: 'Between',
                    style: {width: '100px'},
                    options: ['Between', 'Except']
                },
                {
                    type: 'input',
                    style: {width: 100, textAlign: 'center'},
                    placeholder: 'Minimun'
                },
                {
                    type: 'input',
                    style: { width: 24, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' },
                    placeholder: '~',
                    disabled: true,
                },
                {
                    type: 'input',
                    style: {width: 100, textAlign: 'center', borderLeft: 0},
                    placeholder: 'Maximum'
                }
            ]
        }
    ]    
};

const demo5 = {
    title: '文本域',
    description: '用于多行输入。`autosize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 autosize 可以设定为一个对象，指定最小行数和最大行数。',
    config: [
        {
            type: 'textarea',
            placeholder: 'Autosize height',
            autosize: true
        },
        {
            type: 'textarea',
            style: {marginTop: '16px'},
            placeholder: 'Autosize height with minimum and maximum number',
            autosize: {minRows: 2, maxRows: 6}
        }
    ]
};

const demo6 = {
    title: '前缀和后缀',
    description: '在输入框上添加前缀或后缀图标。',
    config: [
        {
            type: 'input',
            placeholder: 'Enter your userName',
            prefix: {
                type: 'icon',
                mode: 'user'
            },
            suffix: {
                type: 'icon',
                mode: 'close-circle'
            }
        }
    ]
};

export default class Input extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-input.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4, demo5, demo6);
    }
}