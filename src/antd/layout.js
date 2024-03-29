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
import {Utils} from 'src/utils';
import * as Antd from 'antd';

/************* Layout 布局 ************************************************************************** */

// Layout 组件
export class Layout extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
        this.hasSiderClass = this.siderHandler();
    }
    // 如果content里面包含有sider，则className中增加 ant-layout-has-sider。ps：没想清antd的官方是怎么做到适配的
    siderHandler() {
        if (this.__props.children) {
            let children = this.__props.children;
            if (!Utils.typeof(children, 'array')) {
                children = [children];
            }
            for (let v of children) {
                // children中为实例化后的组件，type对应组件的构造函数
                if (v && v.type === Sider) {
                    return ' ant-layout-has-sider';
                }
            }
        }
        return '';
    }
    render() {
        return <Antd.Layout {...this.__props} className={(this.__props.className || '') + this.hasSiderClass}/>;
    }
}

// Layout 组件
export class Header extends BaseLayout {
    constructor(props) {
        super(props);
        // 属性组件本身不支持，需要过滤掉。使用时在 __filtered 上获取
        this._filter.push('theme');
        this.__init();
    }
    render() {
        return <Antd.Layout.Header {...this.__props}
            {...this.__getCommonProps({
                className: this.__filtered.theme === 'dark' ? 'header-dark-theme' : ''
            })}
        />;
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
        this._filter.push('triggerPosition', 'theme');
        this._openApi.push('toggleCollapsed');
        this.__init();
    }
    _afterInit() {
        super._afterInit();
        this.findConnectMenuKey();
    }
    // __setProps 后，增加附加处理逻辑
    _afterSetProps() {
        super._afterSetProps();
        let topClass = ' top-trigger';
        let className = this.__props.className || '';
        if (this.__filtered.triggerPosition === 'top' && className.indexOf(topClass) === -1) {
            this.__props.className = className + topClass;
        }
    }
    // 切换收起/展示状态（暴露给用户使用）
    toggleCollapsed() {
        let collapsed = !this.__props.collapsed;
        this.__setProps({collapsed});
        this.__props.onCollapse(collapsed);
    }
    _onCollapse(collapsed, ...p) {
        super._onCollapse && super._onCollapse(collapsed, ...p);

        // Sider 组件自动和其子组件 Menu 做关联，收起时同时收起 Menu
        // TODO: 代码耦合严重，需要剥离关联逻辑
        let menu = this.connectMenuKey && this.__getComponent(this.connectMenuKey);
        if (menu) {
            let defaultOpenKeys = menu.get('_defaultOpenKeys', 'defaultOpenKeys');
            // 从缓存中获取 Menu 组件，并更改组件状态
            menu.set({
                inlineCollapsed: collapsed,
                // 保存原 defaultOpenKeys 的值
                _defaultOpenKeys: defaultOpenKeys,
                defaultOpenKeys: collapsed ? [] : defaultOpenKeys
            });
        }
    }
    // 查找其下的菜单组件的key名称，并存储在connectMenuKey上
    findConnectMenuKey(children) {
        if (this.__props.collapsible) {
            children = children || this.__props.children;
            if (children) {
                if (!Utils.typeof(children, 'array')) {
                    children = [children];
                }
                // 查找 Menu 组件
                for (let v of children) {
                    if (Utils.typeof(v, 'object') && v.props) {
                        if (v.props.__type === 'menu') {
                            let key = v.props.__cache || v.props.__key;
                            this.connectMenuKey = key;
                            return;
                        } else if (v.props.children) {
                            this.findConnectMenuKey(v.props.children);
                        }
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
        return <Antd.Layout.Sider {...this.__props} trigger={trigger}
            {...this.__getCommonProps({
                className: this.__filtered.theme === 'dark' ? 'sider-dark-theme' : ''
            })}
        />;
    }
}

// Sider 子组件
// TODO: 关联关系如何增加？
export class SiderTrigger extends BaseLayout {
    constructor(props) {
        super(props);
        this._filter.push('reverse');
        this.__init();
        this.target = null;
    }
    _componentDidMount() {
        super._componentDidMount && super._componentDidMount();
        this.target = this._factory.$components.get(this.__props.target);
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
            type={(this.target && this.target.get('collapsed'))
                ? (!this.__filtered.reverse ? 'menu-unfold' : 'menu-fold')
                : (this.__filtered.reverse ? 'menu-unfold' : 'menu-fold')}
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
