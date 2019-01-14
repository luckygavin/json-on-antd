/**
 * @file 通告栏
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/notice-bar.md';

export default class NoticeBar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}