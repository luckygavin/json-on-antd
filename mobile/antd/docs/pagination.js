/**
 * @file 分页
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/pagination.md';

const demo1 = {
    title: '基本用法',
    description: '基本的分页器',
    config: [
        {
            type: 'pagination',
            total: 5,
            current: 1
        },
        {
            type: 'pagination',
            total: 5,
            current: 1,
            locale: {
                prevText: 'Prev',
                nextText: 'Next',
            }
        },
        {
            type: 'pagination',
            total: 5,
            current: 1,
            simple: true
        },
        {
            type: 'pagination',
            total: 5,
            current: 3,
            mode: 'number'
        },
        {
            type: 'pagination',
            total: 5,
            current: 3,
            mode: 'pointer'
        }
    ]
};
export default class Pagination extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}