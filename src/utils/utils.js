/**
 * @file 一些常用的函数工具
 * @author liuzechun
 **/
import Ajax from './ajax';

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
    // 深拷贝对象
    clone(obj, level) {
        if (level === 0) {
            return obj;
        }
        let newObj = {};
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (this.typeof(obj[i], ['array', 'object'])) {
                    newObj[i] = this.typeof(level, 'number') ? this.clone(obj[i], level - 1) : this.clone(obj[i]);
                } else {
                    newObj[i] = obj[i];
                }
            }
        }
        return newObj;
    },
    // 把第二个对象merge到第一个对象上去，支持深层的merge，类似于echarts的setOption用法
    // level 参数为拷贝层数，不传则循环遍历所有属性
    mergeObj(obj1, obj2) {
        // 首先判断两个数据的格式
        let result = obj2 === undefined ? obj1 : obj2;
        // 只有两个数据都为引用类型时，才需要循环合并
        if (this.typeof(obj1, ['array', 'object']) && this.typeof(obj2, ['array', 'object'])) {
            for (let i in obj2) {
                if (obj2.hasOwnProperty(i)) {
                    obj1[i] = this.mergeObj(obj1[i], obj2[i]);
                }
            }
            result = obj1;
        }
        return result;
    },
    // 从obj中过滤掉某些属性
    filterObj(obj, arr) {
        let newObj = {};
        for (let i in obj) {
            if (obj.hasOwnProperty(i) && arr.indexOf(i) === -1) {
                newObj[i] = obj[i];
            }
        }
        return newObj;
    },
    // 对比两个对象是否相等
    equals(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
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
    // 把中横线命名的字符串转换成帕斯卡命名形式
    toPascal(str) {
        return str.split('-').map(i=>i.replace(/^\w/g, v=>v.toUpperCase())).join('');
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
    }
};

export default Utils;
