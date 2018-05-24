/**
 * @file 通用的请求发送+错误处理工具
 *       全部请求都通过这里处理
 *       request参数为一个对象，即reqwest这个库需要的参数的对象
 *          但是有几个参数需要注意：
 *              success: 不是指请求成功执行的函数，而是请求的数据符合预期，可以正常使用的处理函数(即 'HTTP Status Code' === 200 && data.status === 0)
 *              error:   除了请求出错，还有请求不符合预期都会触发error (即 'HTTP Status Code' !== 200 || data.status !== 0)
 *                       >> tips: 如果error执行完返回true，则会继续执行默认的error处理函数
 *              onchange: 请求开始/结束时执行。
 *                      开始执行请求时执行 onchange 参数为 (true, 'sending');
 *                      请求完成时执行 onchange 参数为 (false, 'success'/'error')
 *
 * @author liuzechun@baidu.com
 * **/
import {notification} from 'antd';
import Utils from './utils.js';
import Config from 'src/cache/config.js';
import AjaxCache from 'src/cache/ajaxData.js';
import reqwest from 'reqwest';

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
    } catch(e) {
        console.warn(e);
    }
    return message;
}

// 请求出错的处理函数
function errorMessage(error) {
    let message = getErrorMsg(error);
    notification.error(Object.assign({}, errorMsg, !message ? null : {
        description: message
    }));
    return false;
}

function request (config) {
    let globalAjax = Config.get('global.ajax');
    let successHandler = config.success;
    // 如果需要做缓存，key不为空
    if (AjaxCache.getCacheKey(config)) {
        // 如果能获取到缓存数据，则直接以此数据作为success的返回值，中断真正的ajax调用
        let cacheData = AjaxCache.getCacheData(config);
        if (cacheData) {
            // 异步
            setTimeout(()=>config.success(...cacheData), 0);
            return;
        }
        // 否则继续执行。调用success函数之前，增加缓存当前全部参数的逻辑
        let oSuccess = config.success;
        successHandler = (...params)=>{
            AjaxCache.setCacheData(config, params);
            oSuccess(...params);
        };
    }
    // 使successHandler不为空
    !successHandler && (successHandler = ()=>{});
    // 如果是null或者false等，则不执行错误处理；如果是true，则执行默认错误处理
    let errorHandler = !config.error ? (()=>{}) : (config.error || errorMessage);
    if (config.error === true) {
        errorHandler = errorMessage;
    }
    // onchange 为请求前后执行，开始执行请求返回参数true，请求完成返回参数false
    let onchange = config.onchange || (()=>{});
    // 配置合并
    config = Object.assign({
            method: 'get',
            type: 'json'
        },
        globalAjax,
        config,
        {
            data: config.data || config.params
        }
    );
    // 用户可配置通用数据处理方法，比如把传入的参数序列化
    if (globalAjax.beforeSend) {
        config.data = globalAjax.beforeSend(config.data, config);
    }

    onchange(true, 'sending');
    let final = Object.assign({}, config,
        {
            success: res=>{
                // 如果用户配置了success处理逻辑，则按照用户配置的逻辑做处理
                if (globalAjax.success) {
                    let result = globalAjax.success(res, successHandler, errorHandler, config);
                    onchange(false, 'success');
                    return result;
                }
                // 兼容 message/msg、status/code
                res.status = res.status || res.code || 0;
                res.message = res.message || res.msg;
                res.msg = res.message;
                if (+res.status === 0) {
                    successHandler(res.data, res);
                } else {
                    // 如果错误处理函数返回 true，则继续执行 errorHandle 把错误提示抛出
                    let result = errorHandler(res);
                    // handler有返回值，则执行默认错误提示
                    if (result) {
                        if (result === true) {
                            errorMessage(err);
                        } else {
                            errorMessage(result);
                        }
                    }
                }
                onchange(false, 'success');
            },
            error: err=>{
                // 如果用户配置了success处理逻辑，则按照用户配置的逻辑做处理
                let result;
                if (globalAjax.error) {
                    result = globalAjax.error(err, errorHandler, config);
                } else {
                    result = errorHandler(err);
                }
                // handler有返回值，则执行默认错误提示
                if (result !== false) {
                    if (result === true) {
                        errorMessage(err);
                    } else {
                        errorMessage(result);
                    }
                }
                onchange(false, 'error');
            }
        }
    );

    reqwest(final);
}

request.init = function (url, method) {
    return function (params, success, error, onchange) {
        request({
            url: url,
            method: method,
            data: params,
            onchange: onchange,
            success: success,
            error: error
        });
    }
}

// 增加 RESTful 函数
for (let v of ['get', 'post', 'put', 'delete']) {
    request[v] = function(url, params, success, error, onchange) {
        request.init(url, v)(params, success, error, onchange);
    }
}

// 抛出错误处理函数
request.errorMessage = errorMessage;

// 通用ajax函数，参数为一个对象
export default request;
