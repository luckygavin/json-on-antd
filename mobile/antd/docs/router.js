/**
 * @file 路由
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from 'src/router/docs/markdown.md';

export default class Router extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}