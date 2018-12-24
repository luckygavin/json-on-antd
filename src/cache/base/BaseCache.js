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
        // 可以传递多个name依次向下查找，例如：'a.b.c'
        return Utils.fromObject(names, this._cache);
    }
    // set函数有两种用法
    set(target, component) {
        // 如果传入的第一个参数不是一个 target 字符串，而是一个对象，则把对象和现有缓存做merge，适用于 config.js 等
        if (Utils.typeof(target, 'object')) {
            return Utils.merge(10, this._cache, target);
        // 如果 target 为字符串，则直接替换缓存中 target 保存的值
        } else {
            Utils.toObject(this._cache, target, component);
            return component;
        }
    }
    delete(key) {
        delete this._cache[key];
    }
    del(key) {
        this.delete(key);
    }
};
