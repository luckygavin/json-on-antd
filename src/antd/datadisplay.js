/**
 * @file 数据展示 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Utils} from 'src/utils';
import DataDisplay from './base/DataDisplay.js';
import * as Antd from 'antd';


/************* Avatar 头像 ************************************************************************** */

export class Avatar extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Avatar {...this.__props}/>;
    }
}


/************* Badge 徽标数 ************************************************************************** */

export class Badge extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Badge {...this.__props}/>;
    }
}

/************* Card 卡片 ************************************************************************** */

export class Card extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Card {...this.__props}/>;
    }
}


/************* Carousel 轮播 ************************************************************************** */

export class Carousel extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Carousel {...this.__props}/>;
    }
}


/************* Collapse 折叠面板 ************************************************************************** */

export class Collapse extends DataDisplay {
    constructor(props) {
        super(props);
        // 受控属性
        // event: onChange / paramsIndex: 0
        this.__controlled = {
            key: 'activeKey'
        };
        this.__init();
    }
    render() {
        return <Antd.Collapse {...this.__props}/>;
    }
}
// 单个面板
export class Panel extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Collapse.Panel {...this.__props}/>;
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
        return <Antd.Tooltip {...this.__props}/>;
    }
}
// 气泡卡片 - tooltip 的升级
export class Popover extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Popover {...this.__props} content={this.__props.body}/>;
    }
}
// 气泡确认框
export class Popconfirm extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Popconfirm {...this.__props}/>;
    }
}


/************* Tabs 标签页 ************************************************************************** */

export class Tabs extends DataDisplay {
    constructor(props) {
        super(props);
        // 受控属性
        // event: onChange / paramsIndex: 0
        this.__controlled = {
            key: 'activeKey'
        };
        this.__init();
    }
    render() {
        return <Antd.Tabs {...this.__props} />;
    }
}
// tab的每一项
export class TabPane extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Tabs.TabPane {...this.__props}/>;
    }
}


/************* Tag 标签 ************************************************************************** */

export class Tag extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Tag {...this.__props}/>;
    }
}
export class CheckableTag extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Tag.CheckableTag {...this.__props}/>;
    }
}


/************* Timeline 时间轴 ************************************************************************** */

export class Timeline extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Timeline {...this.__props}/>;
    }
}
export class TimelineItem extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Timeline.Item {...this.__props}/>;
    }
}