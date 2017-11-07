/**
 * @file 数据校验器
 * @author liuzechun
 */
import {Utils} from 'uf/utils';

export default {
    // 检查对象上的某个(些)属性是否符合指定类型
    // 属性可以是单个字符串或数组
    check(item, name, type) {
        type = type || 'undefined'
        // 如果不是数组，转换为数组
        if (Utils.typeof(name, 'string')) {
            name = [name];
        }
        if (Utils.typeof(item, 'object')) {
            let flag = true;
            for (let v of name) {
                if (!Utils.typeof(item[name], type)) {
                    this.error(item, name, type);
                    flag = false;
                }
            }
            return flag;
        }
        return false;
    },
    // 打印错误信息
    error(item, name, type) {
        console.error(`Uncaught TypeError: ${name} is `
            + `${type ? 'not ' + type : 'undefined'}`
            + ` in item's config "${JSON.stringify(item)}"`);
    }
}
