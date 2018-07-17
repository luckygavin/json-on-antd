/**
 * UF 实例存储类
 */
import BaseCache from 'src/cache/base/BaseCache.js';

const cache = new BaseCache();
// 结构为
// {
//     [insName]: {_$uf, _$cache: {Config, ComponentCache, ModelCache}}
// }
window._cache = cache;

const ins = {
    // 类似于依赖注入，depend声明依赖什么模块，func执行的时候把模块取出来传进去
    generate(depend, func) {
        // 如果只传一个参
        if (!func) {
            func = depend;
            depend = [];
        }
        return {
            init(insName) {
                let args = [];
                for (let v of depend) {
                    args.push(ins[`get${v}`] && ins[`get${v}`](insName));
                }
                return func(...args, insName);
            }
        }
    },
    // 获取全部实例
    getAll() {
        return cache.get();
    },

    // 获取uf实例
    getInstance(insName) {
        return cache.get(`${insName}._$uf`);
    },
    setInstance(insName, obj) {
        return cache.set(`${insName}._$uf`, obj);
    },
    
    // Cache相关获取/设置函数
    getCache(insName) {
        return cache.get(`${insName}._$cache`);
    },
    setCache(insName, obj) {
        return cache.set(`${insName}._$cache`, obj);
    },
    getConfig(insName) {
        return cache.get(`${insName}._$cache.Config`);
    },
    setConfig(insName, obj) {
        return cache.set(`${insName}._$cache.Config`, obj);
    },
    getComponentsCache(insName) {
        return cache.get(`${insName}._$cache.ComponentCache`);
    },
    setComponentCache(insName, obj) {
        return cache.set(`${insName}._$cache.ComponentCache`, obj);
    },
    getModelCache(insName) {
        return cache.get(`${insName}._$cache.ModelCache`);
    },
    setModelCache(insName, obj) {
        return cache.set(`${insName}._$cache.ModelCache`, obj);
    },
    getAjaxCache(insName) {
        return cache.get(`${insName}._$cache.AjaxCache`);
    },
    setAjaxCache(insName, obj) {
        return cache.set(`${insName}._$cache.AjaxCache`, obj);
    },

    // Tools相关获取/设置函数
    getTools(insName) {
        return cache.get(`${insName}._$tools`);
    },
    setTools(insName, obj) {
        return cache.set(`${insName}._$tools`, obj);
    },
    getAjax(insName) {
        return cache.get(`${insName}._$tools.Ajax`);
    },
    setAjax(insName, obj) {
        return cache.set(`${insName}._$tools.Ajax`, obj);
    },
    getRequirejs(insName) {
        return cache.get(`${insName}._$tools.Requirejs`);
    },
    setRequirejs(insName, obj) {
        return cache.set(`${insName}._$tools.Requirejs`, obj);
    }

};

module.exports = ins;