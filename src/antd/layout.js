/**
 * @file Description
 * @author liuzechun
 * Created Date: 2017-09-29 07:26:02
 *
 * Last Modified: 2017-09-29 07:26:02
 * Modified By: liuzechun
 */

import React from 'react';
import BaseLayout from './base/Layout.js';
import {Utils} from 'uf/utils';
import {ComponentsCache} from 'uf/cache';
import * as Antd from 'antd';

/************* Layout 布局 ************************************************************************** */

// Layout 组件
export class Layout extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
        this.hasSiderClass = this._handler();
    }
    // 如果content里面包含有sider，则className中增加 ant-layout-has-sider。ps：没想清antd的官方是怎么做到适配的
    _handler() {
        if (this.__props.children) {
            let className = this.__props.className || '';
            let children = this.__props.children;
            if (!Utils.typeof(children, 'array')) {
                children = [children];
            }
            for (let v of children) {
                // children中为实例化后的组件，type对应组件的构造函数
                if (v.type === Sider) {
                    return ' ant-layout-has-sider';
                }
            }
        }
        return '';
    }
    render() {
        return <Antd.Layout {...this.__props} className={this.__props.className + this.hasSiderClass}/>;
    }
}

// Layout 组件
export class Header extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Header {...this.__props}/>;
    }
}

// Layout 组件
export class Footer extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Footer {...this.__props}/>;
    }
}

// Layout 组件
export class Sider extends BaseLayout {
    constructor(props) {
        super(props);
        this.__controlled = {
            key: 'collapsed',
            event: 'onCollapse',
            defaultVal: false
        };
        // 属性组件本身不支持，需要过滤掉。使用时在 __filtered 上获取
        this._filter.push('triggerPosition');
        this._openApi.push('toggleCollapsed');
        this.__init();
        this.handleCollapsed();
    }
    _initProps(...params) {
        super._initProps.call(this, ...params);
        let topClass = ' top-trigger';
        let className = this.__props.className || '';
        if (this.__filtered.triggerPosition === 'top' && className.indexOf(topClass) === -1) {
            this.__props.className = className + topClass;
        }
    }
    // 切换收起/展示状态（暴露给用户使用）
    toggleCollapsed() {
        let collapsed = !this.__props.collapsed;
        this.set({collapsed});
        this.__props.onCollapse(collapsed);
    }
    // Sider 组件自动和其子组件 Menu 做关联，收起时同时收起 Menu
    // TODO: 代码耦合严重，需要剥离关联逻辑
    handleCollapsed() {
        if (this.__props.collapsible) {
            let children = this.__props.children;
            if (children) {
                if (!Utils.typeof(children, 'array')) {
                    children = [children];
                }
                // 查找 Menu 组件
                for (let v of children) {
                    if (v.props.__type === 'menu') {
                        let key = v.props.__cache || v.props.__key;
                        let inject = collapsed=>{
                            let menu = ComponentsCache.get(key);
                            if (menu) {
                                let defaultOpenKeys = menu.get('_defaultOpenKeys') || menu.get('defaultOpenKeys');
                                // 从缓存中获取 Menu 组件，并更改组件状态
                                menu.set({
                                    inlineCollapsed: collapsed,
                                    // 保存原 defaultOpenKeys 的值
                                    _defaultOpenKeys: defaultOpenKeys,
                                    defaultOpenKeys: collapsed ? [] : defaultOpenKeys
                                });
                            }
                        };
                        // 注入到 onCollapse 函数中
                        this._inject(this.__props, 'onCollapse', inject);
                    }
                }
            }
        }
    }
    render() {
        let trigger = this.__props.trigger;
        if (trigger === undefined) {
            trigger = <Antd.Icon className="trigger" type={this.__props.collapsed ? 'menu-unfold' : 'menu-fold'}/>;
        }
        return <Antd.Layout.Sider {...this.__props} trigger={trigger}/>;
    }
}

// Sider 子组件
// TODO: 关联关系如何增加？
export class SiderTrigger extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
        this.target = null;
    }
    _componentDidMount() {
        super._componentDidMount && super._componentDidMount();
        this.target = ComponentsCache.get(this.__props.target);
        this.forceUpdate();
    }
    onClick() {
        this.target.toggleCollapsed();
        this.forceUpdate();
        this.__props.onClick && this.__props.onClick();
    }
    render() {
        let style = Object.assign({cursor: 'pointer'}, this.__props.style);
        return <Antd.Icon {...this.__props}
            type={(this.target && this.target.get('collapsed')) ? 'menu-unfold' : 'menu-fold'}
            onClick={this.target && this.onClick.bind(this)}/>;
    }
}

// Layout 组件
export class Content extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Content {...this.__props}/>;
    }
}
