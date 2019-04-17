/**
 * @file 多行输入
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/textarea.md';
const demo1 = {
    title: '基本用法',
    description: 'input输入框',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '基本用法'},
            content: [
                {
                    type: 'textarea',
                    placeholder: '请填写说明',
                    title: '标题',
                    clear: true,
                    autoHeight: true,

                }
            ]
        },
        {
            type: 'list',
            header: {type: 'span', content: '高度自适应/固定高度'},
            content: [
                {
                    type: 'textarea',
                    placeholder: '请填写说明',
                    title: '高度自适应',
                    clear: true,
                    autoHeight: true,
                    labelNumber: 5
                },
                {
                    type: 'textarea',
                    placeholder: '请填写说明',
                    title: '固定高度',
                    clear: true,
                    rows: 3
                }
            ]
        },
        {
            type: 'list',
            header: {type: 'span', content: '计数功能'},
            content: [
                {
                    type: 'textarea',
                    placeholder: '请填写说明',
                    rows: 5,
                    count: 100,
                    value: '计数功能,我的意见是...'
                }
            ]
        },
    ]
};
export default class Textarea extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}