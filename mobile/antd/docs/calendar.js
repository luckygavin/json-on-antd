/**
 * @file 日历
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/calendar.md';
let now = new Date();
const demo1 = {
    title: '基本用法',
    description: 'input输入框',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '基本用法'},
            content: [
                {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '选择日期范围',
                    onClick: function () {
                        UF('myCalendar1').set({
                            visible: true
                        });
                    }
                },
                {
                    type: 'calendar',
                    visible: false,
                    name: 'myCalendar1',
                    onConfirm: function (startTime, endTime) {
                        console.log(startTime, endTime);
                        UF('myCalendar1').set({
                            visible: false
                        });
                    },
                    onCancel: function () {
                        UF('myCalendar1').set({
                            visible: false
                        });
                    },
                    defaultDate: now,
                    minDate: new Date(+new Date() - 5184000000),
                    maxDate: new Date(+new Date() + 31536000000)
                },
                {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '选择日期时间区间',
                    onClick: function () {
                        UF('myCalendar2').set({
                            visible: true
                        });
                    }
                },
                {
                    type: 'calendar',
                    visible: false,
                    name: 'myCalendar2',
                    onConfirm: function (startTime, endTime) {
                        console.log(startTime, endTime);
                        UF('myCalendar2').set({
                            visible: false
                        });
                    },
                    onCancel: function () {
                        UF('myCalendar2').set({
                            visible: false
                        });
                    },
                    pickTime: true,
                    defaultDate: new Date(),
                    minDate: new Date(+new Date() - 5184000000),
                    maxDate: new Date(+new Date() + 31536000000)
                },
                {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '选择日期',
                    onClick: function () {
                        UF('myCalendar3').set({
                            visible: true
                        });
                    }
                },
                {
                    type: 'calendar',
                    visible: false,
                    name: 'myCalendar3',
                    onConfirm: function (startTime, endTime) {
                        console.log(startTime, endTime);
                        UF('myCalendar3').set({
                            visible: false
                        });
                    },
                    onCancel: function () {
                        UF('myCalendar3').set({
                            visible: false
                        });
                    },
                    mode: 'one',
                    defaultDate: new Date(),
                    minDate: new Date(+new Date() - 5184000000),
                    maxDate: new Date(+new Date() + 31536000000)
                },
                {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '水平进入',
                    onClick: function () {
                        UF('myCalendar4').set({
                            visible: true
                        });
                    }
                },
                {
                    type: 'calendar',
                    visible: false,
                    name: 'myCalendar4',
                    onConfirm: function (startTime, endTime) {
                        console.log(startTime, endTime);
                        UF('myCalendar4').set({
                            visible: false
                        });
                    },
                    onCancel: function () {
                        UF('myCalendar4').set({
                            visible: false
                        });
                    },
                    mode: 'one',
                    enterDirection: 'horizontal',
                    defaultDate: new Date(),
                    minDate: new Date(+new Date() - 5184000000),
                    maxDate: new Date(+new Date() + 31536000000)
                }
            ]
        }
    ]
};
export default class Calendar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}