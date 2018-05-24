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
import {Utils} from 'src/utils';

export default class DataEntry extends Antd {
    constructor(props) {
        super(props);
        // 默认异步属性为 value
        this._sourceTarget = 'value';
        this.__controlled = {
            key: 'value',
            event: 'onChange',
            defaultVal: undefined,
            paramsIndex: 0
        };
    }

    // 增加 onChange 时默认保存数据的函数
    // 父类的 _onControlEvent 函数不能满足需求，直接覆盖了
    _onControlEvent(...params) {
        const {key, paramsIndex} = this.__controlled;
        // 适合的组件：input、checkbox、radio
        if (Utils.typeof(params[paramsIndex], 'object') && params[paramsIndex].target) {
            this.__props[key] = params[paramsIndex].target[key];
        } else {
            this.__props[key] = params[paramsIndex];
        }
        this.forceUpdate();
    }

    // 获取数据接口
    getValue() {
        const key = this.__controlled.key;
        return this.__props[key];
    }
}
