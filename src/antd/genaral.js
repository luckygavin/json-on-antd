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
        this._filter.push('link', 'active', 'actived', 'activedChildren', 'unActivedChildren');
        this._injectEvent.push('onClick');
        this.__init();
    }
    loading(status = true) {
        this.__setProps({loading: status});
    }
    _afterInitProps() {
        if (this.__filtered.actived === true) {
            this.__filtered.active = !!this.__filtered.active;
        }
    }
    _onClick() {
        // 如果配置了link属性，则按钮点击后会跳转到link指定的页面
        if (this.__filtered.link) {
            Utils.goto(this.__filtered.link);
        }
        if (this.__filtered.actived === true) {
            this.__filtered.active = !this.__filtered.active;
            this.forceUpdate();
        }
    }
    // 处理 activedChildren 及 unActivedChildren 参数，可以通过这两个参数控制按钮处于两种状态时分别展示的内容
    handlerOtherProps() {
        let otherProps = {};
        if (!this.__filtered.activedChildren && !this.__filtered.unActivedChildren) {
            return otherProps;
        }
        // 根据是否active决定使用哪个配置
        if (this.__filtered.active) {
            otherProps = this.__filtered.activedChildren || {};
        } else {
            otherProps = this.__filtered.unActivedChildren || {};
        }
        otherProps = Utils.copy(otherProps);
        // 如果配置了content，重新解析成children
        if (otherProps.content) {
            otherProps.children = this.__analysis(otherProps.content);
        }
        // 不能直接覆盖掉原组件内部绑定的onClick事件
        if (otherProps.onClick) {
            let oriOnClick = otherProps.onClick;
            otherProps.onClick = e => {
                this.__props.onClick(e);
                oriOnClick(e);
            }
        }
        return otherProps;
    }
    render() {
        let className = '';
        // 额外加一个mini类型的size
        let size = this.__props.size;
        if (size === 'mini') {
            className += ' uf-btn-mini';
            size = 'small';
        }
        if (this.__filtered.active && !this.__filtered.activedChildren) {
            className += ' active';
        }
        return <Antd.Button {...this.__props}
                {...this.handlerOtherProps()}
                {...this.__getCommonProps({className})}
                size={size}
            />;
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

export class IconPlus extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        let type = (this.__props.type || '').replace('icon-', '');
        return <i {...this.__props} {...this.__getCommonProps({className: `iconfont icon-${type}`})} />;
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