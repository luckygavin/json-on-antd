/**
 * @file 抽屉
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/drawer.md';

const demo1 = {
    title: '基本用法',
    description: '侧拉弹出菜单',
    config: {
        type: 'div',
        content: [
            {
                type: 'nav-bar',
                icon: {
                    type: 'icon',
                    mode: 'ellipsis'
                },
                content: 'Basic'
            },
            {
                type: 'drawer',
                enableDragHandle: true,
                open: true,
                sidebar: {
                    type: 'list',
                    content: (new Array(4)).map(i=>{
                        return {
                            type: 'item',
                            thumb: '../../public/img/demo-icon.png',
                            content: '菜单项-' + i
                        }
                    })
                },
                content: '点左上角按钮查看'
            }
        ]
    }
};

export default class Drawer extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}