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
    afterCreate: 'componentDidMount',
    beforeRender: 'componentWillMount,componentWillUpdate',
    afterRender: 'componentDidMount,componentDidUpdate',
    beforeDestroy: 'componentWillUnmount'
};

// 不复杂的属性，即无需merge处理直接覆盖的属性
export const Uncomplex = ['params', 'sourceParams', 'data', 'options'];

// // 转化为__props时需过滤的属性 - 用户配置的特殊功能的属性
export const FilterProps = Object.keys(ForUserApi).concat(PreventCoverageMap, [
    // 复用配置模板。
    'configTpl',
    // source 系列函数
    'source', 'sourceHandler', 'sourceTarget',
    'sourceMethod', 'sourceParams', 'sourceAutoLoad', 'sourceSuccess',
    // 组件额外动作及组件关联相关属性
    'actionType', 'actionTrigger', 'actionTarget', 'actionParams',
    // 提交/发送数据系列参数
    'api', 'method', 'paramsHandler',
]);

// 因为组件很少使用 props 和 state，某些时候需要组件刷新的。例如面包屑组件
export default class BaseComponent extends Component {
// export default class BaseComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.type = this.props.__type;
        this.key = this.props.__key;
        // 组件缓存的key。有值的话组件才会缓存，如果值为null，则不会做缓存
        this.cacheName = this._getTransmitName();
        // _factory 是最初 Factory 的 this
        this._factory = this.props._factory;
        // 如果用户自己配置了 sourceTarget 属性，则按照用户定义的赋值
        this._asyncAttr = 'children';
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
        // 从缓存中读出组件的默认参数。参数来源可以是在 config.js 里配置；也可以是用户通过调用 UF.config() 配置
        // （如 loading 组件的 delay 参数在 config.js 中定义为 150）
        // 开发组件的时候，也可以在this.__props上增加一些默认的参数（注意不要直接用对象覆盖）
        this.__props = Config.get(`components.${this.props.__type}`) || {};
        // 复用配置模板。
        this.__props = this.__getConfigTpl(this.props, this.__props);
        // 更新前的__props
        this.__prevProps = {};
        // 用于存放被过滤掉的props上的属性，使用户重新set也可以生效（如果直接在props上取的话，set不会触发props更新，被过滤掉的属性就无法再更新了）
        this.__filtered = {};
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
        // 以下几个函数执行顺序固定，请慎重调整！！
        // 把父类中设置的需注入到生命周期中的逻辑注入到对应生命周期函数中
        this._injectFunction();
        // 共享组件
        this._transmitComponent();
        // 后面传入组件的参数用 __props 代替 props
        this._initProps();
        // 处理数据绑定页面
        this._handleModel();
        // 把__props上的全部回调函数的最后增加一个参数设置为组件本身，方便使用
        // this._updateCallback();
        // 挂载用户传入的需要关联到生命周期中的函数（这个把生命周期的函数做个一个转换，更加语义化）
        this._loadUserFunction();
        // 把开发时定义的需注入到组件事件中的逻辑注入到对应的事件函数中（防止被覆盖）
        this._injectEventFunction();
        // 组件额外动作处理：actionType、actionTrigger、actionTarget、actionParams
        this._handleActionType();
        // 开放给用户使用的 Api，需处理下
        this._handleOpenApi();
    }

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
    // 也可以传入待刷新完成后执行自己想要执行的逻辑（比如Modal，需弹框显示后才能执行其他操作）
    // 默认会刷新组件；也可以把第二个参数设为 false 阻止刷新
    __setProps(nextProps, follow) {
        // 去除掉多余的属性（解决报warning问题）
        let __props = this._filterHandler(nextProps);
        // 直接更新 this.__props 即可，
        // this.__mergeProps(this.__props, nextProps);
        this.__prevProps = this.__props;
        this.__props =  this.__mergeProps({}, this.__props, __props);

        if (follow !== false) {
            this.forceUpdate();
            // 延迟执行
            // TODO:
            setTimeout(follow, 10);
        }
    }


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

    // ajax的get方法
    __getData(...params) {
        Ajax.get(...params);
    }

    // ajax的post方法
    __postData(...params) {
        Ajax.post(...params);
    }

    // ajax通用方法
    __ajax(params) {
        Ajax(params);
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
        } else {
            if (result !== false) {
                success && success();
            } else {
                error && error();
            }
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
            let reGetData = nextProps.sourceParams && !Utils.equals(
                nextProps.sourceParams,
                this.__filtered.sourceParams
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
        this._transmitComponent();
        // 如果设置了自动获取异步数据，则执行逻辑
        if (this.__filtered.sourceAutoLoad === undefined || this.__filtered.sourceAutoLoad) {
            this._handleAsyncData();
        }
    }

    // componentWillUnmount 中注入的处理逻辑
    // 最外层的子类实例化的时候会调用 _injectFunction 函数，把函数注入到子类示例的 componentWillUnmount 中
    _componentWillUnmount() {
        this._unsetTransmitComponent();
    }

    // 自动异步获取数据
    _handleAsyncData() {
        if (this.__filtered.source) {
            this.__ajax({
                url: this.__filtered.source,
                method: this.__filtered.sourceMethod || 'get',
                data: this.__filtered.sourceParams,
                success: (data, res)=>{
                    // 如果用户定义了数据处理函数，先对数据进行处理
                    if (this.__filtered.sourceHandler) {
                        data = this.__filtered.sourceHandler(data, res, this);
                    }
                    // 如果用户自己配置了 sourceTarget 属性，则按照用户定义的赋值
                    let target = this.__filtered.sourceTarget || this._asyncAttr;
                    target = target === 'content' ? 'children' : target;
                    this.__setProps({[target]: data});
                    // 成功后的额外操作
                    this._sourceSuccess && this._sourceSuccess(data);
                }
            });
        }
    }

    // 过滤 props，生成 __props 和 __filtered
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
        // 如果没有key，则根据是否关联model数据判断
        if (!key) {
            if (Model.if(this.props)) {
                key = this.props.__key;
            }
        }
        return key;
    }

    // 共享组件
    _transmitComponent() {
        if (!!this.cacheName) {
            ComponentsCache.set(this.cacheName, this);
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

    // 更新配置中的回调函数，给回调函数的最后增加一个参数为组件本身，方便使用
    // 有些函数参数不定，容易造成问题，且应用场景不多
    // _updateCallback(props) {
    //     !props && (props = this.__props);
    //     for (let i in props) {
    //         let item = props[i];
    //         // 不是冻结对象，且不是类
    //         if (item && !Object.isFrozen(item) && !Utils.isExtendsOf(item, React.Component)) {
    //             if (Utils.typeof(item, 'function')) {
    //                 props[i] = (...params) => {
    //                     return item.call(this, ...params, this);
    //                 }
    //             } else if ((Utils.typeof(item, 'object') && Utils.directInstanceof(item, Object))
    //                 || Utils.typeof(item, 'array')) {
    //                     this._updateCallback(item);
    //             }
    //         }
    //     }
    // }

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

    // 组件额外动作处理：actionType
    _handleActionType() {
        if (this.__filtered['actionType']) {
            let {actionType, actionTrigger = 'onClick', actionTarget, actionParams = []} = this.__filtered;
            // actionTarget可以为一个函数，函数的参数为actionTrigger的参数列表
            // 函数返回一个actionTarget的字符串
            let actionTargetStr = actionTarget;
            if (Utils.typeof(actionTarget, 'function')) {
                actionTargetStr = actionTarget(...params);
            }
            switch (actionType) {
                // 动作类型为链接跳转
                case 'link':
                    Utils.goto(actionTargetStr);
                    break;
                // 动作类型为：调用
                case 'call':
                    this._inject(this.__props, actionTrigger, ()=>{
                        let [targetName, ...targetFunction] = actionTargetStr.split('.');
                        let target = this.__getComponent(targetName);
                        if (target) {
                            let func = target;
                            for (let v of targetFunction) {
                                func[v] && (func = func[v]);
                            }
                            func(...actionParams);
                        }
                    }, true);
                    break;
                // 提交数据
                case 'ajax':
                    this._inject(this.__props, actionTrigger, this._handleApiProps, true);
                    break;
                default:
                    break;
            }
        }
    }

    // 提交数据功能
    _handleApiProps() {
        let {api, method = 'post', actionParams, paramsHandler} = this.__filtered;
        if (api) {
            let params = actionParams;
            paramsHandler && (params = paramsHandler(params));
            return new Promise((resolve, reject)=>{
                this.__ajax({
                    url: api,
                    method: method,
                    params: params,
                    success(data, res) {
                        let result = res.msg;
                        message.success('执行成功，结果返回: ' + result, 2.5);
                        resolve();
                    },
                    error(res) {
                        let result = res.msg;
                        message.error('执行失败，结果返回: ' + result, 4);
                        reject();
                    }
                });
            });
        }
    }

    // 函数替换 函数
    // 参数依次为 父级 、 目标函数 、 新函数 、 是否把原来逻辑提前
    _inject(parent, target, newFunc, oldAhead) {
        let origin = parent[target];
        parent[target] = !!origin
            ? (...params) => {
                // return原函数执行结果
                let result;
                oldAhead ? (result = origin.call(this, ...params)) : null;
                newFunc.call(this, ...params);
                oldAhead ? null : (result = origin.call(this, ...params));
                return result;
            }
            : newFunc.bind(this);
        return parent;
    }

}