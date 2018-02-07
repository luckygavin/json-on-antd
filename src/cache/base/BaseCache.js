/**
 * @file 缓存基类
 *      每 new 一次，会产生一个对象实例来做一类缓存
 * @author liuzechun
 * Created Date: 2017-10-24 11:05:57
 */
import Utils from 'src/utils/utils.js';

export default class BaseCache {
    // 构造函数又两个参数，第一个参数必填，为缓存前缀，第二个参数为缓存对象的默认值
    constructor(_cache) {
        this._cache = _cache || {};
    }
    get(names) {
        // 如果传递了name，则只去config中查找name字段，否则返回全部
        let result = this._cache;
        if (names) {
            // 可以传递多个name依次向下查找，查找不到返回null
            for (let v of names.split('.')) {
                if (result && Utils.typeof(result, 'object') && result[v]) {
                    result = result[v];
                } else {
                    return null;
                }
            }
        }
        return result;
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
