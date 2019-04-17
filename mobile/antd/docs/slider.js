/**
 * @file 滑动输入
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/slider.md';
const demo1 = {
    title: '基本用法',
    description: '步进器基本用法',
    config: [
        {type: 'white-space', size: 'lg', key: '1'},
        {type: 'p', content: 'Slider'},
        {
            type: 'wing-blank', size: 'lg',
            content: [
                {
                    type: 'slider',
                    style: {
                        margin: '0 30px'
                    },
                    value: 26,
                    min: 0,
                    max: 30,
                    onChange: function (val) {
                        UF('mySliderVal').set({
                            content: val
                        });
                    }
                },
                {
                    type: 'p',
                    name: 'mySliderVal',
                    style: {
                        textAlign: 'right'
                    },
                    content: 26
                }
            ]
        },
        {type: 'white-space', size: 'lg', key: '2'},
        {type: 'p', content: 'Disabled slider'},
        {
            type: 'wing-blank', size: 'lg',
            content: {
                type: 'slider',
                style: {
                    margin: '0 30px'
                },
                disabled: true,
                value: 26,
                min: 0,
                max: 30
            }
        },
        {type: 'white-space', size: 'lg', key: '3'},
        {type: 'p', content: 'Slider with customized color'},
        {
            type: 'wing-blank', size: 'lg',
            content: {
                type: 'slider',
                style: {
                    margin: '0 30px'
                },
                value: 26,
                min: 0,
                max: 30,
                trackStyle: {
                    backgroundColor: 'red',
                    height: '5px',
                },
                railStyle: {
                    backgroundColor: 'blue',
                    height: '5px',
                },
                handleStyle: {
                    borderColor: 'blue',
                    height: '14px',
                    width: '14px',
                    marginLeft: '-7px',
                    marginTop: '-4.5px',
                    backgroundColor: 'blue',
                }
            }
        }
    ]
};
export default class Slider extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}