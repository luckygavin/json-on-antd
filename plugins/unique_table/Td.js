/**
 * @file 表格组件的Td部分
 * @auhor huzaibin@baidu.com
 */
import React, {PureComponent, Component} from 'react';
import {notification} from 'antd';
import axios from 'axios';

export default class Td extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            editable: this.props.editable,
            tdItem: this.props.tdItem,
            tdIndex: this.props.tdIndex,
            rowKey: this.props.rowKey,
            inputValue: this.props.tdItem.value,
            valueChanged: undefined,
            confirmValue: this.props.tdItem.value
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.tdItem.value !== this.props.tdItem.value) {
            this.setState({
                editable: nextProps.editable,
                tdItem: nextProps.tdItem,
                tdIndex: nextProps.tdIndex,
                rowKey: nextProps.rowKey,
                inputValue: nextProps.tdItem.value,
                confirmValue: nextProps.tdItem.value
            });
        }
    }

    componentDidMount() {
        // console.log('did mount');
        let {tdItem, tdIndex} = this.props;

        if (tdItem.value && tdItem.flagIshtml) {
            // console.log(tdItem)
            this.parseDom(tdItem.value, 'td_row' + tdIndex);
        } else if (tdItem.value && tdItem.flagIshtml === false) {
            this.parseDom(tdItem.value, 'td_row' + tdIndex);
        };
    }
    parseDom(value, index) {
        // console.log(index)
        this.refs[index].innerHTML = value;
    }
    onDoubleClick() {
        let modules = sessionStorage.getItem('modules');
        let times = sessionStorage.getItem('times');
        let isSingleModule = modules.indexOf(',');
        let isSingleTime = times.indexOf(',');
        if (isSingleTime > 0 || isSingleModule > 0) {
            console.log('模组和时间必须单选');
            this.openNotificationWithIcon('warning', '请重新选择查询，再做修改');
        } else {
            this.setState({editable: true});
        }
    }
    openNotificationWithIcon(type, msg) {
        notification.config({
            top: 150
        });
        notification[type]({
            message: '编辑修改时模组/时间必须单选',
            description: msg
        });
    }
    handleChange(refIndex, e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    handleCancel() {
        console.log('取消修改' + this.state.inputValue);
        this.setState({
            // inputValue: this.props.tdItem.value,
            editable: false
        });
    }

    // 确认修改
    handleConfirm() {
        console.log('确认修改');
        let oldValue = this.state.confirmValue;
        // ajax post提交更改请求
        let url = '?r=report/index/editAutoCell';
        const formData = new FormData();
        formData.append('moduleName', sessionStorage.getItem('modules'));
        formData.append('date', sessionStorage.getItem('date'));
        formData.append('time', sessionStorage.getItem('times'));
        formData.append('row', this.props.rowKey);
        formData.append('column', this.props.tdIndex);
        formData.append('value', this.state.inputValue);
        formData.append('oldValue', oldValue);
        axios.post(url, formData, {
            methods: 'post',
            headers: {'Content-Type': 'multipart/form-data'},
            withCredentials: true
        }).then(res => {
            if (res.data.status === 0) {
                this.setState({
                    editable: false,
                    valueChanged: this.state.inputValue,
                    confirmValue: this.state.inputValue
                });
                this.openNotificationWithIcon('success', '修改成功！');
            } else {
                this.setState({
                    editable: false
                });
                this.openNotificationWithIcon('error', res.data.msg);
            }
        });
    }
    render() {
        // console.log('render td');
        let {tdItem, tdIndex, rowKey, editable, inputValue, valueChanged, confirmValue} = this.state;
        // console.log(tdIndex, rowKey);
        let tdStyle = {
            color: tdItem.fontColor,
            background: tdItem.backgroundColor ? tdItem.backgroundColor
                : tdItem.background ? tdItem.background : 'white',
            fontSize: tdItem.fontSize ? tdItem.fontSize : ''
        };
        if (this.props.display) {
            tdStyle.display = 'none';
        }
        if (!editable) {
            return (
                <td ref={'td_row' + tdIndex} colSpan={tdItem.colspan} rowSpan={tdItem.rowspan} style={tdStyle}
                    onDoubleClick={this.onDoubleClick.bind(this)}>
                     {confirmValue}
                        {/*{tdItem.value}*/}
                        {tdItem.flagMark !== undefined
                        &&  <span style={{
                                backgroundColor: tdItem.flagMark,
                                fontSize: '18px',
                                marginLeft: '5px',
                                borderRadius: '50%',
                                width: '8px',
                                height: '8px'}}></span>
                        }
                </td>
            );
        }
        if (editable) {
            return (
               <td ref={'td_row' + tdIndex}
                    colSpan={tdItem.colspan}
                    rowSpan={tdItem.rowspan}
                    style={tdStyle}>
                    <input
                        className='change-input'
                        defaultValue={confirmValue}
                        onChange={this.handleChange.bind(this, 'td_row' + tdIndex)}
                        >
                    </input>
                    <ul className='edit-control' style={{position: 'absolute'}}>
                        <li onClick={this.handleCancel.bind(this)}>取消</li>
                        <li onClick={this.handleConfirm.bind(this)}>保存</li>
                    </ul>
                </td>
            );
        }
    }
}
