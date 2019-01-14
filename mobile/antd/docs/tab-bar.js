/**
 * @file 标签栏
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/tab-bar.md';

export default class TabBar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}