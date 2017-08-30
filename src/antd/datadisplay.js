/**
 * @file 数据展示 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Utils} from 'uf/utils';
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
        // 受控属性
        this.__controlled = 'activeKey';
        this.__init();
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
        // 受控属性
        this.__controlled = 'activeKey';
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
