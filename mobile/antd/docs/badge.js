/**
 * @file 徽标数
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/badge.md';

export default class Badge extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}