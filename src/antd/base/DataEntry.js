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
        this.class.push('data-entry');
        this.__controlled = {
            key: 'value',
            event: 'onChange',
            defaultVal: undefined,
            paramsIndex: 0
        };
    }

    _afterInitProps() {
        // 另外存一份className
        this.__filtered.__className = this.__props.className;
    }

    __afterSetProps() {
        super.__afterSetProps();
        // 把值为boolean类型的数据进行强制转换
        if (this.__controlled.key === 'checked') {
            this.__props.data = !!+this.__props.data;
        }
        // 使用source异步拉取数据时，展示loading效果
        if (this.__filtered.__sending) {
            let className = this.__filtered.__className || '';
            className += ' has-feedback is-validating';
            this.__props.className = className;
        } else {
            if (this.__filtered.__className) {
                this.__props.className = this.__filtered.__className;
            } else {
                delete this.__props.className;
            }
        }
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
