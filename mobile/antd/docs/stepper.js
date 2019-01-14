/**
 * @file 分步器
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/stepper.md';

export default class Stepper extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}