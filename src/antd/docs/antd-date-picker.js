/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';

const demo1 = {
    title: '基本用法',
    description: '最简单的用法，在浮层中可以选择或者输入日期',
    config: [
        {
            type: 'date-picker',
            style: {
                display: 'block',
                width: '200px',
                marginBottom: '15px'
            },
            value: 'current'
        },
        {
            type: 'month-picker',
            style: {
                display: 'block',
                width: '200px',
                marginBottom: '15px'
            },
            value: 'current',
            format: 'YYYY/MM'
        },
        {
            type: 'range-picker',
            style: {
                display: 'block'
            },
            value: ['2017/08/31', 'current'],
            format: 'YYYY/MM/DD'
        }
    ]
};
const demo2 = {
    title: '日期时间选择',
    description: '增加选择时间功能，当 showTime 为一个对象时，其属性会传递给内建的 TimePicker',
    config: [
        {
            type: 'date-picker',
            style: {
                display: 'block',
                width: '200px',
                marginBottom: '15px'
            },
            // placeholder: ['Select Time'],
            format: 'YYYY-MM-DD HH:mm:ss',
            showTime: true,
            onOk: function(value) {
                console.log('onOk:', value);
            }
        },
        {
            type: 'range-picker',
            style: {
                display: 'block'
            },
            placeholder: ['Start Time', 'End Time'],
            format: 'YYYY-MM-DD HH:mm:ss',
            showTime: { format: 'HH:mm' },
            onChange: function(value, dateString) {
                console.log('Selected Time: ', value);
                console.log('Formatted Selected Time: ', dateString);
            }
        }
    ]
}
const demo3 = {
    title: '额外的页脚',
    description: '在浮层中加入额外的页脚，以满足某些定制信息的需求',
    config: [
        {
            type: 'date-picker',
            style: {
                display: 'block',
                width: '200px',
                marginBottom: '15px'
            },
            renderExtraFooter: function() {
                return {
                    type: 'button',
                    content: '额外的页脚'
                };
            }
        },
        {
            type: 'range-picker',
            style: {
                display: 'block'
            },
            renderExtraFooter: function() {
                return [
                    '额外的页脚 ',
                    {type: 'button', content: '点我'}
                ];
            }
        }
    ]
};
export default class DatePicker extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-date-picker.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3);
    }
}