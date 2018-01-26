/**
 * @file 路由 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import * as OriRouter from 'react-router';
import {BaseComponent} from 'uf/component';
import {Utils} from 'uf/utils';
import {Factory} from 'uf/tools';

// 抽象类 每个配置均使用这个抽象类作为外壳，把组件实例转换为类
export class RouteHolder extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps);
        // if (nextProps, nextProps.location, nextProps.location.action) {
        //     let lastAction = this.action;
        //     this.action = nextProps.location.action;
        //     console.log(this.action === lastAction || nextProps.location.action === "POP");
        //     return this.action === lastAction || nextProps.location.action === "POP";
        // }
        // console.log(this.props.router.location.action);
        return true;
        // 待观察效果
        // 有五种情况 PUSH、PUSH->POP、REPLACE、REPLACE->POP、POP
        // return ['PUSH', 'REPLACE'].indexOf(this.props.router.location.action) !== -1;
    }
    render() {
        return <Factory {...this.props} config={this.props.route.__component} />;
    }
}

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
        // 从 OriRouter 上获取真正的 hashHistory（用户设置的是字符串）
        this.__props.history = OriRouter[this.__props.history];
        // 把 routes 的内容转换为真正的路由组件
        if (this.__props.routes) {
            this.__props.children = this.handleRoutes(this.__props.routes);
            delete this.__props.routes;
        }
    }
    // 继承父组件的函数，并在__props上设置history属性
    // 此函数会在初始化以及componentWillReceiveProps时调用
    // _initProps(...params) {
    //     super._initProps.call(this, ...params);
    // }
    handleRoutes(routes) {
        let arr = routes;
        if (!Utils.typeof(routes, 'array')) {
            arr = [routes];
        }
        let children = [];
        for (let v of arr) {
            v = this.setRoute(v);
            v.children = [];
            // indexRoute 字段 => IndexRoute
            if (v.indexRoute) {
                v.children.push(<OriRouter.IndexRoute {...this.setRoute(v.indexRoute)}/>);
                delete v.indexRoute;
            }
            //  indexRedirect 字段 => IndexRedirect
            if (v.indexRedirect) {
                v.children.push(<OriRouter.IndexRedirect to={v.indexRedirect} query={v.query} />);
                delete v.indexRedirect;
            }
            // childRoutes 字段 => 子路由 (Route、Redirect)
            if (v.childRoutes) {
                v.children = v.children.concat(this.handleRoutes(v.childRoutes));
                delete v.childRoutes;
            }
            if (v.children.length === 0) {
                delete v.children;
            }
            // if (v.breadcrumbName) {
            //     v.breadcrumbName = this.__analysis(v.breadcrumbName);
            // }
            // 不含 component && 包含 from & to 字段 => Redirect
            // 否则为普通的 Route 组件
            let Item;
            if (!v.component && v.path && v.to) {
                Item = OriRouter.Redirect;
            } else {
                Item = OriRouter.Route;
            }
            children.push(<Item {...v}/>);
        }
        
        return children;
    }
    // Route/IndexRoute 类型的组件
    // component 转换为 RouteHolder
    setRoute(item) {
        if (item.component) {
            // 组件实例放在新属性content里
            item.__component = item.component;
            // component属性为一个抽象类
            item.component = RouteHolder;
        }
        return item;
    }
    render() {
        return <OriRouter.Router {...this.__props}/>;
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
