import React from 'react';
import ReactDOM from 'react-dom';
import {message, notification} from 'uf';
import {Cache} from 'uf/utils';
import Factory from './factory.js';

const func = {
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
    get(name) {
        return Cache.get('cache-' + name);
    },
    message,
    notification
};

const Uf = func.get;

Object.assign(Uf, func);

export default Uf;