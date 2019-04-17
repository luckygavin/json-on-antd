/**
 * @file 分步器
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/stepper.md';
const demo1 = {
    title: '基本用法',
    description: '步进器基本用法',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '基本用法'},
            content: [
                {
                    type: 'list-item',
                    content: '开关',
                    extra: {
                        type: 'stepper',
                        showNumber: true,
                        style: {width: '100%', minWidth: '100px'},
                        max: 10,
                        min: 1,
                        value: 2,
                        onChange: function (val) {
                            console.log(val);
                        }
                    }
                },
                {
                    type: 'list-item',
                    content: '开关',
                    extra: {
                        type: 'stepper',
                        showNumber: true,
                        style: {width: '100%', minWidth: '100px'},
                        disabled: true,
                        value: 2,
                    }
                },
            ]
        }
    ]
};
export default class Stepper extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}