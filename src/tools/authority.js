/**
 * @file 权限控制模块
 * @author liuzechun
 */

import {Utils} from 'src/utils';
import {getConfig} from './instance.js';

const authority = {
    // 检查是否有权限
    check(item, insName = item.insName) {
        let conf = getConfig(insName);
        let result = true;
        if (conf && !Utils.typeof(item.authority, 'undefined')) {
            let authorityMap = conf.get('authority');
            if (authorityMap) {
                result = false;
                // 支持传一个数组，绑定多个权限点
                if (Utils.typeof(item.authority, 'array')) {
                    for (let v of item.authority) {
                        // 当有一个权限点验证通过是，跳出检查
                        if (authority.check(v, insName)) {
                            result = true;
                            break;
                        }
                    }
                } else {
                    // authorityMap 支持两种形式: 'a.b.c': true，或 a: {b: c: true}
                    result = !!authorityMap[item.authority] || !!Utils.fromObject(item.authority, authorityMap);
                }
            }
        }
        return result;
    }
}

export default authority;