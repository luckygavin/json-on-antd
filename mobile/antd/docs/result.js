/**
 * @file 结果页
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/result.md';

export default class Result extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}