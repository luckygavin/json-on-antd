/**
 * @file Layout 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Genaral from './base/Layout.js';
import * as Antd from 'antd';

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