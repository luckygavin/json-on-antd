/**
 * @file 数据录入 相关的组件抽象类，如：Input等
 * @author liuzechun
 * Created Date: 2017-09-29 01:11:19
 *
 * Last Modified: 2017-09-29 07:28:11
 * Modified By: liuzechun
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Antd from './Antd.js';
import {Utils} from 'uf/utils';

export default class DataEntry extends Antd {
    constructor(props) {
        super(props);
        this.__controlled = {
            key: 'value',
            event: 'onChange'
        };
    }

    // 增加 onChange 时默认保存数据的函数
    // 父类的 _onEvent 函数不能满足需求，直接覆盖了
    _onEvent(callback, ...params) {
        const key = this.__controlled.key;
        // console.log(params[1]);
        if (Utils.typeof(params[0], 'object') && params[0].target) {
            // 适合的组件：input、input-number、checkbox、radio
            this.__props[key] = params[0].target.value;
        } else if (Utils.typeof(params[0], ['string', 'number', 'boolean', 'array'])) {
            // 适合的组件：select、switch、cascader、rate、slider
            this.__props[key] = params[0];
        } else if (params[1]) {
            // 适合的组件：date-picker系列
            this.__props[key] = params[1];
        } else {
            // 特殊情况，容错
            this.__props[key] = params[0];
        }
        this.forceUpdate();

        callback && callback(...params);
    }

    // 获取数据接口
    getValue() {
        const key = this.__controlled.key;
        return this.__props[key];
    }
}
