/**
 * @file Cascader-Demo
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import UF from 'uf/tools';

const demo1 = {
    title: '基本用法',
    description: '省市区级联选择',
    config: {
        type: 'cascader',
        name: 'myCascader1',
        placeholder: '省区选择',
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: '江苏',
            children: [{
                value: 'nanjing',
                label: '南京',
                children: [{
                    value: 'zhonghuamen',
                    label: '中华门',
                }],
            }],
        }]
    }
};
const demo2 = {
    title: '设定默认值，移入展开',
    description: '级联选择框设定默认值，移入选项时展开下一级列表',
    config: {
        type: 'cascader',
        name: 'myCascader2',
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: '江苏',
            children: [{
                value: 'nanjing',
                label: '南京',
                children: [{
                    value: 'zhonghuamen',
                    label: '中华门',
                }],
            }],
        }],
        defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
        expandTrigger: 'hover'
    }
};
const demo3 = {
    title: '选择即改变，选项禁用',
    description: '选中父级则父级出现在选框中，某些选项可设定为不可选',
    config: {
        type: 'cascader',
        name: 'myCascader3',
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: '江苏',
            disabled: true,
            children: [{
                value: 'nanjing',
                label: '南京',
                children: [{
                    value: 'zhonghuamen',
                    label: '中华门',
                }],
            }],
        }],
        changeOnSelect: true,
        onChange: function(value) {console.log(value);}
    }
};
const demo4 = {
    title: '大小',
    description: '不同大小的级联选择器',
    config: [{
        type: 'cascader',
        size: 'large',
        style: {
            display: 'block',
            width: '90%'
        },
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: '江苏',
            children: [{
                value: 'nanjing',
                label: '南京',
                children: [{
                    value: 'zhonghuamen',
                    label: '中华门',
                }],
            }],
        }]
    },
    {
        type: 'cascader',
        size: 'small',
        style: {
            display: 'block',
            width: '90%',
            marginTop: '15px'
        },
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: '江苏',
            children: [{
                value: 'nanjing',
                label: '南京',
                children: [{
                    value: 'zhonghuamen',
                    label: '中华门',
                }],
            }],
        }]
    }]
};
const demo5 = {
    title: '自定义已选项',
    description: '通过displayRender方法给改变选项的连接符号',
    config: {
        type: 'cascader',
        style: {width: 270},
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖',
                    code: '752100'
                }],
            }],
        }, {
            value: 'jiangsu',
            label: '江苏',
            children: [{
                value: 'nanjing',
                label: '南京',
                children: [{
                    value: 'zhonghuamen',
                    label: '中华门',
                    code: '453400'
                }],
            }],
        }],
        displayRender: labels=>labels.join(' - ')
    }
};
const demo6 = {
    title: '级联选框搜索功能',
    description: '可以直接搜索选项并选择',
    config: {
        type: 'cascader',
        style: {width: 270},
        options: [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
                children: [{
                    value: 'xihu',
                    label: '西湖',
                    code: '752100'
                }],
            }],
        }, {
            value: 'jiangsu',
            label: '江苏',
            children: [{
                value: 'nanjing',
                label: '南京',
                children: [{
                    value: 'zhonghuamen',
                    label: '中华门',
                    code: '453400'
                }],
            }],
        }],
        showSearch: {
            matchInputWidth: true
        }
    }
};
export default class CascaderApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-cascader.md';
        this.__init();
    }

    render() {
        return this.__getDemo(demo1, demo2, demo3, demo4, demo5, demo6);
    }
}