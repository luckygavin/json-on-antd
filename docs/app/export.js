/**
 * @file 配置化树形控件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/BaseDoc.js';
import Export from 'uf/export';
import {Button} from 'antd';

export default class ExportApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = 'export.md';
        this.__init();
    }
    render() {
        // 以下均为模拟数据，在实际应用中可根据情况获取
        let commonHeaders = [
            {
                key: 'id',
                title: 'ID'
            },
            {
                key: 'hostname',
                title: '主机名'
            },
            {
                key: 'sn',
                title: 'SN'
            },
            {
                key: 'status',
                title: '状态'
            },
            {
                key: 'model_id',
                title: '型号'
            },
            {
                key: 'rack',
                title: '机架位'
            }
        ];
        let config1 = {
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
            // 当前表格所有数据的总条数
            // total: 720
        };
        let config2 = {
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
            }
        };
        let config3 = {
            headers: commonHeaders
        };
        let data3 = [{'id': '1924', 'hostname': 'tc-click-log1-off.tc', 'sn': '686N32X',
            'status': '14', 'model_id': '15', 'rack': 'TC706-03-11-4机架位',
            'container_id': '488', 'rms_product_id': '174'}
        ];
        return (
            <div>
                <Export config={config1}>
                    <Button key='1' type = "primary">默认导出</Button>
                </Export>
                &nbsp;&nbsp;&nbsp;
                <Export config={config2}>
                    <Button key='2' type = "primary">提示导出CSV文件</Button>
                </Export>
                &nbsp;&nbsp;&nbsp;
                <Export config={config3} data={data3}>
                    <Button key='3' type = "primary">同步导出</Button>
                </Export>
            </div>
        );
    }

}
