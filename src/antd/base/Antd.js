import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';

export default class Antd extends BaseComponent {
    constructor(props) {
        super(props);
        // 受控属性名，供子类设置。如果子类设置了此属性，则会绑定change事件，同时也受控于用户传入的此值。见 _handleControlled
        this.__controlled = null;
    }

    // 暴露给用户刷新组件的接口
    setOption(option) {
        let props = this.__mergeProps({}, this.__props, option);
        this._initProps(props);
        this.forceUpdate();
    }

    __init() {
        super.__init.call(this);
        this._initProps();
    }

    // 组件的 componentWillReceiveProps 函数默认处理逻辑
    _componentWillReceiveProps(nextProps, ...params) {
        super._componentWillReceiveProps && super._componentWillReceiveProps.call(this, nextProps, ...params);
        this._initProps(nextProps);
    }

    // 使用Rest对象解构 去除掉多余的属性（解决报warning问题）
    // 后面传入组件的参数用 __props 代替 props
    _initProps(props) {
        let {__cache, __ref, ...__props} = props || this.props;
        __props['ref'] = __props['ref'] || __ref;

        this.__props = __props;

        // 受控组件默认处理逻辑
        this._handleControlled(props);
    }

    // 受控属性绑定change事件，同时也受控于用户传入的值
    _handleControlled(nextProps) {
        const key = this.__controlled;
        // 首次初始化 或者用户的传入的[key]属性变化了，则说明是用户想要改变[key]属性，把[key]属性的值重置为新的[key]属性值
        // 这里考虑的是非react应用场景，只有用户的逻辑去改config这个[key]属性才会改
        if (key && (!nextProps || nextProps[key] !== this.props[key])) {
            // 受控属性对应的默认属性，(如：value => defaultValue)
            const defaultKey = 'default' + key.replace(/^\w/g, v=>v.toUpperCase());
            const {value, defaultValue, onChange} = this.__props;
            // 把value和defaultValue merge一下，统一交由 value 控制
            let keyValue = this.__props[key] || this.__props[defaultKey];
            // 如果这个值为空，否则受控属性为空会出现异常
            if (keyValue !== undefined) {
                this.__props[key] = keyValue;
            }
            this.__props['onChange'] = this._onChange.bind(this, onChange)
        }
    }

    // 同步onChange的数据到受控属性上，默认取第一个参数
    // ** 可直接被子类覆盖重写 **
    // **     如果有其他需求可以直接覆盖重写，注意函数内要调用下 callback（如：DataEntry中用法）
    _onChange(callback, ...params) {
        callback && callback(...params);
        const key = this.__controlled;
        if (key) {
            this.__props[key] = params[0];
            this.forceUpdate();
        }
    }

}
