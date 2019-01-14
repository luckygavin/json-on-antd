/**
 * @file 折叠面板
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/collapse.md';

export default class Collapse extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}