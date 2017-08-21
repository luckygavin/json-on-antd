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
    // 数字前面补充0, num: 数字；n: 数字的位数
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
    // 复制对象，仅能复制对象属性，不能复制对象的方法
    clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    // 对比两个对象是否相等
    equals(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    },
    // 是否处于字符串最末尾
    isLast(sub, str) {
        return str.lastIndexOf(sub) === str.length - sub.length;
    },
    /**
     * each 遍历对象属性，类似于jQuery的each函数，方便react的render函数中遍历对象
     * @param {Object} obj 需遍历的对象
     * @param {Function} callback 为回调函数，支持三个参数：依次是 item, index, obj
     * @return {Array} 返回值为一个数组
     */
    each(obj, callback) {
        let result = [];
        for (let i in obj) {
            result.push(callback(obj[i], i, obj));
        }
        return result;
    },
    /**
     * 根据路由模式生成真实的链接
     * @param {string} pattern  路由模式，如：#/visual/room/:room/realMode/:rack_col/:sn
     * @param {Object} data 真实数据，模式中的:room即在data中取room字段的值
     * @return {string}
     */
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
    // 页面跳转工具
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
    get(url) {
        
    }
};

export default Utils;
