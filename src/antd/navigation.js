/**
 * @file 导航 类组件
 * @author liuzechun
 * Created Date: 2017-09-26 01:18:00
 *
 * Last Modified: 2017-09-29 07:31:44
 * Modified By: liuzechun
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Utils} from 'uf/utils';
import Navigation from './base/Navigation.js';
import * as Antd from 'antd';


/************ Affix 图钉 *************************************************************************** */

export class Affix extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Affix {...this.__props}/>;
    }
}


/************ Breadcrumb 面包屑 *************************************************************************** */

export class Breadcrumb extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    __init(...params) {
        super.__init.call(this, ...params);
        // itemRender 用户返回的是一个配置，这里根据配置生成组件
        if (this.__props.itemRender) {
            // this._inject(this.__props, 'itemRender')
            let origin = this.__props.itemRender;
            this.__props.itemRender = (...params)=>{
                let result = origin.call(this, ...params);
                return this.__analysis(result);
            };
        } else {
        // 如果用户没有配置 itemRender，则使用默认的 itemRender
        // 增加了 breadcrumbIcon 属性解析
            this.__props.itemRender = (route, params, routes, paths)=>{
                const last = routes.indexOf(route) === routes.length - 1;
                const icon = route.breadcrumbIcon ? <Antd.Icon type={route.breadcrumbIcon} /> : null;
                const item = !!icon ? [icon, <span>{route.breadcrumbName}</span>] : route.breadcrumbName;
                return last ? item : <Link to={paths.join('/')} className="ant-breadcrumb-link">{item}</Link>;
            };
        }
    }
    // 每次render都需要重新获取routes
    beforeRender() {
        // 如果用户配置了items，则按照用户配置的items列表类展示面包屑
        if (!this.__props.items) {
            let routes = this._root.props.routes;
            // 过滤掉无效的面包屑（既没有name，又没有icon）
            let newRoutes = [];
            for (let v of routes) {
                if (v.breadcrumbName || v.breadcrumbIcon) {
                    newRoutes.push(v)
                }
            }
            this.__props.routes = newRoutes;
            this.__props.params = this._root.props.params;
        } else {
            this.__props.routes = this.__props.items;
        }
    }
    render() {
        this.beforeRender();
        return <Antd.Breadcrumb {...this.__props} />;
    }
}


/************ Dropdown 下拉菜单 *************************************************************************** */

export class Dropdown extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Dropdown {...this.__props}/>;
    }
}
export class DropdownButton extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Dropdown.Button {...this.__props}/>;
    }
}


/************ Menu 导航菜单 *************************************************************************** */

export class Menu extends Navigation {
    constructor(props) {
        super(props);
        this.__controlled = {
            key: 'selectedKeys',
            event: 'onSelect',
            defaultVal: []
        };
        // 收集全部可用的key值
        this.allKeys = {};
        this.__init();
    }
    // 继承父组件的函数，并在__props上设置history属性
    // 此函数会在初始化以及componentWillReceiveProps时调用
    _initProps(...params) {
        super._initProps.call(this, ...params);
        if (this.__props.items) {
            this.__props.children = this.handleItems(this.__props.items);
            delete this.__props.items;
        }
    }
    // 见 BaseComponent
    _onEvent(callback, ...params) {
        callback && callback(...params);
        let {selectedKeys} = params[0];
        this.__props['selectedKeys'] = selectedKeys;
        this.forceUpdate();
    }
    componentWillReceiveProps() {
        this.followRoute();
    }
    componentDidMount() {
        this.followRoute();
        this.forceUpdate();
    }
    // 解析子组件结构
    handleItems(items) {
        let arr = items;
        if (!Utils.typeof(items, 'array')) {
            arr = [items];
        }
        let children = [];
        for (let v of arr) {
            // 首先处理所有类型的菜单项公共属性
            if (!v.key && v.link) {
                v.key = v.link;
            }
            if (v.title) {
                v.title = <span>{this.__analysis(v.title)}</span>;
            }
            if (v.icon) {
                v.title = <span><Antd.Icon type={v.icon}/>{v.title}</span>
            }
            if (v.link) {
                // 如果是http链接，则改用 a 标签
                if (v.link.indexOf('http') === 0) {
                    v.title = <a href={v.link} target={v._target}>{v.title}</a>;
                } else {
                    v.title = <Link to={v.link}>{v.title}</Link>;
                }
            }
            // 菜单项类型，默认为单个 菜单项组件
            let {Item, ItemGroup, SubMenu} = Antd.Menu;
            let Comp = Item;
            // 解析子菜单
            if (v.childItems) {
                // 如果有子菜单，则默认为 子菜单组件
                Comp = SubMenu;
                v.children = v.children || [];
                if (!Utils.typeof(v.children, 'array')) {
                    v.children = [v.children];
                }
                v.children.push(this.handleItems(v.childItems));
                delete v.childItems;
            }
            // 指定为group类型，则使用 菜单分组组件
            if (v.mode === 'group') {
                Comp = ItemGroup;
            }
            // 普通菜单项组件没有title属性，取而代之的是children
            if (Comp === Item) {
                v.children = v.title;
                delete v.title;
            }

            children.push(<Comp {...v}/>);

            // 保存key值
            if (v.key && !v.disabled) {
                this.allKeys[v.key] = true;
            }
        }
        
        return children;
    }
    // 高亮的菜单项跟随路由一起变换
    followRoute() {
        if (!this.__props.followRoute) {
            return;
        }
        let routes = this._root.props.routes;
        let location = this._root.props.location;
        if (routes && location) {
            let key = routes[routes.length - 1].path;
            let path = location.pathname.slice(1);
            // 分两种情况：
            //   1、每个菜单项都有key，且key为最简单（仅含当前层级的路由信息）的情况。如果路由的最后一项和菜单项相匹配，则高亮菜单项
            //   2、具有path的菜单项没有设置key，则默认使用path值。path值为路由全路径，所有需要再用path和allKeys进行一次比对
            if (this.allKeys[key]) {
                this.__props.selectedKeys = [key];
            } else if (this.allKeys[path]) {
                this.__props.selectedKeys = [path];
            }
        }
    }
    render() {
        return <Antd.Menu {...this.__props}/>;
    }
}


/************ Pagination 分页 *************************************************************************** */

export class Pagination extends Navigation {
    constructor(props) {
        super(props);
        // current为受控属性，父类中统一实现属性的绑定和变更（BaseComponent）
        // event: onChange / paramsIndex: 0
        this.__controlled = {
            key: 'current'
        };
        this.__init();
    }
    render() {
        return <Antd.Pagination {...this.__props}/>;
    }
}


/************ Steps 步骤条 *************************************************************************** */

export class Steps extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Steps {...this.__props}/>;
    }
}
// Step 单条步骤
export class Step extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Steps.Step {...this.__props}/>;
    }
}
