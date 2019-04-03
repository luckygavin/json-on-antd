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
                content: 'Basic',
                onLeftClick: function () {
                    console.log(UF('myDrawer'));
                    UF('myDrawer').set({
                        open: !UF('myDrawer').get('open')
                    });
                }
            },
            {
                type: 'drawer',
                enableDragHandle: true,
                name: 'myDrawer',
                style: {
                    // 注意加以下样式
                    minHeight: document.documentElement.clientHeight,
                    position: 'relative',
                    overflow: 'auto'
                },
                open: true,
                className: 'my-drawer',
                contentStyle: {
                    color: '#A6A6A6',
                    textAlign: 'center',
                    paddingTop: 42
                },
                enableDragHandle: true,
                onOpenChange: function () {
                    UF('myDrawer').set({
                        open: !UF('myDrawer').get('open')
                    });
                },
                sidebar: {
                    type: 'list',
                    header: 'this is list',
                    content: [1, 2, 3, 4].map(i=>{
                        return {
                            type: 'list-item',
                            // thumb: '../../public/img/demo-icon.png',
                            extra: 'extra',
                            content: '菜单项-' + i,
                        }
                    })
                },
                content: '点左上角按钮查看'
            }
            // 注意加以下样式
            // .my-drawer {
            //     position: relative;
            //     overflow: auto;
            //     -webkit-overflow-scrolling: touch;
            // }
            // .my-drawer .am-drawer-sidebar {
            //     background-color: #fff;
            //     overflow: auto;
            //     -webkit-overflow-scrolling: touch;
            // }
            // .my-drawer .am-drawer-sidebar .am-list {
            //     width: 300px;
            //     padding: 0;
            // }
        ]
    }
};
const demo2 = {
    title: '嵌入文档模式',
    description: '嵌入到文档流中',
    config: {
        type: 'div',
        content: [
            {
                type: 'nav-bar',
                icon: {
                    type: 'icon',
                    mode: 'ellipsis'
                },
                content: 'Docked in document',
                onLeftClick: function () {
                    console.log(UF('myDrawer'));
                    UF('myDrawer').set({
                        docked: !UF('myDrawer').get('docked')
                    });
                }
            },
            {
                type: 'drawer',
                enableDragHandle: true,
                name: 'myDrawer',
                style: {
                    // 注意加以下样式
                    minHeight: document.documentElement.clientHeight,
                    position: 'relative',
                    overflow: 'auto'
                },
                docked: true,
                className: 'my-drawer',
                contentStyle: {
                    color: '#A6A6A6',
                    textAlign: 'center',
                    paddingTop: 42
                },
                sidebarStyle: {
                    border: '1px solid #ddd'
                },
                sidebar: {
                    type: 'list',
                    header: 'this is list',
                    content: [1, 2, 3, 4].map(i=>{
                        return {
                            type: 'list-item',
                            // thumb: '../../public/img/demo-icon.png',
                            extra: 'extra',
                            content: '菜单项-' + i,
                        }
                    })
                },
                content: '点左上角按钮查看'
            }
            // 注意加以下样式
            // .my-drawer {
            //     position: relative;
            //     overflow: auto;
            //     -webkit-overflow-scrolling: touch;
            // }
            // .my-drawer .am-drawer-sidebar {
            //     background-color: #fff;
            //     overflow: auto;
            //     -webkit-overflow-scrolling: touch;
            // }
            // .my-drawer .am-drawer-sidebar .am-list {
            //     width: 300px;
            //     padding: 0;
            // }
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
        return this.__getMobileDemo(demo1, demo2);
    }
}