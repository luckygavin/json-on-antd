/**
 * @file 单选框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/radio.md';

const demo1 = {
    title: 'RadioButtons',
    description: '按钮形式的Radio，也可以当`button-group`使用',
    config: {
        type: 'radio-buttons',
        options: ['按钮0', '按钮1', '按钮2'],
        onValueChange(val) {
            console.log(val);
        }
    }
};

export default class Radio extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}