/**
 * @file 两翼留白
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/wing-blank.md';

const demo1 = {
    title: '布局控件',
    description: '布局控件',
    config: ['lg', 'md', 'sm'].map(size=>({
        type: 'wing-blank',
        size: size,
        content: {
            type: 'div',
            className: 'flex-demo-block'
        }
    }))
};

export default class WingBlank extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}