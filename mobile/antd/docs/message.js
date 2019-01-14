/**
 * @file 提示信息
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/message.md';

export default class Message extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}