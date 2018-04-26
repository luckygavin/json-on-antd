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
import Form from 'src/form';


// 为每个单元格创建一个包装父类组件
export default class EditCell extends BaseComponent {
    constructor(props) {
        super(props);
        // 设置组件数据state
        this.state = {
            value: this.props.value, // 单元格的值
            columnChild: this.props.columnChild, // 复杂类型的单元格的值
            editable: false, // 是否显示编辑框
            valueSource: this.props.value, // 修改前的单元格的值
            editConf: this.props.editConf // 对编辑组件的个性化配置
        };
        // 函数绑定
        this.editChange = this.editChange.bind(this);
        this.submit = this.submit.bind(this);
        this.initInput = this.initInput.bind(this);
        this.__init();
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
    // 提交触发函数
    submit() {
        // 获取单元格名称
        let cellName = this.state.editConf['name'];
        // 获取表格数据
        let formData = this.form.getValues();
        let value = formData[cellName];
        let checkResult = false;
        // 判断输入值是否改变
        if (value !== this.state.valueSource) {
            // 对修改后的数据进行提交验证,后面使用api来调用数据验证接口,发送参数为formData,这里使用checkResult来进行模拟
            checkResult = true;
            // 上传修改结果到父组件
            this.props.cellSubmit(checkResult, value);
            // 进行相应渲染
            checkResult ? message.success('修改成功') : message.error('修改失败');
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
        let cellIcon = {
            editIcon: 'edit',
            submitIcon: 'check',
            closeIcon: 'close'
        };
        // 根据icon配置情况进行操作 不配置为默认图标,配置null为删除
        if (Utils.typeof(editConf['icon'], 'object')) {
            let iconConf = editConf['icon'];
            for (let key in iconConf) {
                Utils.typeof(iconConf[key], 'null')
                ? cellIcon[key] = null
                : cellIcon[key] = iconConf[key];
            }
        }
        // 添加输入框默认值
        editConf['default'] = value;
        editConf['onBlur'] = () => this.editChange(false);
        editConf['autoFocus'] = true;
        // 整合配置
        let formConf = {
            type: 'form',
            wrappedComponentRef: ele => this.form = ele,
            items: [editConf],
            onSubmit: data => this.submit()
        };

        return (
            <div>
                {
                    editable
                    ? <div className='editable-cell-input-wrapper'>
                        {this.initInput(formConf)}
                        <Icon
                        type={cellIcon['submitIcon']}
                        className='editable-cell-icon-check'
                        onClick={this.submit}
                        />
                        <Icon
                        type={cellIcon['closeIcon']}
                        className='editable-cell-icon-close'
                        onClick={() => this.editChange(false)}
                        />
                    </div>
                    : <div className='editable-cell-text-wrapper'>
                        {columnChild || value}
                        <Icon
                        type={cellIcon['editIcon']}
                        className='editable-cell-icon-edit'
                        onClick={() => this.editChange(true)}
                        />
                    </div>
                }
            </div>
        );
    }
}