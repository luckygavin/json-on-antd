/**
 * @file 可提供表单复制新增的组件
 * @author susisi@baidu.com 2018-05-12
 * **/

import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import moment from 'moment';
import {Form, Icon, Button, message, Tooltip, Row, Col} from 'antd';

import Ueditor from 'src/ueditor';

let uuid = 0;

export default class CopyOrDeleteForm extends BaseComponent {
    constructor(props) {
        super(props);
        this.config = null;
        this._openApi.push('getValues', 'resetValues');
        this.__init();
        this.state = {
            formData: this.__props.formData
        };
        this.formsName = [];// 用于记录所有form的name
        this.init();
    }
    init(nextProps) {
        let props = this.__props;
        if (nextProps) {
            props = Utils.merge({}, props, nextProps);
        }
        this.config = props;
    }
    componentDidMount() {
        // 把this抛出，供外部调用，因为使用refs找不到包装前的ReactForm对象
        // this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
        // this.initValues();
        // this.init();
    }
    componentWillReceiveProps(nextProps) {
        if (this.__shouldUpdate(this.props, nextProps)) {
            this.init(nextProps);
        }
    }
    // 专门负责解析配置的函数
    analysisConfig(formConfig) {
        return this.__analysis(formConfig);
    }
    // 获取所有表单的值
    getValues(check = true) {
        // 获取每个Form的值
        let values = [];
        for (let i in this.formsName) {
            values.push(this.__getComponent(this.formsName[i]).getValues(check));
        }
        return values;
    }
    // 重置所有表单的值
    resetValues(callback) {
        let formData = [];
        for (let i in this.formsName) {
            this.__getComponent(this.formsName[i]).resetValues();
            formData.push({});// 因为formData进行的页面渲染，如做清空操作
        }
        callback && callback(this);
        this.setState({
            formData: formData
        });
    }
    // 自定义按钮点击事件，返回表单数据
    customClick(callback) {
        let values = this.getValues(false);
        callback && callback(values, this);
    }
    // 复制新增
    copyAddForm(formName, index) {
        // 获取已经填写的form内容
        let formData = this.getValues(false);
        // 为formData增加一个元素并重新渲染
        formData.splice(index + 1, 0, formData[index]);
        this.setState({
            formData: formData
        });
    }
    // 简单新增
    addForm(formName, index) {
        // 获取已经填写的form内容
        let formData = this.getValues(false);
        // 新增的form的formdata为一个空对象
        formData.splice(index + 1, 0, {});
        this.setState({
            formData: formData
        });
    }
    // 删除表单
    deleteForm(formName, index) {
        // 为formData减少一个元素并重新渲染
        let formData = this.state.formData;
        formData.splice(index, 1);
        this.setState({
            formData: formData
        });
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
                result.then(
                    resolve=>this.setState({loading: false})
                ).catch(
                    reject=>this.setState({loading: false})
                );
            }
        }
    }
    submitClick(callback, e) {
        this.handleSubmit(e, callback);
    }
    renderForms() {
        /**方法二，外层包裹div，为外层div增加buttons功能以操作内层form**/
        let formData = this.state.formData;
        let formConfig = Object.assign({}, this.config.form);
        let formsName = [];
        if (formData  instanceof Array) {
            // 当出入数据为数组时，将渲染多个form
            let childForms = [];
            formData.forEach((v, index) => {
                let newFormConfig = Object.assign({}, formConfig, {
                    type: 'form',
                    name: '-' + index.toString(),
                    formData: v
                });
                formsName.push('-' + index.toString());
                // console.log('formsName:', formsName);
                // 检测是否只剩下一个表单，是：不显示删除键
                let newDivConfig = formData.length > 1
                    ? this.renderForm(newFormConfig, index, false)
                    : this.renderForm(newFormConfig, index, true);
                childForms.push(newDivConfig);
            });
            this.formsName = formsName;
            return this.analysisConfig(childForms);
        }
        formConfig = Object.assign({}, formConfig, {
            type: 'form',
            name: '-0',
            formData: formData
        });
        formsName.push('-0');
        this.formsName = formsName;
        return this.analysisConfig(this.renderForm(formConfig));
    }
    renderForm(formConfig, index = 0, onlyOne = true) {
        // 判断是用户配置的新增方式是复制新增(copy-add)还是新增(add)
        let addType = !!this.config.addType ? this.config.addType : 'copy-add';

        let icons = [
            {
                type: 'button',
                mode: 'dashed',
                className: 'addFormIcon',
                icon: 'plus-circle-o',
                onClick: () => {
                    if (addType === 'add') {
                        // 简单新增
                        this.addForm(formConfig.name, index);
                    }
                    else {
                        // 复制新增
                        this.copyAddForm(formConfig.name, index);
                    }
                }
            },
            !onlyOne && {
                type: 'button',
                mode: 'dashed',
                className: 'deleteFormIcon',
                icon: 'minus-circle-o',
                onClick: () => {
                    this.deleteForm(formConfig.name, index);
                }
            }
        ];
        let divConfig = {
            type: 'div',
            className: 'uf-forms',
            content: [
                formConfig,
                {
                    type: 'div',
                    className: 'forms-icons',
                    content: icons
                }
            ]
        };
        // return this.analysisConfig(divConfig);
        return divConfig;
    }
    // 解析 Button 的配置，格式化成统一格式
    analysisButtonConfig() {
        const buttonsCfg = this.config.buttons;
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
                                        onClick={this.resetValues.bind(this, item.onClick)}>
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
        // return this.initValues();
        // return this.renderForms();
        return (<div className="uf-add-delete-forms">
            {this.renderForms()}
            {this.generateButton()}
        </div>
       );
    }
}