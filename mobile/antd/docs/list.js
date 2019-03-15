/**
 * @file 列表
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/list.md';
import uf from 'src';

const demo1 = {
    title: '基本用法',
    description: '主要针对`List`组件',
    config: [
        {
            type: 'list',
            header: '基本用法',
            content: [
                {
                    type: 'list-item',
                    content: 'Title',
                    extra: 'extra'
                }
            ]
        },
        {
            type: 'list',
            header: 'subtitle',
            content: [
                {
                    type: 'list-item',
                    content: [
                        'Title1',
                        {
                            type: 'list-item-brief',
                            content: 'subtitle1'
                        }
                    ],
                    arrow: 'horizontal'
                },
                {
                    type: 'list-item',
                    content: [
                        'Title2',
                        {
                            type: 'list-item-brief',
                            content: 'subtitle2'
                        }
                    ],
                    arrow: 'horizontal'
                }
            ]
        },
        {
            type: 'list',
            header: '含有图标',
            content: [
                {
                    type: 'list-item',
                    content: [
                        'Title',
                        {
                            type: 'list-item-brief',
                            content: 'subtitle'
                        }
                    ],
                    thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                    arrow: 'horizontal',
                    multipleLine: true,
                    onClick: () => {}
                }
            ]
        },
    ]
};
const demo2 = {
    title: '表单用法',
    description: '主要针对与输入型组件进行结合形成表单',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '选择器'},
            content: {
                type: 'select',
                cols: 2,
                title: '季节',
                cascade: false,
                content: {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '季节'
                },
                options: [
                    [
                        {
                            label: '2013',
                            value: '2013',
                        },
                        {
                            label: '2014',
                            value: '2014',
                        }
                    ],
                    [
                        {
                            label: '春',
                            value: '春',
                        },
                        {
                            label: '夏',
                            value: '夏',
                        }
                    ],
                ]
            }
        },
        {
            type: 'list',
            header: {type: 'span', content: '输入框'},
            content: {
                type: 'input',
                placeholder: '请填写'
            }
        },
        {
            type: 'list',
            header: {type: 'span', content: '日期选择'},
            content: {
                type: 'date-picker',
                mode: 'date',
                format: 'YYYY-MM-DD',
                content: {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '日期选择'
                }
            }
        },
        {
            type: 'list',
            header: {type: 'span', content: '组合选择'},
            content: [
                {
                    type: 'select',
                    key: 'purchaseEventId',
                    name: 'purchaseEventId',
                    cols: 1,
                    title: '选择' + '采购季',
                    cascade: false,
                    content: {
                        type: 'list-item',
                        arrow: 'horizontal',
                        content: '采购季'
                    },
                    options: [[
                        {value: '1', label: '采购季1'},
                        {value: '2', label: '采购季2'}
                    ]]
                },
                {
                    type: 'select',
                    key: 'suitId',
                    name: 'suitId',
                    cols: 1,
                    title: '选择' + '套餐',
                    cascade: false,
                    placeholder: '请先选择采购季',
                    content: {
                        type: 'list-item',
                        arrow: 'horizontal',
                        content: '套餐'
                    },
                    options: [[
                        {value: 1-1, label: '套餐1'},
                        {value: 1-2, label: '套餐2'}
                    ]]
                }
            ]
        }
    ]
};

export default class List extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1, demo2);
    }
}