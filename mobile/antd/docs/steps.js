/**
 * @file 步骤条
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/steps.md';

const demo1 = {
    title: '步骤条',
    description: '基本用法',
    config: {
        type: 'steps',
        current: 1,
        size: 'small',
        content: [
            {
                type: 'step',
                title: 'Finish',
                description: 'This is description'
            },
            {
                type: 'step',
                title: 'In Progress',
                description: 'This is description'
            },
            {
                type: 'step',
                title: 'Waiting',
                description: 'This is description'
            }
        ]
    }
};

const demo2 = {
    title: '横向步骤条',
    description: '横向步骤条',
    config: {
        type: 'steps',
        current: 1,
        direction: 'horizontal',
        content: [
            {
                type: 'step',
                title: 'Step1',
                description: 'description'
            },
            {
                type: 'step',
                title: 'Step2',
                description: 'description'
            },
            {
                type: 'step',
                title: 'Step3',
                description: 'description'
            }
        ]
    }
};

export default class Steps extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1, demo2);
    }
}