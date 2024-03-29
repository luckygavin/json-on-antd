/**
 * @file 路由 类组件
 * @author liuzechun
 */
import React from 'react';
import * as OriRouter from 'react-router';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Factory, Authority} from 'src';
import {getConfig, getRequirejs} from 'src/tools/instance.js';

// 保存当前页面的路由信息
let lastRouter = {
    params: {},
    detials: {}
};
// 用于获取当前页面的路由信息
function getRouter() {
    return Utils.copy(lastRouter);
}
function setRouter(props) {
    let {params, location, route, routes} = props;
    lastRouter = {
        params: params,
        detials: {params, location, route, routes},
        currentRoute: routes && routes.length > 0 ? routes[routes.length - 1] : null
    };
}

// 抽象类 每个配置均使用这个抽象类作为外壳，把组件实例转换为类
export class RouteHolder extends React.Component {
    constructor(props) {
        super(props);
        setRouter(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps);
        // if (nextProps, nextProps.location, nextProps.location.action) {
        //     let lastAction = this.action;
        //     this.action = nextProps.location.action;
        //     console.log(this.action === lastAction || nextProps.location.action === "POP");
        //     return this.action === lastAction || nextProps.location.action === "POP";
        // }
        // console.log(nextProps.router);
        // console.log(this.props, this.props.router.location.action);
        return true;
        // 待观察效果
        // 有五种情况 PUSH、PUSH->POP、REPLACE、REPLACE->POP、POP
        // return ['PUSH', 'REPLACE'].indexOf(this.props.router.location.action) !== -1;
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log(this.props.router.location.action);
    //     console.log(nextProps.router.location.action);
    // }
    // 组件更新时，保存最新的路由信息
    componentWillUpdate(nextProps, nextState) {
        setRouter(nextProps);
    }

    render() {
        return <Factory {...this.props}
            // config={this.getConfig()}
            config={this.props.route.__component}
            insName={this.props.route.insName}
        />;
    }
}

// 抽象类 用于做组件种类区分
export class BaseRouter extends BaseComponent {}

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

    handleRoutes(routes) {
        let arr = routes;
        if (!Utils.typeof(routes, 'array')) {
            arr = [routes];
        }
        let children = [];
        for (let v of arr) {
            // 校验权限，没权限的元素返回 null
            if (!this.__authority(v)) {
                continue;
            }
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
        // @bugfix at 2018-07-12, 不能改变原配置。修复再次渲染router时报错问题
        item = Utils.copy(item);
        if (item.component) {
            // 组件实例放在新属性content里
            item.__component = item.component;
            item.insName = this.insName;
            // component属性为一个抽象类
            item.component = RouteHolder;
        }
        return item;
    }
    render() {
        // console.log('router init');
        return <OriRouter.Router {...this.__props}/>;
    }
}
// 获取当前页面的路由信息
Router.getRouter = getRouter;

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
