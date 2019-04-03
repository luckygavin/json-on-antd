/**
 * @file 输入框
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/input.md';
const demo1 = {
    title: '基本用法',
    description: 'input输入框',
    config: [
        {
            type: 'list',
            header: {type: 'span', content: '基本用法'},
            content: [
                {
                    type: 'input',
                    placeholder: '请填写订单号',
                    content: '订单编号',
                    value: 100
                },
                {
                    type: 'input',
                    placeholder: '请填写姓名',
                    content: [
                        {type: 'icon', mode: 'search', color: '#108ee9'}
                    ]
                },
                {
                    type: 'input',
                    placeholder: "title can be icon，image or text",
                    content: {
                        type: 'div',
                        style: {
                            backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                            backgroundSize: 'cover',
                            height: '22px', width: '22px'
                        }
                    }
                }
            ]
        },
        {
            type: 'list',
            header: {type: 'span', content: '金融键盘'},
            content: [
                {
                    type: 'input',
                    placeholder: 'start from right',
                    mode: 'money',
                    moneyKeyboardAlign: 'right',
                    content: '光标在右',
                    clear: true
                },
                {
                    type: 'input',
                    placeholder: '0.00',
                    mode: 'money',
                    moneyKeyboardAlign: 'left',
                    content: '价格',
                    extra: '￥',
                    clear: true
                }
            ]
        },
        {
            type: 'list',
            header: {type: 'span', content: 'Format'},
            content: [
                {
                    type: 'input',
                    placeholder: '8888888888888888',
                    mode: 'bankCard',
                    content: '银行卡'
                },
                {
                    type: 'input',
                    placeholder: '18233333333',
                    mode: 'phone',
                    content: '手机号'
                },
                {
                    type: 'input',
                    placeholder: '******',
                    mode: 'password',
                    content: '密码'
                },
                {
                    type: 'input',
                    placeholder: '数字键盘',
                    mode: 'number',
                    content: '数字键盘'
                }
            ]
        }
    ]
};
export default class Input extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo(demo1);
    }
}