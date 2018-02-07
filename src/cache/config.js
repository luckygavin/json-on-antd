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

import BaseCache from './base/BaseCache.js';
import Default from 'src/default';
import Utils from 'src/utils/utils.js';

class Config extends BaseCache {
    get(names) {
        let result = super.get.call(this, names);
        // 组件全局配置components为引用类型，组件使用时对配置进行更改会影响全局，需要clone一份
        if (names && names.split('.')[0] === 'components') {
            result = Utils.clone(result);
        }
        return result;
    }
}

export default (new Config(Default));