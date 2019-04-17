/**
 * @file 选择框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/picker.md';
const demo1 = {
    title: '基本用法',
    description: 'picker 多选',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '多选基本用法'},
            content: [
                {
                    type: 'picker',
                    title: '选择季节',
                    extra: '选择季节',
                    cols: 2,
                    cascade: false,
                    content: {
                        type: 'list-item',
                        arrow: 'horizontal',
                        content: '选择季节'
                    },
                    options: [
                        [
                            {value: '2019', label: '2019'},
                            {value: '2020', label: '2020'}
                        ],
                        [
                            {value: '1', label: '春'},
                            {value: '2', label: '夏'},
                            {value: '3', label: '秋'},
                            {value: '4', label: '冬'}
                        ]
                    ]
                },
                {
                    type: 'picker',
                    title: '选择地区',
                    extra: '选择地区',
                    cols: 2,
                    cascade: true,
                    content: {
                        type: 'list-item',
                        arrow: 'horizontal',
                        content: '选择地区'
                    },
                    options: [
                        {value: '1', label: '北京', children: [
                            {value: '2', label: '海淀区'},
                            {value: '3', label: '昌平区'}
                        ]},
                        {value: '4', label: '石家庄', children: [
                            {value: '5', label: '长安区'},
                            {value: '6', label: '裕华区'}
                        ]}
                    ]
                }
            ]
            
        }
    ]
};
export default class Picker extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}