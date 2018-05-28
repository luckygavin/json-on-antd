/**
 * @file 基础类
 * Created by xuziqian on 2017/8/4.
 */
import React, {Component, PureComponent} from 'react';
import {message} from 'antd';
import {Utils, Ajax} from 'src/utils';
import {Adaptor, Model, Authority} from 'src/tools';
import {Config, ComponentsCache, Models} from 'src/cache';

// React的生命周期中的7个常用函数，为了防止函数被终的子组件覆盖，这7个函数会经过逻辑处理
// 中间子类在使用这几个函数的时候，需要在函数最前面调用parent.[func]()
export const PreventCoverageMap = [
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
    'shouldComponentUpdate'
];

// // 提供给用户的和生命周期相关的函数，命名更加语义化
export const ForUserApi = {
    beforeCreate: 'componentWillMount',
    // TODO: 给自己set时，会不断触发componentDidMount BUG
    afterCreate: 'componentDidMount',
    beforeRender: 'componentWillMount,componentWillUpdate',
    afterRender: 'componentDidMount,componentDidUpdate',
    beforeDestroy: 'componentWillUnmount'
};

// 不复杂的属性，即无需merge处理直接覆盖的属性
export const Uncomplex = ['params', 'data', 'options'];

// // 转化为__props时需过滤的属性 - 用户配置的特殊功能的属性
export const FilterProps = Object.keys(ForUserApi).concat(PreventCoverageMap, [
    // 复用配置模板。
    'configTpl',
    // 获取系列参数
    // source 系列参数有：url,method,params,handler,targe
    'source',
    // 提交/发送数据系列参数
    // api 系列参数有： url,method,params,handler,trigger
    'api',
    // 组件额外动作及组件关联相关属性
    'control'
]);


// 因为组件很少使用 props 和 state，某些时候需要组件刷新的。例如面包屑组件
export default class BaseComponent extends Component {
// export default class BaseComponent extends PureComponent {
    // 组件、中间基类不调用__init，如果想要给Base设置type，则需要构造函数传入
    constructor(props, type) {
        super(props);
        // 组件类型，用于组件及其基类基础配置的获取
        this.class = ['base-component'];
        // 未使用__init的组件，手动传入组件类型
        this.type = this.props.__type || type;
        this.key = this.props.__key;
        // 组件缓存的key。有值的话组件才会缓存，如果值为null，则不会做缓存
        this.cacheName = this._getTransmitName();
        // 标志组件是否已被销毁
        this.unmounted = false;
        // _factory 是最初 Factory 的 this
        this._factory = this.props._factory;
        // 供用户使用，例如获取路由信息/参数等
        this._root = this._factory;
        // 开发时自定义的需注入到事件中的函数，例如 AutoComplete 组件中的 'onSearch' 函数
        this._injectEvent = [];
        // 转化为 __props 时需过滤的属性
        this._filter = (Utils.copy(FilterProps)).concat([
            // 一些隐藏的属性
            '__cache', '__type', '__key', '_factory'
        ]);
        // 不复杂的属性，即无需merge处理直接覆盖的属性
        this._uncomplex = Utils.copy(Uncomplex);
        // 开放给用户使用的 Api，需处理下
        this._openApi = ['set', 'get', 'show', 'hide', 'refresh'];
        // 存储一些程序执行过程中的数据
        this._tempData = {};
        this.__defaultProps = {};
        this.__props = {};
        // 更新前的__props
        this.__prevProps = {};
        // 用于存放被过滤掉的props上的属性，使用户重新set也可以生效（如果直接在props上取的话，set不会触发props更新，被过滤掉的属性就无法再更新了）
        this.__filtered = {};
    }

    /**
     * __init 之前，构造函数中未能执行的逻辑（比如需要在子类构造函数中继续处理的属性，最后再进行初始化）
     *      开发时，如果是要在 this.__props 初始化之后执行的逻辑，请覆写__beforeInit
     */
    __beforeInit() {
        // 从缓存中读出组件的默认参数。参数来源可以是在 config.js 里配置；也可以是用户通过调用 UF.config() 配置
        // （如 loading 组件的 delay 参数在 config.js 中定义为 150）
        // 开发组件的时候，也可以在this.__props上增加一些默认的参数（注意不要直接用对象覆盖）
        this.__defaultProps = this._getDefautlProps();
        this.__props = Utils.clone(this.__defaultProps);
        // 复用配置模板。
        this.__props = this.__getConfigTpl(this.props, this.__props);
    }
    _getDefautlProps() {
        let conf = Config.get(`components.${this.type}`) || {};
        // 取中间各基类的默认配置，并合并全部配置
        let confArr = this.class.map(v=>(Config.get(`components.${v}`) || {}));
        conf = this.__mergeProps(...confArr, conf);
        return conf;
    }
    // 覆盖原生的setState方法。如果组件已销毁，则不再执行setState。用于异步操作中调用setState时的通用状态检测
    // setState(...params) {
    //     if (!this.isMounted()) {
    //         return false;
    //     }
    //     super.setState.call(this, ...params);
    // }

    /* 暴露给用户的方法 ***********************************************************************/

    // 暴露给用户刷新组件的接口
    set(options) {
        // 使用 factory.handleProps 函数处理用户配置的参数，并生成组件需要使用的 props
        options = this._factory.handleProps(Object.assign({type: this.type}, options));
        // 要保证调用cwr时传入的nextProps的完整性
        let props = this.__mergeProps({}, this.__props, options);
        // cwr一定存在，且cwr中会执行__setProps。不管子组件是否用的是__props，都能保证兼容性
        // 因为默认会更改__props并且forceUpdate；如果组件用的自己的props，必定会自己实现cwr中的逻辑
        this.componentWillReceiveProps(props, this.__props);
        return this;
    }
    // 如果有key则返回key的值；如果没有key，则返回全部参数
    get(key) {
        return key ? this.__props[key] : this.__props;
    }
    // 触发组件上的事件。包括用户自定义的各种函数/事件（比如配置的onSubmit）
    // 可以使用 tigger('onSubmit') 来手动触发某个用户定义的函数/事件
    //   子类里面可能会重写：例如Antd/Dom中的 focus、change 等原生dom事件的触发，会在重写时实现
    trigger(event, ...params) {
        if (this.__props[event]) {
            this.__props[event](params);
        } else {
            console.error(`Warning: There is no event named: ${event}. `
                + `Check the component \`${this.type}\` which named \`${this.cacheName}\``);
        }
    }
    // 隐藏组件
    // 子组件中有可能重写
    hide() {
        let oStyle = this.__props.style || {};
        let oDisplay = oStyle.display;
        this._tempData.display = oDisplay;
        this.__setProps({
            style: Object.assign(oStyle, {
                display: 'none'
            })
        });
    }
    // 展示组件
    show() {
        let style = this.__props.style || {};
        if (this._tempData.display) {
            style.display = this._tempData.display;
        } else {
            delete style.display;
        }
        this.__setProps(style);
    }

    /* 供子组件调用方法 ***********************************************************************/

    // 供子组件调用初始化 使用子组件this调用
    __init() {
        // 初始化之前，执行一些构造函数中未能执行的初始化逻辑
        this.__beforeInit();

        // 以下几个函数执行顺序固定，请慎重调整！！
        // 把父类中设置的需注入到生命周期中的逻辑注入到对应生命周期函数中
        this._injectFunction();
        // 共享组件
        this._transmitComponent();

        // 后面传入组件的参数用 __props 代替 props
        this._initProps();

        // 处理数据绑定页面
        this._handleModel();
        // 挂载用户传入的需要关联到生命周期中的函数（这个把生命周期的函数做个一个转换，更加语义化）
        this._loadUserFunction();
        // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中（防止被覆盖）
        this._injectEventFunction();
        // 绑定 control 系列参数处理逻辑
        this._injectControl();
        // 绑定 api 系列参数处理逻辑
        this._injectApi();

        // 开放给用户使用的 Api，需处理下
        this._handleOpenApi();

        // 初始化之后，执行子类内部初始化逻辑
        this.__afterInit();
    }

    // __init 执行之后，紧跟着执行的逻辑。一般用于初始化后追加的子类内部初始化逻辑
    __afterInit() {}

    // 获取可复用的配置模板。
    // 除定义全局组件通用配置外，还可以额外再定义一些配置模板供组件复用
    // 使用时用户只需使用 configTpl 字段指定要复用哪个模板即可
    __getConfigTpl(props, currentProps) {
        if (props && props.configTpl) {
            let tpl = Config.get(`components.${props.configTpl}`);
            if (tpl) {
                if (Utils.typeof(tpl, 'function')) {
                    tpl = tpl();
                }
                if (currentProps) {
                    return this.__mergeProps({}, currentProps, tpl);
                } else {
                    // 如果没有传入已有currentProps参数，则默认和自己当前的配置合并
                    currentProps = Utils.copy(props);
                    delete currentProps.configTpl;
                    // 此处要注意，是原props往tpl上覆盖
                    return this.__mergeProps({}, tpl, currentProps);
                }
            }
        }
        return currentProps || props;
    }

    // 用于在组件开发中更新__props，类似于setState，只不过是在刷新 __props
    //   注意：通过 __setProps 只能设置属性，不能更换函数
    // 也可以传入待刷新完成后执行自己想要执行的逻辑（比如Modal，需弹框显示后才能执行其他操作）
    // 默认会刷新组件；也可以把第二个参数设为 false 阻止刷新
    __setProps(nextProps, follow) {
        // 如果组件已销毁，则不再进行任何操作
        if (this.unmounted) {
            return;
        }
        // 去除掉多余的属性（解决报warning问题）
        let __props = this._filterHandler(nextProps, true);
        this.__prevProps = this.__props;
        this.__props =  this.__mergeProps({}, this.__props, __props);
        // 执行附加逻辑
        this.__afterSetProps();
        if (follow !== false) {
            this.forceUpdate();
            // 延迟执行
            // TODO: 一点都不优雅
            setTimeout(follow, 10);
        }
    }

    // 执行完 __setProps 后附加的逻辑，由子类自行实现
    __afterSetProps() {}

    // 把默认配置和当前用户传入配置进行合并，可以传多个参数
    //  如果把 defaultProps 放在第一位，merge完成后defaultProps的值会变成merge后的数据，如果defaultProps需多次使用，会出问题
    //  针对此问题，可以第一个参数放一个空对象，类似于Object.assign的用法
    __mergeProps(...props) {
        return Utils.merge(this._uncomplex, ...props);
    }

    // 从props中过滤掉某些属性，例如原始元素不支持的属性
    __filterProps(props, arr) {
        return Utils.filter(props, arr);
    }

    // 判断是否需要刷新
    //   如果是单纯因为父组件属性导致子组件的 cwr 函数被调用，两次的props是相同的，没必要刷新；
    //   如果是set导致的，则两次的props肯定会有不同，需刷新
    // 还有：需要把_filter中定义的属性全部过滤掉，这些属性是额外定义的，对判断结果会有影响
    // TODO: 貌似现在没什么作用，都返回true。。。
    __shouldUpdate(props, nextProps) {
        return !Utils.equals(
            Utils.filter(props, this._filter),
            Utils.filter(nextProps, this._filter)
        );
    }

    // ajax通用方法
    __ajax(config) {
        this._inject(config, 'success', ()=>{
            // 增加逻辑：如果组件已销毁，则不再往下执行
            if (this.unmounted) {
                return false;
            }
        });
        this._inject(config, 'error', ()=>{
            // 增加逻辑：如果组件已销毁，则不再往下执行
            if (this.unmounted) {
                return false;
            }
        });
        return Ajax(config);
    }

    // 解析某个属性的配置。方便开发组件时定义一些可以为配置的属性
    __analysis(item) {
        return this._factory.generateElement(item);
    }

    // 判断是否为权限点 && 是否有权限
    __authority(item) {
        return Authority.check(item);
    }

    // 获取缓存中的组件
    __getComponent(name) {
        return ComponentsCache.get(name);
    }

    // 兼容自定义额外操作返回结果有可能为 Promise 的情况。
    // 如果result是Promse，使用then/catch处理；
    // 否则，根据返回的是否为false判断要执行成功还是失败
    __compatePromise(result, success, error) {
        if (result instanceof Promise) {
            result.then(()=>{
                success && success();
            }).catch(()=>{
                error && error();
            });
        } else if (result !== false) {
            success && success();
        } else {
            error && error();
        }
    }

    // api/source/control 系列参数格式化工具
    // 保证格式化后必需为对象
    __formatApi(value = {}, attr = 'url') {
        if (Utils.typeof(value, 'string')) {
            value = {[attr]: value};
        }
        return value;
    }

    // 从source接口获取数据
    // 传入的config包含 success 和 error，source一系列处理完成后最终数据才会传给 success
    __getSourceData(config) {
        let {paramsHandler, handler, target, onError, onSuccess, ...others} = this.__filtered.source;
        // success 和 error 等来自子组件调用，其余参数如果子组件传入，则进行覆盖
        let {url, method, params, success, error, onchange} = Object.assign(
            {},
            this.__filtered.source,
            config
        );
        paramsHandler && (params = paramsHandler(params));
        if (url) {
            this.__ajax({
                // 用户配置的source中的其他参数直接传入
                ...others,
                url: url,
                method: method || 'get',
                params: params,
                success: (data, res)=>{
                    // 如果用户定义了数据处理函数，先对数据进行处理
                    handler && (data = handler(data, res, this));
                    // 实际的调用处传入的成功处理逻辑
                    success && success(data, res);
                    // 成功后的额外操作
                    onSuccess && onSuccess(data, res, this);
                },
                error: res => {
                    // 实际的调用处传入的失败处理逻辑
                    error && error();
                    // 失败后额外操作
                    return onError && onError(res);
                },
                onchange: onchange
            });
        }
    }

    /* 私有方法 ***********************************************************************/

    // 组件的 componentWillReceiveProps 中注入的处理逻辑
    // 有两种情况会调用cwr：
    //  一种是父组件刷新，currentProps = this.props，如果props确实发生了变化，则需要重新调用__setProps
    //  还有一种是set函数调用的，currentProps = this.__props，如果__props发生变化，则需要重新调用__setProps
    _componentWillReceiveProps(nextProps, currentProps) {
        // cwr函数执行很频繁，这里对一些props不变的情况进行一些过滤
        currentProps = !Utils.empty(currentProps) ? currentProps : this.props
        if (this.__shouldUpdate(currentProps, nextProps)) {
            // 如果参数变化，则重新获取数据。要在变更 __props 之前判断。
            let reGetData = nextProps.source && nextProps.source.params && !Utils.equals(
                nextProps.source.params,
                this.__filtered.source.params
            );
            // 重新设置 __props
            this.__setProps(nextProps);
            // 如果参数变化，则重新获取数据，此时 __props 已变更完成。
            if (reGetData) {
                this._handleAsyncData();
            }
        }
    }

    // componentDidMount 中注入的处理逻辑
    _componentDidMount() {
        // 组件加载完成后再中心共享一次组件，保证渲染完成后缓存中一定存在。
        //   貌似如果组件需重新解析渲染时，时先执行构造函数生成新组件，再销毁原来组件，再把新组件渲染（未验证...）
        //   如果如上面的流程，则会导致新组件写入缓存中后有被老组件销毁掉，最终缓存中不再有新组件
        this._transmitComponent(false);
        // 如果设置了自动获取异步数据，则执行逻辑
        if (this.__filtered.source.autoLoad === undefined || this.__filtered.source.autoLoad) {
            this._handleAsyncData();
        }
    }

    // componentWillUnmount 中注入的处理逻辑
    // 最外层的子类实例化的时候会调用 _injectFunction 函数，把函数注入到子类示例的 componentWillUnmount 中
    _componentWillUnmount() {
        this._unsetTransmitComponent();
        this.unmounted = true;
    }

    // 过滤 props，生成 __props 和 __filtered
    // 第二个参数为是否过滤掉为函数的属性
    _filterHandler(props, filterFunc = false) {
        let newProps = {};
        let haveFiltered = false;
        for (let i in props) {
            if (props.hasOwnProperty(i)) {
                if (this._filter.indexOf(i) === -1) {
                    // 过滤掉为函数的属性
                    // 如果设置不过滤函数、或者不为函数、或者__props上没有此属性
                    if (!filterFunc || !Utils.typeof(props[i], 'function') || !this.__props[i]) {
                        newProps[i] = props[i];
                    }
                } else {
                    // 使用merge，保证增量合并。使进入到__filtered中的属性，也能增量的set
                    this.__filtered[i] = this.__mergeProps({}, this.__filtered[i], props[i]);
                    haveFiltered = true;
                }
            }
        }
        // 格式化 api、source、control 系列参数
        if (haveFiltered) {
            this._filteredPropsFormat();
        }
        return newProps;
    }

    // 后面传入组件的参数用 __props 代替 props
    _initProps() {
        // 先把 this.__props 中初始化的多余属性过滤掉
        // 在这里执行是为了方便子类中__init之前在去更改__props
        this.__props = this._filterHandler(this.__props);
        // 待观察...
        // 因为会对函数进行绑定、注入等操作，所以仅在 init 时把配置的函数转移到__props上，之后不会再更新函数
        // this._setPropsFunctions();
        // 然后把组件原props作为新值传给__setProps做合并
        this.__setProps(this.props, false);
        // 执行附加逻辑
        this._afterInitProps();
    }

    // 执行完 _initProps 后附加的逻辑，由子类自行实现
    _afterInitProps() {}

    // 把 this.props 上配置的函数转移到 this.__props 上
    // _setPropsFunctions() {
    //     let props = this.props;
    //     for (let i in props) {
    //         if (props.hasOwnProperty(i) && Utils.typeof(props[i], 'function') && this._filter.indexOf(i) === -1) {
    //             this.__props[i] = props[i];
    //         }
    //     }
    // }

    // 获取key的名称
    _getTransmitName() {
        // 根据 __cache 属性判断
        let key = this.props.__cache;
        if (!!this.props.route && this.props.route.__cache) {
            key = this.props.route.__cache;
        }
        // 如果没有key，则根据是否关联model数据判断
        if (!key) {
            if (Model.if(this.props)) {
                key = this.props.__key;
            }
        }
        return key;
    }

    // 共享组件
    _transmitComponent(isCheck) {
        if (!!this.cacheName) {
            ComponentsCache.set(this.cacheName, this, isCheck);
        }
    }

    // 解除共享
    _unsetTransmitComponent() {
        if (!!this.cacheName) {
            ComponentsCache.del(this.cacheName);
        }
    }

    // 处理数据绑定页面。设置关联关系 && 替换模板
    _handleModel() {
        this.__props = Model.setCache(this.cacheName, this.__props);
    }

    // 开放给用户使用的 Api，需处理下
    _handleOpenApi() {
        for (let v of this._openApi) {
            if (Utils.typeof(this[v], 'function')) {
                this[v] = this[v].bind(this);
            }
        }
    }

    // 把父组件定义的 需在React的生命周期中的7个函数中增加的处理逻辑 注入到对应的7个函数中
    _injectFunction() {
        for (let v of PreventCoverageMap) {
            // 如果父组件中有等待注入的函数
            let inject = this[`_${v}`];
            if (inject) {
                this._inject(this, v, inject);
            }
        }
    }

    // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中，可见 AutoComplete 组件中的 'onSearch' 函数
    _injectEventFunction() {
        for (let v of this._injectEvent) {
            let inject = this[`_${v}`];
            if (inject) {
                this._inject(this.__props, v, inject);
            }
        }
    }

    // 挂载用户传入的需要关联到生命周期中的函数
    _loadUserFunction() {
        for (let f in ForUserApi) {
            // 如果props中有等待注入的函数
            let inject = this.__filtered[f];
            if (inject) {
                for (let v of ForUserApi[f].split(',')) {
                    this._inject(this, v, ()=>{
                        let result = inject.call(this, this.__props, this);
                        // 组件渲染/刷新前可以让用户有机会改参数
                        if (result && ['beforeCreate', 'beforeRender'].indexOf(f) !== -1) {
                            // 防止用户设置过滤属性
                            this.__props = this._filterHandler(result);
                        }
                    }, true);
                }
            }
        }
        // 支持高级用户（专业前端）直接使用原始的生命周期函数
        for (let v of PreventCoverageMap) {
            // 如果父组件中有等待注入的函数
            let inject = this.__filtered[`_${v}`];
            if (inject) {
                this._inject(this, v, inject);
            }
        }
    }

    // 绑定组件额外动作处理逻辑
    _injectControl() {
        let {type, trigger, target, params = [], handler} = this.__filtered.control;
        if (target) {
            // target可以为一个函数，函数的参数为trigger的参数列表
            // 函数返回一个target的字符串
            let targetStr = target;
            if (Utils.typeof(target, 'function')) {
                targetStr = target(...params);
            }
            if (target) {
                this._inject(this.__props, trigger, (...para)=>{
                    // targetAttr 可以为空数组，即目标直接指向组件
                    let [targetName, ...targetAttr] = targetStr.split('.');
                    let target = this.__getComponent(targetName);
                    if (target) {
                        // 如果没设置type，则根据target的类型确定
                        if (!type) {
                            let attr = Utils.fromObject(targetAttr.join('.'), target);
                            type = Utils.typeof(attr, 'function') ? 'call' : 'assign';
                        }
                        switch (type) {
                            // 2、动作类型为：调用
                            case 'call': {
                                let func = Utils.fromObject(targetAttr.join('.'), target);
                                func(...params);
                                break;
                            }
                            // 3、动作类型为：赋值
                            case 'assign': {
                                let result = handler && handler(...para, target, this);
                                let tData = Utils.generateObject(targetAttr.join('.'), result);
                                // 要调set函数，才能走componentWillReceiveProps逻辑，适用于自定义组件
                                target.set(tData);
                                break;
                            }
                            default:
                                break;
                        }
                    }
                }, true);
            }
        }
    }

    // api、source 系列参数初始化
    _filteredPropsFormat() {
        // 把 api 处理成对象
        let api = this.__formatApi(this.__filtered.api);
        let source = this.__formatApi(this.__filtered.source);
        let control = this.__formatApi(this.__filtered.control, 'target');
        // 检查默认配置中是否有配置，如果有进行合并
        if (this.__defaultProps.api) {
            api = this.__mergeProps({}, this.__defaultProps.api, api);
        }
        if (this.__defaultProps.source) {
            source = this.__mergeProps({}, this.__defaultProps.source, source);
        }
        if (this.__defaultProps.control) {
            control = this.__mergeProps({}, this.__defaultProps.control, control);
        }
        // 重新设置 __filtered 属性
        this.__filtered.api = api;
        this.__filtered.source = source;
        this.__filtered.control = control;
    }

    // 自动异步获取数据
    _handleAsyncData() {
        let target = this.__filtered.source.target;
        this.__getSourceData({
            success: data => {
                // 如果用户自己配置了 target 属性，则按照用户定义的赋值
                target = target === 'content' ? 'children' : target;
                // 目标元素可以有层级,可以给更深层的属性设置,例如：pagination.count
                let tData = Utils.generateObject(target, data);
                this.__setProps(tData);
            }
        });
    }

    // 绑定 api 系列参数处理逻辑
    _injectApi() {
        if (this.__filtered.api.trigger) {
            this._inject(this.__props, this.__filtered.api.trigger, this._handleApiProps, true);
        }
    }

    // 提交数据功能
    _handleApiProps(oParams) {
        let {url, method = 'post', params = oParams, handler, onSuccess, onError, ...others} = this.__filtered.api;
        if (url) {
            handler && (params = handler(params));
            return new Promise((resolve, reject)=>{
                this.__ajax({
                    url: url,
                    method: method,
                    params: params,
                    ...others,
                    success(data, res) {
                        let result = onSuccess && onSuccess(data, res);
                        // onSuccess有返回值，则执行默认提示
                        if (result === undefined || result === true) {
                            message.success('执行成功，结果返回: ' + res.msg, 2.5);
                        }
                        resolve();
                    },
                    error(res) {
                        let result = onError && onError(res);
                        // onError有返回值，则执行默认提示
                        if (result === undefined || result === true) {
                            message.error('执行失败，结果返回: ' + res.msg, 4);
                        }
                        reject();
                    }
                });
            });
        }
    }

    // 函数替换 函数
    // 参数依次为 父级、目标函数、新函数、是否把原来逻辑提前
    _inject(parent, target, newFunc, oldAhead) {
        return Utils.inject(parent, target, newFunc, oldAhead, this);
        // let origin = parent[target];
        // parent[target] = !!origin
        //     ? (...params) => {
        //         // return原函数执行结果
        //         let result;
        //         oldAhead ? (result = origin.call(this, ...params)) : null;
        //         let newResult = newFunc.call(this, ...params);
        //         // 如果注入的逻辑返回false，可组织原函数的继续执行（前提是原函数后执行）
        //         !oldAhead && newResult !== false ? (result = origin.call(this, ...params)) : null;
        //         return result;
        //     }
        //     : newFunc.bind(this);
        // return parent;
    }

}