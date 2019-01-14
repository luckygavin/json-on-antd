/**
 * @file 弹框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/modal.md';

export default class Modal extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}