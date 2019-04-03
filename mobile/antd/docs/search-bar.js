/**
 * @file 搜索框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/search-bar.md';
const demo1 = {
    title: '基本用法',
    description: '搜索栏基本用法',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '基本用法'},
            content: {
                type: 'search-bar',
                placeholder: 'Search',
                maxLength: 8
            }
        },
        {type: 'white-space'},
        {
            type: 'list',
            header: {type: 'span', content: '基本用法'},
            content: {
                type: 'search-bar',
                placeholder: 'Search',
                value: '美食',
                onSubmit: function (val) {
                    console.log('onSubmit', val);
                },
                onClear: function (val) {
                    console.log('onClear', val);
                },
                onCancel: function (val) {
                    console.log('onCancel', val);
                },
                showCancelButton: true
            }
        }
    ]
};
export default class SearchBar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}