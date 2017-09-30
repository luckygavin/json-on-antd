/**
 * @file 解析配置，生成页面
 *      主要负责调度各个解析工具，并生成组件
 * @author liuzechun
 */
import React, {Component} from 'react';
import {Utils} from 'uf/utils';

import Loader from './loader.js';
import Adaptor from './adaptor.js';
import Validator from './validator.js';
import Special from './special.js';
import WhiteList from './whitelist.js';
import Html from './html.js';

export default class Factory extends Component {

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

    // this.props.children为路由解析时子路由对应的组件，需要在父路由的有个地方作为children展示出来
    // 在组件配置中，childrenHolder属性指定把子页面放在哪个组件里展示
    handleChildren(props, hasChildrenHolder) {
        // 只有指定了childrenHolder这个属性才会展示
        if (hasChildrenHolder && this.props.children) {
            if (!props.children) {
                props.children = this.props.children;
            } else {
                // 组件通过路由组合嵌套处理
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
        return props;
    }

    render() {
        return <div>{this.generateElement()}</div>;
    }
}
