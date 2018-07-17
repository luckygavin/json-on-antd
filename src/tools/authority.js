/**
 * @file 权限控制模块
 * @author liuzechun
 */

import {Utils} from 'src/utils';
import {getConfig} from './instance.js';

export default {

    check(item, insName = item.insName) {
        let authorityList = getConfig(insName).get('authority');
        let result = true;
        if (!Utils.typeof(item.authority, 'undefined')) {
            result = !!authorityList[item.authority];
        }
        return result;
    }

}