/**
 * @file Layout 类组件
 * @author liuzechun
 */
import React from 'react';
import Feedback from './base/Feedback.js';
import {Utils} from 'src/utils';
import UF from 'src';
import {WhiteList} from 'src';
import {getInstance} from 'src/tools/instance.js';
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
