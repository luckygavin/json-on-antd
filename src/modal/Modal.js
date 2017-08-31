/**
 * @file ReactModal-Form表单  适用于弹出层的表单
 * @author luyongfang@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {Select, DatePicker, Modal, Button, Checkbox} from 'antd';
import {Utils} from 'uf/utils';
import {Input} from 'uf';

const Option = Select.Option;

let Immutable = require('immutable');

require('./style.scss');

export default class ReactModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errMsg: [],
            visible: typeof(props.visible) === 'undefined' ? true : props.visible,
            height: '100%'
        };
        this.params = {};
    }
    componentWillMount() {
    }
    componentWillUnmount() {
        this.props = null;
    }
    componentWillReceiveProps(nextProps) {
        // 当传递了新的props时，将现在存储的参数清空
        if (!Utils.equals(this.props.item, nextProps.item)) {
            this.params = {};
        }
        if (nextProps.visible !== this.state.visible) {
            this.setState({visible: nextProps.visible});
        }
    }
    validateValues(dex, val) {
        let item = this.props.item;
        if (item && Array.isArray(item.config) && item.config[dex]
                && !item.config[dex]['isEmpty'] && val === '') {
            return item.config[dex]['label'] + '不能为空';
        }
        return false;

    }
    handleChange(ref, dex, val, dataString) {
        if (dex === 'checkbox') {
            this.params[ref]['display'] = val.target.checked;
            this.forceUpdate();
        } else {
            let sVal = !dataString ? val : dataString;
            let strMsg = this.validateValues(dex, sVal);
            strMsg && (this.state.errMsg[ref] = strMsg);
            (!strMsg) && this.state.errMsg[ref] && (delete this.state.errMsg[ref]);
            this.params[ref] = sVal;
        }
    }
    getFormValues() {
        if (this.props.modalCon.type === 'checkbox') {
            let ckObj = {};
            for (let key in this.params) {
                ckObj[key] = this.params[key]['display'];
            }
            return ckObj;
        }
        return this.params;
    }
    formClick(event) {
        event.stopPropagation();
    }
    handleClick(actionType) {
        let params = this.params;
        let oriParams = {};
        let ckObj = null;
        if (actionType === 'confirm') {
            let arrMsg = [];
            for (let k in this.state.errMsg) {
                if (this.state.errMsg.hasOwnProperty(k)) {
                    arrMsg.push(this.state.errMsg[k]);
                }
            }
            if (arrMsg.length > 0) {
                return true;
            }
            if (this.props.modalCon.type === 'checkbox') {
                ckObj = {};
                for (let key in params) {
                    ckObj[key] = params[key]['display'];
                }
            }
            // 将原来的item和现在进行融合
            if (this.props.data) {
                this.params = Object.assign({}, this.props.data, ckObj ? ckObj : this.params, true);
            }
            this.props.handleModalClick && this.props.handleModalClick(this.params, ckObj ? ckObj : this.props.data, this.props.item);
            this.setState({visible: false, errMsg: []});
        } else {
            this.props.handleCancel && this.props.handleCancel(this.props.item);
            this.setState({visible: false, errMsg: []});
        }
    }
    generateModal() {
        let self = this;
        switch (this.props.modalCon.type) {
            case 'tip':
            case 'warning':
                return <div className="umpui-tip">{this.props.modalCon.msg}</div>;
                break;
            case 'form':
                let liList = [];
                this.props.item.config.forEach((item, dex)=>{
                    let refKey = 'modal_' + item.name;
                    let defaultValue = item.defaultValue;
                    // 设置默认值
                    self.handleChange(item.name, dex, defaultValue);
                    switch (item.type) {
                        case 'select':
                            let opList = [];
                            for (let i = 0; i < item.map.length; i++) {
                                opList.push(<Option key={'option' + i} value={item.map[i]['value']}>
                                    {item.map[i]['label']}</Option>);
                            }
                            liList.push(<li key={'modal' + dex} type="select" data-dex={dex}>
                                <label>{item.label}</label>
                                <Select  optionFilterProp="children" notFoundContent="无法找到"
                                    ref={item.name} name={item.name} defaultValue={defaultValue}
                                    onChange={self.handleChange.bind(self, item.name, dex)}>
                                {opList}
                                </Select></li>);
                            break;
                        case 'input':
                            liList.push(<li key={'modal' + dex} type="input" data-dex={dex}>
                                <label>{item.label}</label>
                                <Input ref={item.name} name={item.name} defaultValue={defaultValue}
                                    value={item.defaultVal} placeholder={item.desc}
                                    handleChange={self.handleChange.bind(self, item.name, dex)}>
                                </Input>
                                </li>);
                            break;
                        case 'datetime':
                            liList.push(<li key={'modal' + dex} type="datetime" data-dex={dex}>
                                <label>{item.label}</label>
                                <DatePicker showTime format="yyyy-MM-dd HH:mm:ss" name={item.name}
                                    ref={item.name} placeholder="请选择时间"
                                    onChange={self.handleChange.bind(self, item.name, dex)}/>
                            </li>);
                            break;
                        default:
                            break;
                    }
                });
                return <div>
                        {this.props.modalCon.msg
                            ? <div className="umpui-tip">{this.props.modalCon.msg}</div>
                            : ''}
                        <ul className="umpui-formlist" onClick={this.formClick.bind(this)}>{liList}</ul>
                    </div>;
                break;
            case 'checkbox':
                // item是tags,其他传递也这样传递,k => v v is string or object,if object no display must be pass false
                let liList2 = [];
                let typeDef = Object.prototype.toString;
                for (let key in this.props.item) {
                    let value = this.props.item[key];
                    !self.params[key] && (self.params[key] = {});
                    let isObject = typeDef.call(value) === '[object Object]';
                    // 先判断props是否传递了display, 如果传递了则取值display否则，默认为true
                    let checked = (isObject && value.display != undefined) ? value.display :  true;
                    // 如果是新传递item，则self.params为{}, 会采用props传递的，如果没有更新item, 则采用params中的display
                    checked = self.params[key]['display'] != undefined ? self.params[key]['display'] : checked;
                    let fieldParams = {
                        title: isObject ? value.title : value,
                        display: checked
                    };
                    Object.assign(self.params[key], isObject ? value : {}, fieldParams);
                    let label = isObject ? value.title : value;
                    liList2.push(<li  key={'modal' + key}>
                        <Checkbox ref={key} key={key} defaultChecked={checked}
                            onChange={self.handleChange.bind(self, key, 'checkbox')}>
                            {label}
                        </Checkbox>
                    </li>);
                }
                // let dire = this.props.modalCon.direction;
                // let clsName = dire && dire === 'horizontal' ? 'umpui-horizontal umpui-ckList'
                //     : 'umpui-vertical umpui-ckList';
                return <div>
                        {this.props.modalCon.msg
                            ? <div className="umpui-tip">{this.props.modalCon.msg}</div>
                            : ''}
                        <ul className='umpui-ckList'>{liList2}</ul>
                    </div>;
                break;
            default:
                break;
        }
    }
    generateBtn() {
        let btnList = [];
        let self = this;
        let footerCfg = this.props.footer;
        if (footerCfg) {
            if (footerCfg.ok) {
                let text = footerCfg.ok.text || '确定';
                let cfg = Object.assign({}, {
                    type: 'primary',
                    onClick: this.handleClick.bind(self, 'confirm')
                }, footerCfg.ok);
                btnList.push(<Button key='onOk' {...cfg}>{text}</Button>);
            }
            if (footerCfg.cancel) {
                let text = footerCfg.cancel.text || '取消';
                let cfg = Object.assign({}, {
                    type: 'default',
                    onClick: this.handleClick.bind(self, 'cancel')
                }, footerCfg.cancel);
                btnList.push(<Button key='onCancel' {...cfg}>{text}</Button>);
            }
        } else {
            switch (this.props.modalCon.type) {
                case 'warning':
                    btnList.push(<Button type="primary" key='onOk'
                        onClick={this.handleClick.bind(self, 'cancel')}>确定</Button>);
                    break;
                default:
                    btnList.push(<Button type="primary" key='onOk'
                        onClick={this.handleClick.bind(self, 'confirm')}>确定</Button>);
                    btnList.push(<Button type="default" key="onCancel"
                        onClick={this.handleClick.bind(self, 'cancel')}>取消</Button>);
                    break;
            }
        }
        return btnList;
    }
    render() {
        let title = this.props.modalCon && this.props.modalCon.title;
        return (
            <Modal title={title || 'Modal'} visible={this.state.visible}
                okText="确定" cancelText="取消"
                onOk={this.handleClick.bind(this, 'confirm')}
                onCancel={this.handleClick.bind(this, 'cancel')}
                footer={this.generateBtn()}>
                <div className="uf-modal">
                    {this.generateModal()}
                </div>
            </Modal>
        );
    }
}
