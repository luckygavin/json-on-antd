/**
 * @file ajax 数据缓存
 * @author liuzechun
 * Created Date: 2017-10-24 01:40:57
 */

import BaseCache from './base/BaseCache.js';
import Utils from 'src/utils/utils.js';
import {generate} from 'src/tools/instance.js';

export default generate(['Config'], Config=>{

    class AjaxCache extends BaseCache {

        // 检查是否需要缓存返回数据，如果需要，则根据config取hash值，并返回；否则返回null
        getCacheKey(config) {
            let cacheApis = Config.get('global.cacheApis');
            // 开启cache的方式有两种：1、config中配置cache属性为true; 2、UF.config()中配置global.cacheApis
            if (config.cache || (cacheApis && cacheApis.indexOf(config.url) > -1)) {
                return Utils.hash(config, 32);
            }
            return null;
        }
    
        // 向缓存池中设置缓存数据
        setCacheData(key, res) {
            // key 通过调用处传入，保证一致性
            // let key = this.getCacheKey(config);
            if (key) {
                this.set(key, Utils.clone(res));
            }
        }
    
        // 从缓存池中获取缓存数据
        getCacheData(key) {
            // key 通过调用处传入，保证一致性
            // let key = this.getCacheKey(config);
            if (key) {
                return this.get(key);
            }
            return null;
        }
    }

    return new AjaxCache();

});