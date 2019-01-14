/**
 * @file 下拉刷新
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/pull-refresh.md';

export default class PullRefresh extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}