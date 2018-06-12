/**
 * @file 数据录入 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Utils} from 'src/utils';
import DataEntry from './base/DataEntry.js';
import moment from 'moment';
import * as Antd from 'antd';


/************ AutoComplete 自动补全 *************************************************************************** */
// 简单的补全功能
// TODO: 完善
export class AutoComplete extends DataEntry {
    constructor(props) {
        super(props);
        // _onSearch 中的逻辑会注入到 onSearch 事件中，见 BaseComponent
        this._injectEvent = ['onSearch'];
        this.__init();
        this.state = {
            result: []
        };
    }
    // 注入到 onSearch 事件中
    _onSearch(value, ...params) {
        let result  = [];
        if (!!value) {
            result = this.__props.options.map(i=>value + i);
        }
        this.setState({result});
    }
    // 默认对应的是 onChange
    _onControlEvent(...params) {
        // 对change前后的数据进行对比
        let oldValue = this.__props.value;
        super._onControlEvent.call(this, ...params);
        let newValue = this.__props.value;
        // 如果长度变短，说明是在删除，如果和后缀能匹配上，直接把后缀删除
        if (oldValue && newValue && oldValue.length > newValue.length) {
            for (let v of this.__props.options) {
                if (oldValue.indexOf(v) !== -1) {
                    let result = oldValue.replace(v, '');
                    if (result.length < newValue.length) {
                        this.__props.value = result;
                        this.__props.onSearch(result);
                        break;
                    }
                }
            }
        }
    }
    render() {
        return <Antd.AutoComplete {...this.__props}>
            {this.state.result.map(item=>
                <Antd.AutoComplete.Option key={item}>{item}</Antd.AutoComplete.Option>
            )}
        </Antd.AutoComplete>;
    }
}

/************* Cascader 级联选择 ************************************************************************** */

export class Cascader extends DataEntry {
    constructor(props) {
        super(props);
        this.__controlled.defaultVal = [];
        this.__init();
    }
    render() {
        return <Antd.Cascader {...this.__props}/>;
    }
}


/************* Checkbox 复选框 ************************************************************************** */

export class Checkbox extends DataEntry {
    constructor(props) {
        super(props);
        this.__controlled.key = 'checked';
        this.__controlled.defaultVal = false;
        this.__init();
    }
    render() {
        return <Antd.Checkbox {...this.__props}/>;
    }
}
// 多复选框组合
export class CheckboxGroup extends DataEntry {
    constructor(props) {
        super(props);
        this._openApi.push('checkAll');
        this.__controlled.defaultVal = [];
        this.__init();
    }
    __afterSetProps() {
        super.__afterSetProps();
        this.__props.options = Utils.toOptions(this.__props.options);
    }
    checkAll(status = true) {
        let value = status ? this.__props.options.map(v=>v.value) : [];
        this.__setProps({value});
        this.__props.onChange && this.__props.onChange(value);
    }
    render() {
        return <Antd.Checkbox.Group {...this.__props}/>;
    }
}


/************* DatePicker 日期选择框 ************************************************************************** */

class BasePicker extends DataEntry {
    constructor(props) {
        super(props);
        this._filter.push('current');
        // this.__init();
    }
    // 继承父组件的函数，_initProps 后增加额外处理逻辑
    _afterInitProps() {
        super._afterInitProps();
        // 如果设置了 value='current'，则把current转换为当前时间
        if (this.__props.value === 'current') {
            this.__props.value = moment().format(this.__props.format);
        }
        // this._inject(this.__props, 'onChange', (...params)=>{
        // });
    }
}
// 日期[时间]选择
export class DatePicker extends BasePicker {
    constructor(props) {
        super(props);
        this.__controlled.paramsIndex = 1;
        this.__init();
    }
    // 继承父组件的函数，_initProps 后增加额外处理逻辑
    _afterInitProps() {
        super._afterInitProps();
        // 如果没有设置showTime，根据format自动增删showTime属性
        if (Utils.typeof(this.__props.showTime, 'undefined')) {
            this.__props.showTime = this._judgeShowTime(this.__props.format);
        }
    }
    // 根据format自动增删showTime属性
    _judgeShowTime(format) {
        return format && format.toLowerCase().indexOf('h') !== -1;
    }
    render() {
        let value = this.__props.value;
        return <Antd.DatePicker {...this.__props}
            value={value ? Utils.moment(value) : value}/>;
    }
}
// 范围选择
export class RangePicker extends DatePicker {
    constructor(props) {
        super(props);
        this.__controlled.paramsIndex = 1;
        this.__controlled.defaultVal = [];
        this.__init();
    }
    _afterInitProps() {
        super._afterInitProps();
        // 如果设置了 value='current'，则把current转换为当前时间
        let value = this.__props.value;
        if (value && value[0] === 'current') {
            value[0] = moment().format(this.__props.format);
        }
        if (value && value[1] === 'current') {
            value[1] = moment().format(this.__props.format);
        }
        this.__props.value = value;
    }
    render() {
        // 需注意，RangePicker 的value是一个数组
        let value = this.__props.value;
        let format = this.__props.format;
        return <Antd.DatePicker.RangePicker {...this.__props}
            value={value ? [Utils.moment(value[0], format), Utils.moment(value[1], format)] : value}/>;
    }
}
// 月份选择
export class MonthPicker extends BasePicker {
    constructor(props) {
        super(props);
        this.__controlled.paramsIndex = 1;
        this.__init();
    }
    render() {
        let value = this.__props.value;
        return <Antd.DatePicker.MonthPicker {...this.__props}
            value={value ? Utils.moment(value, this.__props.format) : value}/>;
    }
}

/************* TimePicker 时间选择 *************** */
// 时间选择，注意是继承的 DataEntry
export class TimePicker extends BasePicker {
    constructor(props) {
        super(props);
        this.__controlled.paramsIndex = 1;
        this.__init();
    }
    render() {
        let value = this.__props.value;
        return <Antd.TimePicker {...this.__props}
            value={value ? Utils.moment(value, this.__props.format) : value}/>;
    }
}

/************* Input 输入框 ************************************************************************** */

export class Input extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Input {...this.__props}/>;
    }
}
// textarea
export class Textarea extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Input.TextArea {...this.__props}/>;
    }
}
// 带搜索按钮 - 其余功能与Input一致，所以继承 Input 的处理逻辑
export class InputSearch extends Input {
    constructor(props) {
        super(props);
        this.class.push('input');
        this.__init();
    }
    render() {
        return <Antd.Input.Search {...this.__props}/>;
    }
}
// 输入框连接在一起形成一组
export class InputGroup extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        // 使用ref会报错
        delete this.__props.ref;
        return <Antd.Input.Group compact {...this.__props}/>;
    }
}
// 数字输入框
export class InputNumber extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.InputNumber compact {...this.__props}/>;
    }
}


/************* Rate 评分 ************************************************************************** */

export class Rate extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Rate {...this.__props}/>;
    }
}


/************* Radio 单选 ************************************************************************** */

// 这里直接使用Radio组，单个radio没想到什么应用场景
export class Radio extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        // 增加了一个配置项，来控制是否以button的形式展示
        let Item = Antd.Radio;
        if (this.__props.showAsButton) {
            Item = Antd.Radio.Button;
        }
        return <Antd.Radio.Group {...this.__props} options={undefined}>{
            Utils.toOptions(this.__props.options).map(item=>
                <Item key={item.value} disabled={item.disabled} style={item.style}
                    value={item.value}>{item.label}</Item>
            )
        }</Antd.Radio.Group>;
    }
}


/************* Select 下拉菜单 ************************************************************************** */

export class Select extends DataEntry {
    constructor(props) {
        super(props);
        if (props.mode === 'multiple' || props.mode === 'tags') {
            this.__controlled.defaultVal = [];
        }
        this.__init();
        // 给 source.onSuccess 绑定默认处理逻辑
        this.__filtered.source = Object.assign({
            onSuccess: this._onSourceSuccess.bind(this)
        }, this.__filtered.source);
    }
    _onSourceSuccess(data) {
        let current = this.__props.value;
        // 如果当前值再列表中，则不做任何处理
        if (Utils.toOptions(data).some(v=>v.value === current)) {
            return;
        }
        // 否则把值设置为第一个或者清空
        if (this.__props.defaultFirst) {
            let first = Utils.getFirstOption(data);
            this.props.onChange && this.props.onChange(first);
        } else if (!Utils.equals(this.__controlled.defaultVal, this.__props.value)) {
            // 为实现刷新组件时，清空原数据
            // 同时会带来问题，不能为空的字段会导致出现提示
            this.props.onChange && this.props.onChange(this.__controlled.defaultVal);
        }
    }
    render() {
        return <Antd.Select {...this.__props}>
            {Utils.toOptions(this.__props.options).map(item=>
                <Antd.Select.Option key={item.value} disabled={item.disabled} style={item.style}
                    value={item.value}>{item.label}</Antd.Select.Option>
            )}
        </Antd.Select>;
    }
}


/************* Transfer 穿梭框 ************************************************************************** */

// export class Transfer extends DataEntry {
//     constructor(props) {
//         super(props);
//         this.__init();
//     }
//     render() {
//         return <Antd.Transfer {...this.__props}/>;
//     }
// }


/************* Slider 滑动输入 ************************************************************************** */

// export class Slider extends DataEntry {
//     constructor(props) {
//         super(props);
//         this.__init();
//     }
//     render() {
//         return <Antd.Slider {...this.__props}/>;
//     }
// }


/************* Switch 开关 ************************************************************************** */

export class Switch extends DataEntry {
    constructor(props) {
        super(props);
        this.__controlled.key = 'checked';
        this.__init();
    }
    render() {
        // Switch用的是checked受控
        return <Antd.Switch {...this.__props}/>;
    }
}

/************* Upload 开关 ************************************************************************** */

export class Upload extends DataEntry {
    constructor(props) {
        super(props);
        this.__controlled.key = 'fileList';
        this.__init();
    }
    render() {
        return <Antd.Upload {...this.__props}/>;
    }
}


