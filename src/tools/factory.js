/**
 * @file 解析配置，生成组件
 * @author liuzechun
 */

import Loader from './loader.js';

// 1、Loader 中注册一个真正的组件
// 2、返回一个可以 new 一个新组件的对象
export class Factory {
    constructor(obj) {
        let jsx = obj.template;
        let tpl = document.querySelector(jsx);
        if (tpl) {
            jsx = tpl.innerHTML;
        }
        this.jsx = jsx;
        this.proto = obj;
        this.template = new Template(jsx).template;

        let component = this.generateComponent();

        if (!!obj.name) {
            Loader.add({
                [obj.name]: component
            });
        }

        return component;
    }
    generateComponent() {
        let self = this;
        let comp = React.createClass(Object.assign({}, this.proto, {
            render: function() {
                return self.generateElement(self.template, this);
            }
        }));
        this.component = comp;
        return comp;
    }
    generateElement(obj, env) {
        let tag;
        // 如果能在DOM中找到，说明是普通元素；否则为自定义元素，需配合Loader使用
        if (React.DOM.hasOwnProperty(obj.tag)) {
            tag = obj.tag;
        } else {
            tag = Loader.get(obj.tag);
        }
        // console.log(obj);
        let attr = {};
        // 解析属性 - 函数及表达式需执行
        for (let key in obj.attribute) {
            let content = obj.attribute[key];
            if (typeof content === 'function') {
                attr[key] = content.call(env);
            } else {
                attr[key] = content;
            }
        }
        let arr = [tag, attr];
        if (!!obj.children) {
            // 对children进行遍历，处理
            for (let v of obj.children) {
                if (typeof v === 'string') {
                    arr.push(v);
                } else if (typeof v === 'function') {
                    arr.push(v.call(env));
                } else {
                    arr.push(this.generateElement(v, env));
                }
            }
        }
        return React.createElement.apply(null, arr);
    }
}
