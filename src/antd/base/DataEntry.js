/**
 * 数据录入 相关的组件抽象类，如：Input等
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Antd from './Antd.js';

export default class DataEntry extends Antd {
    constructor(props) {
        super(props);
    }

    __init() {
        super.__init.call(this);
        this._setProps();

        // const originRecieiveProps = this.componentWillReceiveProps;
        // this.componentWillReceiveProps = (nextProps, ...params) => {
        //     originRecieiveProps && originRecieiveProps(nextProps, ...params);
        //     this._setProps(nextProps);
        // }
    }

    // 增加 onChange 时默认保存数据的函数
    _onChange(callback, ...params) {
        callback && callback(...params);
        this.__control.value = params[0].target.value;
        this.forceUpdate();
    }

    // 覆盖部分props上面的属性
    _setProps() {
        const {value, defaultValue, onChange} = this.props;
        this.__control = {
            // 把value和defaultValue merge一下，统一交由 value 控制
            value: value || defaultValue,
            onChange: this._onChange.bind(this, onChange)
        };
    }

    // 获取数据接口
    getValue() {
        return this.__control.value;
    }
}
