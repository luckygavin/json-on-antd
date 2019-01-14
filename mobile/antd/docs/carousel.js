/**
 * @file 轮播图
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/carousel.md';

export default class Carousel extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}