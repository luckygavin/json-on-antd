/**
 * @file 可配置表单
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';
import {Input} from 'antd';

class NewInput extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Input {...this.props}/>;
    }
}

module.exports = {Input: NewInput};
