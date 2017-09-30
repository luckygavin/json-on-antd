/**
 * @file 路由 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, Redirect, Link, IndexRoute, IndexRedirect, IndexLink, hashHistory} from 'react-router';
import * as OriRouter from 'react-router';
import {BaseComponent} from 'uf/component';
import {Utils} from 'uf/utils';

// 抽象类 用于做组件种类区分
class BaseRouter extends BaseComponent {
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
    _initProps() {
        super._initProps.call(this);
        // 设置histroy属性，如果没有默认为 hashHistory
        let history = this.__props.history;
        if (!history) {
            history = 'hashHistory';
        }
        if (Utils.typeof(history, 'string')) {
            this.__props.history = OriRouter[history];
        } else {
            console.error('\'history\' must be a string.');
        }
    }
    render() {
        return <OriRouter.Router {...this.__props}/>;
    }
}

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
