/**
 * @file 数据展示 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import DataDisplay from './base/DataDisplay.js';
import * as Antd from 'antd';


/************* Card 卡片 ************************************************************************** */

export class Card extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Card {...this.__props}/>
    }
}


/************* Carousel 轮播 ************************************************************************** */

export class Carousel extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Carousel {...this.__props}/>
    }
}


/************* Collapse 折叠面板 ************************************************************************** */

export class Collapse extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    // 覆盖部分props上面的属性
    // 覆盖了父类的_initProp函数，真正调用的时机见父类
    _initProps(nextProps) {
        super._initProps.call(this, nextProps);
        if (!nextProps || nextProps.value !== this.props.value) {
            const {activeKey, defaultActiveKey, onChange} = this.props;
            // 把 activeKey 和 defaultActiveKey merge一下，统一交由 activeKey 控制
            this.__props['activeKey'] = activeKey || defaultActiveKey;
            this.__props['onChange'] = this._onChange.bind(this, onChange)
        }
    }
    // 保存activeKey
    _onChange(callback, ...params) {
        callback && callback(...params);
        this.__props.activeKey = params[0];
        this.forceUpdate();
    }
    render() {
        return <Antd.Collapse {...this.__props}/>
    }
}
// 单个面板
export class Panel extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Collapse.Panel {...this.__props}/>
    }
}


/************* Tooltip 文字提示 ************************************************************************** */
// 默认提示
export class Tooltip extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Tooltip {...this.__props}/>
    }
}
// 气泡卡片 - tooltip 的升级
export class Popover extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Popover {...this.__props} content={this.__props.body}/>
    }
}
// 气泡确认框
export class Popconfirm extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Popconfirm {...this.__props}/>
    }
}


/************* Tabs 标签页 ************************************************************************** */

export class Tabs extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Tabs {...this.__props} />
    }
}
// tab的每一项
export class TabPane extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Tabs.TabPane {...this.__props}/>
    }
}
