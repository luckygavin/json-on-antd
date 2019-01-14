/**
 * @file 列表
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/list.md';

export default class List extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}