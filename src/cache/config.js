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

import BaseCache from './BaseCache.js';
import Default from './default.js';

const _key = '_uf-config';

let _cache = {
    // 模块引入相关配置
    modules: {
        // 加载模块时是否展示loading
        showLoading: false
    },
    // 全局系统配置
    global: {
        // 设置文档域 document.domain，默认为原始值
        domain: document.domain,
        // ajax 的全局配置，可更改全部 ajax 规则（例如报错规则）
        ajax: {
        }
    },
    // 组件默认配置
    components: Default
};

export default (new BaseCache(_key, _cache));