/**
 * @file Echarts封装
 */
import React from 'react';
import ReactDOM from 'react-dom';
import echarts from 'echarts';
// import {BaseComponent} from 'src/base';
import {ComponentsCache} from 'src/cache';
import {Utils} from 'src/utils';

export default class Echarts extends React.PureComponent {
    constructor(props) {
        super(props);
        this.name = props.name;
        // 保证每次实例化都有一个唯一的id
        this.chartId = (props.name || 'create_echarts') + '_' + Date.now();
        this.chart;
    }
    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        // if ('data' in nextProps) {
        // }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    componentDidMount() {
        // 初始化
        let chart = echarts.init(document.getElementById(this.chartId));
        chart.setOption(Utils.filter(this.props, ['type', 'name']));

        this.chart = chart;
        this._transmitComponent();
    }
    componentWillUnmount() {
        // 销毁组件
        this.chart.dispose();
        this._unsetTransmitComponent();
    }
    // 共享组件
    _transmitComponent() {
        if (!!this.name) {
            ComponentsCache.set(this.name, this.chart);
        }
    }
    // 解除共享
    _unsetTransmitComponent() {
        if (!!this.name) {
            ComponentsCache.del(this.name);
        }
    }
    render() {
        return <div id={this.chartId} className={this.props.className} style={this.props.style}></div>;
    }
}
