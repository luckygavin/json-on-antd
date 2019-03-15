/**
 * @file 选择框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/picker.md';

export default class Picker extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}