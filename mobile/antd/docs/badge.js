/**
 * @file 徽标数
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/badge.md';
const demo1 = {
    title: '基本用法',
    description: '搜索栏基本用法',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '基本用法'},
            content: [
                {
                    type: 'list-item',
                    extra: 'extra content',
                    arrow: 'horizontal',
                    content: [
                        {type: 'badge', dot: true, content: {
                            type: 'span',
                            style: {
                                width: '26px', height: '26px', background: '#ddd',
                                display: 'inline-block'
                            }
                        }},
                        {type: 'span', style: {marginLeft: '12px'}, content: 'Dot badge'}
                    ]
                },
                {
                    type: 'list-item',
                    thumb: "https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png",
                    extra: {
                        type: 'badge',
                        text: 77,
                        overflowCount: 55
                    },
                    arrow: 'horizontal',
                    content: 'content'
                }
            ]
        },
    ]
};
export default class Badge extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}