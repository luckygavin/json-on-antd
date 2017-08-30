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
                        {
                            type: 'card',
                            name: 'my-card',
                            style: {marginTop: 10},
                            title: '卡片标题',
                            // loading: true,
                            content: '突破突破'
                        },
                        {
                            type: 'carousel',
                            // autoplay: true,
                            content: [
                                {type: 'card', content: '这是个轮播图', style: {width: '100%', background: '#ececec'}},
                                {type: 'card', content: '这是个轮播图', style: {width: '100%', background: '#ececec'}}
                            ]
                        },
                        {
                            type: 'collapse',
                            name: 'my-collapse',
                            activeKey: ['panel'],
                            style: {margin: '10px 0'},
                            // accordion: true,
                            onChange: v=>console.log(v),
                            content: [
                                // 注意，一定要是数组
                                {
                                    type: 'panel',
                                    name: 'panel',
                                    header: '年轻',
                                    content: '年轻真好'
                                }
                            ]
                        },
                        {
                            type: 'tooltip',
                            title: '要死要死',
                            content: '鼠标移上来提示信息'
                        },
                        {
                            type: 'popconfirm',
                            title: '确定要删除吗？',
                            content: {
                                type: 'button',
                                size: 'small',
                                content: '点击删除'
                            }
                        },
                        {
                            type: 'popover',
                            title: '这里是卡片标题',
                            body: '这里是卡片内容',
                            content: '要死要死'
                        },
                        {
                            type: 'tabs',
                            // mode: 'card',
                            // tabPosition: 'left',
                            content: [
                                {
                                    type: 'tab-pane',
                                    tab: '标签 1',
                                    content: 'test 1'
                                },
                                {
                                    type: 'tab-pane',
                                    tab: '标签 2',
                                    content: 'test 2'
                                }
                            ]
                        },
                        {
                            type: 'alert',
                            mode: 'info',
                            closable: true,
                            message: '这是一条提示'
                        },
                        // {
                        //     type: 'modal-o'
                        // },
                        {
                            type: 'progress',
                            percent: 70,
                            // mode: 'dashboard'
                        },
                        {
                            type: 'loading',
                            name: 'my-loading',
                            loading: true,
                            content: {
                                type: 'card',
                                content: '这是个Loading',
                                style: {width: '100%', background: '#fff'}
                            }
                        },
                        'Message: ',
                        {
                            type: 'button-group',
                            content: [
                                {
                                    type: 'button',
                                    onClick: v=>Uf.message.success('Success'),
                                    content: 'Success'
                                },
                                {
                                    type: 'button',
                                    onClick: v=>Uf.message.error('Error'),
                                    content: 'Error'
                                },
                                {
                                    type: 'button',
                                    onClick: v=>Uf.message.info('Info'),
                                    content: 'Info'
                                },
                                {
                                    type: 'button',
                                    onClick: v=>Uf.message.warning('Warning'),
                                    content: 'Warning'
                                },
                                {
                                    type: 'button',
                                    onClick: v=>Uf.message.loading('Loading'),
                                    content: 'Loading'
                                }
                            ]
                        },
                        // {
                        //     type: 'br'
                        // },
                        {
                            type: 'progress',
                            style: {visibility: 'hidden'}
                        },
                        'Notification: ',
                        {
                            type: 'button-group',
                            content: [
                                {
                                    type: 'button',
                                    onClick: v=>Uf.notification.success({
                                        message: 'Notification Title',
                                        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                                    }),
                                    content: 'Success'
                                },
                                {
                                    type: 'button',
                                    onClick: v=>Uf.notification.error({
                                        message: 'Notification Title',
                                        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                                    }),
                                    content: 'Error'
                                },
                                {
                                    type: 'button',
                                    onClick: v=>Uf.notification.info({
                                        message: 'Notification Title',
                                        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                                    }),
                                    content: 'Info'
                                },
                                {
                                    type: 'button',
                                    onClick: v=>Uf.notification.warning({
                                        message: 'Notification Title',
                                        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                                    }),
                                    content: 'Warning'
                                },
                                {
                                    type: 'button',
                                    onClick: v=>Uf.notification.destroy(),
                                    content: 'Destroy'
                                }
                            ]
                        },
                        {
                            type: 'back-top'
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