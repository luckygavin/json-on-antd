/**
 * @file 一些常用的函数工具
 * @author liuzechun
 **/

import underscore from 'underscore';
import moment from 'moment';

const I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
const s4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

// 引入了underscore的功能，并在其上增加了自定义的一些函数
const utils = Object.assign({}, underscore, {
    // 如果要使用原生的功能，可通过 _ 来访问
    _: underscore,

    /*********************************************************************************/
    /* 原函数改造 **********************************************************************/
    /*********************************************************************************/

    // 如果数据合法，返回moment数据；否则返回null
    moment(...params) {
        let result = moment(...params);
        if (result.isValid()) {
            return result;
        }
        return params[0];
    },
    // 数组是否有交集
    isIntersection(...params) {
        return underscore.intersection(...params).length > 0;
    },
    // ES6 对象合并
    assign(...params) {
        return Object.assign(...params);
    },
    // JSON.stringify 的改造版，跳过复杂属性、不忽略正则等变量等，用于把一个对象转换成一个字符串
    stringify(data, level = 5) {
        if (level <= 0) {
            return '_$leaf';
        }
        if (utils.typeof(data, ['object', 'array', 'symbol'])) {
            if (utils.directInstanceof(data, [Object, Array])) {
                data = utils.each(data, v => utils.stringify(v, level - 1));
                data = JSON.stringify(data);
            } else {
                // Symbol(react.element)
                data = '_$Symbol';
            }
        } else if (utils.typeof(data, 'function')) {
            data = '_$function';
        }
        return `${data}`;
    },
    // 数组去重
    distinct(arr) {
        return [...(new Set(arr))];
    },


    /*********************************************************************************/
    /* 自定义工具函数 ******************************************************************/
    /*********************************************************************************/

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
    //  当传入第3个属性时，说明对象不是简单对象，走自定义处理逻辑，过滤掉非p
    hash(text, len, level) {
        let hash = 5381;
        if (level) {
            text = utils.stringify(text, level);
        } else {
            text = JSON.stringify(text);
        }
        text += '';
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
    // 数据格式转换
    format(value, type) {
        if (value === undefined) {
            return undefined;
        }
        switch (type) {
            case 'number':
                value = +value || 0;
                break;
            case 'string':
                value = '' + value;
                break;
            case 'boolean':
                value = value === 'false' || value === 'FALSE' ? false : !!value;
                break;
            case 'array':
                if (utils.typeof(value, 'undefined')) {
                    value = [];
                }
                if (!utils.typeof(value, 'array')) {
                    value = [value];
                }
                break;
            case 'undefined':
                value = undefined;
                break;
            default: ;
        }
        return value;
    },
    // 判断数组或对象是否为空
    empty(obj) {
        if (utils.typeof(obj, ['array', 'object'])) {
            for (let t in obj) {
                return false;
            }
            return true;
        } else {
            return !obj;
        }
    },
    // 浅拷贝，指针指向，只拷贝一层
    copy(obj) {
        return utils.clone(obj, 1);
    },
    // 深拷贝对象/数组
    // level 为深拷贝的层级，默认一直遍历到最深层.
    // 默认10层，防止循环引用
    clone(data, level = 10) {
        if (level <= 0) {
            return data;
        }
        let newData;
        if (utils.typeof(data, 'array')) {
            newData = [];
        } else if (utils.typeof(data, 'object')
            && utils.directInstanceof(data, Object)
            && !Object.isFrozen(data)) {
            newData = {};
        } else {
            return data;
        }
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                newData[i] = utils.clone(data[i], level - 1);
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
        if (utils.typeof(ghost, 'number')) {
            level = ghost;
            // 场景2：ghost 为filter数组，声明某些属性无需合并直接覆盖
        } else if (utils.typeof(ghost, 'array')) {
            filter = ghost;
            // 场景3：无上述两种类型的参数，ghost为target
        } else {
            objs.unshift(target);
            target = ghost;
        }
        if (level <= 0) {
            // 如果存储内容不为普通对象，例如类的实例，copy不能拷贝继承的函数
            // return utils.copy(objs[0]);
            return objs[0];
        }
        let result = target;
        for (let obj of objs) {
            // 首先判断对象是否冻结（冻结的对象为只读对象，其属性不可直接更改），直接覆盖
            // 其次判断两个数据的格式，只有两个数据都为引用类型时，才需要循环合并
            // 然后判断对象是否为直接继承自Object，如果不是，复杂对象不再深层遍历，直接覆盖
            // array 应该直接覆盖，否则数组的值只增不减
            if (!Object.isFrozen(result)
                && utils.typeof(result, 'object')
                && utils.typeof(obj, 'object')
                && utils.directInstanceof(result, Object)) {
                for (let i in obj) {
                    if (filter.indexOf(i) === -1) {
                        result[i] = utils.merge(level - 1, result[i], obj[i]);
                    } else {
                        result[i] = utils.clone(obj[i]);
                    }
                }
            } else {
                // update at 2018/01/19，undefined的值也要覆盖，否则影响form中select的清空功能
                // result = obj === undefined ? target : obj;
                // update at 2018/10/24，使用clone，防止多个对象merge时，深层的对象的源数据会被改变。例如：utils.merge({}, a, b); a 对象的 a.b.c 的值会被 b.b.c 改变
                //  但是多出来的大量clone需要考虑是否会有性能问题
                // result = obj;
                result = utils.clone(obj);
            }
        }
        return result;
    },
    // 从obj中过滤掉某些属性
    filter(obj, arr) {
        if (utils.typeof(arr, 'string')) {
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
    pass(...params) {
        return utils.reverseFilter(...params);
    },
    reverseFilter(obj, arr) {
        if (utils.typeof(arr, 'string')) {
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
    // 对比两个值是否相等
    // 注意：不要随意切换其余的对比函数，例如underscore的isEqual
    equals(value1, value2) {
        // 检测类型，类型一致才继续后续的对比
        if (utils.getType(value1) !== utils.getType(value2)) {
            return false;
        }
        // 普通类型校验
        if (value1 === value2) {
            return true;
        }
        // 对象或数组的话，只检查了一层
        if (utils.typeof(value1, ['object', 'array'])) {
            let keys = Object.keys(Object.assign({}, value1, value2));
            for (let i of keys) {
                // 如果是函数，把函数转换成字符串再做比较。否则如果函数声明两次，用is比较返回的是false
                if (utils.typeof(value1[i], 'function') && utils.typeof(value2[i], 'function')) {
                    if (utils.toString(value1[i]) !== utils.toString(value2[i])) {
                        return false;
                    }
                    // } else if (!Object.is(value1[i], value2[i])) {
                } else if (!Object.is(value1[i], value2[i]) && !underscore.isEqual(value1[i], value2[i])) {
                    return false;
                }
            }
            return true;
        }
        // 包括：function、null、undefined、regexp、number、string、boolean、date ...
        if (utils.toString(value1) === utils.toString(value2)) {
            return true;
        }
        return false;
    },
    // 检查是否有改变内容。与equals的区别是，仅检测newVal中的值相对于oldVal相应的值是否发生了变化
    //  注意：newVal是oldVal的子集且值没有变化时，返回的是false
    isChange(newVal, oldVal) {
        // 检测类型，类型一致才继续后续的对比
        if (utils.getType(newVal) !== utils.getType(oldVal)) {
            return true;
        }
        if (utils.typeof(newVal, ['object', 'array'])) {
            for (let i of Object.keys(newVal)) {
                if (utils.isChange(newVal[i], oldVal[i])) {
                    return true;
                }
            }
        }
        if (utils.toString(newVal) !== utils.toString(oldVal)) {
            return true;
        }
        return false;
    },
    // 获取变化的内容
    getChange(newVal, oldVal) {
        let result = {};
        for (let i of Object.keys(newVal)) {
            if (!utils.equals(newVal[i], oldVal[i])) {
                result[i] = newVal[i];
            }
        }
        return result;
    },
    // 子串是否处于字符串最末尾
    isLast(sub, str) {
        return str.lastIndexOf(sub) === str.length - sub.length;
    },
    // each 遍历对象属性，类似于jQuery的each函数，方便react的render函数中遍历对象
    // callback 为回调函数，支持三个参数：依次是 item, index, obj
    // 注意：返回结果随着传入的参数变化，如果传入的是数组，则返回数组；如果传入的是对象，则返回对象
    each(obj, callback) {
        let result = utils.typeof(obj, 'array') ? [] : {};
        for (let i in obj) {
            result[i] = callback(obj[i], i, obj);
        }
        return result;
    },
    // map 遍历对象属性，类似于上面的each
    // 不同点在于：永远返回数组，对象也会遍历成数组
    map(obj, callback) {
        let result = [];
        for (let i in obj) {
            result.push(callback(obj[i], i, obj));
        }
        return result;
    },
    // 把多数组嵌套层级拉平
    drawLevel(arr) {
        let result = [];
        arr.forEach(item => {
            if (utils.typeof(item, 'array')) {
                item = utils.drawLevel(item);
            }
            result = result.concat(item);
        });
        return result;
    },
    // 遍历深层数组
    // 多层数组嵌套，保证原来数组层级的情况下遍历数组，值到值不为数组，并对每一项执行函数func
    traverse(arr, func) {
        if (utils.typeof(arr, 'array')) {
            return arr.map(item => utils.traverse(item, func));
        }
        return func(arr);
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
    // 转换为字符串，原生的toString方法不适用于undefined，null等
    toString(value) {
        return '' + value;
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
        if (utils.getType(type) === 'string') {
            return utils.getType(value) === type;
        } else if (utils.getType(type) === 'array') {
            return type.indexOf(utils.getType(value)) !== -1;
        } else {
            return false;
        }
    },
    // 把中横线命名的字符串转换成帕斯卡命名形式
    toPascal(str) {
        return (str || '').split('-').map(i => i.replace(/^\w/g, v => v.toUpperCase())).join('');
    },
    // 下划线转换驼峰
    toHump(str) {
        return (str || '').replace(/\_(\w)/g, (all, letter) => {
            return letter.toUpperCase();
        });
    },
    // 驼峰转换下划线
    toLine(str) {
        return (str || '').replace(/([A-Z])/g, '_$1').toLowerCase();
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
        if (!utils.typeof(cls, 'array')) {
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
        if (utils.typeof(data, 'array')) {
            // ['value', 'value2']
            if (utils.typeof(data[0], ['string', 'number', 'boolean'])) {
                result = utils.distinct(data).map(v => ({label: v, value: v}));
                // 如果数据无需格式化，直接返回
            } else if (data[0] && data[0].label !== undefined && data[0].value !== undefined) {
                result = data;
                // 可以处理以下几种格式的数据
                // {label: 'a', value: 1}
                // {key: 1, value: 'a'}
                // {id: 1, name: 'a'}
            } else {
                result = data.map(v => (
                    (v.key !== undefined && v.value !== undefined)
                        ? v.children
                            ? {label: v.value, value: v.key, children: utils.toOptions(v.children)}
                            : {label: v.value, value: v.key}
                        : (v.id !== undefined && v.name !== undefined)
                            ? v.children
                                ? {label: v.name, value: v.id, children: utils.toOptions(v.children)}
                                : {label: v.name, value: v.id}
                            : v
                )
                );
            }
        } else if (utils.typeof(data, 'object')) {
            // {key: value}
            for (let i in data) {
                // 如果 data 的值还是对象，则不是简单的键值对，很可能是 键-原数据对象 的结构
                if (utils.typeof(data[i], 'object')) {
                    return utils.toOptions(Object.values(data));
                }
                let item = {
                    label: data[i],
                    value: i
                };
                // true 选项移到首位
                if (i.toString().toLowerCase() === 'true') {
                    result.unshift(item);
                } else {
                    result.push(item);
                }
            }
        }
        return result;
    },
    // 从options结构中取值并形成一个新的数组（或者是类似于options的结构）
    // 可以取value或label
    // fromOptions(data, propName) {
    //     let format = utils.toOptions(data);
    //     return format.map(item=>item[propName]);
    // },
    // 获取options数据中的第一个值
    getFirstOption(data) {
        let format = utils.toOptions(data);
        if (format[0]) {
            return format[0].value;
        }
    },
    // 把数据格式化成json展示
    prettyJson(data, origin) {
        if (origin) {
            return utils.syntaxHighlight(data);
        }
        return {
            type: 'pre',
            className: 'json',
            dangerouslySetInnerHTML: {__html: utils.syntaxHighlight(data)}
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
                if (!target || !utils.typeof(target, 'object')) {
                    return undefined;
                }
                target = target[v];
            }
        }
        return target;
    },
    // 根据一个字符串，把数据塞入一个深层的对象中
    toObject(origin, strc, value) {
        let tData = utils.generateObject(strc, value);
        let level = strc.split('.').length;
        utils.merge(level, origin, tData);
    },
    // url中如果有类似于`:id`这种形式的动态参数，则替换成对应的参数值
    urlAnalysis(url, params, delParams = true) {
        if (!url || url.indexOf(':') === -1 || !utils.typeof(params, 'object')) {
            return url;
        }
        let matched = '';
        for (let i in params) {
            // 匹配一个最长的
            if (url.indexOf(`:${i}`) > -1 && matched.length < i.length) {
                matched = i;
            }
        }
        if (matched) {
            url = url.replace(`:${matched}`, params[matched]);
            delParams && (delete params[matched]);
            url = utils.urlAnalysis(url, params, delParams);
        }
        return url;
    },
    // 想某个对象上的某个函数注入额外逻辑
    // 参数依次为 父级、目标函数、新函数、是否把原来逻辑提前、bind的对象
    inject(parent, target, newFunc, oldAhead = false, utilsObj = null) {
        let origin = parent[target];
        parent[target] = !!origin
            ? (...params) => {
                // return原函数执行结果
                let result;
                oldAhead ? (result = origin.call(utilsObj, ...params)) : null;
                // 如果注入的逻辑返回false，可阻止原函数的继续执行（前提是原函数后执行）
                let newResult = newFunc.call(utilsObj, ...params);
                !oldAhead && newResult !== false ? (result = origin.call(utilsObj, ...params)) : null;
                // TODO: 返回哪个结果有待斟酌，目前代码之间的相互限制有点多
                //  好像还不能随便return，比如可能会得到预期之外的结果
                // return result || newResult;
                return result;
            }
            : (utilsObj ? newFunc.bind(utilsObj) : newFunc);
        // 被替换函数标记
        parent[target].replaced = true;
        return parent;
    },
    // 延迟执行
    // debounce(func, delay) {
    // }
    getCache(key) {
        let result = localStorage.getItem(key);
        if (result) {
            return JSON.parse(result);
        } else {
            return result;
        }
    },
    setCache(key, value) {
        value = JSON.stringify(value);
        return localStorage.setItem(key, value);
    },
    getSession(key) {
        let result = sessionStorage.getItem(key);
        if (result) {
            return JSON.parse(result);
        } else {
            return result;
        }
    },
    setSession(key, value) {
        value = JSON.stringify(value);
        return sessionStorage.setItem(key, value);
    },
    // 遍历一个数组，从数组里取出某两个字段，组合成键值对数据
    // 如更不传valueName，则相当于把keyName的值提出来当key，整条数据为value
    detachToMap(arr, keyName, valueName = null) {
        let obj = {};
        utils.each(arr, v => {
            v[keyName] && (obj[v[keyName]] = valueName ? v[valueName] : v);
        });
        return obj;
    },
    // 多变参数格式化工具，保证格式化后必需为对象
    //  使用场景，参数既可以为一个对象，也可以简写为某个对象的属性，不管使用哪种方式，此函数可以统一格式成对象的形式
    //  第一个参数为参数值，第二个参数为简写时对应的属性名称
    // 例如：api/source/control 系列参数，api即可以写成一个url字符串，也可以是一个对象
    varietyFormat(value = {}, attr) {
        if (!utils.typeof(value, 'object')) {
            value = {[attr]: value};
        }
        return value;
    },
    // 重试功能
    // 间隔 interval 的时间，重试 time 次，直到 func 执行成功
    // 如果func返回false，则继续重试。否则终止重试
    retry(func, interval = 200, time = 5) {
        let count = 1;
        let handler = () => {
            let result = func();
            if (result !== false || count > time) {
                return result;
            } else {
                setTimeout(handler, interval);
            }
            count++;
        };
        handler();
    },
    // 批量绑定对象中函数的执行环境
    batchBind(obj, target) {
        let result = {};
        for (let i in obj) {
            if (obj.hasOwnProperty(i) && utils.typeof(obj[i], 'function')) {
                result[i] = obj[i].bind(target);
            } else {
                result[i] = obj[i];
            }
        }
        return result;
    },

    /************************************************************************/
    // 私有方法
    syntaxHighlight(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 4);
        }
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        let reg = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g;
        return json.replace(reg, match => {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    try {
                        let type = JSON.parse(match);
                        if (typeof (JSON.parse(type)) === 'object') {
                            return utils.syntaxHighlight(JSON.parse(type));
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
});

export default utils;
