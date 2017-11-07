/**
 * @file 缓存基类
 *      每 new 一次，会产生一个对象实例来做一类缓存
 * @author liuzechun
 * Created Date: 2017-10-24 11:05:57
 */
import Cache from 'uf/utils/cache.js';
import Utils from 'uf/utils/utils.js';

export default class BaseCache {
    // 构造函数又两个参数，第一个参数必填，为缓存前缀，第二个参数为缓存对象的默认值
    constructor(_key, _cache) {
        this._key = _key || '_uf-default';
        this._cache = _cache || {};
        this.__init();
    }
    __init() {
        // 统一放到 Cache 里管理
        Cache.set(this._key, this._cache);
    }
    get(name) {
        // 如果传递了name，则只去config中name字段，否则返回全部
        // return (!!name ? this._cache[name] : this._cache) || {};
        return !!name ? this._cache[name] : this._cache;
    }
    // set函数有两种用法
    // 如果 target 为字符串，则直接替换缓存中 target 保存的值
    // 如果传入的第一个参数不是一个 target 字符串，而是一个对象，则把对象和现有缓存做merge，适用于 config.js 等
    set(target, component) {
        if (Utils.typeof(target, 'object')) {
            let origin = this.get();
            let config = Utils.merge(10, origin, target);
            // 存完后返回存储的值
            return config;
        } else {
            this._cache[target] = component;
            return component;
        }
    }
    del(key) {
        delete this._cache[key];
    }
};
