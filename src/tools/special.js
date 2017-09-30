/**
 * @file 特殊处理 - 几种特殊种类的组件解析前需做特殊处理
 *      这块逻辑之所以没写到相应组件类里，是因为某些参数需要在实例之间就要处理
 * @author liuzechun
 * Created Date: 2017-09-30 02:47:59
 *
 * Last Modified: 2017-09-30 02:47:59
 * Modified By: liuzechun
 */

import React from 'react';
import {Utils} from 'uf/utils';
import Loader from './loader';
import Factory from './factory.js';

// 抽象类 每个配置均使用这个抽象类作为外壳，把组件实例转换为类
class RouteHolder extends React.Component {
    render() {
        return <Factory {...this.props} config={this.props.route.__component} />;
    }
}

export default {

    if(item, parentProps) {
        let Item = Loader.get(item.type);
        // 如果是 布局相关 的组件
        if (Utils.isExtendsOf(Item, 'Layout')) {
            item = this.setLayout(item);
        }
        // 如果是 路由相关 的组件
        if (Utils.isExtendsOf(Item, 'BaseRouter')) {
            item = this.setRoute(item);
        }
        // 如果是 路由-Router 组件
        if (Utils.isExtendsOf(Item, 'Router')) {
            item = this.setRouter(item);
        }
        // 如果是 面包屑 的组件
        if (Utils.isExtendsOf(Item, 'Breadcrumb')) {
            item = this.setBreadcrumb(item, parentProps);
        }
        return item;
    },

    // 如果是 面包屑 组件
    setBreadcrumb(item, parentProps) {
        // 如果面包屑没有自定义面包屑元素，则和router关联
        if (!item.content) {
            item.routes = parentProps.routes;
            item.params = parentProps.params;
        }
        return item;
    },

    // 如果是 路由相关 的组件
    setRoute(item) {
        if (item.component) {
            // 组件实例放在新属性content里
            item.__component = item.component;
            // component属性为一个抽象类
            item.component = RouteHolder;
        }
        return item;
    },

    // 如果是 路由-Router 的组件
    setRouter(item) {
        // router 的第二种用法，routes 里面的全部 component 需要转换为 RouteHolder
        if (item.routes) {
            item.routes = this.loopRoutes(item.routes);
        }
        return item;
    },
    loopRoutes(routes) {
        let arr = routes;
        if (!Utils.typeof(routes, 'array')) {
            arr = [routes];
        }
        for (let v of arr) {
            v = this.setRoute(v);
            if (v.childRoutes) {
                v.childRoutes = this.loopRoutes(v.childRoutes);
            }
            if (v.indexRoute) {
                v.indexRoute = this.setRoute(v.indexRoute);
            }
        }
        
        return routes;
    },

    // 如果是 布局相关 的组件
    setLayout(item) {
        switch (item.type) {
            case 'layout':
                item = this.getLayout(item);
                break;
            default:
                break;
        }
        return item;
    },

    // 处理 type='layout' 的参数
    getLayout(item) {
        // 如果content里面包含有sider，则className中增加 ant-layout-has-sider。ps：没想清antd的官方是怎么做到适配的
        let className = item.className || '';
        let content = item.content;
        if (!Utils.typeof(content, 'array')) {
            content = [content];
        }
        for (let v of content) {
            if (v.type === 'sider') {
                className += ' ant-layout-has-sider';
                break;
            }
        }
        item.className = className;
        return item;
    }
};
