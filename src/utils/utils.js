/**
 * @file 一些常用的函数工具
 * @author liuzechun
 **/

import _utils from './_utils.js';
import underscore from 'underscore';
import moment from 'moment';

// 引入了underscore的功能，并在其上增加了自定义的一些函数
const utils = Object.assign({}, _utils, {
    // 如果要使用原生的功能，可通过 _ 来访问
    _: underscore,
    // 如果数据合法，返回moment数据；否则返回null
    moment(...params) {
        let result = moment(...params);
        if (result.isValid()) {
            return result;
        }
        return params[0];
    },
    // 获取数组的交集
    without(...params) {
        return underscore.without(...params);
    },
    // 获取数组的交集
    difference(...params) {
        return underscore.difference(...params);
    },
    // 获取数组的交集
    intersection(...params) {
        return underscore.intersection(...params);
    },
    // 数组是否有交集
    isIntersection(...params) {
        return underscore.intersection(...params).length > 0;
    }
});

export default utils;
