/**
 * @file 气泡
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/popover.md';

export default class Popover extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}