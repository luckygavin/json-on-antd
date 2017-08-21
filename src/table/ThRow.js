
/**
 * @file 简易表格组件
 * @author liuzechun@baidu.com
 * */
/* eslint-disable fecs-camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {Checkbox} from 'antd';
import UDnD from './UDnD.js';
const styles = {
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};
export default class ThRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            // 排序的是哪个字段，排序的规则
            sortField: this.props.sortField ? this.props.sortField : '',
            sort: this.props.sort ? this.props.sort : ''
        };
    }
    checkAll() {
        this.props.checkAll(!this.props.checked);
        this.setState({checked: !this.state.checked});
        return;
    }
    sortClick(sortField) {
        // sortType为true 代表是ASC排序
        let sortType = this.state.sortField === sortField ? !this.state.sort : true;
        this.setState({sort: sortType, sortField: sortField});
        this.props.sortColumn && this.props.sortColumn(sortType, sortField);
    }
    handleDragDrop(srcData, dropData, e) {
        e = e || window.event;
        // 防止传播到th的click的事件上
        e.stopPropagation();
        this.props.changeColumnOrder(srcData['data-field'], dropData['data-field']);
    }
    generatorRow() {
        let thList = [];
        for (let key in this.props.showTags) {
            let dndProps = {
                'data-field': key,
                'handleDragDrop': this.handleDragDrop.bind(this)
            };
            let value = this.props.showTags[key];
            if (key === 'operation' && (value.display || value.display == null)) {
                thList.push(<th key={key}>操作</th>);
            } else if (key === 'cusOperation' && (value.display || value.display == null)) {
                thList.push(<th key={key}>{value['title']}</th>);
            } else if (typeof(value) === 'object' && (value.display || value.display == null)) {
                let spanSort = [];
                let sortAscCss = 'fa fa-sort-asc ' + (this.state.sort && (key === this.state.sortField) ? 'umpui-asc' : '');
                let sortDescCss = 'fa fa-sort-desc ' + (!this.state.sort && (key === this.state.sortField) ? 'umpui-desc' : '');
                if (value.sort) {
                    spanSort.push(<span className={sortAscCss} key="sortasc"></span>);
                    spanSort.push(<span className={sortDescCss} key="sortdesc"></span>);
                    thList.push(<th key={key} onClick={this.sortClick.bind(this, key)}>
                        <UDnD {...dndProps}>{value['title']}
                            <div className="umpui-sortcon">{spanSort}</div></UDnD></th>);
                } else {
                    thList.push(<th key={key}><UDnD {...dndProps}>{value['title']}</UDnD></th>);
                }
            } else if (typeof(value) === 'string') {
                thList.push(<th key={key}><UDnD {...dndProps}>{value}</UDnD></th>);
            }
        }
        let operationArr = [];
        if (this.props.tableCfg.cfg && this.props.tableCfg.cfg.checkBox) {
            operationArr.push(<span key="thcheckbox">
                    <Checkbox checked={this.props.checked} onChange={this.checkAll.bind(this)}/></span>);
        }
        if (this.props.tableCfg.cfg && this.props.tableCfg.cfg.expand) {
            let foldUp = 'fa fa-caret-right';
            let foldDown = 'fa fa-caret-down';
            let strClaName = this.props.expandAll ? foldDown : foldUp;
            operationArr.push(<span key="thexpand" data-key={'expandAll'}
                className={strClaName} onClick={this.props.expandAllExtra}></span>);
        }
        if (operationArr.length > 0) {
            thList.unshift(<th key="operations" className="extra">{operationArr}</th>);
        }
        return thList;
    }
    render() {
        let thList = this.generatorRow();
        return (<thead><tr>{thList}</tr></thead>);
    }
}
