/**
 * @file 权限控制模块
 * @author liuzechun
 */

import {Utils} from 'src/utils';
import {Config} from 'src/cache';

export default {

    check(item) {
        let authorityList = Config.get('authority');
        let result = true;
        if (!Utils.typeof(item.authority, 'undefined')) {
            result = !!authorityList[item.authority];
        }
        return result;
    }

}