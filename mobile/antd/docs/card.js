/**
 * @file 卡片
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/card.md';

export default class Card extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}