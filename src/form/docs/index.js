/**
 * @file 配置化表单组件
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
// import Form from 'src/form';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

const Step1 = [{
    type: 'form',
    name: 'my-form1',
    // header: {
    //     type: 'icon',
    //     mode: 'search'
    // },
    // title: '新增专线 - 第1步',
    layout: {
        type: 'horizontal',
        labelCol: 6,
        wrapperCol: 16
    },
    formData: {
        address: 123
    },
    items: [
        [
            /* {
                type: 'input',
                label: '专线SN',
                name: 'line_sn',
                rules: {required: true, message: '主线SN不能为空'},
                placeholder: 'sn20134567'
            }, */
            {
                type: 'date-picker',
                label: '批次号',
                name: 'line_sn',
                format: 'YYYYMMDD',
                default: 'current',
                join: {
                    'idc_id': {
                        source: {
                            params: {
                                type: 1
                            }
                        }
                    }
                }
            },
            {
                // 这一层为测试嵌套组件在form中的使用，平时无需使用
                // type: 'div',
                // style: {background: '#ccc'},
                // content: {
                    type: 'select',
                    label: '机房',
                    name: 'idc_id',
                    rules: {required: true, message: '机房不能为空'},
                    source: {
                        autoLoad: false,
                        url: 'docs/php/data.php',
                        handler: data=>data.map(v=>{
                            return {value: v.name, label: v.name};
                        })
                    }
                // }
            }
        ],
        [
            {
                type: 'input',
                label: '所属机构',
                name: 'organization',
                rules: {required: true, message: '所属机构不能为空'},
                placeholder: '招商银行-百度钱包'
            },
            {
                type: 'select',
                label: '运营商',
                allowClear: true,
                name: 'operator',
                default: '1',
                options: [{
                    value: '1',
                    label: '移动'
                }, {
                    value: '2',
                    label: '联通'
                }]
            }
        ],
        [
            {
                type: 'radio',
                label: '主备线',
                name: 'standby',
                default: '0',
                options: [{
                    value: '0',
                    label: '主线'
                }, {
                    value: '1',
                    label: '备线',
                }]
            },
            {
                type: 'select',
                label: '接入方式',
                name: 'access_type',
                default: '0',
                join: {
                    bandwith: {display: v=>!!+v},
                    line_type: {display: v=>!!+v},
                    port_type: {display: v=>!!+v},
                    is_converge: {display: v=>!!+v, value: 0}
                },
                options: [
                    {value: '0', label: 'VPN'},
                    {value: '1', label: '专线'}
                ]
            }
        ],
        [
            {
                type: 'input',
                label: '产品',
                name: 'product',
                rules: {required: true, message: '产品不能为空'},
                placeholder: '百度钱包'
            },
            {
                type: 'input',
                label: '专线带宽',
                name: 'bandwith',
                rules: {required: true, message: '专线带宽不能为空'},
                display: false,
                placeholder: 10,
                addonAfter: 'M'
            }
        ],
        [
            {
                type: 'select',
                label: '专线类型',
                name: 'line_type',
                display: false,
                default: '0',
                options: [{
                    value: '0',
                    label: 'MSTP'
                }, {
                    value: '1',
                    label: 'SDH-E1'
                }]
            },
            {
                type: 'select',
                label: '接口类型',
                name: 'port_type',
                display: false,
                default: '0',
                options: [{
                    value: '0',
                    label: 'RJ45-电口'
                }, {
                    value: '1',
                    label: '光口'
                }]
            },
        ],
        [
            {
                type: 'radio',
                label: '是否汇聚',
                name: 'is_converge',
                display: false,
                default: '0',
                join: {
                    vlan_no: {display: v=>!!+v}
                },
                options: [{
                    value: '0',
                    label: '是'
                }, {
                    value: '1',
                    label: '否',
                }]
            },
            {
                type: 'input',
                label: 'vlan编号',
                name: 'vlan_no',
                display: false,
                placeholder: '20'
            }
        ],
        [
            {
                type: 'select',
                label: '模板',
                name: 'template',
                default: '1',
                options: [{
                    value: '1',
                    label: '线下模板test'
                }]
            },
            {
                type: 'input',
                label: '地址',
                name: 'address',
                rules: {required: true, message: '地址不能为空'},
                default: ''
            }
        ],
        [
            {
                type: 'input',
                label: '百度侧IP',
                name: 'baidu_ip',
                rules: {required: true, message: '百度侧IP不能为空'}
            },
            {
                type: 'input',
                label: '对端IP',
                name: 'point_ip',
                rules: {required: true, message: '对端IP不能为空'},
                onChange(e, value) {
                    // 跨form联动
                    if (UF('test-crossing-join')) {
                        if (!!value) {
                            UF('test-crossing-join').resetItem('point_ip', {display: true});
                        } else {
                            UF('test-crossing-join').resetItem('point_ip', {display: false});
                        }
                    }
                }
            }
        ],
        [
            {
                type: 'upload',
                label: '上传测试',
                name: 'upload'
            },
            {
                type: 'date-picker',
                label: '日期',
                name: 'date-picker-test',
                format: 'YYYY-MM-DD HH:mm:ss',
                required: true,
                onOk: function (value) {
                    console.log('onOk:', value);
                }
            }
        ]
    ],
    buttons: {
        layout: 'center',
        items: [
            {
                action: 'reset',
                type: '',
                value: '清除',
                // size: 'large',
                icon: 'delete',
                // disabled: 'disabled',
                onClick: data=>{
                    console.log(data);
                }
            }, {
                action: 'submit',
                type: 'primary',
                value: '提交',
                // size: 'large',
                icon: 'search',
                onClick: data=>{
                    // 使用promise，可以触发按钮的Loading，防止多次点击
                    return new Promise((resolve, reject)=>{
                        setTimeout(()=>{
                            console.log(data);
                            reject();
                        }, 1000);
                    });
                }
            }, {
                action: 'test',
                type: '',
                value: '自定义',
                icon: 'copy',
                onClick: data=>{
                    // console.log('自定义按钮');
                    console.log(UF('my-form1').getDisplayValues());
                }
            }
        ]
    }
}, {
    type: 'form',
    name: 'test-crossing-join',
    items: [{
        type: 'input',
        label: '对端IP',
        name: 'point_ip',
        display: false
    }]
}];
const Step21 = {
    type: 'form',
    // title: '新增专线 - 第2步（1）',
    layout: {
        type: 'horizontal',
        labelCol: 6,
        wrapperCol: 14
    },
    items: [
        {
            type: 'group',
            name: 'endpoint',
            header: '对端人员信息',
            items: [
                [
                    {
                        type: 'input',
                        label: '姓名',
                        name: 'endpoint_users_name',
                        rules: {required: true, message: '姓名不能为空'},
                        placeholder: '张三'
                    },
                    {
                        type: 'input',
                        label: '电话',
                        name: 'endpoint_phone',
                        placeholder: '131xxxx5555'
                    },
                    [
                        {
                            type: 'button',
                            label: '新增',
                            action: 'add',
                            name: 'add',
                            mode: 'primary',
                            onClick: form=>{
                                console.log(form.getFieldsValue());
                            }
                        },
                        {
                            type: 'button',
                            label: '删除',
                            action: 'delete',
                            name: 'delete',
                            mode: 'danger'
                        },
                        {
                            type: 'button',
                            label: '获取数据',
                            action: 'get',
                            name: 'get',
                            onClick: form=>{
                                console.log(form.getFieldsValue());
                            }
                        }
                    ]
                ]
            ]
        },
        {
            type: 'group',
            name: 'line_user',
            header: '业务人员信息',
            items: [
                [
                    {
                        type: 'input',
                        label: '姓名',
                        name: 'line_users_name',
                        placeholder: '王xx'
                    },
                    {
                        type: 'input',
                        label: '电话',
                        name: 'line_users_phone',
                        placeholder: '131xxxx3333'
                    },
                    {
                        type: 'input',
                        label: '邮件组',
                        name: 'line_users_email',
                        placeholder: '20'
                    }
                ],
                [
                    {
                        type: 'input',
                        label: '产品',
                        name: 'line_users_remark',
                        placeholder: '备注产品信息'
                    },
                    {
                        type: 'select',
                        label: '职位',
                        name: 'role',
                        default: '0',
                        options: [{
                            value: '0',
                            label: 'RD'
                        }, {
                            value: '1',
                            label: 'QA'
                        }]
                    },
                    {
                        type: 'empty'
                    }
                ]
            ]
        }
    ],
    buttons: [{
        action: 'test',
        type: '',
        value: '获取数据',
        size: 'large',
        // icon: 'copy',
        onClick: d=>console.log(d)
    }]
};
const Step22 = {
    title: '新增专线 - 第2步（2）',
    layout: {
        type: 'horizontal',
        labelCol: 6,
        wrapperCol: 14
    },
    items: [
        [
            {
                type: 'select',
                label: '传输设备',
                name: 'transmission_equ',
                default: '1',
                options: [{
                    value: '',
                    label: 'fuff-int.baidu.com'
                }, {
                    value: '2',
                    label: 'DB'
                }]
            },
            {
                type: 'input',
                label: '专线SN',
                name: 'line_sn',
                rules: {required: true, message: '主线SN不能为空'},
                placeholder: 'sn20134567'
            }
        ]
    ]
};
const Step23 = {
    type: 'form',
    title: '新增专线 - 第2步（1）',
    layout: {
        type: 'horizontal',
        labelCol: 6,
        wrapperCol: 14
    },
    items: [
        [
            {
                type: 'input',
                label: '姓名',
                name: 'endpoint_users_name',
                rules: {required: true, message: '姓名不能为空'},
                placeholder: '张三'
            },
            {
                type: 'input',
                label: '电话',
                name: 'endpoint_phone',
                placeholder: '131xxxx5555'
            },
            [
                {
                    type: 'button',
                    label: '新增',
                    action: 'add',
                    name: 'add',
                    mode: 'primary',
                    onClick: form=>{
                        console.log(form.getFieldsValue());
                    }
                },
                {
                    type: 'button',
                    label: '删除',
                    action: 'delete',
                    name: 'delete',
                    mode: 'danger'
                },
                {
                    type: 'button',
                    label: '获取数据',
                    action: 'get',
                    name: 'get',
                    onClick: form=>{
                        console.log(form.getFieldsValue());
                    }
                }
            ]
        ]
    ],
    buttons: [{
        action: 'test',
        type: '',
        value: '获取数据',
        size: 'large',
        onClick: d=>console.log(d)
    }]
};
const data21 = {
    endpoint: {
        endpoint_users_name: '张三',
        endpoint_phone: '1234567890'
    },
    line_user: {
        line_users_name: '赵四',
        line_users_phone: '1234567'
    }
};
const data22 = [
    {
        endpoint: {
            endpoint_users_name: '张三',
            endpoint_phone: '1234567890'
        },
        line_user: {
            line_users_name: '赵四',
            line_users_phone: '1234567'
        }
    }, {
        endpoint: {
            endpoint_users_name: '王老五',
            endpoint_phone: '1234567890'
        },
        line_user: {
            line_users_name: '张老四',
            line_users_phone: '1234567'
        }
    }
];
const data23 = {
    endpoint_users_name: '张三',
    endpoint_phone: '1234567890'
};

const demo1 = {
    title: '基础功能',
    description: '带有数据验证、字段联动等的表单',
    config: Step1
};
const demo2 = {
    title: '带新增、复制功能',
    description: '可以新增/复制某一组form的表单项，新生成一行',
    config: Step21
};

export default class FormApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    onSubmit(value) {
        console.log(value);
    }
    // 页面的其他内容已经在 BaseDoc 里实现，这里只需要写demo需要的代码即可
    // 如果没有展示demo，render可不写，见antd组件文档
    render() {
        // return <Form ref="testForm" {...Step21} data={[{data21}]} onSubmit={this.onSubmit.bind(this)}/>;
        // return <Form ref="testForm" {...Step23} data={data23} onSubmit={this.onSubmit.bind(this)}/>;
        // return <Form ref="testForm" {...Step1} onSubmit={this.onSubmit.bind(this)}/>;
        // return this.__getDemoSingle(demo2);
        return this.__getDemoSingle(demo1);
    }

}
