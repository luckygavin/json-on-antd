/**
 * @file 假的 notification 组件
 *
 * Author: liuzechun (liuzechun@baidu.com)
 * Created: 2019-01-09 20:28:09
 */

import {Toast} from 'antd-mobile';

function notificationHandler(type, config) {
    Toast[type](config.description.length > 20 ? config.description.slice(0, 20) + '...' : config.description);
}

export default {
    success: notificationHandler.bind(null, 'info'),
    error: notificationHandler.bind(null, 'info'),
    info: notificationHandler.bind(null, 'info'),
    warning: notificationHandler.bind(null, 'info'),
    warn: notificationHandler.bind(null, 'info'),
    open: notificationHandler.bind(null, 'info'),
    close: () => {},
    config: () => {},
    destroy: () => {}
};