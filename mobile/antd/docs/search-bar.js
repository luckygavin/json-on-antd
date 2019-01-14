/**
 * @file 搜索框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/search-bar.md';

export default class SearchBar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}