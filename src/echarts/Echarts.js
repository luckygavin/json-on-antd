/**
 * @file Echarts封装
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

export default class Echarts extends BaseComponent {
    constructor(props) {
        super(props);
        this._filter.push('type');
        // 保证每次实例化都有一个唯一的id
        this.chartId = (props.__key || 'create_echarts') + '_' + Utils.uniqueId();
        this.echarts;
        this.chart;
        this.__init();
    }
    _afterSetProps() {
        super._afterSetProps();
        // 改变生命周期
        if (this.__filtered.afterCreate) {
            this.__filtered.oriAfterCreate = this.__filtered.afterCreate;
            delete this.__filtered.afterCreate;
        }
    }
    componentWillReceiveProps(nextProps) {
        // if (Utils.isChange(this.__prevProps, this.__filterProps(nextProps))) {
        //     this.chart.setOption(this.__filterProps(nextProps));
        // }
        this.chart && this.chart.setOption(this.__filterProps(nextProps));
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 只有className/style变，才刷新当前组件，否则只进行setOption处理就行了
        if (Utils.isChange({className: nextProps.className, style: nextProps.style}, this.__prevProps)) {
            return true;
        }
        return false;
    }
    componentDidMount() {
        // 执行的时候再获取
        const echarts = window.echarts;
        if (echarts) {
            this.echarts = echarts;
            this.initEcharts();
        } else {
            // 惰性加载
            // echarts 的路径见 src/default/index.js 中的配置
            this._factory.$requirejs(['echarts'], echarts=>{
                this.echarts = echarts;
                this.initEcharts();
            });
        }
    }
    initEcharts() {
        if (this.echarts) {
            // 初始化
            let chart = this.echarts.init(document.getElementById(this.chartId));
            chart.setOption(this.__props);
            this.chart = chart;
            this._transmitComponent();

            // 把echarts的api全部转移到当前组件上
            this._agencyFunction(chart);
            this._agencyFunction(Object.getPrototypeOf(chart));

            // 真正创建完echarts时再执行用户配置的afterCreate逻辑
            this.__filtered.oriAfterCreate && this.__filtered.oriAfterCreate();
        } else {
            Utils.defer(console.error, 'There is no echarts, please check.');
        }
    }
    _agencyFunction(origin) {
        for (let i of Object.keys(origin)) {
            if (Utils.typeof(origin[i], 'function')) {
                this._inject(this, i, (...p)=>{
                    return this.chart[i](...p);
                });
            }
        }
    }
    componentWillUnmount() {
        // 销毁组件
        this.chart && this.chart.dispose();
        // this._unsetTransmitComponent();
    }
    render() {
        return <div id={this.chartId} className={this.props.className} style={this.props.style}></div>;
    }
}
