import React from 'react';
import ReactDOM from 'react-dom';
import env from './env.js';
import uf from './lib.js';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {Utils} from 'src/utils';
import Cache from 'src/cache';

import Factory from 'src/tools/factory.js';
import Loader from 'src/tools/loader.js';
import WhiteList from 'src/tools/whitelist.js';
// import Model from 'src/tools/model.js';
// import Precondition from 'src/tools/precondition.js';

import Tools from 'src/tools/init.js';
import {setInstance, getInstance, setAjax, getAll} from 'src/tools/instance.js';

// 设置 moment 的 locale
moment.locale('zh-cn');

// 这里设置一下，domain才能同域，否则即使在同一个域名下的iframe也会有跨域问题。这一行一定不能删！
// 本地访问的时候，domain为''，不能给domain赋值''
!!document.domain && (document.domain = document.domain);

// 生成UF实例
const create = ({name})=>{

    // 初始化缓存空间
    const {Config, ModelCache, ComponentsCache} = Cache.init(name);
    // 初始化其他工具实例，如ajax
    const {Ajax, Requirejs, Precondition} = Tools.init(name);

    // UF实例上的工具函数
    const func = {
        /*******************************************************/
        /******** 私有属性/方法 *********************************/
        /*****************************************************/
        insName: name,
        // 是否阻塞
        waiting: false,
        // waitingCache: {},
        // 异步逻辑执行完成后，重新执行init函数
        _reInit() {
            this.waiting = false;
            // let {config, selector} = this.waitingCache;
            // this.waitingCache = {};
            let {config, selector} = ModelCache.get('_$waitingCache');
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
                    console.error('Error: The specified element `' + selector + '` is not found.');
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

        require: Requirejs,
        // ajax请求。包含 ajax(), ajax.get(), ajax.post()
        ajax: Ajax,
        // 暴露全部工具类
        utils: Utils,
        // moment 暴露全部功能
        moment: moment,
        // underscore工具函数
        _: Utils._,
        // model 数据绑定页面
        // model: Model,
        // 全局数据
        get: ModelCache.get.bind(ModelCache),
        set: ModelCache.set.bind(ModelCache),
        // 获取当前页面路由信息
        getRouter: uf.Router.getRouter,
        // 根据组件配置 生成&渲染组件实例
        init(config, selector) {
            if (!this.waiting) {
                this.render(config, selector);
            } else {
                // this.waitingCache = {config, selector};
                ModelCache.set('_$waitingCache', {config, selector});
            }
        },
        // 根据组件配置 生成&渲染组件实例
        render(config, selector) {
            let result = <Factory config={config} insName={this.insName}/>;
            // 如果没有指定目标容器的id，则直接返回生成的组件实例
            if (!selector || !this._getTarget(selector)) {
                return result;
            }
            return ReactDOM.render(result, this._getTarget(selector));
        },
        // 向selector中插入新的组件
        append(config, selector) {
            return this._append(config, selector);
        },
        // 载入自定义组件
        load(components) {
            Loader.add(components);
        },
        // components 配置处理，components有两种情况
        //  1、直接为一个对象，即一系列配置对象列表
        //  2、还有一种为一个数组，数组中每一项即可以为1中的配置对象列表，又可以为一个url（异步加载其余地方的公用配置）
        _handleComponentsConf(conf) {
            let componentsLoader = [];
            if (conf.components && Utils.typeof(conf.components, 'array')) {
                // 为字符串的项为异步加载配置的url，需追加到precondition里处理
                // 剩余的为真正的配置
                let componentsConf = {};
                conf.components.forEach(item=>{
                    if (Utils.typeof(item, 'string')) {
                        componentsLoader.push(item);
                    } else {
                        Object.assign(componentsConf, item);
                    }
                });
                conf.components = componentsConf;
            }
            // 如果有异步components，将加载逻辑加入到precondition中
            if (!Utils.empty(componentsLoader)) {
                conf.precondition = (conf.precondition || []).concat(
                    componentsLoader.map(path => {
                        return resovle => {
                            Requirejs([path], foo=>{
                                foo && this.config({components: foo});
                                resovle();
                            });
                        };
                    })
                );
            }
            return conf;
        },
        // plugins 配置处理，将异步加载逻辑加入到precondition中
        _handlePluginsConf(conf) {
            // 加载扩展组件。格式为[ {name, path} || name ]
            if (conf.plugins) {
                conf.precondition = (conf.precondition || []).concat(
                    conf.plugins.map(mod => {
                        let path;
                        let modName;
                        if (Utils.typeof(mod, 'string')) {
                            modName = mod;
                            path = `${env.pluginPath + modName}.js`;
                        } else {
                            path = mod.path;
                            modName = mod.name;
                        }
                        return resovle => {
                            Requirejs([path], foo=>{
                                // 如果有 mod.name，则认为是单一组件，名称使用名字命名
                                // 如果没有 mod.name，则认为是多个组件，直接添加
                                if (modName) {
                                    Loader.add({[modName]: foo && foo.default ? foo.default : foo});
                                } else {
                                    Loader.add(foo);
                                }
                                resovle();
                            });
                        };
                    }
                ));
            }
            return conf;
        },
        // precondition 配置处理，执行加载逻辑
        _handlePreconditionConf(conf) {
            if (conf.precondition) {
                if (Utils.typeof(conf.precondition, 'array') && conf.precondition.length > 0) {
                    this.waiting = true;
                    Precondition.handle(conf.precondition);
                }
            }
        },
        // 整体配置
        config(conf) {
            // 处理global.mock，数组转对象
            if (conf && conf.global && conf.global.mock) {
                let map = {};
                conf.global.mock.forEach(v=>map[v.url] = v.handler);
                conf.global.mock = map;
            }
            // 用户自定义 UF 别名
            if (conf.alias) {
                window[conf.alias] = window.UF;
            }
            // 设置默认公用数据，存入 model 中
            if (conf.data) {
                ModelCache.set(conf.data);
            }

            // 处理 components 参数
            conf = this._handleComponentsConf(conf);
            // 处理 plugins 参数
            conf = this._handlePluginsConf(conf);
            // 存储全部配置
            let config = Config.set(Utils.filter(conf, ['data', 'precondition']));
            // modules 属性里定义了 requirejs的配置项，具体参数详见：http://requirejs.org/docs/api.html#config
            Requirejs.config(config.modules);
            // 设置默认域，解决跨域问题
            !!document.domain && (document.domain = config.global['domain']);

            // 处理 precondition 参数, 执行阻塞页面加载的函数
            this._handlePreconditionConf(conf);
        },
        // 获取全部实例，可以和其他实例做交互
        getIns(name) {
            const allIns = getAll();
            return allIns;
        }
    };
    
    // 绑定获取组件的函数
    const UF = func._get;
    Object.assign(UF, uf, func);
    
    // 存储新产生的uf实例
    setInstance(name, UF);

    return UF;
}

// 先产生一个默认实例，以兼容以前的用法
const defaultName = '_$default';
const defaultUF = create({name: defaultName});
defaultUF.config({});

// 重写window上的UF函数，使其增加创建uf实例功能
const UF = (conf = {}) => {
    // 如果传入的是字符串，则走原来的获取组件的逻辑
    if (typeof conf === 'string') {
        return defaultUF(conf);
    }
    // 默认使用default名称
    conf.name = conf.name || conf.appName || defaultName;
    // 获取当前name的uf实例
    let ufIns = getInstance(conf.name);
    // 如果不存在生成一个新的实例
    if (!ufIns) {
        ufIns = create(conf)
    }
    ufIns.config(conf);
    return ufIns;
};

// 并把默认实例抛出以供直接调用
Object.assign(UF, defaultUF);

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

export {Factory, Loader, WhiteList};