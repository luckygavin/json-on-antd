/**
 * @file 进度条
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/progress.md';

export default class Progress extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}