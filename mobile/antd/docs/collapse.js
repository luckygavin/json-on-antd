/**
 * @file 折叠面板
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/collapse.md';

const demo1 = {
    title: '基本用法',
    description: '折叠面板',
    config: [
        {
            type: 'collapse',
            content: [
                {
                    type: 'panel',
                    header: 'Title1',
                    key: 1,
                    content: {
                        type: 'list',
                        content: [
                            {type: 'list-item', content: 'content1', key: '1-1'},
                            {type: 'list-item', content: 'content1', key: '1-2'},
                            {type: 'list-item', content: 'content1', key: '1-3'}
                        ]
                    }
                },
                {
                    type: 'panel',
                    header: 'Title2',
                    key: 2,
                    content: {
                        type: 'div',
                        style: {
                            padding: '10px'
                        },
                        content: 'this is panel content2 or other'
                    }
                },
                {
                    type: 'panel',
                    header: 'Title3',
                    key: 3,
                    content: {
                        type: 'div',
                        style: {
                            padding: '10px'
                        },
                        content: 'text text text text text text text text text text text text text text text'
                    }
                }
            ]
        }
    ]
};
const demo2 = {
    title: '手风琴模式',
    description: '通过accordion字段设定是否选用手风琴模式',
    config: [
        {
            type: 'collapse',
            accordion: true,
            content: [
                {
                    type: 'panel',
                    header: 'Title1',
                    key: 1,
                    content: {
                        type: 'list',
                        content: [
                            {type: 'list-item', content: 'content1', key: '1-1'},
                            {type: 'list-item', content: 'content1', key: '1-2'},
                            {type: 'list-item', content: 'content1', key: '1-3'}
                        ]
                    }
                },
                {
                    type: 'panel',
                    header: 'Title2',
                    key: 2,
                    content: {
                        type: 'div',
                        style: {
                            padding: '10px'
                        },
                        content: 'this is panel content2 or other'
                    }
                },
                {
                    type: 'panel',
                    header: 'Title3',
                    key: 3,
                    content: {
                        type: 'div',
                        style: {
                            padding: '10px'
                        },
                        content: 'text text text text text text text text text text text text text text text'
                    }
                }
            ]
        }
    ]
};
export default class Collapse extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1, demo2);
    }
}