import React from 'react';
import ReactDOM from 'react-dom';
import uf from 'src';
import underscore from 'underscore';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {Utils, Ajax} from 'src/utils';
import {Config, ComponentsCache, ModelCache} from 'src/cache';
import Adaptor from './adaptor.js';
import Authority from './authority.js';
import Factory from './factory.js';
import Loader from './loader.js';
import WhiteList from './whitelist.js';
import Model from './model.js';
import Precondition from './precondition.js';
import requirejs from './requirejs';

// 设置 moment 的 locale
moment.locale('zh-cn');

// 这里设置一下，domain才能同域，否则即使在同一个域名下的iframe也会有跨域问题。这一行一定不能删！
// 本地访问的时候，domain为''，不能给domain赋值''
!!document.domain && (document.domain = document.domain);

const func = {
    /*******************************************************/
    /******** 私有属性/方法 *********************************/
    /*****************************************************/

    // 是否阻塞
    waiting: false,
    waitingCache: {},
    // 异步逻辑执行完成后，重新执行init函数
    _reInit() {
        this.waiting = false;
        let config = this.waitingCache.config;
        let selector = this.waitingCache.selector;
        this.waitingCache = {};
        this.render(config, selector);
    },
    // 获取组件
    _get(name, key) {
        let cp = ComponentsCache.get(name);
        if (key && cp) {
            return cp.get(key);
        }
        return cp;
    },
    // 根据选择器获取目标元素
    _getTarget(selector) {
        if (Utils.typeof(selector, 'string')) {
            let result = document.querySelector(selector);
            if (!result) {
                console.error('Error: The specified element is not found.');
            }
            return result;
        // 如果传入的是dom元素，直接返回
        } else if (selector instanceof Element) {
            return selector;
        } else {
            return null;
        }
    },
    // 向selector中插入新的组件
    _append(config, selector, destoryHandler = null) {
        let div = document.createElement('div');
        let target = document.body;
        if (selector) {
            target = this._getTarget(selector) || target;
        }
        target.appendChild(div);
        function destory () {
            var unmountResult = ReactDOM.unmountComponentAtNode(div);
            if (unmountResult && div.parentNode) {
                div.parentNode.removeChild(div);
            }
        }
        // 给config增加destory逻辑
        if (destoryHandler) {
            let origin = config[destoryHandler];
            config[destoryHandler] = !!origin
                ? (...params) => {
                    origin(...params);
                    destory();
                }
                : destory;
        }
        this.render(config, div);
        return {
            element: div,
            destory: destory
        };
    },

    /*******************************************************/
    /******** 公共属性/方法 *********************************/
    /*****************************************************/

    // ajax请求。包含 ajax(), ajax.get(), ajax.post()
    ajax: Ajax,
    // 暴露全部工具类
    utils: Utils,
    // moment 暴露全部功能
    moment: moment,
    // underscore工具函数
    _: underscore,
    // model 数据绑定页面
    model: Model,
    get: Model.get,
    set: Model.set,
    // 获取当前页面路由信息
    getRouter: uf.Router.getRouter,
    // 根据组件配置 生成&渲染组件实例
    init(config, selector) {
        if (!this.waiting) {
            this.render(config, selector);
        } else {
            this.waitingCache = {config, selector};
        }
    },
    // 根据组件配置 生成&渲染组件实例
    render(config, selector) {
        let result = <Factory config={config} />;
        // 如果没有指定目标容器的id，则直接返回生成的组件实例
        if (!selector || !this._getTarget(selector)) {
            return result;
        }
        return ReactDOM.render(
            <Factory config={config} />,
            this._getTarget(selector));
    },
    // 向selector中插入新的组件
    append(config, selector) {
        return this._append(config, selector);
    },
    // 载入自定义组件
    load(components) {
        Loader.add(components);
    },
    // 整体配置
    config(obj) {
        let config = Config.set(Utils.filter(obj, 'data'));
        // 用户自定义 UF 别名
        if (config.alias) {
            window[config.alias] = window.UF;
        }
        // 如果设置了app名称，则传递给模块以给每个module加域
        if (config.appName) {
            // 产生一份新的uf置于域中
            window._ufRegion = Object.assign({}, window._ufRegion, {
                [config.appName]: window.UF
            });
            // 传递给模块以给每个module加域
            if (config.modules) {
                config.modules.ufRegion = config.appName;
            }
        }
        // modules 属性里定义了 requirejs的配置项，具体参数详见：http://requirejs.org/docs/api.html#config
        requirejs.config(config.modules);
        // 设置默认域，解决跨域问题
        !!document.domain && (document.domain = config.global['domain']);
        // 设置默认公用数据，存入 model 中
        if (obj.data) {
            ModelCache.setData(null, obj.data);
        }
        // 执行阻塞页面加载的函数
        if (obj.precondition) {
            if (Utils.typeof(obj.precondition, 'array') && obj.precondition.length > 0) {
                this.waiting = true;
                Precondition.handle(obj.precondition, this);
            }
        }
    }
};

const UF = func._get;

Object.assign(UF, uf, func);

export default UF;
// 获取到window上的_catch，即用户事先用到的UF方法，在此进行执行
let catchArr = window._catch;
if (Utils.typeof(catchArr, 'array') && catchArr.length > 0) {
    for (let i in catchArr) {
        let funcName = catchArr[i].func;
        let params = catchArr[i].params;
        UF[funcName](...params);
    }
}
export {Factory, Loader, WhiteList, Model, Adaptor, Authority, requirejs};

