/**
 * @file ajax 数据缓存
 * @author liuzechun
 * Created Date: 2017-10-24 01:40:57
 */

import BaseCache from './base/BaseCache.js';
import Utils from 'src/utils/utils.js';
import Config from './config.js';

class AjaxCache extends BaseCache {

    // 检查是否需要缓存返回数据，如果需要，则根据url+params取hash值，并返回；否则返回null
    getCacheKey(config) {
        let cacheApis = Config.get('global.cacheApis');
        if (cacheApis) {
            if (cacheApis.indexOf(config.url) > -1) {
                let key = config.url;
                if (config.params && !Utils.empty(config.params)) {
                    key += JSON.stringify(config.params);
                }
                let hv = Utils.hash(key);
                return hv;
            }
        }
        return null;
    }

    // 向缓存池中设置缓存数据
    setCacheData(config, res) {
        let key = this.getCacheKey(config);
        if (key) {
            this.set(key, Utils.clone(res));
        }
    }

    // 从缓存池中获取缓存数据
    getCacheData(config) {
        let key = this.getCacheKey(config);
        if (key) {
            return this.get(key);
        }
        return null;
    }
}

export default (new AjaxCache());