/**
 * @file 需要操作的原生dom继承 BaseComponent
 * @author liuzechun
 * Created Date: 2017-10-17 04:11:07
 */

import React from 'react';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

export default class Dom extends BaseComponent {
    constructor(props) {
        super(props);
        // 开放给用户使用的 Api
        this._openApi.push('trigger');
        // 壳子调用antd组件，调用的组件的实例存储在_component中
        this._component = null;
        this.__init();
    }

    __init(...params) {
        super.__init.call(this, ...params);
        // 保存原始antd组件的引用
        this.__props['ref'] = ele => this._component = ele;
    }

    // 触发组件上的原生事件，例如 focus、change 等
    trigger(event, ...params) {
        if (this._component && this._component[event]) {
            this._component[event](params);
        } else {
            super.trigger.call(this, event, ...params);
        }
    }
    render() {
        return <this.props.__type {...this.__props} />
    }
}
