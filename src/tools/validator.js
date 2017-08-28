/**
 * @file 数据校验器
 * @author liuzechun
 */
import {Utils} from 'uf/utils';

export default {
    // 检查对象上的某个(些)属性是否符合指定类型
    // 属性可以是单个字符串或数组
    check(item, name, type) {
        if (!type || Utils.getType(type) === 'string') {
            // 如果不指定类型，则检查属性是否存在
            if (!type) {
                if (Utils.typeof(item[name], 'undefined')) {
                    this.error(item, name);
                }
            } else {
                if (!Utils.typeof(item[name], type)) {
                    this.error(item, name, type);
                }
            }
        } else if (Utils.getType(name) === 'array') {
            for (let v of name) {
                this.check(item, v);
            }
        }
    },
    // 打印错误信息
    error(item, name, type) {
        console.error(`Uncaught TypeError: ${name} is `
            + `${type ? 'not ' + type : 'undefined'}`
            + ` in item's config "${JSON.stringify(item)}"`);
    }
}
