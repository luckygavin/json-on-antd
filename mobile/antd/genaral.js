/**
 * @file Genaral 类组件
 * @author liuzechun
 */
import React from 'react';
import {Utils} from 'src/utils';
import Genaral from 'src/antd/base/Genaral.js';
import * as Antd from 'antd-mobile';


/************* Icon 图标 ************************************************************************** */

export class Icon extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Icon {...this.__props}/>;
    }
}
// 更多按钮
export class IconPlus extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        let type = (this.__props.type || '').replace('icon-', '');
        return <i {...this.__props} {...this.__getCommonProps({className: `iconfont icon-${type}`})} />;
    }
}

/************* Button 按钮 ************************************************************************** */

export class Button extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Button {...this.__props}/>;
    }
}

/************* PullRefresh 拉动刷新 ************************************************************************** */

export class PullRefresh extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.PullToRefresh {...this.__props}/>;
    }
}

/************* SwipeAction 滑动操作 ************************************************************************** */

export class SwipeAction extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.SwipeAction {...this.__props}/>;
    }
}
