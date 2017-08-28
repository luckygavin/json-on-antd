/**
 * @file 基础类
 * Created by xuziqian on 2017/8/4.
 */
import React, {Component} from 'react';
import {Cache, Utils, Ajax} from 'uf/utils';
export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this._keyPrefix = 'cache-';
    }

    /* 供子组件调用方法 ***********************************************************************/

    // 供子组件调用初始化 使用子组件this调用
    __init() {
        this._transmitComponent();
        let originUnmount = this.componentWillUnmount;
        this.componentWillUnmount = function () {
            this._componentWillUnmount(originUnmount);
        };
    }

    // 获取共享组件/数据
    __getCache(key) {
        return Cache.get(this._keyPrefix + key);
    }

    // 设置共享组件/数据
    __setCache(key, component) {
        key = this._keyPrefix + key;
        Cache.set(key, component);
    }

    // 把默认配置和当前用户传入配置进行合并
    // 叫props但不一定要用来合并props，比如合并 config
    __mergeProps(defaultProps, props) {
        return Utils.mergeObj(defaultProps, props);
    }

    // ajax的get方法
    __getData(url, ...params) {
        const ajax = Ajax(url, 'get');
        ajax(...params);
    }

    // ajax的post方法
    __postData(url, ...params) {
        const ajax = Ajax(url, 'post');
        ajax(...params);
    }

    /* 私有方法 ***********************************************************************/

    // unmount 执行时的默认处理逻辑
    _componentWillUnmount(origin) {
        this._unsetTransmitComponent();
        origin && origin.call(this);
    }

    // 共享组件
    _transmitComponent() {
        let key = this._getTransmitName();
        if (!!key) {
            Cache.set(key, this);
        }
    }

    // 解除共享
    _unsetTransmitComponent() {
        let key = this._getTransmitName();
        if (!!key) {
            Cache.del(key, this);
        }
    }

    // 获取key的名称
    _getTransmitName() {
        let key = this.props.__cache;
        if (!!this.props.route && this.props.route.__cache) {
            key = this.props.route.transmitName;
        }
        if (!!key && key !== 'undefined') {
            key = this._keyPrefix + key;
        } else {
            key = false;
        }
        return key;
    }
}