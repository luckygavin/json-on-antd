/**
 * @file 发起更新故障报修
 * @author luyongfang@baidu.com
 * **/
import React from 'react';
import {Popconfirm, Input, Icon, Tooltip} from 'antd';

export default class Confirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    componentWillReceiveProps(nextProps) {
    }
    onChange(e) {
        this.setState({value: e.target.value});
    }
    onConfirm() {
        this.props.onConfirm(this.state.value);
    }
    render() {
        let inputCfg = this.props.type === 'textarea'
                ? {type: 'textarea', autosize: {minRows: 2}, style: {width: '220px'}}
                : {type: this.props.type};
        return (
            <Popconfirm placement="topRight"
                okText="确 认" cancelText="取 消"
                onConfirm={this.onConfirm.bind(this)}
                title={
                    <div>
                        <p>{this.props.tips}</p>
                        <Input size="small" style={{width: '130px', marginTop: '6px'}}
                            value={this.state.value} {...inputCfg}
                            onChange={this.onChange.bind(this)}/>
                    </div>
                }>
                {this.props.children}
            </Popconfirm>
        );
    }
}
