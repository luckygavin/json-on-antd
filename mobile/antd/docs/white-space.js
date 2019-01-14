/**
 * @file 上下留白
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/white-space.md';

export default class WhiteSpace extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}