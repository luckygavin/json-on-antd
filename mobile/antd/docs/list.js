/**
 * @file 列表
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/list.md';

const demo1 = {
    title: '基本用法',
    description: '主要针对`List`组件',
    config: [
        {
            type: 'list',
        }
    ]
};

export default class List extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}