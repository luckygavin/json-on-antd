/**
 * @file 开关
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/switch.md';

export default class Switch extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}