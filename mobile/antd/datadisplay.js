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
export class Panel extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Accordion.Panel {...this.__props}/>;
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
        this._filter.push('header', 'footer');
        this.__init();
    }
    _afterInitProps() {
        super._afterInitProps();
        // 改造原组件的 renderHeader、renderFooter 接口
        if (this.__filtered.header) {
            this.__props.renderHeader = ()=>{
                return this.__analysis(this.__filtered.header);
            };
        }
        if (this.__filtered.footer) {
            this.__props.renderFooter = ()=>{
                return this.__analysis(this.__filtered.footer);
            };
        }
    }
    render() {
        return <Antd.List {...this.__props}/>;
    }
}
export class ListItem extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.List.Item {...this.__props}/>;
    }
}
// list-item-brief
export class ListItemBrief extends DataDisplay {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.List.Item.Brief {...this.__props}/>;
    }
}
// ListView 长列表
export class ListView extends DataDisplay {
    constructor(props) {
        super(props);
        this._injectEvent = ['onEndReached'];
        this._filter.push('data', 'header', 'footer', 'separator', 'renderRow');
        this.__init();
        this.pageNum = 1;
        this.state = {
            data: props.data || []
        };
        // 原组件中shi一样的代码
        this.dataSource = new Antd.ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
    }
    _afterInitProps() {
        super._afterInitProps();
        // 改造原组件的 renderHeader、renderFooter、renderSeparator、renderRow 接口
        // 头部
        if (this.__filtered.header) {
            this.__props.renderHeader = ()=>{
                return this.__analysis(this.__filtered.header);
            };
        }
        // 尾部
        if (this.__filtered.footer) {
            this.__props.renderFooter = ()=>{
                return this.__analysis(this.__filtered.footer);
            };
        }
        // 行渲染组件
        if (this.__filtered.renderRow) {
            this.__props.renderRow = (row, sectionId, rowId)=>{
                return this.__analysis(
                    this.__filtered.renderRow(row, +rowId)
                );
            };
        }
        // 分隔器
        if (this.__filtered.separator) {
            this.__props.renderSeparator = (sectionId, rowId)=>{
                let result = this.__filtered.separator;
                if (Utils.typeof(result, 'function')) {
                    result = result(rowId);
                } else {
                    result = Utils.clone(result);
                }
                result.key = result.key || rowId;
                return this.__analysis(result);
            };
        }
    }
    // 首次加载数据
    _handleAsyncData() {
        this._onEndReached();
    }
    // 滑动到底部时触发拉取数据的逻辑
    _onEndReached() {
        let params = this.__filtered.source.params;
        params = Object.assign({}, params, {
            page: this.pageNum++,
            size: this.__props.pageSize
        });
        // 调用通用source获取数据逻辑
        this.__getSourceData({
            params: params,
            success: data => {
                this.setState({
                    data: this.state.data.concat(data)
                });
            }
        });
    }
    render() {
        console.log(this.__props);
        return <Antd.ListView {...this.__props}
            onEndReachedThreshold={this.__props.endReachedThreshold}
            renderFooter={this.__props.renderFooter || (() => (<div style={{padding: 30, textAlign: 'center'}}>
                {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>))}
            dataSource={this.dataSource.cloneWithRows(this.state.data)}
        />;
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
