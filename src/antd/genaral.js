/**
 * @file Genaral 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Genaral from './base/Genaral.js';
import * as Antd from 'antd';


/************* Button 按钮 ************************************************************************** */

export class Button extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Button {...this.__props}/>
    }
}
// 按钮组
export class ButtonGroup extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Button.Group {...this.__props}/>
    }
}


/************* BackTop 返回顶部 ************************************************************************** */

export class BackTop extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.BackTop {...this.__props}/>
    }
}


/************* Icon 图标 ************************************************************************** */

export class Icon extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Icon {...this.__props}/>
    }
}



/************* Layout 布局 ************************************************************************** */

// Layout 组件
export class Layout extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout {...this.__props}/>
    }
}

// Layout 组件
export class Header extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Header {...this.__props}/>
    }
}

// Layout 组件
export class Footer extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Footer {...this.__props}/>
    }
}

// Layout 组件
export class Sider extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Sider {...this.__props}/>
    }
}

// Layout 组件
export class Content extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Content {...this.__props}/>
    }
}
