/**
 * @file 导航条
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/nav-bar.md';

const demo1 = {
    title: '基本用法',
    description: '主要针对`nav-bar`导航条组件',
    config: [
        {
            type: 'nav-bar',
            header: '基本用法',
            mode: 'light',
            icon: {
                type: 'icon',
                mode: 'left'
            },
            onLeftClick: () => {console.log('onLeftClick')},
            rightContent: [
                {
                    type: 'icon',
                    mode: 'search',
                    style: {marginRight: '16px'}
                },
                {
                    type: 'icon',
                    mode: 'ellipsis'
                }
            ],
            content: 'nav-bar'
        },
        {type: 'white-space'},
        {
            type: 'nav-bar',
            header: '基本用法',
            mode: 'dark',
            leftContent: 'Back',
            onLeftClick: () => {console.log('onLeftClick')},
            rightContent: [
                {
                    type: 'icon',
                    mode: 'search',
                    style: {marginRight: '16px'}
                },
                {
                    type: 'icon',
                    mode: 'ellipsis'
                }
            ],
            content: 'nav-bar'
        }
    ]
};
export default class NavBar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}