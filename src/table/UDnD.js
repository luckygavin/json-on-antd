/**
 * @file UDnD 拖拽组件
 * @desc 实现基本的拖拽功能，可以给要拖拽的组件传递数据
 * @author luyongffang@baidu.com
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class UDnD extends React.Component {
    constructor(props) {
        super(props);
    }
    getSrcData(event) {
        let srcData = {};
        let arrTypes = event.dataTransfer.types;
        for (let v of arrTypes) {
            srcData[v] = event.dataTransfer.getData(v);
        }
        return srcData;
    }
    dragStart(event) {
        event = event || window.event;
        event.dataTransfer.effectAllowed = 'copyMove';
        for (let k in this.props) {
            if (k.indexOf('-') !== -1) {
                event.dataTransfer.setData(k, this.props[k]);
            }
        }
    }
    dragOver(event) {
        event = event || window.event;
        event.preventDefault();
    }
    dragOver(event) {
        event = event || window.event;
        event.preventDefault();
    }
    dragDrop(event) {
        event = event || window.event;
        event.stopPropagation();
        let objDatas = {};
        let namedNodeMap = event.target.attributes;
        for (let k in namedNodeMap) {
            let nodeName = namedNodeMap[k].nodeName;
            if (nodeName && (nodeName.indexOf('-') !== -1)) {
                objDatas[nodeName] = namedNodeMap[k].nodeValue;
            }
        }
        let srcData = this.getSrcData(event);
        this.props.handleDragDrop && this.props.handleDragDrop(srcData, objDatas);
    }
    dragEnd(event) {
        console.log('drag end');
    }
    render() {
        return (
            <div draggable="true" {...this.props} onDragStart={this.dragStart.bind(this)}
                onDrop={this.dragDrop.bind(this)} onDragEnd={this.dragEnd.bind(this)}
                onDragOver={this.dragOver.bind(this)}>
                {this.props.children}
            </div>
        );
    }
}
