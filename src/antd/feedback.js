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

// 保存当前未销毁的提示信息的销毁函数
let currentMessageHandle = {};
let messageAutoMerge = true;
// 统一处理config（某些属性需要二次解析）
function messageHandler(type, config, duration, onClose, ...params) {
    // key 相同的提示信息只展示一个
    let key = Utils.hash({type, config});
    if (messageAutoMerge && currentMessageHandle[key]) {
        // 先创建，再销毁
        Utils.defer(currentMessageHandle[key]);
    }
    // 重写onClose函数
    close = (...p) => {
        delete currentMessageHandle[key];
        onClose && onClose(...p);
    }
    if (Utils.typeof(config, ['object', 'array'])) {
        config = UF.render(config);
    }
    // 保存销毁函数，当key相同时，先销毁旧的，重新创建新的
    let distroy = Antd.message[type](config, duration, close, ...params);
    currentMessageHandle[key] = distroy;
    return distroy;
}
// 拦截 message.config ，加入自定义参数处理
function messageConfHandler(conf) {
    if (conf.autoMerge !== undefined) {
        messageAutoMerge = conf.autoMerge;
    }
    return Antd.message.config(Utils.filter(conf, ['autoMerge']));
}

export const message = Object.assign({}, Antd.message, {
    success: messageHandler.bind(null, 'success'),
    error: messageHandler.bind(null, 'error'),
    info: messageHandler.bind(null, 'info'),
    warning: messageHandler.bind(null, 'warning'),
    warn: messageHandler.bind(null, 'warn'),
    loading: messageHandler.bind(null, 'loading'),
    config: messageConfHandler
});


/************* notification 提示 ************************************************************************** */
// 保存当前未销毁的提示信息的销毁函数
let currentNotificationHandle = {};
let notificationAutoMerge = true;
// 统一处理config（某些属性需要二次解析）
function notificationHandler(type, config) {
    if (notificationAutoMerge) {
        // key 相同的提示信息只展示一个
        if (config.key) {
            Antd.notification.close(config.key);
        } else {
            // 如果没有key，则生成一个唯一key。并根据配置生成一个hash值，保存生成的唯一key（用于销毁）
            let hashKey = Utils.hash({type, config});
            Utils.defer(Antd.notification.close, currentNotificationHandle[hashKey]);
            let key = Utils.uniqueId();
            currentNotificationHandle[hashKey] = key;
            config.key = key;
        }
    }
    let list = WhiteList.get(config, 'notification');
    for (let v of list) {
        config[v] = UF.render(config[v]);
    }
    return Antd.notification[type](config);
}
// 拦截 notification.config ，加入自定义参数处理
function notificationConfHandler(conf) {
    if (conf.autoMerge !== undefined) {
        notificationAutoMerge = conf.autoMerge;
    }
    return Antd.notification.config(Utils.filter(conf, ['autoMerge']));
}

export const notification = Object.assign({}, Antd.notification, {
    success: notificationHandler.bind(null, 'success'),
    error: notificationHandler.bind(null, 'error'),
    info: notificationHandler.bind(null, 'info'),
    warning: notificationHandler.bind(null, 'warning'),
    warn: notificationHandler.bind(null, 'warn'),
    open: notificationHandler.bind(null, 'open'),
    config: notificationConfHandler
});
