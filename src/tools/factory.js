/**
 * @file 解析配置，生成页面
 *      主要负责调度各个解析工具，并生成组件
 * @author liuzechun
 */
import React, {Component, PureComponent} from 'react';
import {Utils} from 'src/utils';
import {message} from 'src/antd/message.js';

import Loader from './loader.js';
import Adaptor from './adaptor.js';
import Authority from './authority.js';
import Validator from './validator.js';
import WhiteList from 'src/config/whitelist';

import {getAjax, getComponentsCache, getConfig, getRequirejs} from 'src/tools/instance.js';

// 所有使用Factory的地方，都需要传入一个insName属性
// Factory根据insName获取各个工具实例
export default class Factory extends PureComponent {
    constructor(props) {
        super(props);
        // 应用名称
        this.insName = props.insName || '_$default';
        // ajax 实例
        this.$ajax = getAjax(this.insName);
        // cache实例
        this.$config = getConfig(this.insName);
        this.$components = getComponentsCache(this.insName);
        this.$requirejs = getRequirejs(this.insName);
        // 其他自定义需绑定实例的工具
        this.$message = message.init(this.insName);

        this.state = {};
        // 解析结果缓存
        this.__cache = {};
    }

    componentWillReceiveProps(nextProps) {
        // 如果配置变化，清空保存的解析结果，重新解析
        if (!Utils.equals(this.props, nextProps)) {
            this._cacheContent = null;
        }
    }

    // 解析组件配置，生成组件
    generateItem(item) {
        // 如果模块是一个函数，先执行函数得到返回的配置
        if (Utils.typeof(item, 'function')) {
            // 如果组件想要获取到路由等信息，则可以返回一个函数，函数的参数即为路由相关信息
            let {params, location, route, routes} = this.props;
            // 第一个参数为路由携带的参数，第二个参数为其余路由信息
            item = item(params, {params, location, route, routes});
            if (Utils.typeof(item, 'array')) {
                return this.generateElement(item);
            }
        }
        // 如果不是对象或不是配置对象 直接返回
        if (!Utils.typeof(item, 'object') || Object.isFrozen(item)) {
            return item;
        }
        // 检验是否有缓存
        // let key = Utils.hash(item);
        // if (this.__cache[key]) {
        //     let {Item, props} = this.__cache[key];
        //     return <Item {...props} />;
        // }

        // 校验对象是否有 type 属性，如果没有直接跳过解析
        if (!Validator.check(item, 'type', 'string')) {
            return null;
        }
        // 临时存储的变量，供各个tools使用
        item.insName = this.insName;
        // 整合组件的全部配置（包括通用配置，自定义组件配置等）
        item = this.getConf(item);

        // 校验权限，没权限的元素返回 null
        if (!Authority.check(item)) {
            // authorityPlaceholder 定义没权限时展示的内容
            if (item.authorityPlaceholder) {
                return this.generateElement(item.authorityPlaceholder);
            }
            return null;
        }

        // 从loader中获取到相应的组件
        let Item = Loader.get(item);
        if (!Item) {
            return;
        }

        // 把 factory 的 this 传给每个组件方便组件内部进行配置解析和使用外部的props等
        item._factory = this;

        let props = this.handleProps(item);

        // Update at 2018-03-13 17:02:46. 使用完后，要把在原配置中增加的多余的属性删除掉
        delete item._factory;
        
        // 有bug，路由切换了，页面无法刷新
        // this.__cache[key] = {Item, props};

        return <Item {...props} />;
    }
    // 获取完整的组件配置
    getConf(item) {
        return Loader.getConf(item, this.insName);
    }
    getComp(item) {
        return Loader.get(item);
    }

    // 处理用户配置的参数，并生成组件需要使用的 props
    handleProps(item) {
        // 通过适配器把参数转换成标准格式，剔除掉一些无用属性等
        let props = Adaptor.get(item);
        // 判断其他需要额外进一步解析的属性并进行解析
        props = this.analysisAgain(props, item.type);
        // 处理children属性
        props = this.handleChildren(props, item.childrenHolder);
        return props;
    }
    // 在组件配置中，childrenHolder属性指定把子页面放在父组件的哪个位置
    handleChildren(props, hasChildrenHolder) {
        // 此处把通过路由传入的子组件放在当前配置树的定义了 childrenHolder 的节点下作为组件的子组件
        // this.props.children 是通过路由传入的子组件
        if (hasChildrenHolder && this.props.children) {
            if (!props.children) {
                props.children = this.props.children;
            } else {
                // 已经存在children的情况下，把children合并。兼容处理
                !Utils.typeof(props.children, 'array') && (props.children = [props.children]);
                props.children.push(this.props.children);
            }
        }
        return props;
    }

    // 拆分多个config，分离成组件的配置
    generateElement(config) {
        // 如果是字符串直接返回
        if (Utils.typeof(config, ['string', 'number'])) {
            return config;
        }
        let result;
        if (Utils.typeof(config, 'array')) {
            // 如果是数组，则检查数组项中每一项是否有key，如果没有则尝试添加
            Adaptor.checkArrayItems(config);
            result = [];
            for (let item of config) {
                result.push(this.generateElement(item));
            }
        } else {
            result = this.generateItem(config);
        }
        return result;
    }

    // 
    // 有些属性可以是ReactNode，也就是也可以配置成一个组件，所以需要再次把这些属性解析为组件
    analysisAgain(props, type) {
        let list = WhiteList.get(props, type);
        for (let v of list) {
            props[v] = this.generateElement(props[v]);
        }
        return props;
    }

    // 获取模块配置。
    // 如果模块为异步模块，则做异步处理
    getConfig() {
        let config = this.props.config;
        if (Utils.typeof(config, 'string')) {
            let path = this.props.config;
            // 先检查缓存配置中是否已存在，如果不存在再重新获取
            config = this.state[path];
            if (!config) {
                this.$requirejs([path], foo=>{
                    // 删除缓存，保证配置刷新
                    this._cacheContent = null;
                    // 缓存获取回来的配置
                    this.setState({[path]: foo});
                });
                let showLoading = this.$config.get('modules.showLoading');
                if (Utils.typeof(showLoading, 'array')) {
                    // config 此时为模块名称
                    showLoading = showLoading.indexOf(config) !== -1;
                }
                config = {
                    type: 'loading',
                    loading: !!showLoading
                };
            }
        }
        return config;
    }
    getContent() {
        this._cacheContent = this._cacheContent || this.generateElement(this.getConfig())
        return this._cacheContent;
    }

    render() {
        // 如果是配置是数组则需要在外层增加一个div标签，非数组的情况下可以把多余的div去掉
        let result = this.getContent();
        return Utils.typeof(result, 'array') ? <div>{result}</div> : result;
    }
}
