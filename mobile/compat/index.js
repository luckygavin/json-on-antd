/**
 * @file 伪装原来Antd提供的功能，以兼容uf框架通用逻辑
 *
 * Author: liuzechun (liuzechun@baidu.com)
 * Created: 2019-01-09 20:25:23
 */

module.exports = {
    message: require('./message.js').default,
    Spin: require('./Spin.js').default
};