/**
 * @file Layout 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from './base/Feedback.js';
import {Utils} from 'uf/utils';
import * as Antd from 'antd';

/************* message / notification 提示 ************************************************************************** */

export const message = Antd.message;
export const notification = Antd.notification;


/************* Alert 警告提示 ************************************************************************** */

export class Alert extends Feedback {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Alert {...this.__props}/>;
    }
}


/************* Progress 警告提示 ************************************************************************** */

export class Progress extends Feedback {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Progress {...this.__props}/>;
    }
}


/************* Loading 加载中 ************************************************************************** */

export class Loading extends Feedback {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Spin {...Utils.filter(this.__props, 'loading')}
                spinning={!!this.__props.loading}/>;
    }
}

