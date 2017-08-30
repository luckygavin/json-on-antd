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

// 不属于config的参数，适配用户配置的参数时使用
const KeyWord = ['name', 'type', 'content'];

class Factory extends Component {
    constructor(props) {
        super(props);
    }

    // 解析组件配置，生成组件
    generateItem(item) {
        // 校验是否有 type 属性
        Validator.check(item, 'type');
        // if (!item.name) {
        //     item.name = Utils.uniqueId();
        // }
        // 如果是布局相关类型，则经过layout处理器处理
        item = Layout.if(item);
        // 从loader中获取到相应的组件
        let Item = Loader.get(item.type);
        // 通过适配器把参数转换成标准格式，uf组件和antd组件做了区分
        let props = Adaptor.get(item);
        // 如果存在item.content，则说明有子组件
        if (item.content) {
            // 组件本身会从 this.props.children 上获取子组件，所以直接把子组件放props上即可，无需再写双标签
            props.children = this.generateElement(item.content);
        }
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
    render() {
        return <div>{this.generateElement()}</div>;
    }
}

export default Factory;