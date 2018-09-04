/**
 * @file 适配器，把组件配置转换为统一规范格式
 * @author liuzechun
 */
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import Antd from 'src/antd/base/Antd.js';
import Loader from './loader.js';
// import Model from './model.js';
import WhiteList from './whitelist.js';

// 不属于config的参数，适配用户配置的参数时使用
const KeyWord = ['name', 'type', 'content', 'childrenHolder'];
const hashKeys = {};

export default {

    get(item) {
        // 移到 factory.analysisAgain 时处理
        // item.key = item.key || item.name || Utils.hash(item, null, 4);
        // update at 2018/08/10, checkArrayItems 无法覆盖模块为函数的情况，所以此处需再次进行额外处理
        item.key = item.key || item.name;

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
            // if (props['__key']) {
            //     if (Model.if(item)) {
            //         props['__cache'] = props['__key'];
            //     }
            // }
            // 由于 type 关键字把原antd等的 type 覆盖掉了，配置里用 mode 字段代替
            // 实例化组件时，还要把 type 还原
            if (Utils.isExtendsOf(Item, Antd)) {
                if (props.mode) {
                    props.type = props.mode;
                }
            }
            // 因为后面要对白名单里的属性进行二次解析并覆盖属性，这里把配置转存一份，并会在BaseComponent中filter掉
            let list = WhiteList.get(props, item.type);
            for (let v of list) {
                props[`_${v}`] = props[v]
            }
        // 非 BaseComponent 组件 _factory 等属性无效
        } else {
            props.name = item.name;
            delete props._factory;
        }
        // 删除供各个tools使用的临时变量 insName
        delete props.insName;
        // props = this.formatOthers(props);

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
    },
    // 检查数组项中每一项是否有值，如果没有则尝试添加
    checkArrayItems(items) {
        let existKeys = {};
        for (let item of items) {
            if (Utils.typeof(item, 'object') && item.key === undefined) {
                item.key = item.key || item.name;
                if (item.key === undefined) {
                    // 每个组件都要有key。同步设置在用户传入的config上，使key一旦设置即不再变化
                    // 但是当配置为函数动态产生时，同步设置无效，所以使用hash值保证产生的配置相同时，key也相同
                    // 为保证生成的key在数组中不重复，循环时临时保存生成的key，并对比当新生成的key已存在则不再进行赋值
                    let genkey = Utils.hash(item, null, 4);
                    if (!existKeys[genkey]) {
                        item.key = genkey;
                        existKeys[genkey] = true;
                    }
                }
            }
        }
    },

    /****** 针对组件的参数处理 ****************************************************************/

    formatOthers(props) {
        switch (props.type) {
        }
        return props;
    }
};
