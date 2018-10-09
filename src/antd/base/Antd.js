/**
 * @file Antd 全部组件的基类，其中实现了接管受控属性的逻辑
 * @author liuzechun
 * Created Date: 2017-09-29 01:11:19
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';

export default class Antd extends BaseComponent {
    constructor(props) {
        // 追加中间基类
        super(props);
        this.class.push('antd');
        this._filter.push('controlled');
        // 开放给用户使用的 Api
        this._openApi.push('trigger');
        // 壳子调用antd组件，调用的组件的实例存储在_component中
        this._component = null;
        // 受控属性名，供子类设置。如果子类设置了此属性，则会绑定change事件，同时也受控于用户传入的此值。见 _handleControlled
        this.__controlled = null;
    }


    /* 暴露给用户的方法 ***********************************************************************/

    // 触发组件上的原生事件，例如 focus、change 等
    trigger(event, ...params) {
        if (this._component && this._component[event]) {
            this._component[event](params);
        } else {
            super.trigger.call(this, event, ...params);
        }
    }

    /* 供子组件调用方法 ***********************************************************************/

    _afterInit() {
        super._afterInit();
        // 保存原始antd组件的引用
        this.__props['ref'] = (ele) => this._component = ele;
        // 受控配置 - 如果不为null,则合并覆盖
        this.__controlled = this.__controlled
            ? this.__mergeProps({
                    key: 'value',
                    event: 'onChange',
                    defaultVal: undefined,
                    paramsIndex: 0
                }, this.__controlled)
            : null;
        // 受控组件默认处理逻辑
        this._handleControlled();
    }

    // 受控属性绑定change事件，同时也受控于用户传入的值
    _handleControlled() {
        if (!this.__controlled) {
            return;
        }
        const {key, defaultVal, event} = this.__controlled;
        // 受控属性对应的默认属性，(如：value => defaultValue)
        const defaultKey = 'default' + key.replace(/^\w/g, v=>v.toUpperCase());
        // 把value和defaultValue merge一下，统一交由 value 控制
        // let keyValue = this.__props[key] || this.__props[defaultKey];
        let keyValue = this.__props[defaultKey];
        // 注意需用undefined判断，否则为0的时候会不符合预期
        if (this.__props[key] !== undefined) {
            keyValue = this.__props[key];
        }
        // 如果这个值为空，否则受控属性为空会出现异常
        if (keyValue !== undefined) {
            this.__props[key] = keyValue;
        } else {
            // 屏蔽warning，非受控组件转换为受控组件会报warning
            this.__props[key] = defaultVal;
        }
        this._inject(this.__props, event, (...params)=>{
            // 如果用户传入了 controlled 属性，则完全由用户自己控制，不再执行默认控制逻辑
            if (this.__filtered.controlled) {
                return;
            }
            this._onControlEvent(...params);
        });
    }

    // 同步onChange的数据到受控属性上，默认取第一个参数
    // ** 可直接被子类覆盖重写 **
    // **     如果有其他需求可以直接覆盖重写，注意函数内要调用下 callback（如：DataEntry中用法）
    _onControlEvent(...params) {
        const {key, paramsIndex} = this.__controlled;
        if (key) {
            this.__props[key] = params[paramsIndex];
            this.forceUpdate();
        }
    }

}
