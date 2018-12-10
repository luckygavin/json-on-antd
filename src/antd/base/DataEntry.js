/**
 * @file 数据录入 相关的组件抽象类，如：Input等
 * @author liuzechun
 * Created Date: 2017-09-29 01:11:19
 *
 * Last Modified: 2017-09-29 07:28:11
 * Modified By: liuzechun
 */

import React from 'react';
import Antd from './Antd.js';
import {Utils} from 'src/utils';
import moment from 'moment';

export default class DataEntry extends Antd {
    constructor(props) {
        super(props);
        this.class.push('data-entry');
        this._openApi.push('getValue');
        this.__controlled = {
            key: 'value',
            event: 'onChange',
            defaultVal: undefined,
            paramsIndex: 0
        };
    }
    // 针对输入型组件，重写loading函数
    loading(status, showLoading) {
        if (showLoading === 'simple') {
            if (status) {
                let className = this.__filtered.__className || '';
                className += ' has-feedback is-validating';
                this.__setProps({className});
            } else {
                this.__setProps({className: this.__filtered.__className});
            }
        } else {
            super.loading.call(this, status);
        }
    }
    _afterInitProps() {
        // 另外存一份className
        this.__filtered.__className = this.__props.className;
    }

    _afterInit() {
        super._afterInit();
        this._updateEvent();
    }

    _afterSetProps() {
        super._afterSetProps();
        // 把值为boolean类型的数据进行强制转换
        if (this.__controlled.key === 'checked') {
            this.__props.data = !!+this.__props.data;
        }
    }
    // 更新 onChange/onBlur 逻辑，额外返回一个参数，为当前组件的值
    _updateEventHandler(param) {
        return param;
    }
    _updateEvent() {
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
                // 以上规则依然不能满足时，再重写函数进行额外处理
                value = this._updateEventHandler(value);
                return oriOnChange(...params, value);
            };
        }
        if (this.__props.onBlur) {
            const oriOnBlur = this.__props.onBlur;
            this.__props.onBlur = (...params)=>{
                oriOnBlur(...params, this.getValue());
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


/************* 附带options属性的基类（包含多选逻辑） ***************************************************** */

DataEntry.OptionsDataEntry = class OptionsDataEntry extends DataEntry {
    constructor(props) {
        super(props);
        this._openApi.push('getDisplayValue', 'getSelectedOption');
    }
    _afterSetProps(nextProps) {
        super._afterSetProps();
        // 把 options 格式化为统一固定格式
        if (nextProps.options) {            
            this.__props.options = Utils.toOptions(this.__props.options);
        }
        if (!this.__props.options) {
            this.__props.options = [];
        }
    }
    // 处理多选情况
    _handleMultipleSelect() {
        let current = this.__props.value || [];
        // 当设置默认全选时，更新当前内容为全选
        if (this.__props.defaultSelectAll) {
            let all = this.__props.options.map(v=>v.value);
            this.__props.onChange && this.__props.onChange(all);
            return;
        }
        // 默认选中第一个的处理逻辑
        if (this.__props.defaultFirst && Utils.empty(this.__props.value)) {
            let first = Utils.getFirstOption(this.__props.options);
            this.__props.onChange && this.__props.onChange([first]);
        }
        // 如果是多选型的，且当前有值，首先判断是否还有能匹配上的，如果全部匹配则跳过，否则更新
        let matchVal = this.__props.options.filter(v=>current.indexOf(v.value) > -1).map(v=>v.value);
        if (matchVal.length === current.length) {
            return;
        }
        this.__props.onChange && this.__props.onChange(matchVal);
    }
    // 处理默认选中
    _handleDefaultSelect(allClear = true) {
        let current = this.__props.value;
        // 如果当前值再列表中，则不做任何处理
        let alldata = this.__props.options;
        // 追加上extOptions中的内容，仅select组件有
        if (this.getAllOptions) {
            alldata = this.getAllOptions(alldata);
        }
        if (alldata.some(v=>(v.value + '') === (current + ''))) {
            return;
        }
        // 否则把值设置为第一个或者清空
        if (this.__props.defaultFirst) {
            let first = Utils.getFirstOption(this.__props.options);
            this.__props.onChange && this.__props.onChange(first);
        } else if (allClear && this.__props.value !== undefined
            && !Utils.equals(this.__controlled.defaultVal, this.__props.value)) {
            // 为实现刷新组件时，清空原数据
            // 同时会带来问题，不能为空的字段会导致出现提示（已解决）
            this.__props.onChange && this.__props.onChange(this.__controlled.defaultVal);
        }
    }

    // 获取页面展示内容，针对select等类型的展示和实际提交的内容不一致的组件
    getDisplayValue() {
        const value = this.getValue();
        let result = value;
        let options = this.__props.options || [];
        for (let i in options) {
            if (options[i].value === value || options[i].value === (value + '')) {
                result = options[i].label;
                break;
            }
        }
        return result;
    }
    // 获取选中的option，针对select等类型的具备可选值的组件
    getSelectedOption() {
        const value = this.getValue();
        let result;
        let options = this.__props.options || [];
        for (let i in options) {
            if (options[i].value === value || options[i].value === (value + '')) {
                result = options[i];
                break;
            }
        }
        return result;
    }

};

/************* DatePicker日期选择框系列基类 ************************************************************** */

DataEntry.BasePicker = class BasePicker extends DataEntry {
    constructor(props) {
        super(props);
        this._analysis.push('renderExtraFooter');
        this._filter.push('current');
        this._injectEvent.push('onOk');
        // this.__init();
    }
    // 获取当前时间
    _getCurrentValue() {
        return moment().format(this.__props.format);
    }
    // 注入到onOk事件中
    // BUGFIX: 直接点击确认按钮时，自动把当前日期时间填上
    _onOk(value) {
        if (value === undefined) {
            value = this._getCurrentValue();
            this.__setProps({value: value});
            this.__props.onChange && this.__props.onChange(Utils.moment(value), value);
        }
        if (value instanceof moment && this.__props.format) {
            value = value.format(this.__props.format);
        }
    }
    // 继承父组件的函数，_initProps 后增加额外处理逻辑
    _afterInitProps() {
        super._afterInitProps();
        // 如果设置了 value='current'，则把current转换为当前时间
        if (this.__props.value === 'current') {
            this.__props.value = this._getCurrentValue();
        }
    }
}