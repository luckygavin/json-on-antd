/**
 * @file Ajax 的插件，包含 数据缓存、请求合并、生成错误信息 等功能
 * @author liuzechun@baidu.com
 * **/

import {notification} from 'antd';
import Utils from './utils.js';
import AjaxCache from 'src/cache/ajaxData.js';

// Ajajx队列，用于缓存待执行的 ajax 回调函数相关内容
const ajaxQueue = {};

const errorMsg = {
    top: 24,
    message: '请求出错',
    description: '请求数据时出错，请稍后重试。',
    duration: 3.5
};

// 获取错误信息
function getErrorMsg(error) {
    let message;
    try {
        if (Utils.typeof(error, 'string')) {
            message = error;
        } else if (Utils.typeof(error, 'object') && error.message) {
            message = error.message;
            if (Utils.typeof(message, 'array')) {
                message = message.join('; ');
            }
        } else {
            message = JSON.stringify(error);
        }
    } catch (e) {
        console.error(`Error: There is something wrong in function \`getErrorMsg\` of \`ajax\`: ${e}`);
    }
    return message;
}

// 请求出错的提示信息函数
export function errorMessage(error) {
    let message = getErrorMsg(error);
    notification.error(Object.assign({}, errorMsg, !message ? null : {
        description: message
    }));
    return false;
}

/**
 * 检查是否有缓存
 *
 * @param {Object} config ajax的配置
 * @return {boolean} 如果有直接调用缓存数据，返回true，否则返回false
 */
export function checkCache(config) {
    // 如果需要做缓存，key不为空
    let key = AjaxCache.getCacheKey(config);
    if (key) {
        // 如果能获取到缓存数据，则直接以此数据作为success的返回值，中断真正的ajax调用
        let cacheData = AjaxCache.getCacheData(key);
        if (cacheData) {
            // 保证异步
            setTimeout(()=>config.success(...cacheData), 0);
            return true;
        }
        // 给success函数插入缓存逻辑，数据返回后先对数据进行缓存
        Utils.inject(config, 'success', (...params)=>{
            AjaxCache.setCacheData(key, params);
        });
    }
    return false;
}

/**
 * 执行队列中缓存的待执行逻辑
 *
 * @param {string} key 调用处传入，保证一致性
 * @param {string} result 执行结果：success/error
 * @param {...*} params 执行函数所需的参数列表
 */
function executeQueue(key, result, ...params) {
    if (ajaxQueue[key] && ajaxQueue[key].length > 0) {
        for (let v of ajaxQueue[key]) {
            v[result] && v[result](...params);
        }
    }
    delete ajaxQueue[key];
}

/**
 * 检查当前是否已有相同的请求正在进行中
 * 如果有，则把后续逻辑放入队列中，中断后续逻辑。待请求返回数据后统一调用
 *
 * @param {Object} config ajax的配置
 * @return {boolean} 如果有，则返回true，否则返回false
 */
export function checkQueue(config) {
    let key = Utils.hash(config, 32);
    // 如果有则代表有相同请求在进行中，直接把当前的config缓存起来
    if (ajaxQueue[key]) {
        ajaxQueue[key].push(config);
        return true;
    } else if (config.merge !== false) {
        ajaxQueue[key] = [];
        // 给 success、error 函数插入逻辑：ajax完成后调用队列中全部待执行逻辑，并依次执行
        Utils.inject(config, 'success', (...params)=>{
            executeQueue(key, 'success', ...params);
        }, true);
        Utils.inject(config, 'error', (...params)=>{
            executeQueue(key, 'error', ...params);
        }, true);
    }
    return false;
}
