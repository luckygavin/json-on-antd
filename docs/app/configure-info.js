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
                    name: 'myInput',
                },
                {
                    type: 'button-group',
                    content: [{
                        type: 'button',
                        icon: 'cloud-download'
                    }, {
                        type: 'button',
                        name: 'myButton',

                        // target: 'myInput:getValue',
                        // join: 'onClick',
                        // connect: '',

                        mode: 'primary',
                        content: [
                            {
                                type: 'icon',
                                mode: 'cloud'
                            },
                            '确定'
                        ],
                        onClick: ()=>{
                            console.log('click')
                            // let result = $myInput.getValue();
                            // console.log(result);
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
                            name: 'myForm',
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
                    ]
                }
            ]
        }
    ]
}

// [
//     {
//         type: 'form',
//         name: 'myForm',
//         title: '新增专线 - 第1步',
//         items: [
//             [
//                 {
//                     type: 'input',
//                     label: '姓名',
//                     name: 'endpoint_users_name',
//                     rules: [{required: true, message: '姓名不能为空'}],
//                     cfg: {
//                         placeholder: '张三'
//                     }
//                 },
//                 {
//                     type: 'input',
//                     label: '电话',
//                     name: 'endpoint_phone',
//                     cfg: {
//                         placeholder: '131xxxx5555'
//                     }
//                 },
//                 [
//                     {
//                         type: 'button',
//                         label: '提交',
//                         action: 'submit',
//                         name: 'submit',
//                         cfg: {
//                             type: 'primary'
//                         },
//                         onClick: values=>{
//                             // console.log(form.getFieldsValue());
//                             // console.log(values);
//                             return JSON.stringify(values);
//                         },
//                         // join: 'onClick',
//                         target: 'plain'
//                     }
//                 ]
//             ]
//         ]
//     },
//     {
//         type: 'input',
//         name: 'myInput',
//     },
//     {
//         type: 'button',
//         name: 'myButton',

//         // target: 'myInput:getValue',
//         // join: 'onClick',
//         // connect: '',

//         mode: 'primary',
//         content: [
//             {
//                 type: 'icon',
//                 mode: 'cloud'
//             },
//             '确定'
//         ],
//         onClick: ()=>{
//             console.log('click')
//             // let result = $myInput.getValue();
//             // console.log(result);
//         }
//     }
//     /* {
//         type: 'plain',
//         name: 'plain',
//         data: 'test'
//     } */
// ];

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