/**
 * @file 选择框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/select.md';
import uf from 'src';

const colorStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: '10px',
};
const demo1 = {
    title: '基本用法',
    description: 'select 单选框',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '单选基本用法'},
            content: {
                type: 'select',
                title: '选择季节',
                extra: '选择季节',
                content: {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '选择季节'
                },
                options: [
                    {value: '1', label: '春'},
                    {value: '2', label: '夏'},
                    {value: '3', label: '秋'},
                    {value: '4', label: '冬'}
                ]
            }
        },
        /*
        {
            type: 'list',
            header: {type: 'span', content: '自定义选项'},
            content: {
                type: 'select',
                title: '选择颜色',
                extra: '选择颜色',
                content: {
                    type: 'list-item',
                    arrow: 'horizontal',
                    content: '选择颜色'
                },
                options: [
                    {value: '#FF0000', label: {
                        type: 'span',
                        style: uf.utils.assign({}, colorStyle, {
                            background: '#FF0000'
                        }),
                        content: '红'
                    }},
                    {value: '#00FF00', label: {
                        type: 'span',
                        style: uf.utils.assign({}, colorStyle, {
                            background: '#00FF00'
                        }),
                        content: '绿'
                    }},
                    {value: '#0000FF', label: {
                        type: 'span',
                        style: uf.utils.assign({}, colorStyle, {
                            background: '#0000FF'
                        }),
                        content: '蓝'
                    }}
                ]
            }
        }
        */
    ]
};
export default class Select extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}