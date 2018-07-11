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
 *              complete:
 *
 * @author liuzechun@baidu.com
 * **/

import {notification} from 'antd';
import Utils from './utils.js';
import Config from 'src/cache/config.js';
import AjaxCache from 'src/cache/ajaxData.js';
import reqwest from 'reqwest';
import {errorMessage, checkCache, checkQueue} from './ajaxPlugin.js';

function request (config) {
    // 兼容，合并两个参数
    if (config.data) {
        config.params = Object.assign({}, config.params, config.data);
        delete config.data;
    }
    let globalAjax = Config.get('global.ajax');
    // 检查是否有缓存，如果有，则直接中断后续逻辑
    if (checkCache(config)) {
        return;
    }
    // 检查当前是否已有相同的请求正在进行中，如果有，则进行请求合并并中断
    if (checkQueue(config)) {
        return;
    }
    // successHandler不为空
    let successHandler = config.success || (()=>{});
    // 如果是null或者false等，则不执行错误处理；如果是true，则执行默认错误处理
    let errorHandler = config.error;
    if ([null, false].indexOf(errorHandler) > -1) {
        errorHandler = ()=>{};
    }
    errorHandler = config.error === true ? errorMessage : config.error;
    // onchange 为请求前后执行，开始执行请求返回参数true，请求完成返回参数false
    let onchange = config.onchange || (()=>{});
    // 配置合并
    config = Object.assign({method: 'get', type: 'json'}, globalAjax, config);
    // 用户可配置通用数据处理方法，比如把传入的参数序列化
    if (globalAjax.beforeSend) {
        config.params = globalAjax.beforeSend(config.params, config);
    }
    if (globalAjax.baseUrl && config.url && config.url.indexOf('http://') === -1) {
        config.url = globalAjax.baseUrl + config.url;
    }

    onchange(true, 'sending');

    // onerror 处理逻辑
    let onerror = err => {
        // 如果用户配置了error处理逻辑，则全部按照用户配置的逻辑做处理
        if (globalAjax.error) {
            globalAjax.error(err, errorHandler, config);
        } else {
            let result = errorHandler(err);
            // handler有返回值，则执行默认错误提示
            if (result !== false) {
                if (result === true || result === undefined) {
                    errorMessage(err);
                } else {
                    errorMessage(result);
                }
            }
        }
    };
    return reqwest(Object.assign({}, config,
        {
            // url中可以使用来自params中的动态参数
            url: Utils.urlAnalysis(config.url, config.params),
            // data 可能来自 globalAjax
            data: Object.assign({}, config.params, config.data),
            success: res=>{
                // 如果用户配置了success处理逻辑，则全部按照用户配置的逻辑做处理
                if (globalAjax.success) {
                    globalAjax.success(res, successHandler, errorHandler, config);
                } else {
                    // 默认成功处理逻辑
                    // 兼容 message/msg、status/code
                    res.status = res.status || res.code || 0;
                    res.message = res.message || res.msg;
                    res.msg = res.message;
                    if (+res.status === 0) {
                        successHandler(res.data, res);
                    } else {
                        onerror(res);
                    }
                }
                onchange(false, 'success');
            },
            error: err=>{
                onerror(err);
                onchange(false, 'error');
            }
        }
    ));
}

request.init = function (url, method) {
    return function (params, success, error, onchange) {
        return request({url, method, params, success, error, onchange});
    }
}

// 增加 RESTful 函数
for (let v of ['get', 'post', 'put', 'delete']) {
    request[v] = function(url, params, success, error, onchange) {
        return request.init(url, v)(params, success, error, onchange);
    }
}

// 抛出错误处理函数
request.errorMessage = errorMessage;

// 通用ajax函数，参数为一个对象
export default request;
