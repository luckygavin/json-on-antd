/**
 * @file 开关
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/switch.md';
import uf from 'src';
const demo1 = {
    title: '基本用法',
    description: '开关',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '基本用法'},
            content: [
                {
                    type: 'list-item',
                    content: '开关',
                    extra: {
                        type: 'switch',
                        key: 'mySwitch',
                        onChange: function (checked) {
                            // uf('mySwitch').set({
                            //     checked: !uf('mySwitch').get('checked')
                            // });
                            console.log(checked);
                        }
                    }
                },
                {
                    type: 'list-item',
                    content: '禁用开关',
                    extra: {
                        type: 'switch',
                        checked: true,
                        disabled: true
                    }
                },
                {
                    type: 'list-item',
                    content: '安卓样式',
                    extra: {
                        type: 'switch',
                        checked: true,
                        platform: "android"
                    }
                },
                {
                    type: 'list-item',
                    content: '自定义颜色(安卓)',
                    extra: {
                        type: 'switch',
                        checked: true,
                        color: 'red',
                        platform: "android"
                    }
                },
                {
                    type: 'list-item',
                    content: '自定义颜色(IOS)',
                    extra: {
                        type: 'switch',
                        checked: true,
                        color: 'green',
                        platform: "ios"
                    }
                }
            ]
        }
    ]
};
export default class Switch extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}