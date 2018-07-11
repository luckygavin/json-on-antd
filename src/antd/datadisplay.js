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
        this._filter.push('forceRefresh');
        this.__init();
        // 标签页的引用
        this.tabRefs = {};
    }
    _afterInit() {
        super._afterInit();
        // 每次点击tab页切换时，展示内容强制刷新
        if (this.__filtered.forceRefresh) {
            this.__props.animated = this.__props.animated || false;
            this._inject(this.__props, 'onTabClick', function(activeKey) {
                // 如果通过items生成的子tab页，则可以使用refresh；否则刷新整个Tabs
                if (this.tabRefs[activeKey]) {
                    this.tabRefs[activeKey].refresh();
                } else {
                    // 全部Tab都会解析一遍
                    this.set({
                        content: this.__filtered._children
                    });
                }
                
            });
        }
    }
    _afterSetProps() {
        // 如果是使用items属性配置子tab，则做额外处理
        if (this.__props.items) {
            this.__props.children = this.__analysis(this.__props.items.map(v=>{
                v.type = 'tab-pane';
                v.wrappedComponentRef = inst=>(this.tabRefs[v.key] = inst);
                return v;
            }));
            delete this.__props.items;
        }
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
    componentDidMount() {
        this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
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