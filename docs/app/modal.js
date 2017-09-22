/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

import UF from 'uf/tools';

const demo1 = {
    title: '基本用法',
    description: '简单的弹框用法。',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: '点击弹出',
            onClick: ()=>UF('my-modal').show()
        },
        {
            type: 'modal',
            name: 'my-modal',
            visible: false,
            title: '基本弹框',
            content: {
                type: 'html',
                content: '<p>Some contents...</p><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p>'
            }
        }
    ]
};
const demo2 = {
    title: '弹框表单',
    description: '弹框表单基本用法，临时用法，很快会升级',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: '弹出表单',
            onClick: ()=>UF('my-modal2').show()
        },
        {
            type: 'modal',
            name: 'my-modal2',
            visible: false,
            title: '弹框表单',
            width: 700,
            onOk: ()=>{
                let result = UF('my-form').getValues();
                if (result) {
                    console.log(result);
                    UF('my-modal2').close();
                }
            },
            content: {
                type: 'form',
                name: 'my-form',
                items: [
                    {
                        type: 'input',
                        label: '专线SN',
                        name: 'line_sn',
                        rules: [{required: true, message: '主线SN不能为空'}],
                        cfg: {
                            placeholder: 'sn20134567'
                        }
                    },
                    {
                        type: 'select',
                        label: '机房',
                        name: 'idc_id',
                        rules: [{required: true, message: '机房不能为空'}],
                        cfg: {
                            source: '/uf-react/docs/php/data.php',
                            sourceDataHandle: data=>data.map(v=>{
                                return {value: v.name, label: v.name};
                            })
                        }
                    },
                    {
                        type: 'input',
                        label: '所属机构',
                        name: 'organization',
                        rules: [{required: true, message: '所属机构不能为空'}],
                        cfg: {
                            placeholder: '招商银行-百度钱包'
                        }
                    },
                    {
                        type: 'select',
                        label: '运营商',
                        name: 'operator',
                        default: '1',
                        cfg: {
                            options: [{
                                value: '1',
                                label: '移动'
                            }, {
                                value: '2',
                                label: '联通'
                            }]
                        }
                    }
                ]
                
            }
        }
    ]
};
const demo3 = {
    title: '确认对话框',
    description: '使用 `confirm()` 可以快捷地弹出确认框。',
    config: [
        {
            type: 'button',
            content: 'Confirm',
            onClick: ()=>{
                UF.Modal.confirm({
                    title: '你确定要删除此项内容吗？',
                    content: 'ID: 123...',
                    onOk() {
                        console.log('ok');
                    },
                    onCancel() {
                        console.log('cancel');
                    }
                });
            }
        }
    ]
};
const demo4 = {
    title: '信息提示',
    description: '各种类型的信息提示，只提供一个按钮用于关闭。',
    config: [
        {
            type: 'button',
            content: 'Info',
            onClick: ()=>{
                UF.Modal.info({
                    title: '这是一个信息提示。',
                    content: UF.init({
                        type: 'html',
                        content: '<div><p>some messages...some messages...</p><p>some messages...some messages...</p></div>'
                    }),
                    onOk() {
                        console.log('ok');
                    }
                });
            }
        },
        {
            type: 'button',
            content: 'Success',
            onClick: ()=>{
                UF.Modal.success({
                    title: '这是一个成功提示。',
                    content: 'some messages...some messages...'
                });
            }
        },
        {
            type: 'button',
            content: 'Error',
            onClick: ()=>{
                UF.Modal.error({
                    title: '这是一个错误提示。',
                    content: 'some messages...some messages...'
                });
            }
        },
        {
            type: 'button',
            content: 'Warning',
            onClick: ()=>{
                UF.Modal.warning({
                    title: '这是一个警告提示。',
                    content: 'some messages...some messages...'
                });
            }
        }
    ]
};

export default class ModalApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'modal.md';
        this.__init();
    }
    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}
