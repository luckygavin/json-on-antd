/**
 * @file 可提供表单复制新增的组件
 * @author susisi@baidu.com 2018-05-12
 * **/

import React from 'react';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Icon, Button, Row, Col} from 'antd';
import {OriginForm} from './Form.js';

// 继承Form组件，以复用其逻辑
// export default class Forms extends BaseComponent {
export default class Forms extends OriginForm {
    constructor(props) {
        super(props);
        // __init 由父组件执行
        // this.__init();
        this.setDefaultValues();
        this.formRef = {}; // 用于存储子Form的引用（因为无法直接拿到refs）
    }
    // 覆盖原Form初始化逻辑
    init() {}
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
        formData = formData || this.__props.formData || [];
        if (Utils.typeof(formData, 'object')) {
            formData = [formData];
        }
        // if (formData.length === 0) {
        //     formData = [{}];
        // }
        this.__props.formData = formData;
    }
    /* 外部调用函数 **********************************************************************/

    // 获取所有表单的值
    getValues(...params) {
        return Utils.map(this.formRef, item=>item.getValues(...params));
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
    clearValues(...params) {
        return Utils.map(this.formRef, item => item.clearValues(...params));
    }
    resetItem(...params) {
        return Utils.map(this.formRef, item=>item.resetItem(...params));
    }
    getDisplayValues(...params) {
        return Utils.map(this.formRef, item=>item.getDisplayValues(...params));
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
    copyForm(index) {
        // 获取已经填写的form内容
        let formData = this.getValues(false);
        // 为formData增加一个元素并重新渲染
        formData.splice(index + 1, 0, formData[index]);
        this.__setProps({formData});
        this.onChange(formData);
    }
    // 简单新增
    addForm(index) {
        // 获取已经填写的form内容
        let formData = this.getValues(false);
        if (!index && index !== 0) {
            index = formData.length;
        }
        // 新增的form的formdata为一个空对象
        formData.splice(index + 1, 0, {});
        this.__setProps({formData});
        this.onChange(formData);
    }
    // 删除表单
    deleteForm(index) {
        // 为formData减少一个元素并重新渲染
        let formData = this.__props.formData;
        formData.splice(index, 1);
        this.__setProps({formData});
        this.onChange(formData);
    }
    handleChange(index, data) {
        if (this.__props.formData[index]) {
            this.__props.formData[index] = data;
        }
        this.onChange(this.__props.formData);
    }
    // 默认展示形式
    renderForms() {
        let formData = this.__props.formData;
        // 清空原来记录的formRef，因为index会变
        this.formRef = {};
        // 渲染多个form
        // 如果没有数据，则只展示一个加号
        return formData.length === 0
            ? <Button type="dashed" className="add-form-icon"
                icon="plus-circle-o"
                onClick={this.addForm.bind(this, null)}/>
            : formData.map((v, index) => {
                let key = this.key + '-' + index;
                // form 属性被Form组件过滤到了 __filtered 中
                let formConfig = Object.assign({}, this.__filtered.form, {
                    type: 'form',
                    key: key,
                    wrappedComponentRef: inst=>(this.formRef[key] = inst),
                    onChange: this.handleChange.bind(this, index),
                    formData: v
                });
                return <div key={this.key + '-' + index} className="uf-forms-item">
                    {this.__analysis(formConfig)}
                    {this.__props.addType !== false && (
                        <div key="operate" className="forms-icons">
                            <Button type="dashed" className="add-form-icon"
                                icon="plus-circle-o"
                                onClick={this.__props.addType === 'add'
                                    ? this.addForm.bind(this, index)
                                    : this.copyForm.bind(this, index)
                                }
                            />
                            <Button type="dashed" className="delete-form-icon"
                                icon="minus-circle-o"
                                onClick={this.deleteForm.bind(this, index)}/>
                        </div>
                    )}
                </div>;
            });
    }
    // 使用表格的方式展示
    renderTableForms() {
        let formData = this.__props.formData;
        // form 属性被Form组件过滤到了 __filtered 中
        let formConfig = Object.assign({}, this.__filtered.form);
        // 如果items中有数组嵌套，使用drawLevel打平
        formConfig.items = Utils.drawLevel(formConfig.items);
        // 清空原来记录的formRef，因为index会变
        this.formRef = {};
        return <div className="table-forms">
            <div className="thead-div">
                {formConfig.items.map((item, index)=>(
                    <div key={index} className="th-div">{item.label}</div>)
                )}
                {this.__props.addType !== false && (
                    <div key="operate" className="th-div">
                        操作
                        <Icon type="plus-square-o" className="operate-add"
                            onClick={this.addForm.bind(this, null)}/>
                    </div>
                )}
            </div>
            <div className="tbody-div">
                {/* 渲染多个form */}
                {formData.map((v, index) => {
                    let key = this.key + '-' + index;
                    return this.__analysis(Object.assign({}, formConfig, {
                        type: 'form',
                        layout: {type: 'inline'},
                        key: key,
                        wrappedComponentRef: inst=>(this.formRef[key] = inst),
                        onChange: this.handleChange.bind(this, index),
                        formData: v,
                        // 增加操作列
                        items: formConfig.items.concat(
                            this.__props.addType === false
                                ? []
                                : {
                                    type: 'div',
                                    key: key,
                                    className: 'operate',
                                    content: [
                                        {
                                            type: 'icon',
                                            key: 'add',
                                            mode: 'plus-circle',
                                            onClick: this.copyForm.bind(this, index)
                                        },
                                        {
                                            type: 'icon',
                                            key: 'delete',
                                            mode: 'minus-circle',
                                            onClick: this.deleteForm.bind(this, index)
                                        }
                                    ]
                                }
                        )
                    }));
                })}
            </div>
        </div>;
    }
    render() {
        return <div {...this.__getCommonProps({className: 'uf-forms'})}>
            {this.__props.mode === 'table'
                ? this.renderTableForms()
                : this.renderForms()
            }
            {this.renderButtons()}
        </div>;
    }
}