/**
 * @file 适配器，把组件配置转换为统一规范格式
 * @author liuzechun
 */
import {Utils, Cache} from 'uf/utils';
import Antd from 'uf/antd/base/Antd.js';
import Loader from './loader.js';

// 不属于config的参数，适配用户配置的参数时使用
const KeyWord = ['name', 'type', 'content'];

Cache.set('component-names', []);

export default {

    get(item) {
        let Item = Loader.get(item.type);
        // 如果是Antd组件，则把config格式化为Antd组件格式
        // 否则格式化成Uf格式
        // let props;
        // if (Utils.isExtendsOf(Item, 'Antd')) {
        //     props = this.antdConfig(item);
        // } else if (Utils.isExtendsOf(Item, 'BaseComponent')) {
        //     props = this.ufConfig(item);
        // } else {
        //     props = this.commonConfig(item);
        // }
        let props = Utils.filter(item, KeyWord);
        // 由于 type 关键字把原antd等的 type 覆盖掉了，配置里用 mode 字段代替
        // 实例化组件时，还要把 type 还原
        if (Utils.isExtendsOf(Item, 'Antd')) {
            if (props.mode) {
                props.type = props.mode;
            }
        }

        // 如果有name的话，把组件放到缓存池里
        if (item.name) {
            props['__cache'] = item.name;
            props['__ref'] = item.name;
            // 把组件名称缓存起来，方便查找
            Cache.set('component-names', Cache.get('component-names').concat(item.name));
        }
        // 每个组件都要有key
        if (props['key'] === undefined) {
            props['key'] = item.name || Utils.uniqueId();
        }

        return props;
    },

    // 获取Uf上自己实现的组件配置，配置集合在config上
    /* ufConfig(oitem) {
        let {config, data, params} = oitem;
        let item = Utils.filter(oitem, KeyWord.concat(['config', 'data', 'params']));
        if (!config) {
            config = {};            
        }
        // 把item上的全部非函数的属性放到config中
        for (let i in item) {
            if (!(item[i] instanceof Function)) {
                config[i] = item[i];
                delete item[i];
            }
        }
        // item中最终只剩下函数，直接放到config中
        return Object.assign({
                config,
                data,
                params
            }, item);
    },

    // 获取Antd的组件配置，配置参数是分散的
    antdConfig(oitem) {
        let item = Utils.filter(oitem, KeyWord);
        // 由于 type 关键字把原antd的 type 覆盖掉了，配置里用 mode 字段代替
        // 实例化组件时，还要把 type 还原
        if (item.mode) {
            item.type = item.mode;
        }
        return item;
    },

    // 获取普通元素的配置，配置参数是分散的
    commonConfig(oitem) {
        let item = Utils.filter(oitem, KeyWord);
        // 由于 type 关键字把原antd的 type 覆盖掉了，配置里用 mode 字段代替
        // 实例化组件时，还要把 type 还原
        if (item.mode) {
            item.type = item.mode;
        }
        return item;
    } */
}
