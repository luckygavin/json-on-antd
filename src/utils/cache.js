/**
 * @file 数据共享类
 * Created by xuziqian on 2017/8/4.
 */
export default {
    set(key, data) {
        // console.log('set ' + key);
        this[key] = data;
    },
    get(key, data) {
        return this[key];
    },
    del(key) {
        delete this[key];
    }
};