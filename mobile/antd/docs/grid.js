/**
 * @file 宫格
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/grid.md';

const items = Array.from(new Array(8)).map((v, i)=>{
    return {icon: '../../public/img/demo-icon.png', text: 'name-' + i};
});

const demo1 = {
    title: '基本用法',
    description: '基本用法，4列，有边框',
    config: {
        type: 'grid',
        items: items,
        columnNum: 4,
        hasLine: true
    }
};

const demo2 = {
    title: '没有边框',
    description: '4列，没有边框',
    config: {
        type: 'grid',
        items: items,
        columnNum: 4,
        hasLine: false
    }
}

export default class Grid extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1, demo2);
    }
}