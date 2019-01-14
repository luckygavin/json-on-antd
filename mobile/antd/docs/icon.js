/**
 * @file 图标
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/icon.md';

const iconList = [
    'check-circle', 'check', 'check-circle-o',
    'cross-circle', 'cross', 'cross-circle-o',
    'up', 'down', 'left',
    'right', 'ellipsis',
    'loading', 'search'
];

const demo1 = {
    title: '可用图标',
    description: '目前只支持只支持内置的几种类型。',
    config: {
        type: 'grid',
        columnNum: 3,
        hasLine: false,
        activeStyle: false,
        items: iconList.map(mode=>{
            return {
                icon: {
                    type: 'icon',
                    mode: mode,
                },
                text: mode
            };
        })
    }
};

const demo2 = {
    title: '大小控制',
    description: '可通过`size`调节大小。',
    config: {
        type: 'grid',
        columnNum: 5,
        hasLine: false,
        activeStyle: false,
        items: ['xxs', 'xs', 'sm', 'md', 'lg'].map(i=>{
            return {
                icon: {
                    type: 'icon',
                    mode: 'search',
                    size: i
                }
            }
        })
    }
};

export default class Icon extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1, demo2);
    }
}
