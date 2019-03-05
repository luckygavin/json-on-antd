/**
 * @file 假的 notification 组件
 *
 * Author: liuzechun (liuzechun@baidu.com)
 * Created: 2019-01-09 20:28:09
 */

import {Toast} from 'antd-mobile';
import {Utils} from 'src/utils';

function notificationHandler(type, config) {
    let description = config.description;
    if (Utils.typeof(config.description, 'array')) {
        description = config.description[0];
    }
    if (Utils.typeof(description, 'string')) {
        Toast[type](description.length > 20 ? description.slice(0, 20) + '...' : description);
    }
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