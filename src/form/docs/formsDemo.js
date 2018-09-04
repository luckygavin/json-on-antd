/**
 * @file 配置化可进行复制新增的Forms组件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import {Utils} from 'src/utils';
import md from './formsMarkdown.md';
import UF from 'src';

let demo1 = {
    title: 'Forms组件基本用法',
    description: 'Forms组件是Form组件的扩展，通过配置formData及addType实现新增表单功能',
    config: {
        type: 'forms',
        name: 'forms-test',
        addType: 'add',
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
                    icon: 'search'
                },
                {
                    action: 'test',
                    type: '',
                    value: '自定义',
                    icon: 'copy',
                    onClick: function onClick(data) {
                        console.log('全部表单项的展示内容: ', UF('forms-test').getDisplayValues());
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
                            {value: 's',label: 'YQ01'},
                            {value: 'd',label: 'BJYZ'},
                            {value: 'f',label: 'BB'}
                        ]
                    },
                    {
                        type: 'select',
                        label: '盘点方式',
                        name: 'inventory-method',
                        showSearch: true,
                        allowClear: true,
                        options: [
                            {value: '1',label: '全部'},
                            {value: '2',label: 'HAS'},
                            {value: '3',label: 'ILO'}
                        ]
                    }
                ]
            ]
        },
        onSubmit: (data) => {
            // action为submit的元素无回调函数时才响应
            console.log('要提交了:', data);
        },
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
        ]
    }
};

// 以表格形式展示
// const demo2 = Utils.clone(demo1);
// demo2.config.mode = 'table';
// delete demo2.config.buttons;
// demo2.title = '表格样式的Forms';
// demo2.description = 'Forms组件是Form组件的扩展，可以复制新增条相似结构的数据';

const demo2 = {
    title: '表格样式的Forms',
    description: '当`mode`属性为\'table\'时，表单以表格的形式展示',
    config: {
        type: 'forms',
        mode: 'table',
        form: {
            items: [
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
                },
                {
                    type: 'select',
                    label: '机房',
                    name: 'idc_id',
                    showSearch: true,
                    allowClear: true,
                    options: [
                        {value: 's',label: 'YQ01'},
                        {value: 'd',label: 'BJYZ'},
                        {value: 'f',label: 'BB'}
                    ]
                },
                {
                    type: 'select',
                    label: '盘点方式',
                    name: 'inventory-method',
                    showSearch: true,
                    allowClear: true,
                    options: [
                        {value: '1',label: '全部'},
                        {value: '2',label: 'HAS'},
                        {value: '3',label: 'ILO'}
                    ]
                }
            ]
        },
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
        return this.__getDemoSingle(demo2, demo1);
    }

}
