/**
 * @file 解析配置，生成页面
 *      主要负责调度各个解析工具，并生成组件
 * @author liuzechun
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';
import Antd from 'uf/antd/base/Antd.js';
import {Utils, Cache} from 'uf/utils';

import Loader from './loader.js';
import Adaptor from './adaptor.js';
import Validator from './validator.js';
import Layout from './layout.js';
import WhiteList from './whitelist.js';
import Html from './html.js';

// 不属于config的参数，适配用户配置的参数时使用
const KeyWord = ['name', 'type', 'content'];

class Factory extends Component {
    constructor(props) {
        super(props);
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
        // todo
        if (item.type === 'html') {
            return new Html(item.content);
        }

        // 如果是布局相关类型，则经过layout处理器处理
        item = Layout.if(item);
        // 从loader中获取到相应的组件
        let Item = Loader.get(item.type);
        if (!Item) {
            return;
        }
        // 通过适配器把参数转换成标准格式，剔除掉一下无用属性等
        let props = Adaptor.get(item);
        // 判断其他需要额外进一步解析的属性并进行解析
        props = this.analysisAgain(props, item);
        return <Item {...props} />;
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

export default Factory;