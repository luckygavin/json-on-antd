/**
 * @file 输入框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/input.md';

export default class Input extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}