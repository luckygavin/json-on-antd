/**
 * @file Layout 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './base/Layout.js';
import * as Antd from 'antd';

// Layout 组件
export class Layout extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout {...this.__props}/>
    }
}

// Layout 组件
export class Header extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Header {...this.__props}/>
    }
}

// Layout 组件
export class Footer extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Footer {...this.__props}/>
    }
}

// Layout 组件
export class Sider extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Sider {...this.__props}/>
    }
}

// Layout 组件
export class Content extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Content {...this.__props}/>
    }
}