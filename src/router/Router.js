/**
 * @file 路由 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as OriRouter from 'react-router';
import {BaseComponent} from 'uf/component';
import {Utils} from 'uf/utils';

// 抽象类 用于做组件种类区分
export class BaseRouter extends BaseComponent {
    // constructor(props) {
    //     super(props);
    // }
}

// Router
export class Router extends BaseRouter {
    constructor(props) {
        super(props);
        this.__init();
    }
    // 继承父组件的函数，并在__props上设置history属性
    // 此函数会在初始化以及componentWillReceiveProps时调用
    _initProps(...params) {
        super._initProps.call(this, ...params);
        // 从 OriRouter 上获取真正的 hashHistory（用户设置的是字符串）
        this.__props.history = OriRouter[this.__props.history];
    }
    render() {
        return <OriRouter.Router {...this.__props}/>;
    }
}

/**************  推荐是用router.routes配置的方式，下面的组件作为配置不能满足时的备用方案（后面再对配置做升级）  ***********************/
// TODO: 对路由配置方式做升级，支持 Redirect 等

// Route
export class Route extends BaseRouter {
    constructor(props) {
        super(props);
        this.__init();
        console.log('Route: ', this.__props);
    }
    render() {
        return <OriRouter.Route {...this.__props}/>;
    }
}

// IndexRoute
export class IndexRoute extends BaseRouter {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <OriRouter.IndexRoute {...this.__props}/>;
    }
}

// Redirect
export class Redirect extends BaseRouter {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <OriRouter.Redirect {...this.__props}/>;
    }
}

// IndexRedirect
export class IndexRedirect extends BaseRouter {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <OriRouter.IndexRedirect {...this.__props}/>;
    }
}

// Link
export class Link extends BaseRouter {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <OriRouter.Link {...this.__props}/>;
    }
}

// IndexLink
export class IndexLink extends BaseRouter {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <OriRouter.IndexLink {...this.__props}/>;
    }
}
