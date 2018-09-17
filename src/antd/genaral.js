/**
 * @file Genaral 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Utils} from 'src/utils';
import Genaral from './base/Genaral.js';
import * as Antd from 'antd';


/************* Anchor 锚点 ************************************************************************** */

export class Anchor extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Anchor {...this.__props}/>;
    }
}
export class AnchorLink extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Anchor.Link {...this.__props}/>;
    }
}

/************* Button 按钮 ************************************************************************** */

export class Button extends Genaral {
    constructor(props) {
        super(props);
        this._filter.push('link', 'active', 'actived');
        this._injectEvent.push('onClick');
        this.__init();
    }
    _afterInit() {
        super._afterInit();
        if (this.__filtered.actived === true) {
            if (this.__props.onClick) {
                let origin = this.__props.onClick;
                this.__props.onClick = e=>{
                    this.__filtered.active = !this.__filtered.active;
                    this.forceUpdate();
                    return origin(e, this.__filtered.active);
                }
            }
        }
    }
    _onClick() {
        // 如果配置了link属性，则按钮点击后会跳转到link指定的页面
        if (this.__filtered.link) {
            Utils.goto(this.__filtered.link);
        }
    }
    render() {
        let className = '';
        // 额外加一个mini类型的size
        let size = this.__props.size;
        if (size === 'mini') {
            className += ' uf-btn-mini';
            size = 'small';
        }
        if (this.__filtered.active) {
            className += ' active';
        }
        return <Antd.Button {...this.__props} {...this.__getCommonProps({className})} size={size}/>;
    }
}
// 按钮组
export class ButtonGroup extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Button.Group {...this.__props}/>;
    }
}


/************* Backtop 返回顶部 ************************************************************************** */

export class Backtop extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.BackTop {...this.__props}/>;
    }
}


/************* Icon 图标 ************************************************************************** */

export class Icon extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Icon {...this.__props}/>;
    }
}

/************* Grid 栅格 ************************************************************************** */
// Row
export class Row extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Row {...this.__props}/>;
    }
}
// Col
export class Col extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Col {...this.__props}/>;
    }
}

/************* Layout 布局 ************************************************************************** */

// Layout 组件
export class Layout extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout {...this.__props}/>;
    }
}

// Layout 组件
export class Header extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Header {...this.__props}/>;
    }
}

// Layout 组件
export class Footer extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Footer {...this.__props}/>;
    }
}

// Layout 组件
export class Sider extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Sider {...this.__props}/>;
    }
}

// Layout 组件
export class Content extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout.Content {...this.__props}/>;
    }
}
