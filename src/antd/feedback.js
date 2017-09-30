/**
 * @file Layout 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from './base/Feedback.js';
import {Utils} from 'uf/utils';
import UF from 'uf/tools';
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
    render() {
        return <Antd.Spin {...Utils.filter(this.__props, 'loading')}
                spinning={!!this.__props.loading}/>;
    }
}


/************* message 提示 ************************************************************************** */

// 统一处理config（某些属性需要二次解析）
function messageHandler(type, content, ...params) {
    for (let v of ['content']) {
        if (content[v] && !Utils.typeof(content[v], 'string')) {
            content[v] = UF.init(content[v]);
        }
    }
    return Antd.message[type](content, ...params);
}

export const message = Object.assign({}, Antd.message, {
    success: messageHandler.bind(null, 'success'),
    error: messageHandler.bind(null, 'error'),
    info: messageHandler.bind(null, 'info'),
    warning: messageHandler.bind(null, 'warning'),
    warn: messageHandler.bind(null, 'warn'),
    loading: messageHandler.bind(null, 'loading')
});


/************* message 提示 ************************************************************************** */

function notificationHandler(type, config) {
    for (let v of ['message', 'description', 'btn', 'icon']) {
        if (config[v] && !Utils.typeof(config[v], 'string')) {
            config[v] = UF.init(config[v]);
        }
    }
    return Antd.notification[type](config);
}

export const notification = Object.assign({}, Antd.notification, {
    success: notificationHandler.bind(null, 'success'),
    error: notificationHandler.bind(null, 'error'),
    info: notificationHandler.bind(null, 'info'),
    warning: notificationHandler.bind(null, 'warning'),
    warn: notificationHandler.bind(null, 'warn')
});
