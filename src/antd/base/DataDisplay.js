/**
 * 数据展示 组件抽象类，如：Card、Tooltip 等
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Antd from './Antd.js';

export default class DataDisplay extends Antd {
    constructor(props) {
        super(props);
    }
}
    // __init() {
    //     super.__init.call(this);
    //     this._initProps();
    // }

    // _componentWillReceiveProps(nextProps, ...params) {
    //     super._componentWillReceiveProps && super._componentWillReceiveProps.call(this, nextProps, ...params);
    //     // 如果用户的传入的value变化了，则说明是用户想要改变value，把value的值重置为新的value值
    //     // 这里考虑的是非react应用场景，只有用户的逻辑去改config这个value才会改
    //     if (nextProps.value !== this.props.value) {
    //         this._initProps(nextProps);
    //     }
    // }

    // // 覆盖部分props上面的属性
    // _initProps() {
    //     const {value, defaultValue, onChange} = this.props;
    //     // 把value和defaultValue merge一下，统一交由 value 控制
    //     this.__props['value'] = value || defaultValue;
    //     this.__props['onChange'] = this._onChange.bind(this, onChange)
    // }

    // // 增加 onChange 时默认保存数据的函数
    // _onChange(callback, ...params) {
    //     callback && callback(...params);
    //     // console.log(params[1]);
    //     if (Utils.typeof(params[0], 'object') && params[0].target) {
    //         // 适合的组件：input、input-number、checkbox、radio
    //         this.__props.value = params[0].target.value;
    //     } else if (Utils.typeof(params[0], ['string', 'number', 'boolean'])) {
    //         // 适合的组件：select、switch
    //         this.__props.value = params[0];
    //     } else if (params[1]) {
    //         // 适合的组件：date-picker系列
    //         this.__props.value = params[1];
    //     } else {
    //         // 特殊情况，容错
    //         this.__props.value = params[0];
    //     }

    //     this.forceUpdate();
    // }

    // // 获取数据接口
    // getValue() {
    //     return this.__props.value;
    // }