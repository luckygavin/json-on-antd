/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

import UF from 'src/tools';
import md from './markdown.md';

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
    description: '点击确定时会自动把表单数据提交到api。调用弹框的`show`方法时传入数据，数据会自动填充到表单中。',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: '新增弹框',
            actionType: 'call',
            actionTarget: 'my-modal2.show'
        },
        {
            type: 'button',
            mode: 'primary',
            content: '编辑弹框',
            // actionType: 'call',
            // actionTarget: 'my-modal2.show',
            onClick: ()=>UF('my-modal2').show({line_sn: 'sn20134567', idc_id: 'TC', other: 'other data'})
        },
        {
            type: 'modal',
            name: 'my-modal2',
            visible: false,
            title: '新增/编辑弹框',
            width: 700,
            api: 'docs/php/submit.php',
            form: {
                items: [
                    {
                        type: 'input',
                        label: '专线SN',
                        name: 'line_sn',
                        rules: [{required: true, message: '主线SN不能为空'}],
                        placeholder: 'sn20134567'
                    },
                    {
                        type: 'select',
                        label: '机房',
                        name: 'idc_id',
                        rules: [{required: true, message: '机房不能为空'}],
                        source: 'docs/php/data.php',
                        sourceHandler: data=>data.map(v=>{
                            return {value: v.name, label: v.name};
                        })
                    }
                ]
                
            }
        }
    ]
};
const demo3 = {
    title: '确认信息弹框',
    description: '比如删除数据是，提示是否要删除xxx数据。',
    config: [
        {
            type: 'button',
            mode: 'primary',
            content: '删除提示',
            onClick: ()=>UF('my-modal3').show({id: 123, other: 'other data'})
        },
        {
            type: 'modal',
            name: 'my-modal3',
            visible: false,
            title: '删除数据：',
            api: 'docs/php/submit.php',
            message: (data)=>{
                return {
                    type: 'p',
                    content: '确定要删除以下选中数据吗？' + data.id
                };
            }
        }
    ]
};
const demo4 = {
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
const demo5 = {
    title: '信息提示',
    description: '各种类型的信息提示，只提供一个按钮用于关闭。',
    config: [
        {
            type: 'button',
            content: 'Info',
            onClick: ()=>{
                UF.Modal.info({
                    title: '这是一个信息提示。',
                    content: {
                        type: 'html',
                        content: '<div><p>some messages...some messages...</p><p>some messages...some messages...</p></div>'
                    },
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
                let ref = UF.Modal.warning({
                    title: '这是一个警告提示。',
                    content: '2s后自动关闭...'
                });
                setTimeout(function() {
                    ref.destroy();
                }, 2000);
            }
        }
    ]
};

export default class ModalApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4, demo5);
    }
}
