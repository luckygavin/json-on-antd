/**
 * @file 动作面板
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/action-sheet.md';

const demo1 = {
    title: '基本用法',
    description: '\n  支持展示loading状态，使按钮临时失效。\n  支持配置带图标的按钮。',
    config: [
        {type: 'button', content: 'showActionSheet'}
    ]
};
export default class ActionSheet extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}