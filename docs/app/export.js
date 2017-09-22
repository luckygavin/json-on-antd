/**
 * @file 配置化树形控件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import Export from 'uf/export';

// 以下均为模拟数据，在实际应用中可根据情况获取
let commonHeaders = [
    {key: 'id', title: 'ID'},
    {key: 'hostname', title: '主机名'},
    {key: 'sn', title: 'SN'},
    {key: 'status', title: '状态'},
    {key: 'model_id', title: '型号'},
    {key: 'rack', title: '机架位'}
];
let config1 = {
    type: 'export',
    // 导出数据接口的url（一般可直接使用分页接口）
    source: 'docs/php/download.php',
    // 表格中要显示的字段，以及字段对应的表头
    // headers: {'id': 'ID', 'hostname': '主机名', 'sn': 'SN', 'status': '状态', 'model_id': '型号', 'rack': '机架位'},
    headers: commonHeaders,
    params: {
        isExport: true,
        container_id: 484,
        zone: 'china',
        type:'server'
    },
    content: {
        type: 'button',
        mode: 'primary',
        style: 'margin-right: 6px',
        content: '默认导出'
    }
    // 当前表格所有数据的总条数
    // total: 720
};
let config2 = {
    type: 'export',
    source: 'docs/php/download.php',
    headers: commonHeaders,
    params: {
        isExport: true,
        container_id: 484,
        zone: 'china',
        type:'server'
    },
    total: 720,
    fileName: '异步导出CSV文件demo',
    fileFormat: '.csv',
    message: {
        page1: ['请注意，程序会自动根据分页大小依次向服务端请求数据，全部请求完毕后生成CSV下载。不要将分页大小设置的过大，以免服务器端查询数据超时。'],
        page2: ['如果下载的文件用Excel或者其他文本编辑器打开提示文件格式与扩展名不一致，请选择“是”，直接用打开即可。', '为防止常规单元格式下excel的自动转化，所有字段均转化为文本！']
    },
    content: {
        type: 'button',
        mode: 'primary',
        style: 'margin-right: 6px',
        content: '提示导出_CSV格式'
    }
};
let config3 = {
    type: 'export',
    headers: commonHeaders,
    data: [{'id': '1924', 'hostname': 'tc-click-log1-off.tc', 'sn': '686N32X',
        'status': '14', 'model_id': '15', 'rack': 'TC706-03-11-4机架位',
        'container_id': '488', 'rms_product_id': '174'
    }],
    content: {
        type: 'button',
        mode: 'primary',
        style: 'margin-right: 6px',
        content: '同步导出'
    }
};

let demo1 = {
    title: '三种常用用法',
    description: '**默认导出：**比较简洁的导出界面，通过接口获取数据。**提示导出：**可以定义一些提示信息，比如说明导出内容，也是异步的数据。**同步导出：**直接把前端已有数据导出成文件，多用于前端分页的表格中。',
    config: [
        config1,
        config2,
        config3
    ]
};

export default class ExportApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = 'export.md';
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }

}
