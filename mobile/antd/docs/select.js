/**
 * @file 选择框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/select.md';

export default class Select extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}