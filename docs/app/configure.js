/**
 * @file 配置化页面说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Uf from 'uf/tools';

const Config = [
    {
        type: 'form',
        name: 'search-form',
        config: {
            title: '新增专线 - 第1步',
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
        }
    },
    {
        type: 'plain',
        name: 'plain',
        data: 'test'
    }
];

export default class Info extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = 'configure.md';
    }
    componentDidMount() {
        Uf.init(Config, 'configure-content');
    }
    
    render() {
        return (<div className="umpui-component">
            <h1 className="umpui-layer umpui-title">配置化页面说明</h1>
            <div id="configure-content"></div>
            {this.__getDoc()}
        </div>);
    }
}