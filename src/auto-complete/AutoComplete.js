/**
 * @file 自动补全组件 封装，支持单选和多选
 */
import React from 'react';
import DataEntry from 'src/antd/base/DataEntry.js';
import {Utils} from 'src/utils';
import {AutoComplete, Spin} from 'antd';
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
    filterOption: false
};

// 本地自动补全
class LocalAutoComplete extends Select {
    constructor(props) {
        super(props);
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
    // 当选择时，只触发onChange
    // 默认对应的是 onChange
    _onControlEvent(...params) {
        if (this.isMultiple) {
            super._onControlEvent.call(this, ...params);
            this.__setProps({options: []});
        } else {
            // 对change前后的数据进行对比
            let oldValue = this.__props.value;
            super._onControlEvent.call(this, ...params);
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
// 复用Select的构造函数/render等逻辑，覆盖部分原函数。所以无需再写render
class SourceAutoComplete extends Select {
    constructor(props) {
        super(props);
        this.class.push('select');
        this._injectEvent = ['onSearch', 'onChange'];
        // 延迟150ms执行
        this._onSearch = Utils.debounce(this._onSearch, 150);
        this.requestIndex = 0;

        this.__init();
    }
    triggerLoading(status) {
        this.loading(status, 'simple');
    }
    _onSourceSuccess() {
        this.triggerLoading(false);
    }
    _afterInitProps() {
        super._afterInitProps();
        Object.assign(this.__props, LimitedProps);
        Object.assign(this.__filtered.source, {
            autoLoad: false,
            autoReload: 'set',
            requestMerge: false,
            cache: true
        });
    }
    // 多选时，输入完触发onSearch，选中选项后触发onChange
    _onSearch(value) {
        if (value === '') {
            ++this.requestIndex;
            this.triggerLoading(false);
            this.__setProps({
                options: []
            });
        } else {
            this.triggerLoading(true);
            this.set({
                options: [],
                source: {
                    params: {value}
                }
            });
        }
    }
    _onChange(value) {
        this.triggerLoading(false);
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

export default class NewAutoComplete extends DataEntry {
    render() {
        let className = {className: 'uf-autocomplete ' + (this.props.className || '')};
        return this.props.children
            ? <AutoComplete {...this.props} {...className}/>
            : this.props.source
                ? <SourceAutoComplete {...this.props} {...className}/>
                : <LocalAutoComplete {...this.props} {...className}/>;
    }
}