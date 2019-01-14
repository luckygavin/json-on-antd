/**
 * @file 复选框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/checkbox.md';

export default class Checkbox extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}