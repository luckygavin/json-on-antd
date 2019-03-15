/**
 * @file 上下留白
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/white-space.md';

const placeholder = {
    type: 'div',
    className: 'flex-demo-block',
    style: {margin: 0},
    content: 'Block'
};

const demo1 = {
    title: '基本用法',
    description: '上下留白，常用于内容分隔',
    config: [
        {type: 'white-space', size: 'xs'},
        placeholder,
        {type: 'white-space', size: 'sm'},
        placeholder,
        {type: 'white-space', size: 'lg'},
        placeholder,
        {type: 'white-space', size: 'xl'},
        placeholder
    ]
};
export default class WhiteSpace extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}