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
        this._filter.push('size');
        this.__init();
    }
    render() {
        let className = 'uf-card';
        if (this.__filtered.size === 'small') {
            className += ' uf-card-small';
        } else if (this.__filtered.size === 'compact') {
            className += ' uf-card-compact';
        }
        return <Antd.Card {...this.__props}
            {...this.__getCommonProps({className})}/>;
    }
}


/************* Carousel 轮播 ************************************************************************** */

export class Carousel extends DataDisplay {
    constructor(props) {
        super(props);
        this._openApi.push('next', 'prev', 'goto');
        this.slick = null;
        this.__init();
    }
    _componentDidMount(...p) {
        super._componentDidMount(...p);
        if (this._component && this._component.innerSlider) {
            this.slick = this._component.innerSlider;
        }
    }
    next() {
        this.slick && this.slick.slickNext();
    }
    prev() {
        this.slick && this.slick.slickPrev();
    }
    goto(index) {
        this.slick && this.slick.slickGoTo(index);
    }
    render() {
        return <Antd.Carousel {...this.__props}/>;
    }
}


/************* Collapse 折叠面板 ************************************************************************** */

export class Collapse extends DataDisplay {
    constructor(props) {
        super(props);
        this._openApi.push('open', 'close');
        // 受控属性
        // event: onChange / paramsIndex: 0
        this.__controlled = {
            key: 'activeKey'
        };
        this.__init();
    }
    _afterSetProps() {
        // 如果activeKey不是数组，则默认打开手风琴模式
        if (this.__props.activeKey && !Utils.typeof(this.__props.activeKey, 'array')) {
            this.__props.accordion = true;
        }
        // 如果设置了fixed属性，则移除折叠展开的交互，仅作为展示组件
        if (this.__props.fixed) {
            this.__controlled = null;
            this.__props.className = (this.__props.className || '') + ' uf-collapse-fixed';
        }
    }
    // 打开某个面板
    open(key) {
        if (this.__props.accordion) {
            this.__setProps({activeKey: key});
        } else {
            let current = this.__props.activeKey || [];
            if (!current.some(v => v === key)) {
                current.push(key);
            }
            this.__setProps({activeKey: current});
        }
    }
    // 关闭某个面板
    close(key) {
        if (this.__props.accordion) {
            if (!this.__props.activeKey || this.__props.activeKey === key) {
                this.__setProps({activeKey: ''});
            }
        } else {
            let current = this.__props.activeKey || [];
            this.__setProps({activeKey: current.filter(v=>v !== key)});
        }
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
        // 受控属性
        this.__controlled = {
            key: 'visible',
            event: 'onVisibleChange'
        };
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
        // 受控属性
        this.__controlled = {
            key: 'visible',
            event: 'onVisibleChange'
        };
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
        // 受控属性
        this.__controlled = {
            key: 'visible',
            event: 'onVisibleChange'
        };
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
        this._injectEvent.push('onTabClick');
        this.__init();
        // 标签页的引用
        this.tabRefs = {};
    }
    // _onChange(key) {
    //     window.history.pushState(null, null, key);
    // }
    _onTabClick(activeKey) {
        if (this.__filtered.forceRefresh) {
            // 如果通过items生成的子tab页，则可以使用refresh；否则刷新整个Tabs
            if (this.tabRefs[activeKey]) {
                this.tabRefs[activeKey].refresh();
            } else {
                // 全部Tab都会解析一遍
                this.set({
                    content: this.__filtered._children
                });
            }
        }
    }
    _afterSetProps() {
        // 如果是使用items属性配置子tab，则做额外处理（支持权限控制）
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
        this._innerFilter.push('wrappedComponentRef');
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