import React from 'react';
import ReactDOM from 'react-dom';
import {Utils} from 'uf/utils';

/* 模板解析规则 */
/* i: 大小写不敏感，g: 全局匹配(查找所有)，m: 多行匹配 */
const Rules = {
    close: /^<\/\S+?>/g,        // 结束标签
    single: /^<[^<>]+?\/>/g,    // 单标签
    open: /^<[^<>]+?>/g,        // 开始标签
    text: /^[\s\S]+?(?=<)/g,    // 非标签

    expre: /{%[\s\S]*?%}/m,     // 模板语言表达式格式
    func: /\$E\d+\$/,           // 表达式占位符
    funcBef: '\$E',             // 表达式占位符前缀
    funcAft: '\$',              // 表达式占位符后缀
    str: /\$S\d+\$/,            // 字符串占位符
    strBef: '\$S',              // 字符串占位符前缀
    strAft: '\$',               // 字符串占位符后缀

    trim: /^\s+|\s+$/g,         // 用于删除字符串前后的空格等
    trimTag: /^<\/|^<|>$|\/>$/g,// 用于删除标签前后的尖括号
    trimFunc: /^\$E|\$$/g,      // 用于删除表达式占位符的前缀后缀，以获取表达式id
    trimTemp: /^{%|%}$/g,       // 用于删除模板的标签，获得表达式内容
    trimStr: /^\$S|\$$/g,       // 用于删除字符串占位符前后缀，获取字符串内容
};
const Message = {
    error(msg) {
        throw new Error('unexpected token "' + msg + ' ..."');
    }
}

/* 模板解析类 */
export default class Html {
    constructor(html) {
        this.stack = [];        // 解析模板时用到的栈
        this.expressions = [];  // 保存解析时临时的表达式
        // let template = this.analysis(html);
        // return this.generateElement(template);
        return this.analysis(html);
    }
    /**
     * 1、剪切掉自定义匹配到的内容；2、清理字符串前后空格
     */
    trim(string, regExp) {
        if (!!regExp) {
            string = string.replace(regExp, '');
        }
        return string.replace(Rules.trim, '');
    }
    /**
     * 根据元素的信息对象，生成 React 元素
     * @param  {[Object]} obj       包含标签各种信息的对象
     * @return {[Object]}           返回解析生成的 react 元素
     */
    generateElement(obj) {
        let result;
        if (Utils.typeof(obj, 'string')) {
            result = obj;
        } else if (Utils.typeof(obj, 'array')) {
            result = [];
            for (let v of obj) {
                result.push(this.generateElement(v));
            }
        } else if (Utils.typeof(obj, 'object')) {
            let tag = obj.tag;
            let attr = {};
            // 解析属性 - 函数及表达式需执行
            for (let key in obj.attribute) {
                let content = obj.attribute[key];
                if (typeof content === 'function') {
                    attr[key] = content.call(this);
                } else {
                    attr[key] = content;
                }
            }

            // 把 class、style 转换为 react 需要的 className、style对象
            attr.className = attr.class;
            delete attr.class;
            attr.style = attr.style && this.toCamalObj(attr.style);
            // 如果没有key，则增加一个随机的key
            attr.key = attr.key || Utils.uniqueId();

            let arr = [tag, attr];
            if (!!obj.children) {
                // 对children进行遍历，处理
                for (let v of obj.children) {
                    if (typeof v === 'string') {
                        arr.push(v);
                    } else if (typeof v === 'function') {
                        arr.push(v.call(this));
                    } else {
                        arr.push(this.generateElement(v));
                    }
                }
            }
            result = React.createElement.apply(null, arr);
        }
        return result;
    }
    // 把元素html的 style 字符串转换为 react 需要的对象
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
    /**
     * 解析属性值为函数
     * - 把有动态内容的属性值，用函数包裹起来，需要的时候执行函数得到属性值
     * @param  {[string]} content   属性内容
     * @return {[string/function]}  如果不包含动态内容，则返回一个字符串，否则把内容放在函数中
     */
    generateFunction(content) {
        let id = content.replace(Rules.trimFunc, '');
        let expre = this.expressions[id];
        if (!!expre) {
            expre = this.trim(expre, Rules.trimTemp);
            expre = expre.replace(/\s+/g, ' ');
        } else {
            expre = content.replace(/\s+/g, ' ');
        }
        // 有些模板表达式标签内容为空
        return ()=>{
            return !expre ? null : eval('(' + expre + ')');
        }
    }

    /**
     * 解析标签字符串，生成包含元素各种信息的对象
     * @param  {[string]} type 元素类型：single/open
     * @param  {[string]} str  html 标签字符串
     * @return {[Object]}      包含元素各种信息
     *         tag          标签名
     *         attribute    属性/方法
     */
    generateObject(type, str) {
        let obj = {
            isOpen: type === 'open',
            children: null
        };
        // 字符串去除标签/去除=左右空格/把多个空格合并为一个/把首尾空格去掉
        str = str.replace(/^<|\/>$|>$/g, '').replace(/\s*=\s*/g, '=').replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
        // 把属性中的字符串临时用字符串占位符替换，拆分完属性后再还原
        let attrStr = /=".*?"|='.*?'/;
        let string = [];
        while(str.search(attrStr) >= 0) {
            let expre = str.match(attrStr)[0].replace(/^="|^='|["']$/g, '');
            string.push(expre);
            // 把 "、' 字符串用 ‘$S*$’ 代替
            str = str.replace(attrStr, '=' + Rules.strBef + (string.length - 1) + Rules.strAft);
        }
        let attr = str.split(' ');

        obj.tag = attr.shift();
        // 解析属性
        let expressions = this.expressions;
        let attribute = {};
        for (let v of attr) {
            if (v.indexOf('=') > 0) {
                let kv = v.split('=');
                // 模板占位符: $E*$，所以暂时保留原形式不变，在生成React元素时在做处理
                if (kv[1].search(Rules.func) != -1) {
                    // attribute[kv[0]] = kv[1];
                    attribute[kv[0]] = this.generateFunction(kv[1])
                // 字符串占位符: $S*$
                } else if (kv[1].search(Rules.str) != -1){
                    let id = kv[1].replace(Rules.trimStr, '');
                    attribute[kv[0]] = string[id];
                // 单一变量（为了使用方便，可以不写成模板表达式的形式），此处仍需替换成函数占位符
                } else {
                    // expressions.push(kv[1]);
                    // attribute[kv[0]] = Rules.funcBef + (expressions.length - 1) + Rules.funcAft;
                    attribute[kv[0]] = this.generateFunction(kv[1]);
                }
            } else if (!!v) {
                // 依照html的使用规则，没有值的属性默认为true
                attribute[v] = true;
            }
        }
        obj.attribute = attribute;

        return obj;
    }
    /**
     * 根据关闭标签查找整个标签内容，并生成 React 元素
     * @param  {[string]} str   关闭的标签字符串
     * @return {[Object]}       返回解析生成的 react 元素
     */
    generateObjectByClose(str) {
        // 首先解析出闭合标签的内容
        let tag = this.trim(str, Rules.trimTag);
        let result = null;
        let children = [];
        for(;;) {
            let obj = this.stack.pop();
            // 字符串元素
            if (typeof obj === 'string') {
                children.unshift(obj);
            // 函数 - 模板表达式
            } else if (typeof obj === 'function') {
                children.unshift(obj);
            // 是否是已闭合标签
            } else if (obj && !obj.isOpen) {
                children.unshift(obj);
            // 开始标签是否和关闭标签匹配
            } else if (obj && obj.tag === tag) {
                obj.children = children;
                obj.isOpen = false;
                result = obj;
                break;
            } else {
                Message.error('an open tag(' + obj.tag + ') that not match with the close tag(' + tag + ')');
            }
        }
        return result;
    }

    /**
     * 把JSX模板中{}内容转化为函数名并替换
     * @param  {[string]}  html  原生jsx模板
     * @return {[string]}       处理后的jsx模板
     */
    beforeAnalysis(html) {
        let expressions = [];
        while(html.search(Rules.expre) >= 0) {
            let expre = html.match(Rules.expre)[0];
            expressions.push(expre);
            // 把{}表达式用‘$E*$’代替
            html = html.replace(Rules.expre, Rules.funcBef + (expressions.length - 1) + Rules.funcAft);
        }
        this.expressions = expressions;
        return this.trim(html);
    }

    /**
     * 解析模板 - 生成的是一个包含整个模板树信息的对象
     * @param  {[string]}  html    html 模板
     * @return {[Object]}         解析后的React对象
     */
    analysis(html) {
        // 保存标签规则
        let tagReg = '';
        // let template = this.beforeAnalysis(html);
        let template = html;
        // console.log(template);
        while(!!template) {
            // 关闭标签 - 出栈 && 封装成 React 元素
            if (template.search(Rules.close) === 0) {
                tagReg = Rules.close;
                let str = template.match(Rules.close)[0];
                let obj = this.generateObjectByClose(str);
                this.stack.push(obj);
            // 单标签 - 把标签解析成 react 元素，然后入栈
            } else if (template.search(Rules.single) === 0) {
                tagReg = Rules.single;
                let str = template.match(Rules.single)[0];
                let obj = this.generateObject('single', str);
                this.stack.push(obj);
            // 开始标签 - 把标签解析成一个对象然后入栈
            } else if (template.search(Rules.open) === 0){
                tagReg = Rules.open;
                let str = template.match(Rules.open)[0];
                let obj = this.generateObject('open', str);
                this.stack.push(obj);
            // 非标签内容
            } else if (template.search(Rules.text) === 0) {
                tagReg = Rules.text;
                let str = template.match(Rules.text)[0];
                // if 表达式 - 已经被替换为这种格式： $E*$
                // else 字符串 - 直接入栈
                if (str.search(Rules.func) !== -1) {
                    let strArr = str.split(Rules.func);
                    let funcArr = str.match(Rules.func);
                    let len = strArr.length;
                    let last = strArr[len - 1];
                    for (let i = 0; i < len - 1; i++) {
                        !!strArr[i] && this.stack.push(strArr[i]);
                        !!funcArr[i] && this.stack.push(this.generateFunction(funcArr[i]));
                    }
                    !!last && this.stack.push(last);
                } else {
                    this.stack.push(str);
                }
            // 出错 - 截取字符串前50个字符打印出来，方便问题定位
            } else {
                Message.error(template.slice(0, 50));
            }
            template = this.trim(template, tagReg);
        }
        // stack栈里只剩一个元素，pop出来即是result
        // return this.stack.pop();
        // return this.stack
        return this.generateElement(this.stack);
    }
}
