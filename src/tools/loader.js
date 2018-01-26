/**
 * @file 载入组件，供 Factory 获取
 *      根据配置的 type，转换成对应组件并返回
 * @author liuzechun@baidu.com
 */
import React from 'react';
import {BaseConf} from 'uf/component';
import {Utils} from 'uf/utils';
import Model from './model.js';
import Dom from 'uf/dom';
import * as UF from 'uf';

let {FilterProps} = BaseConf;

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
        let result = this.component[name];
        if (!result) {
            // 检查是否为React原生元素
            if (React.DOM.hasOwnProperty(type)) {
                // 1、如果有name，说明用户想要操作组件；
                // 2、如果使用了数据绑定：使用Dom组件进行封装，实现组件缓存和刷新
                // 3、如果配置了具有特殊功能的属性
                // 否则用原生的增强性能
                if (item.name || Model.if(item) || Utils.isIntersection(FilterProps, Object.keys(item))) {
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

    // 打印错误信息
    error(type) {
        console.error(`Uncaught TypeError: type '${type}' is invalid.`);
    }
};
