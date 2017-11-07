import React from 'react';
import ReactDOM from 'react-dom';
import uf from 'uf';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {Utils, Ajax} from 'uf/utils';
import {Config, ComponentsCache, ModelCache} from 'uf/cache';
import Adaptor from './adaptor.js';
import Factory from './factory.js';
import Loader from './loader.js';
import WhiteList from './whitelist.js';
import Model from './model.js';
import requirejs from './requirejs';

// 设置 moment 的 locale
moment.locale('zh-cn');

// 这里设置一下，domain才能同域，否则即使在同一个域名下的iframe也会有跨域问题。这一行一定不能删！
// 本地访问的时候，domain为''，不能给domain赋值''
!!document.domain && (document.domain = document.domain);

const func = {
    // ajax请求。包含 ajax(), ajax.get(), ajax.post()
    ajax: Ajax,
    // 暴露全部工具类
    utils: Utils,
    // moment 暴露全部功能
    moment: moment,
    // model 数据绑定页面
    model: Model,
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
    get(name, key) {
        let cp = ComponentsCache.get(name);
        if (key && cp) {
            return cp.get(key);
        }
        return cp;
    },
    // 载入自定义组件
    load(components) {
        Loader.add(components);
    },
    // 整体配置
    config(obj) {
        let config = Config.set(Utils.filter(obj, 'data'));
        // modules 属性里定义了 requirejs的配置项，具体参数详见：http://requirejs.org/docs/api.html#config
        requirejs.config(config.modules);
        // 设置默认域，解决跨域问题
        !!document.domain && (document.domain = config.global['domain']);
        // 设置默认公用数据，存入 model 中
        if (obj.data) {
            ModelCache.setData(null, obj.data);
        }
    }
};

const UF = func.get;

Object.assign(UF, uf, func);

export default UF;

export {Factory, Loader, WhiteList, Model, Adaptor, requirejs};
