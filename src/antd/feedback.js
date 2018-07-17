/**
 * @file Layout 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from './base/Feedback.js';
import {Utils} from 'src/utils';
import UF from 'src';
import {WhiteList} from 'src';
import * as Antd from 'antd';

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
    loading(status) {
        this.__setProps({loading: status});
    }
    render() {
        return <Antd.Spin {...Utils.filter(this.__props, 'loading')}
                spinning={!!this.__props.loading}/>;
    }
}


/************* message 提示 ************************************************************************** */

// 统一处理config（某些属性需要二次解析）
function messageHandler(type, config, ...params) {
    let list = WhiteList.get(config, 'message');
    for (let v of list) {
        config[v] = UF.render(config[v]);
    }
    return Antd.message[type](config, ...params);
}

export const message = Object.assign({}, Antd.message, {
    success: messageHandler.bind(null, 'success'),
    error: messageHandler.bind(null, 'error'),
    info: messageHandler.bind(null, 'info'),
    warning: messageHandler.bind(null, 'warning'),
    warn: messageHandler.bind(null, 'warn'),
    loading: messageHandler.bind(null, 'loading')
});


/************* notification 提示 ************************************************************************** */

function notificationHandler(type, config) {
    let list = WhiteList.get(config, 'notification');
    for (let v of list) {
        config[v] = UF.render(config[v]);
    }
    return Antd.notification[type](config);
}

export const notification = Object.assign({}, Antd.notification, {
    success: notificationHandler.bind(null, 'success'),
    error: notificationHandler.bind(null, 'error'),
    info: notificationHandler.bind(null, 'info'),
    warning: notificationHandler.bind(null, 'warning'),
    warn: notificationHandler.bind(null, 'warn'),
    open: notificationHandler.bind(null, 'open')
});
