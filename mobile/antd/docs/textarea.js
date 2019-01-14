/**
 * @file 多行输入
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/textarea.md';

export default class Textarea extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}