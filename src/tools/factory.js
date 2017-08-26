/**
 * @file 解析配置，生成一个组件
 * @author liuzechun
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';
import Antd from 'uf/antd/components/Antd.js';
import {Utils, Cache} from 'uf/utils';

import Loader from './loader.js';
import Adaptor from './adaptor.js';
import Validator from './validator.js';

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
        if (!item.name) {
            item.name = Utils.uniqueId();
        }

        let Item = Loader.get(item.type);
        let props = Adaptor.get(item);
        let children;
        // 如果存在item.content，则说明有子组件
        if (item.content) {
            if (item.content instanceof Object) {
                children = this.generateElement(item.content);
            } else {
                children = item.content;
            }
        }
        return <Item {...props} key={item.name}>{children}</Item>;
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