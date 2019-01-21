/**
 * @file Layout 类组件
 * @author liuzechun
 */
import {Utils} from 'src/utils';
import UF from 'src';
import WhiteList from 'src/config/whitelist';
import {getInstance} from 'src/tools/instance.js';
import * as Antd from 'antd';

/************* message 提示 ************************************************************************** */

// 保存当前未销毁的提示信息的销毁函数
let currentMessageHandle = {};
let messageAutoMerge = true;
// 统一处理config（某些属性需要二次解析）
function messageHandler(type, insName, config, duration, onClose, ...params) {
    // key 相同的提示信息只展示一个
    let key = Utils.hash({type, config});
    if (messageAutoMerge && currentMessageHandle[key]) {
        // 先创建，再销毁
        Utils.defer(currentMessageHandle[key]);
    }
    // 重写onClose函数
    let closeHandler = (...p) => {
        delete currentMessageHandle[key];
        onClose && onClose(...p);
    };
    if (Utils.typeof(config, ['object', 'array'])) {
        config = (getInstance(insName) || UF).render(config);
    }
    // 保存销毁函数，当key相同时，先销毁旧的，重新创建新的
    let distroy = Antd.message[type](config, duration, closeHandler, ...params);
    currentMessageHandle[key] = distroy;
    return distroy;
}
// 拦截 message.config ，加入自定义参数处理
function messageConfHandler(insName, conf) {
    if (conf.autoMerge !== undefined) {
        messageAutoMerge = conf.autoMerge;
    }
    return Antd.message.config(Utils.filter(conf, ['autoMerge']));
}

export const message = Object.assign({}, Antd.message, {
    success: messageHandler.bind(null, 'success'),
    error: messageHandler.bind(null, 'error'),
    info: messageHandler.bind(null, 'info'),
    warning: messageHandler.bind(null, 'warning'),
    warn: messageHandler.bind(null, 'warn'),
    loading: messageHandler.bind(null, 'loading'),
    config: messageConfHandler.bind(null)
});
// 用于生成已绑定实例的组件
function factory(comp) {
    return insName => Utils.each(comp, item => Utils.typeof(item, 'function') ? item.bind(null, insName) : item);
}
message.init = factory(message);


/************* notification 提示 ************************************************************************** */
// 保存当前未销毁的提示信息的销毁函数
let currentNotificationHandle = {};
let notificationAutoMerge = true;
// 统一处理config（某些属性需要二次解析）
function notificationHandler(type, insName, config) {
    if (notificationAutoMerge) {
        // key 相同的提示信息只展示一个
        if (config.key) {
            Antd.notification.close(config.key);
        } else {
            // 如果没有key，则生成一个唯一key。并根据配置生成一个hash值，保存生成的唯一key（用于销毁）
            let hashKey = Utils.hash({type, config});
            Utils.defer(Antd.notification.close, currentNotificationHandle[hashKey]);
            let key = Utils.uniqueId();
            currentNotificationHandle[hashKey] = key;
            config.key = key;
        }
    }
    let list = WhiteList.get(config, 'notification');
    for (let v of list) {
        config[v] = (getInstance(insName) || UF).render(config[v]);
    }
    return Antd.notification[type](config);
}
// 拦截 notification.config ，加入自定义参数处理
function notificationConfHandler(insName, conf) {
    if (conf.autoMerge !== undefined) {
        notificationAutoMerge = conf.autoMerge;
    }
    return Antd.notification.config(Utils.filter(conf, ['autoMerge']));
}

export const notification = Object.assign({}, Antd.notification, {
    success: notificationHandler.bind(null, 'success'),
    error: notificationHandler.bind(null, 'error'),
    info: notificationHandler.bind(null, 'info'),
    warning: notificationHandler.bind(null, 'warning'),
    warn: notificationHandler.bind(null, 'warn'),
    open: notificationHandler.bind(null, 'open'),
    config: notificationConfHandler.bind(null)
});

// 用于生成已绑定实例的组件
notification.init = factory(notification);
