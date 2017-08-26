/**
 * @file index.js 汇总所有 src 里对用户暴露的组件
 * @author liuzechun@baidu.com
 */
import Antd from './antd';

module.exports = Object.assign(
    // antd 组件统一迁移，见 src/antd/index.js
    Antd,
    // 其他自己实现/封装的组件
    {
        // Table: require('./table').default,
        Form: require('./form')
    }
);
