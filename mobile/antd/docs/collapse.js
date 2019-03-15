/**
 * @file 折叠面板
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/collapse.md';

const demo1 = {
    title: '基本用法',
    description: '折叠面板',
    config: [
        {
            type: 'collapse',
            content: [
                {
                    type: 'panel',
                    key: 1,
                    content: '选项一'
                },
                {
                    type: 'panel',
                    key: 2,
                    content: '选项二'
                },
                {
                    type: 'panel',
                    key: 3,
                    content: '选项三'
                }
            ]
        }
    ]
};
export default class Collapse extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}