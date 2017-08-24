/**
 * @file 可配置表单
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';
import {Layout} from 'antd';

import './style.scss';

class NewLayout extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
        
    }
    init(nextProps) {
        let props = nextProps || this.props;
        let config = props.config;
    }
    componentWillReceiveProps(nextProps) {
        if (!Utils.equals(this.props, nextProps)) {
            this.init(nextProps);
        }
    }
    render() {
        return;
    }
}

export default NewLayout;
