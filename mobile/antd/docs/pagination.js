/**
 * @file 分页
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/pagination.md';

export default class Pagination extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}