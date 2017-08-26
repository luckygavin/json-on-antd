/**
 * @file 载入组件，供 Factory 获取
 *      根据配置的 type，转换成对应组件并返回
 * @author liuzechun@baidu.com
 */
import {Utils} from 'uf/utils';
import * as UF from 'uf';

export default {
    component: Object.assign(UF),
    add(components) {
        Object.assign(this.component, components);
    },
    get(type) {
        let name = Utils.toPascal(type);
        return this.component[name];
    }
};
