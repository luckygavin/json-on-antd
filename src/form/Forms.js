/**
 * @file 可提供表单复制新增的组件
 * @author susisi@baidu.com 2018-05-12
 * **/

import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Icon, Button, Row, Col} from 'antd';

export default class CopyOrDeleteForm extends BaseComponent {
    constructor(props) {
        super(props);
        this._openApi.push('getValues', 'resetValues', 'resetItem');
        // 不复杂的属性，即无需merge处理直接覆盖的属性
        this._uncomplex.push('formData');
        this.__init();
        this.state = {
            loading: false
        };
        this.setDefaultValues();
        this.formRef = {}; // 用于存储子Form的引用（因为无法直接拿到refs）
    }
    componentDidMount() {
        // 把this抛出，供外部调用，因为使用refs找不到包装前的ReactForm对象
        this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.__shouldUpdate(this.props, nextProps)) {
            // 使之成为受控组件，实现与Form嵌套
            if (!Utils.equals(this.__prevProps.formData, nextProps.formData)) {
                this.setDefaultValues(nextProps.formData);
                this.forceUpdate();
            }
        }
    }
    // 设置 formData 并保证 formData 不会为空
    setDefaultValues(formData) {
        formData = formData || this.__props.formData || [{}];
        if (Utils.typeof(formData, 'object')) {
            formData = [formData];
        }
        this.__props.formData = formData;
    }
    /* 外部调用函数 **********************************************************************/

    // 获取所有表单的值
    getValues(check = true) {
        // 获取每个Form的值
        return Utils.map(this.formRef, item=>item.getValues(check));
    }
    // 重置所有表单的值
    resetValues(o) {
        // 如果是数组，则直接重置全部内容，数组有几项就展示几个表单
        // 否则认为传入的是重置各个表单的某些值，即循环各个表单，并把内容设置进去
        if (Utils.typeof(o, 'array')) {
            this.__setProps({formData: o});
        } else {
            Utils.each(this.formRef, item => {
                item.resetValues(o);
            });
        }
    }
    resetItem(...params) {
        Utils.each(this.formRef, item => {
            item.resetItem(...params);
        });
    }

    /* 组件内部逻辑 **********************************************************************/

    // 校验数据
    validateFields() {
        let haveErr = false;
        // 校验子form
        let childForms = this.formRef;
        if (childForms) {
            for (let i in childForms) {
                if (childForms[i].validateFields()) {
                    haveErr = true;
                }
            }
        }
        return haveErr;
    }
    // 同步给父组件
    onChange(...p) {
        this.__props.onChange && this.__props.onChange(...p);
    }
    // 复制新增
    copyAddForm(key, index) {
        // 获取已经填写的form内容
        let formData = this.getValues(false);
        // 为formData增加一个元素并重新渲染
        formData.splice(index + 1, 0, formData[index]);
        this.__setProps({formData});
        this.onChange(formData);
    }
    // 简单新增
    addForm(key, index) {
        // 获取已经填写的form内容
        let formData = this.getValues(false);
        // 新增的form的formdata为一个空对象
        formData.splice(index + 1, 0, {});
        this.__setProps({formData});
        this.onChange(formData);
    }
    // 删除表单
    deleteForm(key, index) {
        // 为formData减少一个元素并重新渲染
        let formData = this.__props.formData;
        formData.splice(index, 1);
        delete this.formRef[key];
        this.__setProps({formData});
        this.onChange(formData);
    }
    handleSubmit(e, callback) {
        // 否则阻止提交按钮默认事件
        e && e.preventDefault();
        // 如果没有传入callback且没有props.onSubmit回调函数，则submit没有被捕获，不阻止提交（方便后面增加 action 扩展提交功能）
        if (!callback && !this.__props.onSubmit) {
            return true;
        }
        let values = this.getValues();
        if (values) {
            let submit = callback || this.__props.onSubmit;
            let result = submit(values, this);
            // 如果回调函数返回了promise实例，则展示按钮上的loading效果，防止多次点击
            if (result instanceof Promise) {
                this.setState({loading: true});
                result.catch(()=>{}).finally(
                    resolve=>this.setState({loading: false})
                );
            }
        }
    }
    submitClick(callback, e) {
        this.handleSubmit(e, callback);
    }
    resetClick(callback) {
        let formData = [];
        for (let i in this.formRef) {
            this.formRef[i].resetValues();
            formData.push({});// 因为formData进行的页面渲染，如做清空操作
        }
        callback && callback(this);
        this.__setProps({formData});
    }
    // 自定义按钮点击事件，返回表单数据
    customClick(callback) {
        let values = this.getValues(false);
        callback && callback(values, this);
    }
    handleChange(index, data) {
        if (this.__props.formData[index]) {
            this.__props.formData[index] = data;
        }
        this.onChange(this.__props.formData);
    }
    renderForms() {
        let formData = this.__props.formData;
        // 清空原来记录的formRef，因为index会变
        this.formRef = {};
        // 渲染多个form
        return formData.map((v, index) => {
            let key = this.key + '-' + index;
            let formConfig = Object.assign({}, this.__props.form, {
                type: 'form',
                key: key,
                wrappedComponentRef: inst=>(this.formRef[key] = inst),
                onChange: this.handleChange.bind(this, index),
                formData: v
            });
            // 检测是否只剩下一个表单，是：不显示删除键
            return this.renderForm(formConfig, index, formData.length <= 1);
        });
    }
    renderForm(formConfig, index = 0, onlyOne = true) {
        let divConfig = {
            // key 不应该是用 index
            key: this.key + '-' + index,
            type: 'div',
            className: 'uf-forms',
            content: [
                formConfig,
                {
                    type: 'div',
                    className: 'forms-icons',
                    content: [
                        {
                            type: 'button',
                            mode: 'dashed',
                            className: 'addFormIcon',
                            icon: 'plus-circle-o',
                            onClick: () => {
                                if (this.__props.addType === 'add') {
                                    this.addForm(formConfig.key, index);
                                } else {
                                    this.copyAddForm(formConfig.key, index);
                                }
                            }
                        },
                        !onlyOne && {
                            type: 'button',
                            mode: 'dashed',
                            className: 'deleteFormIcon',
                            icon: 'minus-circle-o',
                            onClick: () => {
                                this.deleteForm(formConfig.key, index);
                            }
                        }
                    ]
                }
            ]
        };
        return this.__analysis(divConfig);
    }
    // 解析 Button 的配置，格式化成统一格式
    analysisButtonConfig() {
        const buttonsCfg = this.__props.buttons;
        if (!buttonsCfg) {
            return;
        }
        let formatCfg = {
            layout: {
                type: 'center'
            }
        };
        if (buttonsCfg instanceof Array) {
            formatCfg.items = buttonsCfg;
        } else {
            if (!!buttonsCfg.layout) {
                if (typeof buttonsCfg.layout === 'string') {
                    formatCfg.layout.type = buttonsCfg.layout;
                } else {
                    formatCfg.layout = buttonsCfg.layout;
                }
            }
            formatCfg.items = buttonsCfg.items;
        }
        return formatCfg;
    }
    // 生成按钮
    generateButton() {
        const buttonsCfg = this.analysisButtonConfig();
        if (!buttonsCfg) {
            return;
        }
        return (
            <Row type="flex" justify={buttonsCfg.layout.type}>
                <Col {...buttonsCfg.layout}>
                    <div className="form-buttons">
                    {buttonsCfg.items.map(item => {
                        switch (item.action) {
                            case 'submit':
                                if (item.icon === undefined) {
                                    item.icon = 'search';
                                }
                                return <Button key="submit" {...item}
                                        loading={this.state.loading}
                                        onClick={this.submitClick.bind(this, item.onClick)}>
                                        {item.value}
                                        </Button>;
                                break;
                            case 'reset':
                                if (item.icon === undefined) {
                                    item.icon = 'reload';
                                }
                                return <Button key="reset" {...item}
                                        onClick={this.resetClick.bind(this, item.onClick)}>
                                        {item.value}
                                        </Button>;
                                break;
                            default:
                                return <Button key={item.value} {...item}
                                        onClick={this.customClick.bind(this, item.onClick)}>
                                        {item.value}
                                        </Button>;
                                break;
                        }
                    })}
                    </div>
                </Col>
            </Row>
        );
    } 
    render() {
        return <div className={'uf-forms-container ' + (this.__props.className || '')} style={this.__props.style}>
            {this.renderForms()}
            {this.generateButton()}
        </div>;
    }
}