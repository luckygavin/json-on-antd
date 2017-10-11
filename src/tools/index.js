import React from 'react';
import ReactDOM from 'react-dom';
import uf from 'uf';
import {ajax} from 'uf/utils/ajax.js';
import {Cache, Ajax, Utils} from 'uf/utils';
import Factory from './factory.js';
import Loader from './loader.js';
import requirejs from './requirejs';

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
        let origin = Cache.get('_uf-config');
        let config = Utils.merge({}, origin, obj);
        Cache.set('_uf-config', config);
        // modules 属性里定义了 requirejs的配置项，具体参数详见：http://requirejs.org/docs/api.html#config
        if (config.modules) {
            requirejs.config(obj.modules);
        }
    }
};

const UF = func.get;

Object.assign(UF, uf, func);

export default UF;