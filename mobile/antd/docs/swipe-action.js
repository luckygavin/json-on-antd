/**
 * @file 滑动操作
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/swipe-action.md';

export default class SwipeAction extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}