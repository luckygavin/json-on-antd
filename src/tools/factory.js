/**
 * @file 解析配置，生成页面
 *      主要负责调度各个解析工具，并生成组件
 * @author liuzechun
 */
import React, {Component, PureComponent} from 'react';
import {Utils} from 'src/utils';
import {Config} from 'src/cache';

import Loader from './loader.js';
import Adaptor from './adaptor.js';
import Authority from './authority.js';
import Validator from './validator.js';
import WhiteList from './whitelist.js';
// import Html from './html.js';
import requirejs from './requirejs';

export default class Factory extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        // 如果配置变化，清空保存的解析结果，重新解析
        if (!Utils.equals(this.props, nextProps)) {
            this._cacheContent = null;
        }
    }

    // 解析组件配置，生成组件
    generateItem(item) {
        // TODO:
        // 如果模块是一个函数，先执行函数得到返回的配置
        if (Utils.typeof(item, 'function')) {
            item = item();
            if (Utils.typeof(item, 'array')) {
                return this.generateElement(item);
            }
        }
        // TODO:
        // 如果是字符串直接返回
        if (!Utils.typeof(item, 'object')) {
            return item;
        }
        // 如果没有定义type，且有configTpl配置模板，则从模板中取出type
        if (!item.type && item.configTpl) {
            let tpl = Config.get(`components.${item.configTpl}`);
            if (tpl) {
                if (Utils.typeof(tpl, 'function')) {
                    tpl = tpl();
                }
                item.type = tpl.type;
            }
        }
        // 校验是否有 type 属性且
        // TODO:
        if (!Validator.check(item, 'type', 'string')) {
            return item;
        }
        // 校验权限，没权限的元素返回 null
        if (!Authority.check(item)) {
            return null;
        }

        // 如果是 html 类型，使用 html 模板解析器来解析，然后直接返回
        if (item.type === 'html') {
            // return new Html(item.content);
            // 直接使用InnerHTML，以节省性能
            // return <section className={'uf-html ' + (item.className || '')} style={item.style}
            //     dangerouslySetInnerHTML={{__html: item.content}}></section>;
            // 按照正常流程走
            item.type = 'section';
            item.className = 'uf-html ' + (item.className || '');
            item.dangerouslySetInnerHTML = {__html: item.content};
            delete item.content;
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

        return <Item {...props} />;
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
        if (Utils.typeof(config, 'string')) {
            return config;
        }
        let result;
        if (Utils.typeof(config, 'array')) {
            result = [];
            for (let item of config) {
                result.push(this.generateElement(item));
            }
        } else {
            result = this.generateItem(config);
        }
        return result;
    }

    // 有些属性可以是ReactNode，也就是也可以配置成一个组件，所以需要再次把这些属性解析为组件
    analysisAgain(props, type) {
        let list = WhiteList.get(props, type);
        if (list) {
            for (let v of list) {
                props[v] = this.generateElement(props[v]);
            }
        }
        return props;
    }

    // 获取模块配置。
    // 如果模块为异步模块，则做异步处理
    getConfig() {
        let config = this.state.config || this.props.config;
        if (Utils.typeof(config, 'string')) {
            requirejs([config], foo=>{
                // 删除缓存，保证配置刷新
                this._cacheContent = null;
                this.setState({config: foo});
            });
            let showLoading = Config.get('modules.showLoading');
            if (Utils.typeof(showLoading, 'array')) {
                // config 此时为模块名称
                showLoading = showLoading.indexOf(config) !== -1;
            }
            config = {
                type: 'loading',
                loading: !!showLoading
            };
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
