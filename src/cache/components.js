/**
 * @file 组件实例缓存
 * @author liuzechun
 * Created Date: 2017-10-24 01:40:57
 */

import BaseCache from './base/BaseCache.js';

// export default (new BaseCache());

class Component extends BaseCache {
    set(target, component, isCheck = true) {
        // 检查name是否冲突
        // 升级完router再看能不能用
        // if (isCheck) {
        //     let theSame = this.get(target);
        //     if (theSame && theSame.key !== component.key) {
        //         console.error(`Warning: The prop "name" should be unique. `
        //             + `Check the component \`${component.type}\` named "${component.cacheName}" `
        //             + `which has the same name as the other component \`${theSame.type}\``
        //         );
        //     }
        // }
        super.set(target, component);
    }
}

export default (new Component());