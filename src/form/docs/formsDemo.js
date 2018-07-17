/**
 * @file 配置化可进行复制新增的Forms组件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from './formsMarkdown.md';
import UF from 'src';

let demo1 = {
    title: 'Forms组件基本用法',
    description: 'Forms组件是Form组件的扩展，通过配置formData及addType实现新增表单功能',
    config: [
        {
            type: 'forms',
            name: 'aaa',
            addType: 'add',
            formData: [
                {
                    'inventory-time': '20180608',
                    'idc_id': 's',
                    'inventory-method': '1',
                    'sn-input': '这是一个input'
                },
                {
                    'inventory-time': '20180723',
                    'idc_id': 'f',
                    'inventory-method': '2',
                    'sn-input': '这是第二个input'
                }
            ],
            buttons: {
                layout: 'center',
                items: [
                    {
                        action: 'reset',
                        type: '',
                        value: '清除',
                        icon: 'delete',
                        onClick: function onClick(data) {
                            console.log(data);
                        }
                    },
                    {
                        action: 'submit',
                        type: 'primary',
                        value: '提交',
                        icon: 'search',
                        // onClick: function onClick(data) {
                        //     // 使用promise，可以触发按钮的Loading，防止多次点击
                        //     return new Promise(function (resolve, reject) {
                        //         setTimeout(function () {
                        //             console.log(data);
                        //             reject();
                        //         }, 1000);
                        //     });
                        // }
                    },
                    {
                        action: 'test',
                        type: '',
                        value: '自定义',
                        icon: 'copy',
                        onClick: function onClick(data) {
                            console.log('自定义按钮');
                        }
                    }
                ]
            },
            form: {
                layout: {
                    type: 'horizontal',
                    labelCol: 6,
                    wrapperCol: 16
                },
                items: [
                    [
                        {
                            type: 'date-picker',
                            label: '盘点时间',
                            name: 'inventory-time',
                            format: 'YYYYMMDD',
                        },
                        {
                            type: 'input',
                            name: 'sn-input',
                            label: 'SN',
                            rules: [{required: true, message: '请输入sn名称'}]
                        }
                    ],
                    [
                        {
                            type: 'select',
                            label: '机房',
                            name: 'idc_id',
                            showSearch: true,
                            allowClear: true,
                            options: [
                                {
                                    value: 's',
                                    label: 'YQ01'
                                },
                                {
                                    value: 'd',
                                    label: 'BJYZ'
                                },
                                {
                                    value: 'f',
                                    label: 'BB'
                                }
                            ]
                        },
                        {
                            type: 'select',
                            label: '盘点方式',
                            name: 'inventory-method',
                            showSearch: true,
                            allowClear: true,
                            options: [
                                {
                                    value: '1',
                                    label: '全部'
                                },
                                {
                                    value: '2',
                                    label: 'HAS'
                                },
                                {
                                    value: '3',
                                    label: 'ILO'
                                }
                            ]
                        }
                    ]
                ]
            },
            onSubmit: () => {
                // action为submit的元素无回调函数时才响应
                console.log('要提交了');
            }
        }
    ]
};
// demo2报warning，原因是form中嵌套的form，并且使用了formData,数据无法正常显示
let demo2 = {
    title: '测试Forms组件',
    // description: 'sadfhk',
    config: {
        type: 'form',
        name: 'out',
        items: [
            {
                type: 'form',
                name: '0',
                formData: {
                    'inventory-time': '20180608',
                    'idc_id': 's',
                    'inventory-method': '1',
                    'sn-input': '这是一个textarea'
                },
                items: [
                    {
                        type: 'date-picker',
                        label: '盘点时间',
                        name: 'inventory-time',
                        format: 'YYYYMMDD'
                    },
                    [
                        {
                            type: 'select',
                            label: '机房',
                            name: 'idc_id',
                            showSearch: true,
                            allowClear: true,
                            options: [
                                {
                                    value: 's',
                                    label: 'YQ01'
                                },
                                {
                                    value: 'd',
                                    label: 'BJYZ'
                                },
                                {
                                    value: 'f',
                                    label: 'BB'
                                }
                            ]
                        },
                        {
                            type: 'select',
                            label: '盘点方式',
                            name: 'inventory-method',
                            showSearch: true,
                            allowClear: true,
                            options: [
                                {
                                    value: '1',
                                    label: '全部'
                                },
                                {
                                    value: '2',
                                    label: 'HAS'
                                },
                                {
                                    value: '3',
                                    label: 'ILO'
                                }
                            ]
                        }
                    ],
                    {
                        type: 'textarea',
                        name: 'sn-input',
                        label: 'SN',
                        // rules: [{required: true, message: '请输入sn名称'}],
                        placeholder: '输入多个sn以换行分隔（单次查询最多支持100条）',
                        autosize: {
                            minRows: 3,
                            maxRows: 10
                        }
                    }
                ]
            }
        ]
    }
};
export default class FormsApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }

}
