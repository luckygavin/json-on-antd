import React from 'react';
import ReactDOM from 'react-dom';
import {message, notification} from 'uf';
import {ajax} from 'uf/utils/ajax.js';
import {Cache, Ajax} from 'uf/utils';
import Factory from './factory.js';
import Loader from './loader.js';

const func = {
    // 生成组件
    init(config, selector) {
        let result = <Factory config={config} />;
        // 如果没有指定目标容器的id，则直接返回生成的组件
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
    // 全局提示信息
    message,
    notification,
    // ajax请求
    ajax(obj) {
        ajax(obj);
    },
    // 载入自定义组件
    load(components) {
        Loader.add(components);
    }
};

const Uf = func.get;

Object.assign(Uf, func);

export default Uf;