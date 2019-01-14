/**
 * @file 布局
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/flex.md';

const placeholder = {type: 'div', className: 'flex-demo-block'};
const demo1 = {
    title: '基本用法',
    description: 'Flex布局的一个封装，基本用法',
    config: [
        {
            type: 'flex',
            content: [
                {
                    type: 'flex-item',
                    content: placeholder
                },
                {
                    type: 'flex-item',
                    content: placeholder
                }
            ]
        },
        {
            type: 'flex',
            content: [
                {
                    type: 'flex-item',
                    content: placeholder
                },
                {
                    type: 'flex-item',
                    content: placeholder
                },
                {
                    type: 'flex-item',
                    content: placeholder
                },
                {
                    type: 'flex-item',
                    content: placeholder
                }
            ]
        }
    ]
};

export default class Flex extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}