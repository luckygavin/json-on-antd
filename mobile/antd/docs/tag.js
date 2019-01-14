/**
 * @file 标签
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/tag.md';

export default class Tag extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}