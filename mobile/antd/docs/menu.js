/**
 * @file 菜单
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/menu.md';

export default class Menu extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}