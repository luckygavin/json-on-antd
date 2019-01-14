/**
 * @file 属性需进一步解析的组件属性名单
 * @author liuzechun
 */

import {Utils} from 'src/utils';
import AnalysisList from 'variety/config/whitelist/AnalysisList.js';

export default {

    // 返回当前配置中需要二次解析的属性
    get(props, type) {
        let list = this.getall(type);
        let result = [];
        for (let v of list) {
            // 如果在白名单中的属性值是直接的对象或数组（未解析的配置）或函数（执行结果为配置），则返回
            if (!!props[v] && Utils.directInstanceof(props[v], [Object, Array, Function])) {
                result.push(v);
            }
        }
        return result;
    },

    // 返回当前组件全部可以解析的属性
    getall(type) {
        let name = Utils.toPascal(type);
        // 把 children 属性加入到全部组件中
        return ((AnalysisList[name] || {}).basic || []).concat('children');
    },

    // 返回当前配置中 需要对函数结果进行再次解析的函数列表
    getFuncs(props, type) {
        let list = this.getallFuncs(type);
        let result = [];
        for (let v of list) {
            // 如果在白名单中的属性值是直接的对象或数组（未解析的配置）或函数（执行结果为配置），则返回
            if (!!props[v] && Utils.directInstanceof(props[v], [Object, Array, Function])) {
                result.push(v);
            }
        }
        return result;
    },

    // 返回全部当前组件全部需要对函数结果进行再次解析的函数列表
    getallFuncs(type) {
        let name = Utils.toPascal(type);
        // 把 children 属性加入到全部组件中
        return (AnalysisList[name] || {}).funcs || [];
    }
};