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

    _afterInit() {
        super._afterInit();
        this._updateOnChange();
    }

    _afterSetProps() {
        super._afterSetProps();
        // 把值为boolean类型的数据进行强制转换
        if (this.__controlled.key === 'checked') {
            this.__props.data = !!+this.__props.data;
        }
    }
    // 覆盖source获取数据时展示 loading 逻辑
    _handleSourceLoading(status) {
        // 如果配置了 showLoading: 'simple'，则更改loading展示效果，更简单，不防止用户操作
        // 否则使用原效果
        if (this.__filtered.source.showLoading === 'simple') {
            if (status) {
                let className = this.__filtered.__className || '';
                className += ' has-feedback is-validating';
                this.__setProps({className});
            } else {
                this.__setProps({className: this.__filtered.__className});
            }
        } else {
            super._handleSourceLoading.call(this, status);
        }
    }

    // 更新onchange逻辑，额外返回一个参数，为当前组件的值
    _updateOnChange() {
        if (this.__props.onChange) {
            const {key, paramsIndex} = this.__controlled;
            const oriOnChange = this.__props.onChange;
            this.__props.onChange = (...params)=>{
                let value;
                if (Utils.typeof(params[paramsIndex], 'object') && params[paramsIndex].target) {
                    value = params[paramsIndex].target[key];
                } else {
                    value = params[paramsIndex];
                }
                oriOnChange(...params, value);
            };
        }
    }

    // 增加 onChange 时默认保存数据的函数
    // 父类的 _onControlEvent 函数不能满足需求，直接覆盖了
    _onControlEvent(...params) {
        const {key, paramsIndex} = this.__controlled;
        this.__props[key] = params[params.length - 1];
        // // 适合的组件：input、checkbox、radio
        // if (Utils.typeof(params[paramsIndex], 'object') && params[paramsIndex].target) {
        //     this.__props[key] = params[paramsIndex].target[key];
        // } else {
        //     this.__props[key] = params[paramsIndex];
        // }
        this.forceUpdate();
    }

    // 获取数据接口
    getValue() {
        const key = this.__controlled.key;
        return this.__props[key];
    }
}
