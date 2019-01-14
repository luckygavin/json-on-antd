/**
 * @file 滑动输入
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/slider.md';

export default class Slider extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}