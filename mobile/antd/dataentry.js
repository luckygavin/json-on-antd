/**
 * @file 数据录入 类组件
 * @author liuzechun
 */
import React from 'react';
import {Utils} from 'src/utils';
import DataEntry from 'src/antd/base/DataEntry.js';
import * as Antd from 'antd-mobile';

const OptionsDataEntry = DataEntry.OptionsDataEntry;
const BasePicker = DataEntry.BasePicker;

/************* Checkbox 复选框 ************************************************************************** */

export class Checkbox extends DataEntry {
    constructor(props) {
        super(props);
        this.__controlled.defaultVal = [];
        this.__init();
    }
    render() {
        return <Antd.Checkbox {...this.__props}/>;
    }
}

/************* Picker 选择器 ****************************************************************** */

// Select 选择器
export class Select extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Picker {...Utils.filter(this.__props, ['options'])}
            data={this.__props.options}/>;
    }
}
// SelectView 选择器
export class SelectView extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.PickerView {...this.__props}/>;
    }
}
// Calendar 日历选择
export class Calendar extends DataEntry {
    constructor(props) {
        super(props);
        // this.__controlled.defaultVal = [];
        this.__init();
    }
    render() {
        return <Antd.Calendar {...this.__props}/>;
    }
}
// DatePicker 日期选择器
export class DatePicker extends DataEntry {
    constructor(props) {
        super(props);
        // this.__controlled.defaultVal = [];
        this.__init();
    }
    render() {
        return <Antd.DatePicker {...this.__props} mode={this.__props.type}/>;
    }
}
// DatePickerView 日期选择器
export class DatePickerView extends DataEntry {
    constructor(props) {
        super(props);
        // this.__controlled.defaultVal = [];
        this.__init();
    }
    render() {
        return <Antd.DatePickerView {...this.__props} mode={this.__props.type}/>;
    }
}


/************* Slider 滑动输入条 ****************************************************************** */

export class Slider extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Slider {...this.__props}/>;
    }
}
// Range 区域选择
export class SliderRange extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Range {...this.__props}/>;
    }
}


/************* Input 输入框 ****************************************************************** */

export class Input extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.InputItem {...this.__props}/>;
    }
}

/************* Textarea 多行输入 ****************************************************************** */

export class Textarea extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.TextareaItem {...this.__props}/>;
    }
}

/************* ImagePicker 图片选择 ****************************************************************** */

export class ImagePicker extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.ImagePicker {...this.__props}/>;
    }
}

/************* Radio 单选 ****************************************************************** */

export class Radio extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Radio {...this.__props}/>;
    }
}
export class RadioItem extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Radio.RadioItem {...this.__props}/>;
    }
}
// 按钮形式的Radio
export class RadioButton extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
        this.__controlled.defaultVal = props.items && props.items[0];
        this.__controlled.event = 'onValueChange';
    }
    // 计算原组件需要的index
    getSelectedIndex() {
        if (this.__props.items) {
            if (this.__props.value) {
                return this.__props.items.indexOf(this.__props.value);
            } else {
                return 0;
            }
        }
    }
    render() {
        return <Antd.SegmentedControl {...Utils.filter(this.__props, ['items', 'value'])}
            values={this.__props.items}
            selectedIndex={this.getSelectedIndex()}
        />;
    }
}

/************* Switch 滑动开关 ****************************************************************** */

export class Switch extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Switch {...this.__props}/>;
    }
}

/************* Stepper 步进器 ****************************************************************** */

export class Stepper extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Stepper {...this.__props}/>;
    }
}

/************* SearchBar 搜索栏 ****************************************************************** */

export class SearchBar extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.SearchBar {...this.__props}/>;
    }
}
