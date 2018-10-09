/**
 * @file 载入组件，供 Factory 获取
 *      根据配置的 type，转换成对应组件并返回
 * @author liuzechun@baidu.com
 */
import React from 'react';
import {BaseConf} from 'src/base';
import {Utils} from 'src/utils';
import {Dom} from 'src/dom';
import * as UF from 'src/lib.js';

import {getConfig} from './instance.js';

export default {
    component: Object.assign(UF),

    // 添加组件
    add(components) {
        Object.assign(this.component, components);
    },

    // 根据 type 获取组件
    get(item) {
        let type = item.type;
        let name = Utils.toPascal(type);
        // 如果按照name查找不到则尝试使用转换前的type进行匹配（plugins加载过来的组件）
        let result = this.component[name] || this.component[type];
        if (!result) {
            // 通过使用 o-table 来强制使用原生标签
            if (type.indexOf('o-') === 0) {
                type = type.substr(2);
            }
            // 检查是否为React原生元素
            if (React.DOM.hasOwnProperty(type)) {
                // 如果是Uf组件，则使用Dom组件，否则用原生的增强性能
                if (this.isUfComponent(item)) {
                    result = Dom;
                } else {
                    result = type;
                }
            } else {
                this.error(type);
            }
        }
        return result;
    },

    // 获取完整的组件配置
    // 1、普通组件本身配置了默认属性，此处进行属性合并
    // 2、组件的type可能为一个自定义组件，这里将其转化为普通可用的组件
    getConf(item, insName = item.insName) {
        // undefined/null/''等都能兼容处理
        item = item || {};
        let oType = item.type;
        let conf = getConfig(insName).get(`components.${oType}`);
        if (conf) {
            if (Utils.typeof(conf, 'function')) {
                conf = conf(item.params);
            }
            item = Utils.merge({}, conf, item, {type: conf.type || oType});
        }
        // 如果type进行了变换，则再次进行配置获取
        if (oType !== item.type) {
            item = this.getConf(item, insName);
        }
        return item;
    },

    // 是否是UF组件
    // 1、如果有name，说明用户想要操作组件；
    // 2、如果使用了数据绑定：使用Dom组件进行封装，实现组件缓存和刷新
    // 3、如果配置了具有特殊功能的属性
    isUfComponent(item) {
        // return item.name || Model.if(item) || Utils.isIntersection(BaseConf.FilterProps, Object.keys(item));
        return item.name || Utils.isIntersection(BaseConf.FilterProps, Object.keys(item));
    },

    // 打印错误信息
    error(type) {
        console.error(`Uncaught TypeError: type '${type}' is invalid.`);
    }
};
