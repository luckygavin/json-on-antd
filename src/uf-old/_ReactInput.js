/**
 * @file Input组件
 * @author luyongfang
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Input} from 'antd';
export default class ReactInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.defaultValue ? props.defaultValue : ''
        };
    }
    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.value !== 'undefined') {
            this.setState({val: nextProps.value});
        }
    }
    setVal(val) {
        this.setState({val: val});
    }
    getValue() {
        return this.state.val;
    }
    handleChange(e) {
        e.stopPropagation();
        let  iVal =  e.target.value;
        /*if (this.props.type !== 'textarea') {
            iVal =  this.refs[this.props.name].value;
        } else {
            iVal =  e.target.value;
        }*/
        this.setState({val: iVal});
        this.props.handleChange && this.props.handleChange(iVal);
    }
    /*render() {
        // let val = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
        let className = 'form-control input-sm datatable_input_col_search';
        return this.props.type !== 'textarea'
            ? <input name={this.props.name} value={this.state.val} type={this.props.type}
                ref={this.props.name} maxLength={this.props.maxlength} onChange={this.handleChange.bind(this)}
                placeholder={this.props.placeholder} className={className}
               />
            : <Input name={this.props.name} type={this.props.type} autosize={{minRows: 3}}
                ref={this.props.name} maxLength={this.props.maxlength}
                value={this.state.val} onChange={this.handleChange.bind(this)}
                placeholder={this.props.placeholder}/>;
    }*/
    // 想更换成antd的Input,影响到的地方比较多，后面再做调整
    render() {
        let val = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
        let className = 'form-control input-sm datatable_input_col_search';
        return <Input className={className} name={this.props.name} type={this.props.type}
            ref={this.props.name} maxLength={this.props.maxlength}
            value={this.state.val} onChange={this.handleChange.bind(this)}
            placeholder={this.props.placeholder}/>;
    }
}
