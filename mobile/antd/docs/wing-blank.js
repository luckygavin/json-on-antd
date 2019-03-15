/**
 * @file 两翼留白
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/wing-blank.md';
const placeholder = {
    type: 'div',
    className: 'flex-demo-block',
    content: 'Block'
};
const demo1 = {
    title: '两翼留白',
    description: '布局控件',
    config: ['lg', 'md', 'sm'].map(size=>({
        type: 'wing-blank',
        size: size,
        content: placeholder
    }))
};

export default class WingBlank extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}