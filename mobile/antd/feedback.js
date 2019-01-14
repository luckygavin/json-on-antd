/**
 * @file Layout 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Feedback from 'src/antd/base/Feedback.js';
import {Utils} from 'src/utils';
import UF from 'src';
import {WhiteList} from 'src';
import {getInstance} from 'src/tools/instance.js';
import * as Antd from 'antd-mobile';

/************* Modal 对话框 ************************************************************************** */
export class Modal extends Feedback {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Modal {...this.__props}/>;
    }
}

/******** Modal自带快捷调用函数 **********/
// 统一处理config（某些属性需要二次解析）
function showMessage(type, insName, config) {
    for (let v of ['title', 'content']) {
        if (config[v] && !Utils.typeof(config[v], 'string')) {
            config[v] = (getInstance(insName) || UF).render(config[v]);
        }
    }
    // 不同函数的参数列表不同
    let argslist = [];
    switch (type) {
        case 'alert':
            argslist = ['title', 'message', 'actions', 'platform'];
            break;
        case 'prompt':
            argslist = ['title', 'message', 'callbackOrActions', 'mode', 'defaultValue', 'placeholders', 'platform'];
            break;
        case 'operation':
            argslist = ['actions', 'platform'];
            break;
    }
    let args = argslist.map(v=>{
        return config[v];
    });
    return Antd.Modal[type].apply(Antd.Modal, args);
}
Modal.alert = showMessage.bind(null, 'alert');
Modal.prompt = showMessage.bind(null, 'prompt');
Modal.operation = showMessage.bind(null, 'operation');


/************* ActionSheet 动作面板 ************************************************************************** */
export class ActionSheet extends Feedback {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.ActionSheet {...this.__props}/>;
    }
}


/************* Progress 进度条 ************************************************************************** */
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
        return <Antd.ActivityIndicator {...Utils.filter(this.__props, 'loading')}
            animating={!!this.__props.loading}/>;
    }
}

/************* message 提示 ************************************************************************** */

// 保存当前未销毁的提示信息的销毁函数
let currentMessageHandle = {};
let messageAutoMerge = true;
// 统一处理config（某些属性需要二次解析）
function messageHandler(type, insName, config, duration, onClose, ...params) {
    // key 相同的提示信息只展示一个
    let key = Utils.hash({type, config});
    if (messageAutoMerge && currentMessageHandle[key]) {
        // 先创建，再销毁
        Utils.defer(currentMessageHandle[key]);
    }
    // 重写onClose函数
    let close = (...p) => {
        delete currentMessageHandle[key];
        onClose && onClose(...p);
    };
    if (Utils.typeof(config, ['object', 'array'])) {
        config = (getInstance(insName) || UF).render(config);
    }
    // 保存销毁函数，当key相同时，先销毁旧的，重新创建新的
    let distroy = Antd.message[type](config, duration, close, ...params);
    currentMessageHandle[key] = distroy;
    return distroy;
}
// 拦截 message.config ，加入自定义参数处理
function messageConfHandler(insName, conf) {
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
    config: messageConfHandler.bind(null)
});


/************* notification 提示 ************************************************************************** */
// 复用message
export const notification = Object.assign({}, Antd.notification, {
    success: messageConfHandler.bind(null, 'success'),
    error: messageConfHandler.bind(null, 'error'),
    info: messageConfHandler.bind(null, 'info'),
    warning: messageConfHandler.bind(null, 'warning'),
    warn: messageConfHandler.bind(null, 'warn'),
    open: messageConfHandler.bind(null, 'info'),
    config: messageConfHandler.bind(null)
});
