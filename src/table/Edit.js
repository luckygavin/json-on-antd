/**
 * @file: Table扩展 - 单元格内编辑等功能
 * @author: JihangGuo
 * @last Modified time: 2018-04-25 22:56:04
 * @email: guojihang@baidu.com
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Input, InputNumber, Button, Icon, Dropdown, Checkbox, message, Option} from 'antd';

// 为每个单元格创建一个包装父类组件
export default class TableEdit extends BaseComponent {
    constructor(props) {
        super(props, 'table-edit');
        // 自己制定组件类型
        this.__init();

        // 设置组件数据state
        this.state = {
            value: this.props.value, // 单元格的值
            columnChild: this.props.columnChild, // 复杂类型的单元格的值
            editable: false, // 是否显示编辑框
            valueSource: this.props.value, // 修改前的单元格的值
            editConf: this.props.editConf // 对编辑组件的个性化配置
        };
    }
    componentWillReceiveProps(nextProps) {
        // 当单元格值改变时强制更新
        if (nextProps.value !== this.props.value) {
            this.setState({
                columnChild: nextProps.columnChild,
                value: nextProps.value
            });
        }
    }
    // 提交触发函数
    submit() {
        // 获取单元格名称
        let cellName = this.state.editConf['name'];
        // 获取表格数据
        let formData = this.form.getValues();
        let value = formData[cellName];
        // 判断输入值是否改变
        if (value !== this.state.valueSource) {
            // 对修改后的数据进行提交，提交的配置再 config/components.js 中 table-cell
            // this.__filtered.api.params = formData;
            Utils.merge(this.__filtered.api.params, formData);
            let result = this.__props.onSubmit && this.__props.onSubmit();
            // 不管是否为Promise，成功与失败逻辑如下
            this.__compatePromise(result, success=>{
                // 上传修改结果到父组件
                this.props.cellSubmit(value);
                this.setState({
                    value: value,
                    editable: false,
                    valueSource: value
                });
            });
        } else {
            this.setState({
                value: value,
                editable: false,
                valueSource: value
            });
        }
    }
    // 点击编辑/关闭图标触发函数
    editChange(type) {
        let value = this.state.value;
        return this.setState({
            editable: !!type,
            value: !!type ? value : this.state.valueSource
        });
    }
    // 将用户定义UF配置转换为组件
    initInput(formConf) {
        return this.props.parent.__analysis(formConf);
    }
    render() {
        const {value, editable, columnChild, editConf} = this.state;
        // 解析配置 icon api editable
        // 图标默认配置 采用UF书写方式
        let cellIcon = {
            editIcon: {
                mode: 'edit'
            },
            submitIcon: {
                mode: 'check-circle',
                style: {
                    color: '#0b8235'
                }
            },
            closeIcon: {
                mode: 'close-circle',
                style: {
                    color: 'red'
                }
            }
        };
        // 根据icon配置情况进行解析赋值操作 不配置为默认图标,配置null为删除
        if (Utils.typeof(editConf['icon'], 'object')) {
            let iconConf = editConf['icon'];
            for (let key in iconConf) {
                Utils.typeof(iconConf[key], 'null')
                ? cellIcon[key] = null
                : cellIcon[key] = iconConf[key];
            }
        } else if (Utils.typeof(editConf['icon'], 'null')) {
            cellIcon['submitIcon'] = null;
            cellIcon['closeIcon'] = null;
        }
        // 如果去除勾选图标则添加自动聚焦属性
        editConf['default'] = value;
        if (Utils.typeof(cellIcon['submitIcon'], 'null')) {
            editConf['onBlur'] = () => this.editChange(false);
        }
        editConf['autoFocus'] = true;
        // 整合配置
        let formConf = {
            type: 'form',
            layout: {type: 'vertical'},
            wrappedComponentRef: ele => {this.form = ele;},
            items: [editConf],
            onSubmit: data => this.submit()
        };
        return (
            editable
            ? <div className="editable-cell-input-wrapper">
                {this.initInput(formConf)}
                <div className="editable-icon-group">
                    {!!cellIcon['submitIcon'] && (<Icon
                        {...cellIcon['submitIcon']}
                        type={cellIcon['submitIcon']['mode']}
                        className="editable-cell-icon-check"
                        onClick={this.submit.bind(this)}
                    />)}
                    {cellIcon['closeIcon'] && (<Icon
                        {...cellIcon['closeIcon']}
                        type={cellIcon['closeIcon']['mode']}
                        className="editable-cell-icon-close"
                        onClick={() => this.editChange(false)}
                    />)}
                </div>
            </div>
            : <div className="editable-cell-text-wrapper">
                <div className="edit-cell">
                    {columnChild || value}
                </div>
                {cellIcon['editIcon'] && (<Icon
                    {...cellIcon['editIcon']}
                    type={cellIcon['editIcon']['mode']}
                    className="editable-cell-icon-edit"
                    onClick={() => this.editChange(true)}
                />)}
            </div>
        );
    }
}
