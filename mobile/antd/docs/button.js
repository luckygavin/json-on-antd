/**
 * @file 按钮
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/button.md';

const demo1 = {
    title: '基本用法',
    description: `1、按钮有四种类型：主按钮、次按钮、危险按钮。  \n2、支持展示loading状态，使按钮临时失效。  \n3、支持配置带图标的按钮。`,
    config: [
        {type: 'button', content: 'Default'},
        {type: 'button', mode: 'primary',  content: 'Primary'},
        {type: 'button', mode: 'primary', disabled: true, content: 'Disabled'},
        {type: 'button', mode: 'warning', content: 'Warning'},
        {type: 'button', loading: true, content: 'Loading Button'},
        {type: 'button', icon: 'check-circle-o', content: 'Icon Button'}
    ]
};

const demo2 = {
    title: '行内按钮',
    description: '按钮默认为大按钮，独占一行。可以通过配置`inline`属性配置组件为行内按钮。  \n并支持定制按钮大小',
    config: [
        {type: 'button', inline: true, mode: 'primary', content: 'Inline Primary'},
        {type: 'button', inline: true, mode: 'ghost', content: 'Inline Ghost'},
        {type: 'button', inline: true, mode: 'primary', size: 'small', content: 'Small'},
        {type: 'button', inline: true, mode: 'ghost', size: 'small', content: 'Small'}
    ]
};

// const demo3 = {
//     title: '应用场景',
//     description: '',
//     config: [
//     ]
// };

export default class Button extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1, demo2);
    }
}