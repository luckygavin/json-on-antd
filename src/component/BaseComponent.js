/**
 * @file 基础类
 * Created by xuziqian on 2017/8/4.
 */
import React, {Component} from 'react';
import {Cache, Utils, Ajax} from 'uf/utils';
import {ajax} from 'uf/utils/ajax.js';

// React的生命周期中的7个常用函数，为了防止函数被终的子组件覆盖，这7个函数会经过逻辑处理
// 中间子类在使用这几个函数的时候，需要在函数最前面调用parent.[func]()
const PreventCoverageMap = [
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
    'shouldComponentUpdate'
];

// 提供给用户的通用回调函数
// 所有组件都具备，分别在声明周期中的不同阶段调用
const ForUserApi = [
    'willMount',
    'didMount',
    'didUpdate',
    'willUnmount'
];

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this._keyPrefix = 'cache-';
    }

    /* 暴露给用户的方法 ***********************************************************************/

    // 暴露给用户刷新组件的接口
    set(option) {
        let props = this.__mergeProps({}, this.props, option);
        this.componentWillReceiveProps(props);
        // this.forceUpdate();
    }
    // 如果有key则返回key的值；如果没有key，则返回全部参数
    get(key) {
        return key ? this.props[key] : this.props;
    }

    /* 供子组件调用方法 ***********************************************************************/

    // 供子组件调用初始化 使用子组件this调用
    __init() {
        // 目的是让子类调用__init()时，把父类中设置的等待注入到真正的声明周期中的函数注入进去
        this._injectFunction();
        // 共享组件
        this._transmitComponent();
        // 挂载用户传入的需要关联到生命周期中的函数
        this._loadUserFunction();
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

    // 把默认配置和当前用户传入配置进行合并，可以传多个参数
    //  如果把 defaultProps 放在第一位，merge完成后defaultProps的值会变成merge后的数据，如果defaultProps需多次使用，会出问题
    //  针对此问题，可以第一个参数放一个空对象，类似于Object.assign的用法
    // 叫props但不一定要用来合并props，比如合并 config
    __mergeProps(...props) {
        return Utils.merge(...props);
    }

    // 从props中过滤掉某些属性，例如原始元素不支持的属性
    __filterProps(props, arr) {
        return Utils.filter(props, arr);
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

    __ajax(params) {
        ajax(params);
    }

    /* 私有方法 ***********************************************************************/

    // componentWillUnmount 执行时的默认处理逻辑
    // 最外层的子类实例化的时候会调用 _injectFunction 函数，把函数注入到子类示例的 componentWillUnmount 中
    _componentWillUnmount() {
        this._unsetTransmitComponent();
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

    // 把父组件定义的 需在React的生命周期中的7个函数中增加的处理逻辑 注入到对应的7个函数中
    _injectFunction() {
        for (let v of PreventCoverageMap) {
            // 如果父组件中有等待注入的函数
            let inject = this[`_${v}`];
            if (inject) {
                let origin = this[v];
                this[v] = (...params) => {
                    inject.call(this, ...params);
                    origin && origin.call(this, ...params);
                };
            }
        }
    }

    // 挂载用户传入的需要关联到生命周期中的函数
    _loadUserFunction() {
        for (let v of ForUserApi) {
            // 如果props中有等待注入的函数
            let inject = this.props[`${v}`];
            if (inject) {
                let funcName = 'component' + v.replace(/^\w/g, o=>o.toUpperCase());
                let origin = this[funcName];
                this[funcName] = (...params) => {
                    inject.call(this, ...params);
                    origin && origin.call(this, ...params);
                };
            }
        }
    }
}