/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Uf from 'uf/tools';

const Config = {
    type: 'layout',
    content: [
        {
            type: 'sider',
            style: {padding: '20px'},
            content: [
                {
                    type: 'input',
                    name: 'my-input',
                },
                {
                    type: 'button-group',
                    content: [{
                        type: 'button',
                        icon: 'cloud-download'
                    }, {
                        type: 'button',
                        name: 'my-button',

                        // target: 'my-input:getValue',
                        // join: 'onClick',
                        // connect: '',

                        mode: 'primary',
                        icon: 'cloud',
                        content: [
                            {
                                type: 'icon',
                                mode: 'cloud'
                            },
                            '确定'
                        ],
                        onClick: ()=>{
                            console.log('click')
                            // let result = $my-input.getValue();
                            // console.log(result);
                            console.log(Uf.get('my-form').getValues());
                        }
                    }]
                }
            ]
        },
        {
            type: 'layout',
            style: {padding: '20px'},
            content: [
                // {
                //     type: 'header',
                //     style: { background: '#fff', padding: 0 }
                // },
                {
                    type: 'content',
                    content: [
                        {
                            type: 'form',
                            name: 'my-form',
                            title: '新增专线 - 第1步',
                            items: [
                                [
                                    {
                                        type: 'input',
                                        label: '姓名',
                                        name: 'endpoint_users_name',
                                        rules: [{required: true, message: '姓名不能为空'}],
                                        cfg: {
                                            placeholder: '张三'
                                        }
                                    },
                                    {
                                        type: 'input',
                                        label: '电话',
                                        name: 'endpoint_phone',
                                        cfg: {
                                            placeholder: '131xxxx5555'
                                        }
                                    },
                                    [
                                        {
                                            type: 'button',
                                            label: '提交',
                                            action: 'submit',
                                            name: 'submit',
                                            cfg: {
                                                type: 'primary'
                                            },
                                            onClick: values=>{
                                                // console.log(form.getFieldsValue());
                                                // console.log(values);
                                                return JSON.stringify(values);
                                            },
                                            // join: 'onClick',
                                            target: 'plain'
                                        }
                                    ]
                                ]
                            ]
                        },
                        {
                            type: 'cascader',
                            options: [
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [{
                                        value: 'hangzhou',
                                        label: 'Hangzhou'
                                    }]
                                }, {
                                    value: 'jiangsu',
                                    label: 'Jiangsu',
                                    children: [{
                                        value: 'nanjing',
                                        label: 'Nanjing'
                                    }]
                                }
                            ],
                            onChange: v=>console.log(v)
                        },
                        {
                            type: 'checkbox-group',
                            options: [
                                {value: 'zhejiang', label: 'Zhejiang'},
                                {value: 'jiangsu', label: 'Jiangsu'},
                                {value: 'nanjing', label: 'Nanjing'}
                            ],
                            onChange: v=>console.log(v)
                        },
                        {
                            type: 'date-picker',
                            name: 'my-date-picker',
                            format: 'YYYY-MM-DD HH:mm:ss'
                        },
                        {
                            type: 'month-picker',
                            name: 'my-month-picker'
                        },
                        {
                            type: 'range-picker',
                            name: 'my-range-picker',
                            format: 'YYYY-MM-DD HH:mm'
                        },
                        {
                            type: 'button',
                            content: '吼啊',
                            onClick() {
                                // console.log(Uf.get('my-input').refs['my-input'].refs['input'].value);
                                console.log(Uf.get('my-date-picker').getValue());
                            }
                        },
                        {
                            type: 'input',
                            addonBefore: 'Http://',
                            addonAfter: '.com',
                            value: 'www.baidu.com'
                        },
                        {
                            type: 'input-search',
                            name: 'my-input-search',
                            placeholder: '搜索框'
                        },
                        {
                            type: 'textarea',
                            name: 'my-textarea',
                            placeholder: 'Textarea',
                            rows: 1
                        },
                        {
                            type: 'input-group',
                            content: [
                                {type: 'input', style: {width: '20%'}, placeholder: '组合'},
                                {type: 'input', style: {width: '20%'}, placeholder: '输入框'}
                            ]
                        },
                        {
                            type: 'input-number',
                            name: 'my-input-number',
                            placeholder: '数字输入框',
                            onChange: v=>console.log(v)
                        },
                        {
                            type: 'radio',
                            name: 'my-radio',
                            options: [
                                {label: 'Apple', value: 'Apple'},
                                {label: 'Pear', value: 'Pear'},
                                {label: 'Orange', value: 'Orange'}
                            ]
                        },
                        {
                            type: 'radio',
                            name: 'my-radio-button',
                            showAsButton: true,
                            size: 'large',
                            options: [
                                {label: 'Apple', value: 'Apple'},
                                {label: 'Pear', value: 'Pear', disabled: true},
                                {label: 'Orange', value: 'Orange'}
                            ]
                        },
                        {
                            type: 'select',
                            name: 'my-select',
                            placeholder: '下拉框',
                            showSearch: true,
                            allowClear: true,
                            options: [
                                {label: 'Apple', value: 'Apple'},
                                {label: 'Pear', value: 'Pear', disabled: true},
                                {label: 'Orange', value: 'Orange'}
                            ]
                        },
                        {
                            type: 'switch',
                            name: 'my-switch'
                        },
                        {
                            type: 'time-picker',
                            name: 'my-time-picker'
                        },
                        {
                            type: 'auto-complete',
                            name: 'my-auto-complete',
                            allowClear: true,
                            placeholder: '自动补全框',
                            options: ['@gmail.com', '@163.com', '@qq.com']
                        },
                        
                    ]
                }
            ]
        }
    ]
}

export default class Info extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'configure-info.md';
        this.__init();
    }
    componentDidMount() {
        Uf.init(Config, 'configure-content');
    }
    render() {
        return <div id="configure-content"></div>;
    }
}