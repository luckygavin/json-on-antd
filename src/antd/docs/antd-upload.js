/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';

const demo1 = {
    title: '基本',
    description: '最简单的用法。',
    config: {
        type: 'upload',
        beforeUpload(file, fileList) {
            console.log(file, fileList);
            return false;
        },
        defaultFileList: [
            {
                uid: 1,
                name: 'xxx.png',
                status: 'done',
                reponse: 'Server Error 500',  // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            },
            {
                uid: 2,
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
            }
        ],
        content: {
            type: 'button',
            mode: 'primary',
            icon: 'upload',
            content: 'Upload'
        }
    }
};
const demo2 = {
    title: '基本',
    description: '最简单的用法。',
    config: {
        type: 'dragger',
        name: 'file',
        multiple: true,
        showUploadList: false,
        content: [
            {type: 'p', className: 'ant-upload-drag-icon', content: {type: 'icon', mode: 'inbox'}},
            {type: 'p', className: 'ant-upload-drag-text', content: 'Click or drag file to this area to upload'},
            {type: 'p', className: 'ant-upload-drag-hint', content: 'Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files'}
        ]
    }
};

export default class Upload extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-upload.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2);
    }
}