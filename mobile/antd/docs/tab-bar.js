/**
 * @file 标签栏
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/tab-bar.md';
const demo1 = {
    title: 'APP型选项卡',
    description: '多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。',
    config: [
        {
            type: 'div',
            content: {
                type: 'tab-bar',
                unselectedTintColor: '#949494',
                tintColor: '#33A3F4',
                barTintColor: 'white',
                content: [
                    {
                        type: 'tab-bar-item',
                        title: 'LIFE',
                        key: 'life',
                        icon: {
                            type: 'icon',
                            mode: 'search'
                        },
                        // badge: 1,
                        // 'data-seed': 'logId',
                        content: {
                            type: 'div',
                            style: {
                                paddingTop: '60px',
                                textAlign: 'center',
                                height: '100%',
                                background: '#fff'
                            },
                            content: 'this is wonderful life!'
                        }
                    },
                    {
                        type: 'tab-bar-item',
                        title: 'LIFE2',
                        key: 'life2',
                        icon: {
                            type: 'icon',
                            mode: 'search'
                        },
                        // badge: 1,
                        // 'data-seed': 'logId',
                        content: 'hhhhh'
                    }
                ]
            }
        }
    ]
};
export default class TabBar extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}