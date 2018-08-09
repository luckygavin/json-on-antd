/**
 * @file 配置化树形控件，Demo及文档说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';
import md from './markdown.md';

let demo1 = {
    title: '基本用法',
    description: '默认高度自动根据内容调整',
    config: [
        {
            type: 'echarts',
            name: 'my-echarts',
            style: {minWidth: 600, height: 400},
            source: {
                url: 'docs/php/data.php?type=echarts',
                target: 'series',
                params: {},
                handler: function (data) {
                    let params = UF('my-echarts').get('source.params');
                    return data.map(v=>{
                        v.type = params.tp || 'bar';
                        return v;
                    });
                }
            },
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量1',
                type: 'bar'
            }, {
                name: '销量2',
                type: 'bar'
            }]
        },
        {
            type: 'button',
            content: '条形图',
            onClick() {
                UF('my-echarts').set({
                    source: {
                        params: {
                            tp: 'bar',
                            s: Date.now()
                        }
                    }
                });
            }
        },
        {
            type: 'button',
            content: '折线图',
            onClick() {
                UF('my-echarts').set({
                    className: 'aaa',
                    source: {
                        params: {
                            tp: 'line',
                            s: Date.now()
                        }
                    }
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
