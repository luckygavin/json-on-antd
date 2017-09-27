import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';

export default class Antd extends BaseComponent {
    constructor(props) {
        super(props);
        // 受控属性名，供子类设置。如果子类设置了此属性，则会绑定change事件，同时也受控于用户传入的此值。见 _handleControlled
        this.__controlled = null;
    }

    __init() {
        super.__init.call(this);
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
        callback && callback(...params);
        const {key, paramsIndex} = this.__controlled;
        if (key) {
            this.__props[key] = params[paramsIndex];
            this.forceUpdate();
        }
    }

}
