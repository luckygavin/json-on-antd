/**
 * @file 加载中
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/loading.md';

export default class Loading extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}