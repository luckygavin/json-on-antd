/**
 * @file 解析配置，生成页面
 *      主要负责调度各个解析工具，并生成组件
 * @author liuzechun
 */
import React, {Component, PureComponent} from 'react';
import {Utils, Cache} from 'uf/utils';

import Loader from './loader.js';
import Adaptor from './adaptor.js';
import Validator from './validator.js';
import Special from './special.js';
import WhiteList from './whitelist.js';
import Html from './html.js';
import Config from './config.js';
import requirejs from './requirejs';

export default class Factory extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 解析组件配置，生成组件
    generateItem(item) {
        // 如果是字符串直接返回
        if (Utils.typeof(item, 'string')) {
            return item;
        }
        // 校验是否有 type 属性，如果没有会报错
        if (!Validator.check(item, 'type', 'string')) {
            return;
        }
        // 如果是 html 类型，使用 html 模板解析器来解析，然后直接返回
        // TODO: 把模板解析器也做成一个组件
        if (item.type === 'html') {
            return new Html(item.content);
        }

        // 某些特殊种类的组件对参数进行特殊处理
        // 这块逻辑之所以没写到相应组件类里，是因为某些参数需要在实例之间就要处理
        item = Special.if(item, this.props);

        // 从loader中获取到相应的组件
        let Item = Loader.get(item.type);
        if (!Item) {
            return;
        }
        // 通过适配器把参数转换成标准格式，剔除掉一些无用属性等
        let props = Adaptor.get(item);
        // 判断其他需要额外进一步解析的属性并进行解析
        props = this.analysisAgain(props, item);
        // 处理children属性
        props = this.handleChildren(props, item.childrenHolder);

        return <Item {...props} />;
    }

    // this.props.children为路由解析时子路由对应的组件，需要把子路由的组件在父组件的某个位置作为children展示出来
    // 在组件配置中，childrenHolder属性指定把子页面放在父组件的哪个位置
    handleChildren(props, hasChildrenHolder) {
        // 只有指定了childrenHolder这个属性才会展示
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
        config = config || this.props.config;
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
    analysisAgain(props, item) {
        let name = Utils.toPascal(item.type);
        let list = WhiteList[name];
        if (list) {
            for (let i in props) {
                if (list.indexOf(i) !== -1) {
                    props[i] = this.generateElement(props[i]);
                }
            }
        }
        // 如果存在item.content，则说明有子组件，所有组件的 content 属性都需要二次解析
        if (item.content) {
            // 组件本身会从 this.props.children 上获取子组件，所以直接把子组件放props上即可，无需再写双标签
            props.children = this.generateElement(item.content);
        }
        // 子组件为异步模块，用法简单，但是稳定性待观察，所以暂时不推荐这种用法
        // 推荐使用requirejs先把模块引入，然后直接使用引入的模块作为content的值
        if (item.asyncContent) {
            item.content = <Factory config={item.asyncContent}/>
        }
        return props;
    }

    // 获取模块配置。
    // 如果模块为异步模块，则做异步处理
    getConfig() {
        // TODO: 这里每次切换页面会重新解析；且会出现 Loading 状态
        // 路由没切换，组件会销毁？
        let config = this.state.config || this.props.config;
        if (Utils.typeof(config, 'string')) {
            requirejs([config], foo=>{
                // TODO: render执行两次的情况下，会进入两次这里，而第一次生成的组件没有渲染到页面上就销毁了，这里再使用setState会报错
                this.setState({config: foo});
            });
            let showLoading = Config.get('modules')['showLoading'];
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

    render() {
        return <div>{this.generateElement(this.getConfig())}</div>;
    }
}
