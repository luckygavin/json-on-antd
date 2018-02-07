/**
 * @file 适配器，把组件配置转换为统一规范格式
 * @author liuzechun
 */
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import Antd from 'src/antd/base/Antd.js';
import Loader from './loader.js';

// 不属于config的参数，适配用户配置的参数时使用
const KeyWord = ['name', 'type', 'content', 'childrenHolder'];

export default {

    get(item) {
        // 每个组件都要有key。同步设置在用户传入的config上，使key一旦设置即不再变化
        item.key = item.key || item.name || Utils.uniqueId();

        let Item = Loader.get(item);
        let props = Utils.filter(item, KeyWord);
        // 把 content 转化成 children。
        // update at 2017/10/25,如果没有content,则使用原来的children
        // update at 2018/01/11,如果只有原来有值，才执行赋值操作
        if (item.content || props.children) {
            props.children = item.content || props.children;
        }
        // 格式化 class 和 style
        props = this.formatCS(props);
        // 如果是基于BaseComponent的组件内部要用到的属性处理
        if (Utils.isExtendsOf(Item, BaseComponent)) {
            props['__type'] = item.type;
            props['__key'] = props['key'];
            // 如果有name的话，把组件放到缓存池里
            if (item.name) {
                props['__cache'] = item.name;
            }
            // 由于 type 关键字把原antd等的 type 覆盖掉了，配置里用 mode 字段代替
            // 实例化组件时，还要把 type 还原
            if (Utils.isExtendsOf(Item, Antd)) {
                if (props.mode) {
                    props.type = props.mode;
                }
            }
        // 非 BaseComponent 组件 _root 等属性无效
        } else {
            props.name = item.name;
            delete props._root;
            delete props._factory;
        }

        return props;
    },
    // 供 BaseComponent 使用，在 set 之前
    beforeSet(component, options) {
        this.formatCS(options);
        // 实例化组件时，还要把 type 还原
        if (component instanceof Antd) {
            if (options.mode) {
                options.type = options.mode;
            }
        }
        return options;
    },
    // 把 class、style 转换为 react 需要的 className、style对象
    formatCS(props) {
        if (props.class) {
            props.className += ' ' + props.class;
            delete props.class;
        }
        if (props.style && Utils.typeof(props.style, 'string')) {
            props.style = this.toCamalObj(props.style);
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
