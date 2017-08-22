/**
 * @file 载入组件，供 Factory 获取
 *      根据配置的 type，转换成对应组件并返回
 * @author liuzechun@baidu.com
 */
import Uf from 'uf';

const List = Object.assign({
    
}, Uf);

const Loader = {
    existing: {},
    add(components) {
        Object.assign(this.existing, components);
    },
    get(tag) {
        let Com = this.existing;
        if (Com[tag]) {
            return Com[tag];
        } else if (eval('Com.' + tag)) {
            return eval('Com.' + tag);
        } else {
            if (Uf[tag] || Antd[tag]) {
                return Uf[tag] || Antd[tag];
            } else {
                return eval(tag);
            }
        }
    }
};

export default Loader;