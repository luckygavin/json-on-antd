/**
 * @file Antd 全部组件的基类，其中实现了接管受控属性的逻辑
 * @author liuzechun
 * Created Date: 2017-09-29 01:11:19
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';

export default class Antd extends BaseComponent {
    constructor(props) {
        super(props);
        // 用于设置当前壳子调用的antd组件类，需在最终壳子上设置
        // this._class = null;
        // 声明异步获取的数据放在哪个字段，默认为 children ，即默认把返回的内容放到子组件中
        // 如果用户自己配置了 sourceTarget 属性，则按照用户定义的赋值
        this._asyncAttr = 'children';
        // __props 需要过滤的属性
        this._filter.push('source', 'sourceHandler', 'sourceTarget', 'sourceMethod', 'sourceParams');
        // 壳子调用antd组件，调用的组件的实例存储在_component中
        this._component = null;
        // 受控属性名，供子类设置。如果子类设置了此属性，则会绑定change事件，同时也受控于用户传入的此值。见 _handleControlled
        this.__controlled = null;
    }

    // 触发组件上的原生事件，例如 focus、change 等
    trigger(event, ...params) {
        if (this._component && this._component[event]) {
            this._component[event](params);
        } else {
            console.warn(`there is no event named: ${event}`);
        }
    }

    __init(...params) {
        super.__init.call(this, ...params);
        // 保存原始antd组件的引用
        this.__props['ref'] = (ele) => this._component = ele;
        // 受控配置 - 如果不为null,则合并覆盖
        this.__controlled = this.__controlled
            ? this.__mergeProps({
                    key: 'value',
                    event: 'onChange',
                    defaultVal: '',
                    paramsIndex: 0
                }, this.__controlled)
            : null;
        // 受控组件默认处理逻辑
        this._handleControlled();
    }

    // 组件渲染完成后，执行逻辑
    _componentDidMount(...params) {
        super._componentDidMount && super._componentDidMount.call(this, ...params);
        this._handleAsyncData();
    }

    // 自动异步获取数据
    _handleAsyncData() {
        if (this.__filtered.source) {
            this.__ajax({
                url: this.__filtered.source,
                method: this.__filtered.sourceMethod || 'get',
                data: this.__filtered.sourceParams,
                success: (data, res)=>{
                    // 如果用户定义了数据处理函数，先对数据进行处理
                    if (this.__filtered.sourceHandler) {
                        data = this.__filtered.sourceHandler(data, res, this);
                    }
                    // 如果用户自己配置了 sourceTarget 属性，则按照用户定义的赋值
                    let target = this.__filtered.sourceTarget || this._asyncAttr;
                    target = target === 'content' ? 'children' : target;
                    this.__props[target] = data;
                    this.forceUpdate();
                }
            });
        }
    }

    // 受控属性绑定change事件，同时也受控于用户传入的值
    _handleControlled() {
        if (!this.__controlled) {
            return;
        }
        const {key, defaultVal, event} = this.__controlled;
        // 受控属性对应的默认属性，(如：value => defaultValue)
        const defaultKey = 'default' + key.replace(/^\w/g, v=>v.toUpperCase());
        const onEvent = this.__props[event];
        // 把value和defaultValue merge一下，统一交由 value 控制
        let keyValue = this.__props[key] || this.__props[defaultKey];
        // 如果这个值为空，否则受控属性为空会出现异常
        if (keyValue !== undefined) {
            this.__props[key] = keyValue;
        } else {
            // 屏蔽warning，非受控组件转换为受控组件会报warning
            this.__props[key] = defaultVal;
        }
        this.__props[event] = this._onEvent.bind(this, onEvent);
    }

    // 同步onChange的数据到受控属性上，默认取第一个参数
    // ** 可直接被子类覆盖重写 **
    // **     如果有其他需求可以直接覆盖重写，注意函数内要调用下 callback（如：DataEntry中用法）
    _onEvent(callback, ...params) {
        const {key, paramsIndex} = this.__controlled;
        if (key) {
            this.__props[key] = params[paramsIndex];
            this.forceUpdate();
        }

        callback && callback(...params);
    }

}
