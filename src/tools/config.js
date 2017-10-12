/**
 * @file 默认配置
 *      可以用于配置各个组件通用的默认参数
 *      用户可以使用 `UF.config()` 来更改或者自定义任何默认参数
 * @author liuzechun
 * Created Date: 2017-10-11 01:40:57
 *
 * Last Modified: 2017-10-11 01:42:17
 * Modified By: liuzechun
 */

import {Utils, Cache} from 'uf/utils';

Cache.set('_uf-config', {
    // 模块引入相关配置
    modules: {
        // 加载模块时是否展示loading
        showLoading: true
    },
    // 全局系统配置
    global: {},
    // 用于存放一些公用数据或静态数据（供select等组件直接调用）
    data: {},
    // 组件默认配置
    components: {
        loading: {
            delay: 150
        },
        iframe: {
            mode: 'auto',
            delay: 0,
            // showLoading: true
            showLoading: false
        }
    }
});

export default {
    _key: '_uf-config',
    get(name) {
        // 如果传递了name，则只去config中name字段，否则返回全部
        return (!!name ? Cache.get(this._key)[name] : Cache.get(this._key)) || {};
    },
    set(obj) {
        let origin = this.get();
        let config = Utils.merge(10, {}, origin, obj);
        Cache.set(this._key, config);
        // 存完后返回存储的值
        return config;
    }
};