/**
 * @file 标签页
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/tabs.md';

const demo1 = {
    title: '基本用法',
    description: '基本的分页器',
    config: [
        {
            type: 'div',
            style: {background: '#fff'},
            content: {
                type: 'tabs',
                swipeable: false,
                animated: false,
                tabs: [
                    {title: '全部订单'},
                    {title: '未到货'},
                    {title: '已到货'},
                    {title: '已交付'}
                ],
                content: [
                    {type: 'div', content: 1, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                    {type: 'div', content: 2, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                    {type: 'div', content: 3, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                    {type: 'div', content: 4, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}}
                ]
            }
        },
        {type: 'white-space'},
        {
            type: 'div',
            style: {background: '#fff'},
            content: {
                type: 'tabs',
                swipeable: false,
                initialPage: 1,
                tabBarPosition: 'bottom',
                tabs: [
                    {title: '全部订单'},
                    {title: '未到货'},
                    {title: '已到货'},
                    {title: '已交付'}
                ],
                content: [
                    {type: 'div', content: 1, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                    {type: 'div', content: 2, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                    {type: 'div', content: 3, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                    {type: 'div', content: 4, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}}
                ]
            }
        },
        {type: 'white-space'}
    ]
};
const demo2 = {
    title: '垂直样式',
    description: '垂直样式',
    config: [
        {
            type: 'div',
            style: {background: '#fff', height: '150px'},
            content: [
                {
                    type: 'div',
                    style: {background: '#fff', height: '150px'},
                    content: {
                        type: 'tabs',
                        initalPage: 2,
                        tabBarPosition: 'left',
                        tabDirection: 'vertical',
                        tabs: [
                            {title: '全部订单'},
                            {title: '未到货'},
                            {title: '已到货'},
                            {title: '已交付'}
                        ],
                        content: [
                            {type: 'div', content: 1, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                            {type: 'div', content: 2, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                            {type: 'div', content: 3, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}},
                            {type: 'div', content: 4, style: {display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff'}}
                        ]
                    }
                },
                {type: 'white-space'}
            ]
        },
    ]
};
export default class Tabs extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1, demo2);
    }
}