/**
 * @file 基础类
 * Created by liuzechun on 2017/8/4.
 * @description
 *  * 多个处理逻辑最终合并为一个事件函数传给组件
 *      执行顺序依次为：((__controlled > this._xxx > api > control)->this._xxx) > this.__props.onXxx
 *  
 */
import React, {Component, PureComponent} from 'react';
import {message, Spin} from 'antd';
import {Utils} from 'src/utils';
// import Model from 'src/tools/model.js';
import Authority from 'src/tools/authority.js';
import WhiteList from 'src/tools/whitelist.js';

// // 提供给用户的和生命周期相关的函数，命名更加语义化
export const ForUserApi = {
    beforeCreate: 'componentWillMount',
    afterCreate: 'componentDidMount',
    beforeRender: 'componentWillMount,componentWillUpdate',
    afterRender: 'componentDidMount,componentDidUpdate',
    beforeDestroy: 'componentWillUnmount'
};

// React的生命周期中的7个常用函数，为了防止函数被终的子组件覆盖，这7个函数会经过逻辑处理
// 中间子类在使用这几个函数的时候，需要在函数最前面调用parent.[func]()
export const PreventCoverageMap = Utils.distinct(Object.values(ForUserApi).join(',').split(',').concat([
    'componentWillReceiveProps',
    'shouldComponentUpdate'
]));

// 不复杂的属性，即无需merge处理直接覆盖的属性
export const Uncomplex = ['params', 'data', 'options'];

// 转化为__props时需过滤的属性 - 用户配置的特殊功能的属性
export const FilterProps = Object.keys(ForUserApi).concat(PreventCoverageMap, [
    // 权限
    'authority',
    // 获取系列参数
    // source 系列参数有：url,method,params,handler,targe
    'source',
    // 提交/发送数据系列参数
    // api 系列参数有： url,method,params,handler,trigger
    'api',
    // 组件额外动作及组件关联相关属性
    'control',
    // 隐藏组件
    'hidden'
]);


// 因为组件很少使用 props 和 state，某些时候需要组件刷新的。例如面包屑组件
export default class BaseComponent extends Component {
    // export default class BaseComponent extends PureComponent {
    // 组件、中间基类不调用__init，如果想要给Base设置type，则需要构造函数传入
    constructor(props, options = {}) {
        super(props);
        this.state = {};
        // 组件类型，用于组件及其基类基础配置的获取
        this.class = ['base-component'];
        // 未使用__init的组件，手动传入组件类型
        this.type = this.props.__type || options.type;
        this.key = this.props.__key;
        // 组件缓存的key。有值的话组件才会缓存，如果值为null，则不会做缓存
        this.cacheName = this._getTransmitName();
        // 标志组件是否已被销毁
        this.unmounted = false;
        // _factory 是最初 Factory 的 this
        this._factory = this.props._factory;
        this.insName = this._factory.insName;
        // 供用户使用，例如获取路由信息/参数等
        this._root = this._factory;
        // 需要先执行函数得到组件配置并需要重新解析配置的属性
        this._analysis = [];
        // 开发时自定义的需注入到事件中的函数，例如 AutoComplete 组件中的 'onSearch' 函数
        this._injectEvent = [];
        this._filter = (Utils.copy(FilterProps)).concat(
            // 一些隐藏的属性
            ['__cache', '__type', '__key', '_factory', '_selfCalling'],
            // 二次解析白名单里的属性的原值存储在 _${v} 中
            WhiteList.getall(this.type).map(v => `_${v}`)
        );
        this._innerFilter = this._filter.filter(v => v.indexOf('_') === 0);
        // 不复杂的属性，即无需merge处理直接覆盖的属性
        this._uncomplex = Utils.copy(Uncomplex);
        // 开放给用户使用的 Api，需处理下
        this._openApi = ['set', 'get', 'show', 'hide', 'loading', 'reload'];
        // 可用于链式调用的API
        this._chainedApi = ['set', 'show', 'hide', 'loading', 'reload'];
        // 存储一些程序执行过程中的数据
        this._tempData = {};
        // 临时存储组件更新之后执行的逻辑。类似于 setState 之后的回调函数（但是 forceUpdate 没有）
        this._afterUpdateQueue = [];
        this.__defaultProps = {};
        this.__props = {};
        // 更新前的__props
        this.__prevProps = {};
        // 用于存放被过滤掉的props上的属性，使用户重新set也可以生效（如果直接在props上取的话，set不会触发props更新，被过滤掉的属性就无法再更新了）
        this.__filtered = {};
    }

    _getDefautlProps() {
        let conf = this._factory.$config.get(`components.${this.type}`) || {};
        // 取中间各基类的默认配置，并合并全部配置
        let confArr = this.class.map(v => (this._factory.$config.get(`components.${v}`) || {}));
        conf = this.__mergeProps(...confArr, conf);
        return conf;
    }


    // forceUpdate 完成之后执行并清空队列
    _componentDidUpdate(prevProps, prevState) {
        for (let func of this._afterUpdateQueue.splice(0)) {
            func();
        }
    }

    // 组件的 componentWillReceiveProps 中注入的处理逻辑
    // 有两种情况会调用cwr：
    //  一种是父组件刷新，currentProps = this.props，如果props确实发生了变化，则需要重新调用__setProps
    //  还有一种是set函数调用的，currentProps = this.__props，如果__props发生变化，则需要重新调用__setProps
    // 所以nextProps也有对应另种情况：
    //  一种是父组件刷新，传入的是正常的外部传入的配置；
    //  还有一种是set函数调用，会额外传入一个_selfCalling属性，此属性中包含了set的原数据。直接使用此属性的内容进行__setProps即可
    _componentWillReceiveProps(nextProps, currentProps) {
        // cwr函数执行很频繁，这里对一些props不变的情况进行一些过滤
        currentProps = !Utils.empty(currentProps) ? currentProps : this.props;

        let reGetData = false;
        // 更新 __props
        if (this.__shouldUpdate(currentProps, nextProps, false)) {
            // 如果参数变化，则重新获取数据。要在变更 __props 之前判断。
            reGetData = nextProps.source
                && Utils.isChange(Utils.varietyFormat(nextProps.source, 'url'), this.__filtered.source)
                // 由于isChange对于子集的情况无效，对于标记为非复杂属性，需使用equals做检测
                || !Utils.equals(
                    nextProps.params,
                    this.__props.params
                );
            // 重新设置 __props.只传入待更新的值
            // 如果为自身调用，则待更新的值存储在_selfCalling中；
            // 否则为外部刷新，用 nextProps 和 currentProps 做对比，获取变化的值
            // TODO: 深层次的属性变换无法检测到（currentProps使用的this.props）！！
            //  是否可以考虑clone一份缓存起来专门用于做检查呢？
            let changeProps = nextProps._selfCalling;
            if (!changeProps) {
                changeProps = Utils.getChange(nextProps, currentProps);
            }
            this.__setProps(changeProps);
        }

        // 判断是否重新加载数据
        this._tryReloadData(reGetData, nextProps._selfCalling);
    }
    // 自动重新加载数据
    _tryReloadData(reGetData, selfCalling) {
        /**
         * 自动重新加载概括起来讲，分几种判断条件：
         *  1、是否为自身set (selfCalling，除此之外还有cwr生命周期)
         *  2、是否发生了source参数变化（reGetData）
         *  3、是否设置过source参数（isSetSource，对应的为set了source参数(不管有没有变化)，注意和reGetData两者有交集但互不包含）
         *
         * 自动重新加载有几种不同的等级，对应参数值依次为：
         *  1、true: 范围最宽，source参数变动、自身set source参数、父组件刷新都会触发
         *  2、'set': source参数变动、自身set source参数都会更新
         *  3、false: 只有params或者source变化时才会更新
         *  4、'never': 则永远不更新，除非手动调用 reload 函数
         *
         * 一般组件默认为false
         */
        let autoReload = this.__filtered.source.autoReload;
        let isSetSource = selfCalling && (selfCalling.source || selfCalling.params);
        switch (autoReload) {
            case true:
                if (selfCalling && !isSetSource && !reGetData) {
                    return;
                }
                break;
            case 'set':
                if (!isSetSource && !reGetData) {
                    return;
                }
                break;
            case 'never':
                return;
            case false:
            default:
                if (!reGetData) {
                    return;
                }
        }
        // 改为异步执行，保证获取数据前，组件自定义的cwr函数的逻辑也执行完毕
        Utils.defer(this._handleAsyncData.bind(this));
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
        delete this.parent;
    }

    /**
     * __init 之前，构造函数中未能执行的逻辑（比如需要在子类构造函数中继续处理的属性，最后再进行初始化）
     *      开发时，如果是要在 this.__props 初始化之后执行的逻辑，请覆写_beforeInit
     */
    _beforeInit() {
        // 从缓存中读出组件的默认参数。参数来源可以是在 config.js 里配置；也可以是用户通过调用 UF.config() 配置
        // （如 loading 组件的 delay 参数在 config.js 中定义为 150）
        // 开发组件的时候，也可以在this.__props上增加一些默认的参数（注意不要直接用对象覆盖）
        this.__defaultProps = this._getDefautlProps();
        this.__props = Utils.clone(this.__defaultProps);
    }

    // __init 执行之后，紧跟着执行的逻辑。一般用于初始化后追加的子类内部初始化逻辑
    _afterInit() {}

    // 执行 _initProps 之前的附加的逻辑
    _beforeInitProps() {}

    // 执行完 _initProps 后附加的逻辑，由子类自行实现
    _afterInitProps() {}

    // 执行完 __setProps 后附加的逻辑，由子类自行实现
    _afterSetProps(newProps) {}

    // 覆盖原生的setState方法。如果组件已销毁，则不再执行setState。用于异步操作中调用setState时的通用状态检测
    setState(...params) {
        if (this.unmounted) {
            return;
        }
        super.setState(...params);
    }
    // 覆盖原生的forceUpdate方法。如果组件已销毁，则不再执行forceUpdate。用于异步操作中调用forceUpdate时的通用状态检测
    forceUpdate(...params) {
        if (this.unmounted) {
            return;
        }
        super.forceUpdate(...params);
    }

    /* 暴露给用户的方法 ***********************************************************************/

    // 暴露给用户刷新组件的接口
    set(options) {
        // 使用 factory.handleProps 函数处理用户配置的参数，并生成组件需要使用的 props
        options = this._factory.handleProps(Object.assign({type: this.type}, options));
        // 要保证调用cwr时传入的nextProps的完整性
        // 增加一个_selfCalling属性，标识当前进入cwr的为内部调用还是外部调用；_selfCalling上存储了用户传入的配置对象原值
        let props = this.__mergeProps({_selfCalling: options}, this.__props, options);
        // cwr一定存在，且cwr中会执行__setProps。不管子组件是否用的是__props，都能保证兼容性
        // 因为默认会更改__props并且forceUpdate；如果组件用的自己的props，必定会自己实现cwr中的逻辑
        this.componentWillReceiveProps(props, this.__props);
        return this;
    }
    // 获取属性key的配置
    // 可以传递多个key，从前到后依次尝试获取，直至获取到数据为止
    // 如果未传入可以，则返回整个配置
    get(...keys) {
        let props = Object.assign({}, this.__filtered, this.__props);
        if (keys.length > 0) {
            let result;
            for (let key of keys) {
                result = Utils.fromObject(key, props);
                if (result) {
                    break;
                }
            }
            return result;
        }
        return props;
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
        this.__setProps({hidden: true});
    }
    // 展示组件
    show() {
        let style = Object.assign({}, this.__props.style);
        if (this._tempData.display && this._tempData.display !== 'none') {
            style.display = this._tempData.display;
        } else {
            style.display = undefined;
        }
        this.__setProps({style, hidden: false});
    }
    // 展示 loading 效果
    loading(__showLoading = true) {
        // this.__setProps({__showLoading: __showLoading});
        this.setState({__showLoading: __showLoading});
    }
    // 重新获取source数据
    reload() {
        this._handleAsyncData();
    }
    // 强制刷新组件
    // TODO: 不完全刷新
    refresh() {
        // 取出全部二次解析的属性，并重新解析一次
        let newProps = {};
        WhiteList.getall(this.type).forEach(v => {
            let oItem = this.__filtered[`_${v}`];
            oItem && (newProps[v] = oItem);
        });
        this.set(newProps);
    }
    // 产生快捷操作某个参数的api
    // 比如可以通过 component.source.set 等直接操作 source 参数（不会触发reload）
    // operator(targetStr) {
    //     let self = this;
    //     let target = Utils.fromObject(targetStr, this.__filtered) || Utils.fromObject(targetStr, this.__props);
    //     return {
    //         get(key) {
    //             if (key) {
    //                 return target[key];
    //             }
    //             return target;
    //         },
    //         set(key, value) {
    //             let params = {};
    //             if (Utils.typeof(key, 'object')) {
    //                 params = key;
    //             } else {
    //                 params[key] = value;
    //             }
    //             return Object.assign(target, params);
    //         },
    //         delete(key) {
    //             if (target[key] !== undefined) {
    //                 delete target[key];
    //             }
    //             return target;
    //         }
    //     };
    // }

    /* 供子组件调用方法 ***********************************************************************/

    // 供子组件调用初始化 使用子组件this调用
    __init() {
        // 初始化之前，执行一些构造函数中未能执行的初始化逻辑
        this._beforeInit();

        // 以下几个函数执行顺序固定，请慎重调整！！
        // 把父类中设置的需注入到生命周期中的逻辑注入到对应生命周期函数中
        this._injectFunction();
        // 共享组件
        this._transmitComponent();

        // 执行 _initProps 之前的附加的逻辑
        this._beforeInitProps();
        // 将_injectEvent定义的属性转义到_filter上
        this._injectEventFilter();
        // 后面传入组件的参数用 __props 代替 props
        this._initProps();
        // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中，并置于__props上
        // 由于_initProps中会把_injectEvent指定的函数过滤到__filtered中，所以紧接着需要进行处理并重新赋值给__props
        this._injectEventFunction();
        // 执行完 _initProps 后附加的逻辑
        this._afterInitProps();

        // 处理数据绑定页面
        // this._handleModel();
        // 挂载用户传入的需要关联到生命周期中的函数（这个把生命周期的函数做个一个转换，更加语义化）
        this._loadUserFunction();

        // 针对一些需要先执行函数得到组件配置并需要重新解析配置的属性进行处理
        this._analysisProps();

        // 替换 render 函数，给render加额外处理逻辑
        this._injectRender();

        // 开放给用户使用的 Api，需处理下
        this._handleOpenApi();

        // 初始化之后，执行子类内部初始化逻辑
        this._afterInit();
    }

    // 获取完整的组件配置：会把config中的通用组件配置合并进来；也会解析自定义组件配置
    __getConf(props) {
        return this._factory.getConf(props);
    }

    // 用于在组件开发中更新__props，类似于setState，只不过是在刷新 __props
    //   TODO：通过 __setProps 只能设置属性，不能更换函数。
    //      原因，函数需要额外注入处理，各个函数各不相同，未统一，无法直接更新到__props。所以在_filterHandler中把传入的函数过滤掉了
    // 也可以传入待刷新完成后执行自己想要执行的逻辑（比如Modal，需弹框显示后才能执行其他操作）
    // 默认会刷新组件；也可以把第二个参数设为 false 阻止刷新
    __setProps(nextProps, follow) {
        // 如果组件已销毁，则不再进行任何操作
        if (this.unmounted) {
            return;
        }
        // 去除掉多余的属性（解决报warning问题）
        // 因为初始化的时候对函数有额外处理，所以暂时不能随意更改函数属性，需全部过滤
        // 但是初始化时，需把this.props上的全部赋值给__props，所以是否过滤函数需要增加判断
        let __props = this._filterHandler(nextProps);
        this.__prevProps = this.__props;
        this.__props = this.__mergeProps({}, this.__props, __props);
        // 执行附加逻辑
        this._afterSetProps(nextProps);
        if (follow !== false) {
            this.forceUpdate();
            // 延迟执行
            // setTimeout(follow, 10);
            // TODO: 待观察效果，update at 2018-07-03
            // forceUpdate 完成之后执行
            if (Utils.typeof(follow, 'function')) {
                this._afterUpdateQueue.push(follow);
            }
        }
    }

    // 把默认配置和当前用户传入配置进行合并，可以传多个参数
    //  如果把 defaultProps 放在第一位，merge完成后defaultProps的值会变成merge后的数据，如果defaultProps需多次使用，会出问题
    //  针对此问题，可以第一个参数放一个空对象，类似于Object.assign的用法
    __mergeProps(...props) {
        return Utils.merge(this._uncomplex, ...props);
    }

    // 从props中过滤掉某些属性，例如原始元素不支持的属性
    __filterProps(props, arr = this._filter) {
        return Utils.filter(props, arr);
    }

    // 判断是否需要刷新
    //   如果是单纯因为父组件属性导致子组件的 cwr 函数被调用，两次的props是相同的，没必要刷新；
    //   如果是set导致的，则两次的props肯定会有不同，需刷新
    // 还有：需要把_filter中定义的属性全部过滤掉，这些属性是额外定义的，对判断结果会有影响
    // update at 2018/08/06, 如果是set的source等过滤属性，要保证这里也能通过，所以仅仅过滤`_`开头的属性
    __shouldUpdate(props, nextProps, disposeFunc) {
        return !Utils.equals(
            Utils.filter(props, this._innerFilter),
            Utils.filter(nextProps, this._innerFilter),
            disposeFunc
        );
    }

    // ajax通用方法
    __ajax(config) {
        this._inject(config, 'success', () => {
            // 增加逻辑：如果组件已销毁，则不再往下执行
            if (this.unmounted) {
                return false;
            }
        });
        this._inject(config, 'error', () => {
            // 增加逻辑：如果组件已销毁，则不再往下执行
            if (this.unmounted) {
                return false;
            }
        });
        return this._factory.$ajax(config);
    }

    // 解析某个属性的配置。方便开发组件时定义一些可以为配置的属性
    __analysis(item) {
        return this._factory.generateElement(item);
    }

    // 判断是否为权限点 && 是否有权限
    __authority(item) {
        return Authority.check(item, this.insName);
    }

    // 获取缓存中的组件
    __getComponent(name) {
        return this._factory.$components.get(name);
    }

    // 兼容自定义额外操作返回结果有可能为 Promise 的情况。
    // 如果result是Promse，使用then/catch处理；
    // 否则，根据返回的是否为false判断要执行成功还是失败
    __compatePromise(result, success, error) {
        if (result instanceof Promise) {
            result.then(() => {
                success && success();
            }).catch(() => {
                error && error();
            });
        } else if (result !== false) {
            success && success();
        } else {
            error && error();
        }
    }

    // 从source接口获取数据
    // 传入的config包含 success 和 error，source一系列处理完成后最终数据才会传给 success
    __getSourceData(config) {
        // success 和 error 等来自子组件调用，其余参数如果子组件传入，则进行覆盖
        let {target, showLoading, onchange, ...others} = Object.assign({}, this.__filtered.source, config);
        this.__execAjax({
            // 用户配置的source中的其他参数直接传入
            ...others,
            // 验证返回结果是否为空
            verifyData: true,
            onchange: !showLoading ? onchange : status => {
                this._handleSourceLoading(status, showLoading);
                onchange && onchange(status);
            }
        });
    }
    // 处理source系列接口参数的通用逻辑（例如handler处理）
    __execAjax(conf, usePromise = false) {
        let {url, params, _paramsHandler, paramsHandler, paramIndex = {}, removeEmptyParams, _handler, handler, success, onSuccess, error, onError, ...others} = conf;
        if (url) {
            // 额外增加对参数预处理逻辑，不暴露给用户使用
            if (_paramsHandler && (false === (params = _paramsHandler(params)))) {
                return false;
            }
            // 可以通过 paramIndex 属性更改默认传递的page和size参数
            if (params && Utils.typeof(paramIndex, 'object') && !Utils.empty(paramIndex)) {
                for (let i in params) {
                    if (paramIndex[i]) {
                        params[paramIndex[i]] = params[i];
                        delete params[i];
                    }
                }
            }
            if (paramsHandler) {
                // 如果paramsHandler返回结果为false，则阻止ajax请求
                //  可以在paramsHandler中格式化参数的同时对参数进行校验，如果校验失败，则终止请求
                let result = paramsHandler(params, this);
                // 使用时需注意，如果调用之外有额外的状态控制，例如loading没写到onchange里，则需要自己额外写判断逻辑恢复状态
                if (result === false) {
                    return false;
                }
                params = result !== undefined ? result : params;
            }
            // 移除为空的属性
            if (params && removeEmptyParams === true) {
                for (let i in params) {
                    if (params[i] === null || params[i] === undefined || params[i] === '') {
                        delete params[i];
                    }
                }
            }
            return new Promise((resolve, reject) => {
                this.__ajax({
                    // 其他参数直接传入
                    ...others,
                    url: url,
                    params: params,
                    success: (data, res) => {
                        if (false === (_handler && (data = _handler(data, res)))) {
                            return false;
                        }
                        // 如果用户定义了数据处理函数，先对数据进行处理
                        handler && (data = handler(data, res, this));
                        // 两个handler都可以通过return false 阻止后续逻辑
                        // 注意，存在返回数据本身为data的情况。所以需要确认当data为handler处理结果时，再阻止
                        if (data === false && (_handler || handler)) {
                            return;
                        }
                        // 实际的调用处传入的成功处理逻辑
                        success && success(data, res);
                        // 成功后的额外操作
                        onSuccess && onSuccess(data, res, this);
                        usePromise && resolve();
                    },
                    error: res => {
                        // 实际的调用处传入的失败处理逻辑
                        let result = error && error(res);
                        usePromise && reject();
                        let userResult = onError && onError(res);
                        // 失败后额外操作
                        return userResult !== undefined ? userResult : result;
                    }
                });
            });
        }
    }

    // source获取数据时，通用的展示source的逻辑
    _handleSourceLoading(status, showLoading) {
        // 展示loading可以自定义展示效果，showLoading为loading的配置
        let loadingConf = status;
        if (status) {
            loadingConf = showLoading;
            if (!Utils.typeof(loadingConf, 'object')) {
                loadingConf = {spinning: !!loadingConf};
            }
            loadingConf.spinning = true;
        }
        // DataEntry里重写了loading，会用到showLoading参数
        this.loading(loadingConf, showLoading);
    }

    // 获取通用的公共属性
    __getCommonProps(props = {}) {
        const commonProps = ['style', 'className'];
        let result = Utils.pass(this.__props, commonProps);
        if (props.className) {
            result.className = props.className + ' ' + (result.className || '');
        }
        if (props.style) {
            result.style = Object.assign(props.style, result.style);
        }
        return result;
    }

    /* 私有方法 ***********************************************************************/

    // 过滤 props，生成 __props 和 __filtered
    _filterHandler(props) {
        let newProps = {};
        for (let i in props) {
            if (props.hasOwnProperty(i)) {
                if (this._filter.indexOf(i) === -1) {
                    newProps[i] = props[i];
                } else {
                    // 使用merge，保证增量合并。使进入到__filtered中的属性，也能增量的set
                    // this.__filtered[i] = this.__mergeProps({}, this.__filtered[i], props[i]);
                    let value = props[i];
                    // 格式化 api、source、control 系列参数
                    if (['api', 'source', 'control'].indexOf(i) > -1) {
                        value = this._varietyPropsFormat(i, value);
                    }
                    this.__filtered[i] = Utils.merge(this.__filtered[i] || {}, value);
                }
            }
        }
        return newProps;
    }

    // api、source、control 系列参数初始化，处理成对象
    _varietyPropsFormat(key, value) {
        switch (key) {
            case 'api':
                value = Utils.varietyFormat(value, 'url');
                break;
            case 'source':
                value = Utils.varietyFormat(value, 'url');
                break;
            case 'control':
                value = Utils.varietyFormat(value, 'target');
                break;
            default:
                return value;
        }
        // 检查默认配置中是否有配置，如果有进行合并
        if (!Utils.empty(value) && this.__defaultProps[key]) {
            value = this.__mergeProps({}, this.__defaultProps[key], value);
        }
        return value;
    }

    // 后面传入组件的参数用 __props 代替 props
    _initProps() {
        // 先把 this.__props 中初始化的多余属性过滤掉
        // 在这里执行是为了方便子类中__init之前在去更改__props
        this.__props = this._filterHandler(this.__props);
        // 然后把组件原props作为新值传给__setProps做合并
        this.__setProps(this.props, false);
    }

    // 获取key的名称
    _getTransmitName() {
        // 根据 __cache 属性判断
        let key = this.props.__cache;
        if (!!this.props.route && this.props.route.__cache) {
            key = this.props.route.__cache;
        }
        return key;
    }

    // 共享组件
    _transmitComponent(isCheck) {
        if (!!this.cacheName) {
            this._factory.$components.set(this.cacheName, this, isCheck);
        }
    }

    // 解除共享
    _unsetTransmitComponent() {
        if (!!this.cacheName) {
            this._factory.$components.del(this.cacheName);
            // 删除全部this上的变量，防止循环引用
            // for (let i in this) {
            //     delete this[i];
            // }
        }
    }

    // 处理数据绑定页面。设置关联关系 && 替换模板
    // _handleModel() {
    //     this.__props = Model.setCache(this.cacheName, this.__props);
    // }

    // 开放给用户使用的 Api，需处理下
    _handleOpenApi() {
        for (let v of this._openApi) {
            if (Utils.typeof(this[v], 'function')) {
                this[v] = this[v].bind(this);
            }
        }
        // 可用于链式调用的api，执行完成后返回当前组件
        for (let v of this._chainedApi) {
            if (Utils.typeof(this[v], 'function')) {
                this[v] = this[v].bind(this);
                let origin = this[v];
                this[v] = (...p) => {
                    origin.call(this, ...p);
                    return this;
                };
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

    _injectEventFilter() {
        // api 及 control 的功能使用 injectEvent 的处理方式实现
        // 必须先处理api参数，只有先注入的函数才能使用其返回值
        // 绑定 api 系列参数处理逻辑
        this._handleApiProps();
        // 绑定 control 系列参数处理逻辑
        this._handleControlProps();

        // initProps之前，将_injectEvent中定义的需要额外处理的函数追加到_filter中
        this._filter = this._filter.concat(this._injectEvent);
    }

    // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中，可见 AutoComplete 组件中的 'onSearch' 函数
    // _injectEvent 中定义的事件，会被过滤到__filtered中，并在此处加上额外自定义的逻辑重新创建函数
    _injectEventFunction() {
        for (let v of Utils.distinct(this._injectEvent)) {
            this.__props[v] = (...p) => {
                let result = this[`_${v}`] && this[`_${v}`](...p);
                // 返回false会阻止事件
                if (result === false) {
                    return false;
                }
                let oResult = this.__filtered[v] && this.__filtered[v](...p);
                // 当函数返回结果为空时，尝试获取用户定义的函数的结果
                result === undefined && (result = oResult);
                return result;
            };
        }
    }

    // 针对一些需要先执行函数得到组件配置并需要重新解析配置的属性进行处理
    _analysisProps() {
        for (let v of this._analysis) {
            if (this.__props[v]) {
                let func = this.__props[v];
                this.__props[v] = (...params) => {
                    return this.__analysis(func(...params));
                };
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
                    this._inject(this, v, () => {
                        // __filtered 需覆盖 __props，以在 _filterHandler 时还原回去
                        let props = Object.assign({}, this.__props, this.__filtered);
                        let result = inject(props, this);
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
                // 绑定this，使用户可以在函数中是用this指向当前的this
                this._inject(this, v, inject, false, this);
            }
        }
    }

    // 组件 control 系列参数相关处理
    // 使用 injectEvent 的处理方式实现
    _handleControlProps() {
        // 还未进行initProps，api参数 props 上，init之后才在 __filtered 上
        let control = Utils.varietyFormat(this.props.control, 'target');
        // 只有用户进行了设置才做处理
        if (!Utils.empty(control)) {
            if (this.__defaultProps.control) {
                control = this.__mergeProps({}, this.__defaultProps.control, control);
            }
            if (control.trigger) {
                this._injectEvent.push(control.trigger);
                this._inject(this, `_${control.trigger}`, this._controlHandler.bind(this), true);
            }
        }
    }
    _controlHandler(...para) {
        let {target, type, params, handler, preventDefault = true, stopPropagation = true} = this.__filtered.control;
        if (!target) {
            return;
        }
        // 阻止默认事件及冒泡
        if (Utils.typeof(para[0], 'object') && para[0].preventDefault) {
            preventDefault && para[0].preventDefault();
            stopPropagation && para[0].stopPropagation();
        }
        // 1、动作类型为：绑定(开发使用)
        if (type === 'bind') {
            target(...params, ...para);
            return;
        }
        // target可以为一个函数，函数的参数为trigger的参数列表，函数返回一个target的字符串
        let targetArr = target;
        if (Utils.typeof(target, 'function')) {
            targetArr = target(...para);
        }
        // 支持target为一个数组，配置同时操作多个同类的target
        if (!Utils.typeof(targetArr, 'array')) {
            targetArr = [targetArr];
        }
        for (let v of targetArr) {
            let targetStr = v;
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
                        // 如果没有设置params，则尝试执行handler
                        (!params && handler) && (params = handler(...para, target, this));
                        // 转成数组以便解构
                        !Utils.typeof(params, 'array') && (params = [params]);
                        func.call(target, ...params);
                        break;
                    }
                    // 3、动作类型为：赋值
                    case 'assign': {
                        let result = handler && handler(...para, target, this);
                        let tData = Utils.generateObject(targetAttr.join('.'), result);
                        // 如果设置了params，则会把要设置的值和params合并到一起，并同时set给组件
                        if (params) {
                            tData = Object.assign({}, params, tData);
                        }
                        // 要调set函数，才能走cwr逻辑，适用于自定义组件
                        target.set(tData);
                        break;
                    }
                    default:
                        break;
                }
            }
        }
    }

    // 自动异步获取数据
    _handleAsyncData() {
        let {url, target} = this.__filtered.source;
        if (url) {
            this.__getSourceData({
                success: data => {
                    // 如果用户自己配置了 target 属性，则按照用户定义的赋值
                    target = target === 'content' ? 'children' : target;
                    // 目标元素可以有层级,可以给更深层的属性设置,例如：pagination.count
                    let tData = Utils.generateObject(target, data);
                    // __setProps在table、form等自定义组件不适用
                    this.set(tData);
                }
            });
        }
    }

    // 组件 api 系列参数相关处理
    // 使用 injectEvent 的处理方式实现
    _handleApiProps() {
        // 还未进行initProps，api参数 props 上，init之后才在 __filtered 上
        let api = Utils.varietyFormat(this.props.api, 'url');
        // 只有用户进行了设置才做处理
        if (!Utils.empty(api)) {
            if (this.__defaultProps.api) {
                api = this.__mergeProps({}, this.__defaultProps.api, api);
            }
            if (api.trigger) {
                this._injectEvent.push(api.trigger);
                // TODO: 有待观察，目前看代码之间的相互限制有点多
                this._inject(this, `_${api.trigger}`, this._apiHandler.bind(this), true);
            }
        }
    }

    // 提交数据功能
    _apiHandler(oParams) {
        let {params = oParams, onSuccess, onError, showLoading, ...others} = this.__filtered.api;
        if (!others.url) {
            return;
        }
        // 如果传入或者设置的params不是简单对象，则重置params
        if (!Utils.directInstanceof(params, [Object, Array])) {
            params = {};
        }
        let hideLoading;
        return this.__execAjax({
            ...others,
            params,
            success(data, res) {
                // 改变了onSuccess在__execAjax中的执行顺序，所以取出后不再传入给__execAjax
                let result = onSuccess && onSuccess(data, res);
                // onSuccess有返回值，则执行默认提示
                if (result === undefined || result === true) {
                    message.success('执行成功' + (
                        res.msg ? '：' + res.msg : (
                            Utils.typeof(res.data, 'number') ? '，影响 ' + res.data + ' 条数据' : '!'
                        )), 2);
                }
            },
            error(res) {
                let result = onError && onError(res);
                // onError有返回值，则执行默认提示
                if (result === undefined || result === true) {
                    message.error(res.msg ? res.msg : '执行失败!', 3);
                }
                return result || false;
            },
            onchange(status) {
                if (status) {
                    if (showLoading) {
                        hideLoading = message.loading('提交中，请等待~', 0);
                    }
                } else {
                    hideLoading && hideLoading();
                }
            }
        }, true);
    }

    // 替换 render 函数，给render加额外处理逻辑
    _injectRender() {
        let render = this.render;
        this.render = this._render.bind(this, render);
    }
    // 插入额外render处理逻辑
    _render(render) {
        // 如果设置了__showLoading，则在组件外额外追加一个loading组件
        if (this.state.__showLoading !== undefined) {
            let loadingConf = this.state.__showLoading;
            if (Utils.typeof(loadingConf, 'boolean')) {
                loadingConf = {spinning: loadingConf};
            }
            if (loadingConf.spinning === undefined) {
                loadingConf.spinning = true;
            }
            return <Spin {...loadingConf}>
                {render.call(this)}
            </Spin>;
        }
        // 隐藏组件，如果组件隐藏，则不再进行render
        //  TODO: 待观察，如果有问题，可以改为外出嵌套display:none的div实现
        //      return null 会导致组件销毁，不能保存组件操作状态
        // if (this.__filtered.hidden === true) {
        //     return null;
        // }
        if (this.__filtered.hidden === true) {
            // return null;
            this.__props.style = this.__props.style || {};
            this.__props.style.display = 'none';
        } else if (this.__filtered.hidden === false && this.__props.style) {
            delete this.__props.style.display;
        }
        return render.call(this);
    }

    // 函数替换 函数
    // 参数依次为 父级、目标函数、新函数、是否把原来逻辑提前
    _inject(parent, target, newFunc, oldAhead) {
        return Utils.inject(parent, target, newFunc, oldAhead, this);
    }

}