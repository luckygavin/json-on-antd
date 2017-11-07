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
import Config from 'uf/cache/config.js';
import reqwest from 'reqwest';

const errorMsg = {
    top: 24,
    message: '请求出错:',
    description: '请求数据时出错，请稍后重试。',
    duration: 3.5
};

// 请求出错的处理函数
function errorMessage(error = {}) {
    notification.error(Object.assign({}, errorMsg, !error.message ? null : {
        description: error.message
    }));
}

function request (config) {
    let globalAjax = Config.get('global')['ajax'];
    let successHandler = config.success;
    let errorHandler = config.error || errorMessage;
    // onchange 为请求前后执行，开始执行请求返回参数true，请求完成返回参数false
    let onchange = config.onchange || (()=>{return});
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
    reqwest(Object.assign(config,
        {
            success: res=>{
                // 如果用户配置了success处理逻辑，则按照用户配置的逻辑做处理
                if (globalAjax.success) {
                    globalAjax.success(res, successHandler, errorHandler);
                    onchange(false, 'success');
                    return;
                }
                // 兼容 message/msg、status/code
                res.status = res.status || res.code || 0;
                res.message = res.message || res.msg;
                if (+res.status === 0) {
                    successHandler(res.data, res);
                } else {
                    // 如果错误处理函数返回 true，则继续执行 errorHandle 把错误提示抛出
                    if (errorHandler(res) === true) {
                        errorMessage(res);
                    }
                }
                onchange(false, 'success');
            },
            error: err=>{
                // 如果用户配置了success处理逻辑，则按照用户配置的逻辑做处理
                if (globalAjax.error) {
                    globalAjax.error(err, errorHandler);
                    onchange(false, 'success');
                    return;
                }
                if (errorHandler(err) === true) {
                    errorMessage(err);
                }
                onchange(false, 'error');
            }
        },
        // 用户自己配置的处理逻辑
        // Config.get('global')['ajax']
    ));
};

request.get = function(url, params, success, error, onchange) {
    request({
        url: url,
        method: 'get',
        data: params,
        onchange: onchange,
        success: success,
        error: error
    });
}

request.post = function(url, params, success, error, onchange) {
    request({
        url: url,
        method: 'post',
        data: params,
        onchange: onchange,
        success: success,
        error: error
    });
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

// 抛出错误处理函数
request.errorMessage = errorMessage;

// 通用ajax函数，参数为一个对象
export default request;

