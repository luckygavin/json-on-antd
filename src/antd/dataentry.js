/**
 * @file 数据录入 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Utils} from 'uf/utils';
import DataEntry from './base/DataEntry.js';
import moment from 'moment';
import * as Antd from 'antd';
// 设置 moment 的 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

/************ AutoComplete 自动补全 *************************************************************************** */
// 简单的补全功能
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
    _onEvent(...params) {
        // 对change前后的数据进行对比
        let oldValue = this.__props.value;
        super._onEvent.call(this, ...params);
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
        // 异步属性为 options
        this._asyncAttr = 'options';
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
        // 异步属性为 checked
        this._asyncAttr = 'checked';
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
        // 异步属性为 options
        this._asyncAttr = 'options';
        this.__init();
    }
    render() {
        return <Antd.Checkbox.Group {...this.__props}/>;
    }
}


/************* DatePicker 日期选择框 ************************************************************************** */

class BasePicker extends DataEntry {
    constructor(props) {
        super(props);
    }
    // 继承父组件的函数，并在__props上追加一些属性
    // 此函数会在初始化以及componentWillReceiveProps时调用
    _initProps(...params) {
        super._initProps.call(this, ...params);
        this.__props = this.__mergeProps({format: 'YYYY-MM-DD'}, this.__props);
        // 如果没有设置showTime，根据format自动增删showTime属性
        if (Utils.typeof(this.__props.showTime, 'undefined')) {
            this.__props.showTime = this._judgeShowTime(this.__props.format);
        }
    }
    // 根据format自动增删showTime属性
    _judgeShowTime(format) {
        return format && format.toLowerCase().indexOf('h') !== -1;
    }
}
// 日期[时间]选择
export class DatePicker extends BasePicker {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        let value = this.__props.value;
        return <Antd.DatePicker {...this.__props}
            value={value ? moment(value) : value}/>;
    }
}
// 月份选择 ------ 注意，此处用的是 DataEntry，为的是防止 format 被覆盖成 datepicker 的默认值
export class MonthPicker extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        let value = this.__props.value;
        return <Antd.DatePicker.MonthPicker {...this.__props}
            value={value ? moment(value, this.__props.format) : value}/>;
    }
}
// 范围选择
export class RangePicker extends BasePicker {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        let value = this.__props.value;
        // 需注意，RangePicker 的value是一个数组
        return <Antd.DatePicker.RangePicker {...this.__props}
            value={value ? [moment(value[0]), moment(value[1])] : value}/>;
    }
}
/************* TimePicker 时间选择 *************** */
// 时间选择，注意是继承的 DataEntry
export class TimePicker extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        let value = this.__props.value;
        return <Antd.TimePicker {...this.__props}
            value={value ? moment(value, this.__props.format) : value}/>;
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
// 带搜索按钮
export class InputSearch extends DataEntry {
    constructor(props) {
        super(props);
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
        // 异步属性为 options
        this._asyncAttr = 'options';
        this.__init();
    }
    render() {
        let children;
        // 增加了一个配置项，来控制是否已button的形式展示
        if (this.__props.showAsButton) {
            children = (this.__props.options || []).map(item=>typeof item === 'string'
                ? <Antd.Radio.Button key={item} value={item}>{item}</Antd.Radio.Button>
                : <Antd.Radio.Button key={item.value} disabled={item.disabled} style={item.style}
                        value={item.value}>{item.label}</Antd.Radio.Button>
            );
        } else {
            children = (this.__props.options || []).map(item=>typeof item === 'string'
                ? <Antd.Radio key={item} value={item}>{item}</Antd.Radio>
                : <Antd.Radio key={item.value} disabled={item.disabled} style={item.style}
                        value={item.value}>{item.label}</Antd.Radio>
            );
        }
        return <Antd.Radio.Group {...this.__props} options={undefined}>{children}</Antd.Radio.Group>;
    }
}


/************* Select 下拉菜单 ************************************************************************** */

export class Select extends DataEntry {
    constructor(props) {
        super(props);
        // 异步属性为 options
        this._asyncAttr = 'options';
        this.__init();
    }
    render() {
        return <Antd.Select {...this.__props}>
            {(this.__props.options || []).map(item=>typeof item === 'string'
                ? <Antd.Select.Option key={item} value={item}>{item}</Antd.Select.Option>
                : <Antd.Select.Option key={item.value} disabled={item.disabled} style={item.style}
                        value={item.value}>{item.label}</Antd.Select.Option>
            )}
        </Antd.Select>;
    }
}


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
        // 异步属性为 checked
        this._asyncAttr = 'checked';
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
        // 异步属性为 fileList
        this._asyncAttr = 'fileList';
        this.__init();
    }
    render() {
        return <Antd.Upload {...this.__props}/>;
    }
}


