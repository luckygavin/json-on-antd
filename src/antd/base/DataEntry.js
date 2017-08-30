/**
 * 数据录入 相关的组件抽象类，如：Input等
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Antd from './Antd.js';
import {Utils} from 'uf/utils';

export default class DataEntry extends Antd {
    constructor(props) {
        super(props);
        this.__controlled = 'value';
    }

    // 增加 onChange 时默认保存数据的函数
    // 父类的 onChange 函数不能满足需求，直接覆盖了
    _onChange(callback, ...params) {
        callback && callback(...params);
        // console.log(params[1]);
        if (Utils.typeof(params[0], 'object') && params[0].target) {
            // 适合的组件：input、input-number、checkbox、radio
            this.__props.value = params[0].target.value;
        } else if (Utils.typeof(params[0], ['string', 'number', 'boolean', 'array'])) {
            // 适合的组件：select、switch、cascader
            this.__props.value = params[0];
        } else if (params[1]) {
            // 适合的组件：date-picker系列
            this.__props.value = params[1];
        } else {
            // 特殊情况，容错
            this.__props.value = params[0];
        }

        this.forceUpdate();
    }

    // 获取数据接口
    getValue() {
        return this.__props.value;
    }
}
