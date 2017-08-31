/**
 * @file 载入组件，供 Factory 获取
 *      根据配置的 type，转换成对应组件并返回
 * @author liuzechun@baidu.com
 */
import React from 'react';
import * as UF from 'uf';

export default {
    component: Object.assign(UF),
    
    // 添加组件
    add(components) {
        Object.assign(this.component, components);
    },

    // 根据 type 获取组件
    get(type) {
        // 包括 button.group、input-number
        // type 可能代表包括组件的子组件的复杂组件类型，如：button.group -> Antd.Button.Group
        // let name = type.split('.').map(v=>this.toPascal(v));
        // let result = this.component;
        // for (let v of name) {
        //     if (!result) {
        //         this.error(type);
        //     }
        //     result = result[v];
        // }
        // 目前用不到.这种层级关系了，全部组件平级的，包括像 Antd.Button 和 Antd.Button.Group 这种
        let name = this.toPascal(type);
        let result = this.component[name];
        if (!result) {
            // 检查是否为React原生元素
            if (React.DOM.hasOwnProperty(type)) {
                result = name;
            } else {
                this.error(type);
            }
        }
        return result;
    },

    // 把中横线命名的字符串转换成帕斯卡命名形式
    toPascal(str) {
        return str.split('-').map(i=>i.replace(/^\w/g, v=>v.toUpperCase())).join('');
    },

    // 打印错误信息
    error(item, type) {
        console.error(`Uncaught TypeError: type '${type}' is invalid.`);
    }
};
