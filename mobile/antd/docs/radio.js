/**
 * @file 单选框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/radio.md';

export default class Radio extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}