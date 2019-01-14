/**
 * @file 日历
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/calendar.md';

export default class Calendar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}