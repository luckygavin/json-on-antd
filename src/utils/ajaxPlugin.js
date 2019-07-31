/**
 * @file Ajax 的插件，包含 数据缓存、请求合并、生成错误信息 等功能
 * @author liuzechun
 * **/

import Utils from './utils.js';
import UF from 'src';

const selfProps = [
    'originConf',
    'cache', 'localStorage', 'requestMerge', 'target', 'paramsHandler', 'paramsIndex',
    'interrupt', 'removeEmptyParams', 'handler', 'onSuccess', 'onError', 'autoLoad',
    'autoReload', 'showLoading'
];

// Ajajx队列，用于缓存待执行的 ajax 回调函数相关内容
const ajaxQueue = {};

const errorMsg = {
    top: 24,
    message: '请求出错',
    description: '获取数据时出现错误，请稍后重试。',
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
            message = error ? JSON.stringify(error) : '';
        }
    } catch (e) {
        Utils.defer(console.error, `Error: There is something wrong in function \`getErrorMsg\` of \`ajax\`: ${e}`);
    }
    return message;
}

function showErrorMsg(error) {
    UF.Modal.create({
        title: [
            {type: 'icon', mode: 'frown-o'},
            ' 错误详情'
        ],
        maskClosable: true,
        footer: null,
        content: JSON.stringify(error)
        // content: {
        //     type: 'markdown',
        //     docs: '```' + JSON.stringify(error) + '```'
        // }
    });
}

// 请求出错的提示信息函数
export function errorMessage(error) {
    let message = getErrorMsg(error);
    // 非200的错误信息处理
    if (error.status && error.status !== 200) {
        UF.notification.error(Object.assign({}, errorMsg, {
            description: [
                '服务器内部出错啦，',
                {
                    type: 'a',
                    content: '查看详情',
                    onClick() {
                        showErrorMsg(error);
                    }
                }
            ]
        }));
    } else {
        UF.notification.error(Object.assign({}, errorMsg, !message ? null : {
            description: message
        }));
    }
    return false;
}

/**
 * 检查是否有缓存
 *
 * @param {Object} config ajax的配置
 * @param {Class} AjaxCache 工具类
 * @return {boolean} 如果有直接调用缓存数据，返回true，否则返回false
 */
export function checkCache(config, AjaxCache) {
    // 如果需要做缓存，key不为空
    let key = AjaxCache.getCacheKey(config);
    if (key) {
        // 如果能获取到缓存数据，则直接以此数据作为success的返回值，中断真正的ajax调用
        let cacheData = AjaxCache.getCacheData(key);
        if (cacheData) {
            // 保证异步
            Utils.defer(config.success, ...cacheData);
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
 * 第一次调用接口时，检查是否有本地缓存
 * 如果有，则先执行一次config.success，使页面先执行一次成功逻辑，以不阻塞后续逻辑执行；
 * 当请求真正获取到数据后，重新再调用一次
 *
 * @param {Objcet} config ajax的配置
 * @param {Class} AjaxCache 工具类
 * @return {boolean} 如果需继续往下执行，返回true，否则返回false
 */
export function checkLocalStorage(config, AjaxCache) {
    // 如果需要做永久缓存，key不为空
    let key = AjaxCache.getLocalStorageKey(config);
    if (key) {
        // 不管能不能，中断真正的ajax调用
        let storageData = AjaxCache.getLocalStorageData(key);
        let storageDataStr;
        if (storageData) {
            storageDataStr = JSON.stringify(storageData);
            Utils.defer(config.success, storageData.data, storageData);
        }
        // 给success函数插入缓存逻辑，数据返回后先对数据进行缓存
        // Utils.inject(config, 'success', (...params) => {
        //     AjaxCache.setLocalStorageData(key, params);
        // });
        let oriSuccess = config.success;
        config.success = (data, res) => {
            // 如果数据未更新，则不再进行任何处理
            if (storageDataStr && storageDataStr === JSON.stringify(res)) {
                return;
            }
            AjaxCache.setLocalStorageData(key, res);
            oriSuccess(data, res);
        };
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
            v[result] && Utils.defer(v[result], ...params);
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
    // 过滤掉自定义属性
    let key = Utils.hash(Utils.filter(config, selfProps), 32);
    // 如果有则代表有相同请求在进行中，直接把当前的config缓存起来
    if (ajaxQueue[key]) {
        ajaxQueue[key].push(config);
        return true;
    } else if (config.requestMerge !== false) {
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

/**
 * 检查是否有mock数据接口
 *
 * @param {*} config ajax的配置
 * @param {*} mockMap
 * @return {boolean} 如果有则返回true，否则返回false
 */
export function checkMock(config, mockMap = {}) {
    let conf = config.originConf;
    if (conf.url && mockMap[conf.url]) {
        Utils.defer(()=>{
            mockMap[conf.url](config, config.success, config.error);
        });
        return true;
    }
    return false;
}

/**
 * 检查是否中断请求
 * > 可以通过返回数据，中断请求，从而使用钩子返回的数据；
 * > 如果钩子未返回任何内容，或返回true，则请求继续；
 * > 如果钩子返回false，则仅中断请求，不做任何处理
 *
 * @param {*} config ajax的配置
 * @return {boolean} 如果有则返回true，否则返回false
 */
export function checkInterrupt(config) {
    if (config.interrupt) {
        let data = config.interrupt(config);
        // 如果钩子未返回任何内容，或返回true，则请求继续
        if (data === undefined || data === true) {
            return false;
        }
        if (data !== false) {
            // 保证异步
            Utils.defer(config.success, data);
        }
        return true;
    }
}