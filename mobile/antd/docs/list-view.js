/**
 * @file 列表
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/list-view.md';

const demo1 = {
    title: 'ListView 基本用法',
    description: '主要针对`ListView`组件使用`source`属性来不断加载数据',
    config: {
        type: 'list-view',
        header: {type: 'span', content: 'Header'},
        footer: {type: 'span', content: 'Footer.'},
        separator: {
            type: 'div', style: {
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED'
            }
        },
        renderRow: (row, index)=>{
            console.log(row, index);
            return {type: 'div', style: {padding: '20px 10px', marginBottom: '10px'}, content: 'Row.' + index};
        },
        source: '../php/download.php?sleep=0.2',
        // data: [],
        pageSize: 7,
        onScroll: () => {console.log('scroll');},
        scrollRenderAheadDistance: 500,
        endReachedThreshold: 1000,
        onEndReached: () => {console.log('onEndReached');},
        useBodyScroll: true
    }
};


export default class ListView extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}