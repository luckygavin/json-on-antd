/**
 * @file 基础类
 * Created by xuziqian on 2017/8/4.
 */
import React, {Component, PureComponent} from 'react';
import {Cache, Utils, Ajax} from 'uf/utils';
import {Config} from 'uf/tools';

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

// 提供给用户的和生命周期相关的函数，命名更加语义化
const ForUserApi = {
    // 渲染组件前
    beforeRender: 'componentWillMount',
    // 组件渲染完成后
    afterRender: 'componentDidMount',
    // 组件更新前
    beforeUpdate: 'componentWillUpdate',
    // 组件更新后
    afterUpdate: 'componentDidUpdate',
    // 组件销毁前
    beforeDestroy: 'componentWillUnmount'
};

// export default class BaseComponent extends Component {
export default class BaseComponent extends PureComponent {
    constructor(props) {
        super(props);
        this._keyPrefix = 'cache-';
        // _root 是最初 Factory 的 props，传给每个组件方便使用（例如路由信息，props.routes）
        this._root = this.props._root;
        // 开发时自定义的需注入到事件中的函数，例如 AutoComplete 组件中的 'onSearch' 函数
        this._injectEvent = [];
        // 转化为 __props 时需过滤的属性
        this._filter = ['__cache', '__type', '_root'].concat(Object.keys(ForUserApi));
        // 从缓存中读出组件的默认参数。参数来源可以是在 config.js 里配置；也可以是用户通过调用 UF.config() 配置
        // （如 loading 组件的 delay 参数在 config.js 中定义为 150）
        // 开发组件的时候，也可以在this.__props上增加一些默认的参数（注意不要直接用对象覆盖）
        this.__props = Config.get('components')[this.props.__type] || {};
        // 用于存放被过滤掉的props上的属性，使用户重新set也可以生效（如果直接在props上取的话，set不会触发props更新，被过滤掉的属性就无法再更新了）
        this.__filtered = {};
    }

    /* 暴露给用户的方法 ***********************************************************************/

    // 暴露给用户刷新组件的接口
    set(option) {
        // 要保证调用cwr时传入的nextProps的完整性
        let props = this.__mergeProps({}, this.__props, option);
        // cwr一定存在，且cwr中会执行_initProps。不管子组件是否用的是__props，都能保证兼容性
        // 因为默认会更改__props并且forceUpdate；如果组件用的自己的props，必定会自己实现cwr中的逻辑
        this.componentWillReceiveProps(props, this.__props);
    }
    // 如果有key则返回key的值；如果没有key，则返回全部参数
    get(key) {
        return key ? this.__props[key] : this.__props;
    }

    /* 供子组件调用方法 ***********************************************************************/

    // 供子组件调用初始化 使用子组件this调用
    __init() {
        // 以下几个函数执行顺序固定，请慎重调整！！
        // 把父类中设置的需注入到生命周期中的逻辑注入到对应生命周期函数中
        this._injectFunction();
        // 共享组件
        this._transmitComponent();
        // 后面传入组件的参数用 __props 代替 props
        this._initProps();
        // 把__props上的全部回调函数的最后增加一个参数设置为组件本身，方便使用
        this._updateCallback();
        // 挂载用户传入的需要关联到生命周期中的函数（这个把生命周期的函数做个一个转换，更加语义化）
        this._loadUserFunction();
        // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中（防止被覆盖）
        this._injectEventFunction();
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
    __getData(...params) {
        Ajax.get(...params);
    }

    // ajax的post方法
    __postData(...params) {
        Ajax.post(...params);
    }

    __ajax(params) {
        Ajax(params);
    }

    /* 私有方法 ***********************************************************************/

    // componentWillUnmount 执行时的默认处理逻辑
    // 最外层的子类实例化的时候会调用 _injectFunction 函数，把函数注入到子类示例的 componentWillUnmount 中
    _componentWillUnmount() {
        this._unsetTransmitComponent();
    }

    // 组件的 componentWillReceiveProps 函数默认处理逻辑
    // 有两种情况会调用cwr：
    //  一种是父组件刷新，传入新的props，如果props确实发生了变化，则需要重新调用_initProps
    //  还有一种是set函数调用的，params中没有额外参数，nextProps肯定和this.props不同
    _componentWillReceiveProps(nextProps, ...params) {
        // cwr函数执行很频繁，这里对一些props不变的情况进行一些过滤
        if (!Utils.equals(this.props, nextProps)) {
            // 是否把_initProps的调用放到render中更好一点？（会有个问题：使用set函数重新设置props时，会有额外的重复调用）
            this._initProps(nextProps);
        }
    }

    // 过滤 props，生成 __props 和 __filterProps
    _filterHandler(props) {
        let newProps = {};
        for (let i in props) {
            if (props.hasOwnProperty(i)) {
                if ( this._filter.indexOf(i) === -1) {
                    newProps[i] = props[i];
                } else {
                    this.__filtered[i] = props[i];
                }
            }
        }
        return newProps;
    }

    // 后面传入组件的参数用 __props 代替 props
    _initProps(props) {
        // 去除掉多余的属性（解决报warning问题）
        let __props = this._filterHandler(props || this.props);
        this.__prevProps = this.__props;
        // 在这里把新值和旧值进行merge，使得支持开发组件时通过直接在构造函数中给this.__props赋值来定义一些默认参数，可简化一些开发工作
        // （见构造函数中 this.__props 用法【可参考 Iframe、Modal 】）
        this.__props =  this.__mergeProps({}, this.__props, __props);

        // __init函数中调用的时候不会传props，也不需要刷新组件
        if (props) {
            this.forceUpdate();
        }
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

    // 更新配置中的回调函数，给回调函数的最后增加一个参数为组件本身，方便使用
    _updateCallback(props) {
        !props && (props = this.__props);
        for (let i in props) {
            let item = props[i];
            // 不是冻结对象，且不是类
            if (item && !Object.isFrozen(item) && !Utils.isExtendsOf(item, 'ReactComponent')) {
                if (Utils.typeof(item, 'function')) {
                    props[i] = (...params) => {
                        return item.call(this, ...params, this);
                    }
                } else if ((Utils.typeof(item, 'object') && Utils.directInstanceof(item, Object))
                    || Utils.typeof(item, 'array')) {
                        this._updateCallback(item);
                }
            }
        }
    }

    // 把父组件定义的 需在React的生命周期中的7个函数中增加的处理逻辑 注入到对应的7个函数中
    _injectFunction() {
        for (let v of PreventCoverageMap) {
            // 如果父组件中有等待注入的函数
            let inject = this[`_${v}`];
            if (inject) {
                let origin = this[v];
                this[v] = !!origin
                    ? (...params) => {
                        inject.call(this, ...params);
                        origin.call(this, ...params);
                    }
                    : inject.bind(this);
            }
        }
    }

    // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中，可见 AutoComplete 组件中的 'onSearch' 函数
    _injectEventFunction() {
        for (let v of this._injectEvent) {
            let inject = this[`_${v}`];
            if (inject) {
                let origin = this.__props[v];
                this.__props[v] = !!origin
                    ? (...params) => {
                        inject.call(this, ...params);
                        origin.call(this, ...params);
                    }
                    : inject.bind(this);
            }
        }
    }

    // 挂载用户传入的需要关联到生命周期中的函数
    _loadUserFunction() {
        for (let f in ForUserApi) {
            // 如果props中有等待注入的函数
            let inject = this.__filtered[f];
            if (inject) {
                let v = ForUserApi[f];
                let origin = this[v];
                this[v] = (...params) => {
                    // 先执行默认逻辑，再执行用户逻辑                    
                    origin && origin.call(this, ...params);
                    let result = inject.call(this, this.__props, this);
                    // 组件渲染/刷新前可以让用户有机会改参数
                    if (result && ['beforeRender', 'beforeUpdate'].indexOf(f) !== -1) {
                        // 防止用户设置过滤属性
                        this.__props = this._filterHandler(result);
                    }
                };
            }
        }
    }
}