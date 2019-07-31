/**
 * @file 自动补全组件 封装，支持单选和多选
 */
import React from 'react';
import DataEntry from 'src/antd/base/DataEntry.js';
import {Utils} from 'src/utils';
import {Select} from 'src/antd/dataentry.js';

/**
 * 注意：关于onSearch、onChange触发条件
 * * 单选模式下：
 *      输入时，先触发onSearch，再触发onChange
 *      选中时，只触发onChange
 * * 多选模式下：
 *      输入时，只触发onSearch
 *      选中时，只触发onChange
 */

const LimitedProps = {
    showSearch: true,
    notFoundContent: null,
    // defaultActiveFirstOption: false,
    filterOption: false,
    className: 'uf-autocomplete'
};

// 本地自动补全
export class LocalComplete extends Select {
    constructor(props) {
        super(props, {preventInit: true});
        // _onSearch 中的逻辑会注入到 onSearch 事件中，见 BaseComponent
        this._injectEvent = ['onSearch'];
        this.__init();
    }
    _afterInitProps() {
        super._afterInitProps();
        Object.assign(this.__props, LimitedProps);
    }
    // 注入到 onSearch 事件中
    // 输入时，先触发onSearch，再触发onChange
    _onSearch(value, ...params) {
        // 保存原输入值
        this.oriValue = value;
        let options  = [];
        if (!!value) {
            options = this.__props.suffix.map(i=>value + i);
        }
        this.__setProps({options});
    }
    // 覆盖Select的函数，不自动触发onChange
    _selfChange() {}
    // 当选择时，只触发onChange
    // 默认对应的是 onChange
    _onControlEvent(...params) {
        if (this.isMultiple) {
            super._onControlEvent(...params);
            this.__setProps({options: []});
        } else {
            // 对change前后的数据进行对比
            let oldValue = this.__props.value;
            super._onControlEvent(...params);
            let newValue = this.__props.value;
            // 如果长度变短，说明是在删除，如果和后缀能匹配上，直接把后缀删除
            if (oldValue && newValue && oldValue.length > newValue.length) {
                for (let v of this.__props.suffix) {
                    if (oldValue.indexOf(v) !== -1) {
                        let result = oldValue.replace(v, '');
                        if (result.length < newValue.length) {
                            this.__props.value = result;
                            // 重置value后，需要手动再次触发onSearch逻辑，以恢复原
                            this.__props.onSearch(result);
                            break;
                        }
                    }
                }
            }
        }
    }
}

// 自动补全远程数据
export default class NewAutoComplete extends Select {
    constructor(props) {
        super(props, {preventInit: true});
        this.class.push('select');
        this._injectEvent = ['onSearch', 'onChange', 'onSelect', 'onDeselect'];
        // 延迟150ms执行
        this._onSearch = Utils.debounce(this._onSearch, props.delay || 150);
        this.requestIndex = 0;

        this.__init();
    }
    _afterInitProps() {
        super._afterInitProps();
        Object.assign(this.__props, LimitedProps);
        Object.assign(this.__filtered.source, {
            autoLoad: false,
            autoReload: 'set',
            merge: false,
            cache: true
        });
    }
    _afterSetProps(...params) {
        super._afterSetProps(...params);
        // 当设置为 select-only 时，输入框仅可选补全的内容，不可任意输入
        if (this.__props.mode === 'select-only') {
            delete this.__props.mode;
        }
    }
    // 处理 startSign 属性，判断是否进行搜索
    // 2、当为字符串时，表示当字符串中出现设置的字符串时，进行查询补全功能
    // 3、当为函数时，表示每次输入后，会把输入的字符串传递给函数进行判断，当函数返回true时，进行查询补全功能
    _isSearch(value) {
        // 1、当为数字时，表示当输入字符串长度满足设置长度时会发起请求，进行查询补全功能
        let sign = this.__props.startSign;
        switch (Utils.getType(sign)) {
            case 'number':
                return value && value.length >= sign;
            case 'string':
                return value && value.indexOf(sign) > -1;
            case 'function':
                return sign(value);
        }
        return true;
    }
    // 多选时，输入完触发onSearch，选中选项后触发onChange
    _onSearch(value) {
        if (!this._isSearch(value)) {
            return;
        }
        if (value === '') {
            ++this.requestIndex;
            this.loading(false, 'simple');
            this.__setProps({
                options: []
            });
        } else {
            this.set({
                options: [],
                source: {
                    params: {value}
                }
            });
        }
    }
    // 多选时，选择完成后保存当前选中的选项，并下下拉框中展示出来
    // 感觉交互不太友好，待斟酌
    // _onSelect(value, option) {
    //     this.__filtered.extOptions = this.__filtered.extOptions || [];
    //     this.__filtered.extOptions.push({value: value, label: option.props.children});
    //     this.__setProps({extOptions: this.__filtered.extOptions});
    // }
    // _onDeselect(value) {
    //     this.__filtered.extOptions = this.__filtered.extOptions.filter(item => item.value !== value);
    //     this.__setProps({extOptions: this.__filtered.extOptions});
    // }
    // 覆盖Select的函数，不自动触发onChange
    _selfChange() {}
    _onChange(value) {
        this.loading(false, 'simple');
        if (Utils.typeof(value, 'array') && value.length === 0) {
            this.__setProps({options: []});
        }
    }
    // 追加忽略先前请求返回的结果的逻辑
    __getSourceData(config) {
        let index = ++this.requestIndex;
        config._handler = data => {
            if (this.requestIndex !== index) {
                return false;
            }
            return data;
        };
        super.__getSourceData(config);
    }
}