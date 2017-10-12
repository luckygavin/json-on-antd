/**
 * @file 数据共享类
 * Created by xuziqian on 2017/8/4.
 */
export default {
    _cache: {},
    set(key, data) {
        this._cache[key] = data;
    },
    get(key, data) {
        return this._cache[key];
    },
    del(key) {
        delete this._cache[key];
    }
};