/**
 * @file DataEntry 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import DataEntry from './base/DataEntry.js';
import * as Antd from 'antd';

// AutoComplete自动完成
export class AutoComplete extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.AutoComplete {...this.__props}/>
    }
}


// 级联选择
export class Cascader extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Cascader {...this.__props}/>
    }
}


// 复选框
export class Checkbox extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Checkbox {...this.__props}/>
    }
}
// 多复选框组合
export class CheckboxGroup extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Checkbox.Group {...this.__props}/>
    }
}


// 日期选择框
class BasePicker extends DataEntry {
    constructor(props) {
        super(props);
    }

    __init() {
        super.__init.call(this);
        this._setProps();

        const originRecieiveProps = this.componentWillReceiveProps;
        this.componentWillReceiveProps = (nextProps, ...params) => {
            originRecieiveProps && originRecieiveProps(nextProps, ...params);
            this._setProps(nextProps);
        }
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
export class DatePicker extends BasePicker {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.DatePicker {...this.__props}/>
    }
}

// Input 输入框
export class Input extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Input {...this.__props} {...this.__control}/>
    }
}

// Select 下拉菜单
export class Select extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Select {...this.__props} {...this.__control}/>
    }
}

// Radio 单选
export class Radio extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Radio {...this.__props}/>
    }
}