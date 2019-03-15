/**
 * @file 复选框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/checkbox.md';
const demo1 = {
    title: '基本用法',
    description: '复选框',
    config: [
        {
            type: 'list',
            header: 'checkbox-item demo',
            content: [
                {
                    type: 'checkbox-item',
                    key: 1,
                    content: '选项一'
                },
                {
                    type: 'checkbox-item',
                    key: 2,
                    content: '选项二'
                },
                {
                    type: 'checkbox-item',
                    key: 3,
                    content: '选项三'
                }
            ]
        }
    ]
};
export default class Checkbox extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}