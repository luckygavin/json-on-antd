/**
 * @file 适配器，把组件配置转换为统一规范格式
 * @author liuzechun
 */
import {Utils, Cache} from 'uf/utils';
import Antd from 'uf/antd/base/Antd.js';
import Loader from './loader.js';

// 不属于config的参数，适配用户配置的参数时使用
const KeyWord = ['name', 'type', 'content', 'childrenHolder'];

Cache.set('component-names', []);

export default {

    get(item) {
        let Item = Loader.get(item.type);
        let props = Utils.filter(item, KeyWord);
        // 由于 type 关键字把原antd等的 type 覆盖掉了，配置里用 mode 字段代替
        // 实例化组件时，还要把 type 还原
        if (Utils.isExtendsOf(Item, 'Antd')) {
            if (props.mode) {
                props.type = props.mode;
            }
        }

        // 把 class、style 转换为 react 需要的 className、style对象
        if (props.class) {
            props.className += ' ' + props.class;
            delete props.class;
        }
        if (props.style && Utils.typeof(props.style, 'string')) {
            props.style = this.toCamalObj(props.style);
        }

        // 如果有name的话，把组件放到缓存池里
        if (item.name) {
            props['__cache'] = item.name;
        }
        // 基于BaseComponent的组件内部要用到组件的类型，存在__type属性里
        if (Utils.isExtendsOf(Item, 'BaseComponent')) {
            props['__type'] = item.type;
        }
        // 每个组件都要有key
        if (props['key'] === undefined) {
            props['key'] = item.name || Utils.uniqueId();
        }

        return props;
    },
    // 把 字符串style 转换为 react 需要的对象
    toCamalObj(style) {
        let arr = style.split(';');
        let obj = {};
        for (let v of arr) {
            let [key, value] = v.split(':');
            // 可以再优化下
            let newKey = key.split('-').map(i=>i.replace(/^\w/g, v=>v.toUpperCase())).join('').replace(/^\w/g, v=>v.toLowerCase());
            obj[newKey] = value;
        }
        return obj;
    }
};
