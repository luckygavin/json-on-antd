/**
 * @file 载入组件，供 Factory 获取
 *      根据配置的 type，转换成对应组件并返回
 * @author liuzechun@baidu.com
 */
import Uf from 'uf';

export default {
    component: Object.assign(Uf),
    add(components) {
        Object.assign(this.component, components);
    },
    get(type) {
        let name = type.split('-').map(i=>i.replace(/^\w/g, v=>v.toUpperCase())).join();
        return this.component[name];
    }
};
