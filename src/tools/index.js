import React from 'react';
import ReactDOM from 'react-dom';
import uf from 'uf';
import {ajax} from 'uf/utils/ajax.js';
import {Cache, Ajax} from 'uf/utils';
import Factory from './factory.js';
import Loader from './loader.js';

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
    }
};

const UF = func.get;

Object.assign(UF, uf, func);

export default UF;