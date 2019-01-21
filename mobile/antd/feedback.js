/**
 * @file Layout 类组件
 * @author liuzechun
 */
import React from 'react';
import Feedback from 'src/antd/base/Feedback.js';
import {Utils} from 'src/utils';
import UF from 'src';
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
