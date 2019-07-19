/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'src';

const content = [
    {
        type: 'div',
        style: {lineHeight: '160px', color: '#fff', background: '#364d79', textAlign: 'center'},
        content: '1'
    },
    {
        type: 'div',
        style: {lineHeight: '160px', color: '#fff', background: '#364d79', textAlign: 'center'},
        content: '2'
    },
    {
        type: 'div',
        style: {lineHeight: '160px', color: '#fff', background: '#364d79', textAlign: 'center'},
        content: '3'
    }
];

const demo1 = {
    title: '基本',
    description: '最简单的用法。',
    config: [
        {
            type: 'carousel',
            name: 'carousel1',
            content: content
        },
        {type: 'div', style: {marginBottom: 10}},
        {
            type: 'button',
            mode: 'primary',
            content: '上一个',
            onClick() {
                UF('carousel1').prev();
            }
        },
        {
            type: 'button',
            mode: 'primary',
            content: '下一个',
            onClick() {
                UF('carousel1').next();
            }
        },
        {
            type: 'button',
            mode: 'primary',
            content: '跳转到3',
            onClick() {
                UF('carousel1').goto(2);
            }
        }
    ]
};

const demo2 = {
    title: '垂直',
    description: '垂直显示。',
    config: {
        type: 'carousel',
        vertical: true,
        content: content
    }
};

const demo3 = {
    title: '渐显',
    description: '切换效果为渐显。',
    config: {
        type: 'carousel',
        effect: 'fade',
        content: content
    }
};

const demo4 = {
    title: '自动切换',
    description: '定时切换下一张。',
    config: {
        type: 'carousel',
        autoplay: true,
        content: content
    }
};

export default class Carousel extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-carousel.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4);
    }
}