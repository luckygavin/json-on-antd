/**
 * @file 日期选择
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/date-picker.md';

export default class DatePicker extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}