/**
 * @file 数据展示 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Utils} from 'src/utils';
import DataDisplay from 'src/antd/base/DataDisplay.js';
import * as Antd from 'antd-mobile';


/************* Collapse 手风琴 ************************************************************************** */

export class Collapse extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Accordion {...this.__props}/>;
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

/************* Carousel 走马灯 ************************************************************************** */

export class Carousel extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Carousel {...this.__props}/>;
    }
}

/************* Card 卡片 ************************************************************************** */

export class Card extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        let header = this.__props.header;
        let footer = this.__props.footer;
        return <Antd.Card {...Utils.filter(this.__props, ['header', 'footer', 'children'])}>
            {header && (
                <Antd.Card.Header title={this.__analysis(header.title)}
                    thumbStyle={header.thumbStyle}
                    thumb={this.__analysis(header.thumb)}
                    extra={this.__analysis(header.extra)}
                />
            )}
            <Antd.Card.Body>
                {this.__props.children}
            </Antd.Card.Body>
            {footer && (
                <Antd.Card.Footer content={this.__analysis(footer.content)}
                    extra={this.__analysis(footer.extra)}
                />
            )}
        </Antd.Card>;
    }
}

/************* List 列表 ************************************************************************** */

export class List extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.List {...this.__props}/>;
    }
}
export class Item extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.List.Item {...this.__props}/>;
    }
}
// ListView 长列表
export class ListView extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.ListView {...this.__props}/>;
    }
}

/************ Popover 气泡 *************************************************************************** */

export class Popover extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Popover {...this.__props}/>;
    }
}


/************* NoticeBar 通告栏 ************************************************************************** */

export class NoticeBar extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.NoticeBar {...this.__props}/>;
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

/************* Result 结果页 ************************************************************************** */

export class Result extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Result {...this.__props}/>;
    }
}
