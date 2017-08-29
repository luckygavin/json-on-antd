/**
 * @file 数据共享类
 * Created by xuziqian on 2017/8/4.
 */
export default {
    _catch: {},
    set(key, data) {
        this._catch[key] = data;
        // console.log(this._catch);
    },
    get(key, data) {
        return this._catch[key];
    },
    del(key) {
        delete this._catch[key];
    }
};