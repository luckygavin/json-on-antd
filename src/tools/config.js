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

import {Cache} from 'uf/utils';

Cache.set('_uf-config', {
    // 模块引入相关配置
    modules: {},
    // 全局配置
    global: {},
    // 组件默认配置
    components: {
        loading: {
            delay: 150
        }
    }
});