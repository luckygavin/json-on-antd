/**
 * @file 导航条
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/nav-bar.md';

export default class NavBar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}