/**
 * @file 数据录入 类组件
 * @author liuzechun
 */
import React from 'react';
import {Utils} from 'src/utils';
import DataEntry from './base/DataEntry.js';
import * as Antd from 'antd';

const OptionsDataEntry = DataEntry.OptionsDataEntry;
const BasePicker = DataEntry.BasePicker;

/************* Cascader 级联选择 ************************************************************************** */

export class Cascader extends OptionsDataEntry {
    constructor(props) {
        super(props);
        this.__controlled.defaultVal = [];
        this.__init();
    }
    render() {
        return <Antd.Cascader {...this.__props}/>;
    }
}

/************* DatePicker 日期[时间]选择 ****************************************************************** */

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
// RangePicker 日期范围选择
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
            value[0] = this._getCurrentValue();
        }
        if (value && value[1] === 'current') {
            value[1] = this._getCurrentValue();
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
// MonthPicker 月份选择
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
// TimePicker 时间选择
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
export class CheckboxGroup extends OptionsDataEntry {
    constructor(props) {
        super(props);
        this._openApi.push('checkAll');
        this.__controlled.defaultVal = [];
        this.__init();
    }
    _afterSetProps(newProps) {
        super._afterSetProps(newProps);
        if (newProps.options) {
            this._handleDefaultSelect();
        }
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

/************* Radio 单选 ************************************************************************** */

// 这里直接使用Radio组，单个radio没想到什么应用场景
export class Radio extends OptionsDataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    _afterSetProps(newProps) {
        super._afterSetProps(newProps);
        if (newProps.options) {
            this.__props.options = this.__props.options.map(item=>{
                item.value += '';
                return item;
            });
            this._handleDefaultSelect();
        }
    }
    render() {
        // 增加了一个配置项，来控制是否以button的形式展示
        let Item = Antd.Radio;
        if (this.__props.showAsButton) {
            Item = Antd.Radio.Button;
        }
        return <Antd.Radio.Group {...Utils.filter(this.__props, 'options')} value={
                this.__props.value !== undefined ? '' + this.__props.value : undefined
            }>{
            this.__props.options.map(item=>
                <Item key={item.value} disabled={item.disabled} style={item.style}
                    value={item.value}>{item.label}</Item>
            )
        }</Antd.Radio.Group>;
    }
}


/************* Select 下拉菜单 ************************************************************************** */

export class Select extends OptionsDataEntry {
    constructor(props) {
        super(props);
        this._openApi.push('selectAll');
        this.__init();
    }
    _afterInitProps() {
        super._afterInitProps();
        this.isMultiple = this.__props.type === 'multiple' || this.__props.type === 'tags';
        if (this.isMultiple) {
            this.__controlled.defaultVal = [];
        }
    }
    selectAll(status = true) {
        if (this.isMultiple) {
            let value = status ? this.__props.options.map(v=>v.value) : [];
            this.__setProps({value});
            this.__props.onChange && this.__props.onChange(value);
        }
    }
    // 改为每次set值时检查，如果更新了options，则进行是否清空或者重置为默认值的处理
    _afterSetProps(newProps) {
        super._afterSetProps(newProps);
        // combobox 模式下，由于可以任意输入，所以不再对当前数据进行处理
        if (newProps.options) {
            this.__props.options = this.__props.options.map(item => {
                item.value += '';
                return item;
            });
            if (this.__props.type !== 'combobox') {
                // 根据是否多选做区别处理
                if (this.isMultiple) {
                    this._handleMultipleSelect();
                } else {
                    this._handleDefaultSelect();
                }
            }
        }
    }
    getAllOptions(data = this.__props.options) {
        return [].concat(this.__props.extOptions || [], data || []);
    }
    render() {
        let formatType = Utils.getType(this.__controlled.defaultVal);
        let value = this.__props.value;
        if (formatType === 'array') {
            value = Utils.format(this.__props.value, formatType);
        } else if (Utils.typeof(value, ['number', 'boolean'])) {
            value += '';
        }
        return <Antd.Select {...Utils.filter(this.__props, 'options')} value={value}>
            {this.getAllOptions().map(item=>
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
        this.__controlled.defaultVal = false;
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
        this.__controlled.defaultVal = [];
        this._filter.push('fieldName');
        this.__init();
        this.__props.name = this.props.fieldName || 'file';
    }
    // 参数额外处理
    _updateEventHandler(param) {
        return param ? param.fileList : [];
    }
    render() {
        return <Antd.Upload {...this.__props}/>;
    }
}
export class Dragger extends Upload {
    render() {
        return <Antd.Upload.Dragger {...this.__props}/>;
    }
}
