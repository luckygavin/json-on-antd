/**
 * @file: Table扩展 - 单元格内编辑等功能
 * @author: JihangGuo
 * @last Modified time: 2018-04-25 22:56:04
 * @email: guojihang@baidu.com
 */

import React from 'react';
import {Input, Button, Icon, Dropdown, Checkbox, message} from 'antd';

// 为每个单元格创建一个包装父类组件
export default class EditCell extends React.Component {
    constructor(props) {
        super(props);
        // 设置组件数据state
        this.state = {
            value: this.props.value, // 单元格的值
            columnChild: this.props.columnChild, // 复杂类型的单元格的值
            editable: false, // 是否显示编辑框
            valueSource: this.props.value // 修改前的单元格的值
        };
        // 函数绑定
        this.editChange = this.editChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.check = this.check.bind(this);
        // 全局变量定义
    }
    componentWillReceiveProps(nextProps) {
        // 当单元格值改变时强制更新
        if (nextProps.columnChild && nextProps.value !== this.props.value) {
            this.setState({
                columnChild: nextProps.columnChild,
                value: nextProps.value
            });
        }
    }
    // 输入值改变触发函数
    handleChange(e) {
        let value = e.target.value;
        this.setState({value});
    }
    // 在编辑状态下点击小勾图标或者回车触发函数
    check() {
        let value = this.state.value;
        let checkResult = false;
        // 判断输入值是否改变
        if (value !== this.state.valueSource) {
            // 上传修改数据到父组件 返回值为后端返回状态:true/false
            checkResult = this.props.onChange(value);
        }
        let newValue = checkResult ? value : this.state.valueSource;
        this.setState({
            value: newValue,
            editable: false,
            valueSource: newValue
        });
    }
    // 点击编辑/关闭图标触发函数
    editChange(type) {
        let value = this.state.value;
        return this.setState({
            editable: type,
            value: type ? value : this.state.valueSource
        });
    }
    render() {
        const {value, editable, columnChild} = this.state;
        return (
            <div>
                {
                    editable
                    ? <div className="editable-cell-input-wrapper">
                        <Input
                        value={value}
                        onChange={this.handleChange}
                        onPressEnter={this.check}
                        />
                        <Icon
                        type="check"
                        className="editable-cell-icon-check"
                        onClick={this.check}
                        />
                        <Icon
                        type="close"
                        className="editable-cell-icon-close"
                        onClick={() => this.editChange(false)}
                        />
                    </div>
                    : <div className="editable-cell-text-wrapper">
                        {columnChild || value}
                        <Icon
                        type="edit"
                        className="editable-cell-icon"
                        onClick={() => this.editChange(true)}
                        />
                    </div>
                }
            </div>
        );
    }
}