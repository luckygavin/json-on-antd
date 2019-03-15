/**
 * @file 布局
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/flex.md';

const placeholder = {
    type: 'div',
    className: 'flex-demo-block',
    content: 'Block'
};
const demo1 = {
    title: '基本用法',
    description: 'Flex布局的一个封装，基本用法',
    config: [
        {type: 'div', content: '基本用法'},
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
                }
            ]
        },
        {
            type: 'flex',
            content: [
                {
                    type: 'flex-item',
                    key: 1,
                    content: placeholder
                },
                {
                    type: 'flex-item',
                    key: 2,
                    content: placeholder
                },
                {
                    type: 'flex-item',
                    key: 3,
                    content: placeholder
                },
                {
                    type: 'flex-item',
                    key: 4,
                    content: placeholder
                }
            ]
        },
        {type: 'div', content: 'wrap'},
        {
            type: 'flex',
            wrap: 'wrap',
            content: [
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                },
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                },
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                },
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                },
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                }
            ]
        },
        {type: 'div', content: 'Align'},
        {
            type: 'flex',
            justify: 'end',
            content: [
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                },
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                },
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                }
            ]
        },
        {
            type: 'flex',
            justify: 'center',
            content: [
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                },
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
                },
                {
                    type: 'div',
                    className: 'flex-demo-block',
                    style: {width: '80px'},
                    content: 'Block'
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