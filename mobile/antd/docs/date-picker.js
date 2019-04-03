/**
 * @file 日期选择
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/date-picker.md';
const demo1 = {
    title: '基本用法',
    description: 'select 单选框',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '时间范围'},
            content: [
                {
                    type: 'date-picker',
                    name: 'createTimeBegin',
                    mode: 'date',
                    extra: '开始时间',
                    // format: 'YYYY-MM-DD',
                    content: {
                        type: 'list-item',
                        arrow: 'horizontal',
                        content: '开始时间'
                    }
                },
                {
                    type: 'date-picker',
                    name: 'createTimeEnd',
                    mode: 'date',
                    extra: '截止时间',
                    format: 'YYYY-MM-DD',
                    content: {
                        type: 'list-item',
                        arrow: 'horizontal',
                        content: '截止时间'
                    }
                }
            ]
        },
        {
            type: 'list',
            header: {type: 'span', content: '时间点'},
            content: {
                type: 'date-picker',
                extra: 'YYYY-MM-DD hh:mm',
                content: {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '时/分'
                }
            }
        },
        {
            type: 'list',
            header: {type: 'span', content: 'Time (am/pm)'},
            content: {
                type: 'date-picker',
                mode: 'time',
                minuteStep: 2,
                use12Hours: true,
                extra: 'hh:mm',
                content: {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: 'Time (am/pm)'
                }
            }
        }
    ]
};
export default class DatePicker extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}