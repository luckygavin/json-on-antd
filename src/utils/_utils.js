/**
 * @file 一些常用的函数工具
 * @author liuzechun
 **/

const I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
const s4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

const utils = {
    // 数字前面补充0
    padNum(num, n) {
        let len = ('' + num).length;
        return Array(n > len ? (n - len + 1) : 0).join(0) + num;
    },
    // 生成随机唯一ID，32位
    uniqueId() {
        return (s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4());
    },
    // 字符串哈希
    hash(text, len) {
        let hash = 5381;
        text = JSON.stringify(text) + '';
        let i = text.length - 1;
        for (; i > -1; i--) {
            hash += (hash << 5) + text.charCodeAt(i);
        }
        let value = hash & 0x7FFFFFFF;
        let retValue = '';
        do {
            retValue += I64BIT_TABLE[value & 0x3F];
        } while (value >>= 1);
        // 凑长度
        if (len) {
            while (retValue.length < len) {
                retValue = retValue + retValue;
            }
            if (retValue.length > len) {
                retValue = retValue.slice(0, len);
            }
        }
        return retValue;
    },
    // 数组去重
    distinct(arr) {
        return [...(new Set(arr))];
    },
    // 对象转数组
    objToArr(obj) {
        let arr = [];
        for (let i in obj) {
            arr.push(obj[i]);
        }
        return arr;
    },
    // 数组转对象
    arrToObj(arr) {
        let obj = {};
        for (let i in arr) {
            obj[i] = arr[i];
        }
        return obj;
    },
    // 判断数组或对象是否为空
    empty(obj) {
        for (let t in obj) {
            return false;
        }
        return true;
    },
    // 浅拷贝，指针指向，只拷贝一层
    copy(obj) {
        return this.clone(obj, 1);
    },
    // 深拷贝对象/数组
    // level 为深拷贝的层级，默认一直遍历到最深层.
    // 默认10层，防止循环引用
    clone(data, level = 10) {
        if (level <= 0) {
            return data;
        }
        let newData;
        if (this.typeof(data, 'array')) {
            newData = [];
        } else if (this.typeof(data, 'object')) {
            newData = {};
        } else {
            return data;
        }
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                newData[i] = this.clone(data[i], level - 1);
            }
        }
        return newData;
    },
    // 以第一个对象为目标，依次把后面的对象merge到上去，支持深层的merge，类似于一个深层的 Object.assign()
    // ghost 为一特殊参数，分三种情况
    //   level 参数为拷贝层数，不传则默认遍历10层，防止循环引用
    //   filter 为数组，声明某些属性无需合并直接覆盖
    // ** 只适用于JSON等对象字面量的对象，比较复杂的对象直接覆盖，不做深层遍历
    merge(ghost, target, ...objs) {
        let filter = [];
        let level = 10;
        // 场景1：ghost 为level值，即merge的深度
        if (this.typeof(ghost, 'number')) {
            level = ghost;
        // 场景2：ghost 为filter数组，声明某些属性无需合并直接覆盖
        } else if (this.typeof(ghost, 'array')) {
            filter = ghost;
        // 场景3：无上述两种类型的参数，ghost为target
        } else {
            objs.unshift(target);
            target = ghost;
        }
        if (level <= 0) {
            return utils.copy(objs[0]);
        }
        let result = target;
        for (let obj of objs) {
            // 首先判断对象是否冻结（冻结的对象为只读对象，其属性不可直接更改），直接覆盖
            // 其次判断两个数据的格式，只有两个数据都为引用类型时，才需要循环合并
            // 然后判断对象是否为直接继承自Object，如果不是，复杂对象不再深层遍历，直接覆盖
            // array 应该直接覆盖，否则数组的值只增不减
            if (!Object.isFrozen(result)
                && this.typeof(result, 'object')
                && this.typeof(obj, 'object')
                && this.directInstanceof(result, Object)) {
                for (let i in obj) {
                    if (filter.indexOf(i) === -1) {
                        result[i] = this.merge(level - 1, result[i], obj[i]);
                    } else {
                        result[i] = obj[i];
                    }
                }
            } else {
                // update at 2018/01/19，undefined的值也要覆盖，否则影响form中select的清空功能
                // result = obj === undefined ? target : obj;
                result = obj;
            }
        }
        return result;
    },
    // 从obj中过滤掉某些属性
    filter(obj, arr) {
        if (this.typeof(arr, 'string')) {
            arr = [arr];
        }
        let newObj = {};
        for (let i in obj) {
            if (obj.hasOwnProperty(i) && arr.indexOf(i) === -1) {
                newObj[i] = obj[i];
            }
        }
        return newObj;
    },
    // 从obj中获取某些属性
    reverseFilter(obj, arr) {
        if (this.typeof(arr, 'string')) {
            arr = [arr];
        }
        let newObj = {};
        for (let i in obj) {
            if (obj.hasOwnProperty(i) && arr.indexOf(i) >= 0) {
                newObj[i] = obj[i];
            }
        }
        return newObj;
    },
    // 对比两个对象是否相等
    // 只检查了一层
    equals(obj1, obj2) {
        // 方式1
        // return JSON.stringify(obj1) === JSON.stringify(obj2);
        // 方式2
        // return underscore.isEqual(obj1, obj2);
        // 方式3
        if (!this.typeof(obj1, 'object') || !this.typeof(obj2, 'object')) {
            return false;
        }
        let keys = Object.keys(Object.assign({}, obj1, obj2));
        for (let i of keys) {
            // 如果是函数，把函数转换成字符串再做比较。否则如果函数声明两次，用is比较返回的是false
            if (this.typeof(obj1[i], 'function') && this.typeof(obj2[i], 'function')) {
                if (obj1[i].toString() !== obj2[i].toString()) {
                    return false;
                }
            } else if (!Object.is(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    },
    // 子串是否处于字符串最末尾
    isLast(sub, str) {
        return str.lastIndexOf(sub) === str.length - sub.length;
    },
    // each 遍历对象属性，类似于jQuery的each函数，方便react的render函数中遍历对象
    // callback 为回调函数，支持三个参数：依次是 item, index, obj
    each(obj, callback) {
        let result = [];
        for (let i in obj) {
            result.push(callback(obj[i], i, obj));
        }
        return result;
    },
    // 根据路由模式生成真实的链接
    // pattern  路由模式，如：#/visual/room/:room/realMode/:rack_col/:sn
    // data 真实数据，模式中的:room即在data中取room字段的值
    getPathFromPattern(pattern, data) {
        let path = '#';
        if (pattern) {
            let arr = pattern.slice(2, pattern.length).split('/');
            for (let v of arr) {
                if (v.indexOf(':') === 0) {
                    let key = v.slice(1, v.length);
                    path += '/' + data[key];
                } else {
                    path += '/' + v;
                }
            }
        } else {
            path = 'javascript:void(0);';
        }
        return path;
    },
    // 跳转链接，router的调整组件会刷新两次，不过也不建议使用此函数，可以使用a标签代替
    goto(path, forceUpdate = false) {
        // 如果path不是已#/开头，且不是/开头，则加上#/
        path = path.indexOf('#/') !== 0
            ? (path.indexOf('/') !== 0 ? '#/' + path : path)
            : path;
        let nowPath = window.location.hash;
        if ((path !== nowPath && path !== '') || forceUpdate) {
            // 之所以不用hashHistory.push()是因为会自动执行两次push
            window.location.href = path;
        }
    },
    // 获取数据的类型，返回的类型名称为全小写
    // 包括：object、array、function、null、undefined、regexp、number、string、boolean、date ...
    // 推荐使用 utils.typeof 函数
    getType(value) {
        return ({}).toString.call(value).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    },
    // 判断 value 是否为指定类型
    // type 可以为一个字符串或者一个数组
    typeof(value, type) {
        if (this.getType(type) === 'string') {
            return this.getType(value) === type;
        } else if (this.getType(type) === 'array') {
            return type.indexOf(this.getType(value)) !== -1;
        } else {
            return false;
        }
    },
    // 把中横线命名的字符串转换成帕斯卡命名形式
    toPascal(str) {
        return str.split('-').map(i=>i.replace(/^\w/g, v=>v.toUpperCase())).join('');
    },
    // 判断组件是否继承自某个类，支持验证自己
    // 根据组件的引用（通过import获得）判断，支持深层查找
    isExtendsOf(item, superClass) {
        if (item === superClass) {
            return true;
        }
        // item.prototype.__proto__.__proto__.constructor === SuperClass
        // let Item = item.prototype && item.prototype.__proto__;
        // while(Item) {
        //     if (Item.constructor === superClass) {
        //         return true;
        //     }
        //     Item = Item.__proto__
        // };
        // return false;
        return superClass.isPrototypeOf(item);
    },
    // 某个对象是否直接来自某个类的实例
    directInstanceof(obj, cls) {
        if (!this.typeof(cls, 'array')) {
            cls = [cls];
        }
        for (let v of cls) {
            if (obj && obj.constructor && obj.constructor.prototype === v.prototype) {
                return true;
            }
        }
        return false;
    },

    // 把数组、对象转换成select等需要的options标准格式
    toOptions(data) {
        let result = [];
        if (this.typeof(data, 'array')) {
            // ['value', 'value2']
            if (this.typeof(data[0], 'string')) {
                result = this.distinct(data).map(v=>({label: v, value: v}));
            // {label:1, value:'a'}，已格式化好的数据
            } else {
                result = data;
            }
        } else if (this.typeof(data, 'object')) {
            // {key: value}
            for (let i in data) {
                result.push({
                    label: data[i],
                    value: i
                });
            }
        }
        return result;
    },
    // 获取options数据中的第一个值
    getFirstOption(data) {
        let format = this.toOptions(data);
        if (format[0]) {
            return format[0].value;
        }
    },
    // 把数据格式化成json展示
    prettyJson(data, origin) {
        if (origin) {
            return this.syntaxHighlight(data);
        }
        return {
            type: 'pre',
            className: 'json',
            dangerouslySetInnerHTML: {__html: this.syntaxHighlight(data)}
        };
    },
    // 根据一个字符串，生成一个深层的对象
    // 例如：根据 a.b.c 生成 {a:{b:{c: 1}}}
    generateObject(strc, value) {
        let tData = value;
        // 如果 strc 为空，则返回 value 本身
        if (strc) {
            for (let v of strc.split('.').reverse()) {
                tData = {[v]: tData};
            }
        }
        return tData;
    },
    // 根据一个字符串，从一个深层的对象中取数据
    // 例如：根据 a.b.c 从对象 {a:{b:{c: 1}}} 中取出 1
    fromObject(strc, obj) {
        let target = obj;
        // 如果 strc 为空字符串，则返回 obj 本身
        if (strc) {
            for (let v of strc.split('.')) {
                target[v] && (target = target[v]);
            }
        }
        return target;
    },
    // 想某个对象上的某个函数注入额外逻辑
    // 参数依次为 父级、目标函数、新函数、是否把原来逻辑提前、bind的对象
    inject(parent, target, newFunc, oldAhead = false, thisArg = null) {
        let origin = parent[target];
        parent[target] = !!origin
            ? (...params) => {
                // return原函数执行结果
                let result;
                oldAhead ? (result = origin.call(thisArg, ...params)) : null;
                // 如果注入的逻辑返回false，可组织原函数的继续执行（前提是原函数后执行）
                let newResult = newFunc.call(thisArg, ...params);
                !oldAhead && newResult !== false ? (result = origin.call(thisArg, ...params)) : null;
                return result;
            }
            : newFunc.bind(thisArg);
        return parent;
    },

    /************************************************************************/
    // 私有方法
    syntaxHighlight(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        let reg = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g;
        return json.replace(reg, match=>{
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    try {
                        let type = JSON.parse(match);
                        if (typeof(JSON.parse(type)) === 'object') {
                            return this.syntaxHighlight(JSON.parse(type));
                        } else {
                            cls = 'string';
                        }
                    } catch (e) {
                        cls = 'string';
                    }
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
};

export default utils;
