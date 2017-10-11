/**
 * @file 一些常用的函数工具
 * @author liuzechun
 **/
import Ajax from './ajax';
// import underscore from 'underscore';

const I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
const s4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

const Utils = {
    // 数字前面补充0
    padNum(num, n) {
        let len = ('' + num).length;
        return Array(n > len ? (n - len + 1) : 0).join(0) + num;
    },
    // 生成随机唯一ID
    uniqueId() {
        return (s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4());
    },
    // 字符串哈希
    hash(text) {
        let hash = 5381;
        text = JSON.stringify(text);
        let i = text.length - 1;
        for (; i > -1; i--) {
            hash += (hash << 5) + text.charCodeAt(i);
        }
        let value = hash & 0x7FFFFFFF;
        let retValue = '';
        do {
            retValue += I64BIT_TABLE[value & 0x3F];
        } while (value >>= 6);
        return retValue;
    },
    // 在数组1中但不在数组2中
    arrayDiff(array1, array2) {
        let o = {};
        let res = [];
        for (let i in array2) {
            o[array2[i]] = true;
        }
        for (let j in array1) {
            if (!o[array1[j]]) {
                res.push(array1[j]);
            }
        }
        return res;
    },
    // 两个数组取交集
    arrayIntersect(array1, array2) {
        let res1 = this.arrayDiff(array1, array2);
        let res2 = this.arrayDiff(array2, array1);
        return this.arrayDiff(array1.concat(res2), res1.concat(res2));
    },
    // 多个数组取交集
    arrayIntersectMulti() {
        // 二维数组
        let twoDimenArray = arguments[0];
        let interArray = [];
        for (let i = 0, len = twoDimenArray.length; i < len - 1; i++) {
            let interArray = this.arrayIntersect(twoDimenArray[i], twoDimenArray[i + 1]);
            twoDimenArray[i + 1] = interArray;
        }
        return interArray;
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
    // level 为深拷贝的层级，默认一直遍历到最深层
    clone(data, level) {
        // undefined <= 0 (false)
        // null <= 0 (true)
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
                newData[i] = this.clone(data[i], this.typeof(level, 'number') ? level - 1 : undefined);
            }
        }
        return newData;
    },
    // 以第一个对象为目标，依次把后面的对象merge到上去，支持深层的merge，类似于一个深层的 Object.assign()
    // level 参数为拷贝层数，不传则循环遍历所有属性
    // ** 只试用与JSON等对象字面量的对象，比较复杂的对象（如包含只读属性等）的对象会报错
    merge(level, target, ...objs) {
        if (!Utils.typeof(level, 'number')) {
            objs.unshift(target);
            target = level;
            level = 5;
        }
        if (level <= 0) {
            return objs[0];
        }
        let result = target;
        for (let obj of objs) {
            // 首先判断对象是否冻结（冻结的对象为只读对象，其属性不可直接更改）
            // 其次判断两个数据的格式，只有两个数据都为引用类型时，才需要循环合并
            // 然后判断对象是否为直接继承自Object/Array，如果不是，复杂对象不再深层遍历，直接拷贝
            if (!Object.isFrozen(result)
                // array 应该直接覆盖，否则数组的值只增不减
                // && Utils.typeof(result, '['array', 'object']')
                // && Utils.typeof(obj, '['array', 'object']')
                && Utils.typeof(result, 'object')
                && Utils.typeof(obj, 'object')
                && this.directInstanceof(result, [Object, Array])) {
                for (let i in obj) {
                    result[i] = this.merge(level - 1, result[i], obj[i]);
                }
            } else {
                result = obj === undefined ? target : obj
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
    // 对比两个对象是否相等
    // 只检查了一层
    equals(obj1, obj2) {
        // 方式1
        // return JSON.stringify(obj1) === JSON.stringify(obj2);
        // 方式2
        // return underscore.isEqual(obj1, obj2);
        // 方式3
        for (let i in obj1) {
            if (!Object.is(obj1[i], obj2[i])) {
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
    goto(path) {
        // 如果path不是已#/开头，且不是/开头，则加上#/
        path = path.indexOf('#/') !== 0
            ? (path.indexOf('/') !== 0 ? '#/' + path : path)
            : path;
        let nowPath = window.location.hash;
        if (path !== nowPath && path !== '') {
            // 之所以不用hashHistory.push()是因为会自动执行两次push
            window.location.href = path;
        }
    },
    // 获取数据的类型，返回的类型名称为全小写
    // 包括：object、array、function、null、undefined、regexp、number、string、boolean、date ...
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
    // 判断组件是否继承自某个类（类名）
    // 根据组件的引用（通过import获得）判断，支持深层查找
    isExtendsOf(item, superName) {
        // item.prototype.constructor.__proto__.__proto__.name
        let Item = item.prototype && item.prototype.constructor;
        while(Item) {
            if (Item.name === superName) {
                return true;
            }
            Item = Item.__proto__
        };
        return false;
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
    }
};

export default Utils;
