import React from 'react';
import ReactDOM from 'react-dom';
import uf from 'uf';
import {ajax} from 'uf/utils/ajax.js';
import {Cache, Ajax, Utils} from 'uf/utils';
import Factory from './factory.js';
import Loader from './loader.js';
import Config from './config.js';
import Whitelist from './whitelist.js';
import requirejs from './requirejs';

// 这里设置一下，domain才能同域，否则即使在同一个域名下的iframe也会有跨域问题。这一行一定不能删！
// 本地访问的时候，domain为''，不能给domain赋值''
!!document.domain && (document.domain = document.domain);

const func = {
    // 根据组件配置 创建组件类
    create(config) {

    },
    // 根据组件配置 生成&渲染组件实例
    init(config, selector) {
        let result = <Factory config={config} />;
        // 如果没有指定目标容器的id，则直接返回生成的组件实例
        if (!selector) {
            return result;
        }
        return ReactDOM.render(
            <Factory config={config} />,
            document.getElementById(selector));
    },
    // 获取组件
    get(name) {
        return Cache.get('cache-' + name);
    },
    // ajax请求
    ajax(obj) {
        ajax(obj);
    },
    // 载入自定义组件
    load(components) {
        Loader.add(components);
    },
    // 整体配置
    config(obj) {
        let config = Config.set(obj);;
        // modules 属性里定义了 requirejs的配置项，具体参数详见：http://requirejs.org/docs/api.html#config
        requirejs.config(config.modules);
        // 设置默认域，解决跨域问题
        !!document.domain && (document.domain = config.global['domain']);
    }
};

const UF = func.get;

Object.assign(UF, uf, func);

export default UF;

export {Config, Factory, Loader, Whitelist, requirejs};
