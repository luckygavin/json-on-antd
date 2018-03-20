/**
 * @file 配置化树形控件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src/tools';
import md from './markdown.md';

let demo1 = {
    title: '基本用法',
    description: '默认高度自动根据内容调整',
    config: [
        {
            type: 'echarts',
            name: 'my-echarts',
            style: {minWidth: 600, height: 400},
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量1',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }, {
                name: '销量2',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
        {
            type: 'button',
            content: '刷新数据',
            onClick() {
                UF('my-echarts').setOption({
                    series: [{
                        data: [5, 20, 36, 10, 10, 20].sort((a, b)=>Math.random() > 0.5)
                    }, {
                        data: [5, 20, 36, 10, 10, 20].sort((a, b)=>Math.random() > 0.5)
                    }]
                });
            }
        }
    ]
};

export default class ExportApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.state = {};
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getDemoSingle(demo1);
    }

}
