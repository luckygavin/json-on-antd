/**
 * @file 标签页
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/tabs.md';

export default class Tabs extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}