/**
 * @file 对第三方组件封装的基类，包含一些对第三方组件封装的通用功能
 */
import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent.js';
import {ComponentsCache} from 'src/cache';
import {Utils} from 'src/utils';

export default class ExtendComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.name = props.name;
        // 保证每次实例化都有一个唯一的id
        this.componentId = (props.name || 'new_component') + '_' + Date.now();
        this.component;
    }
    // 将自定义api挂载到三方组件上
    setOpenApi(target) {
        for (let v of this._openApi) {
            if (Utils.typeof(this[v], 'function')) {
                target[v] = this[v].bind(this);
            }
        }
    }
    componentWillUnmount() {
        this._unsetTransmitComponent();
    }
    // 共享组件
    _transmitComponent() {
        if (!!this.name) {
            ComponentsCache.set(this.name, this.component);
        }
    }
    // 解除共享
    _unsetTransmitComponent() {
        if (!!this.name) {
            ComponentsCache.del(this.name);
        }
    }
}
