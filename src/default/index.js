/**
 * @file 全局默认配置
 * @author liuzechun
 * Created Date: 2018-01-30 10:55:45
 */

import components from './components.js';

export default {
    insName: '_$default',
    // 模块引入相关配置
    modules: {
        // 加载模块时是否展示loading
        showLoading: false,
        paths: {
            '_$echarts': 'http://uf.baidu.com/third_party/echarts4/echarts.min'
        }
    },
    // 全局系统配置
    global: {
        // 设置文档域 document.domain，默认为原始值
        domain: document.domain,
        // ajax 的全局配置，可更改全部 ajax 规则（例如报错规则）
        ajax: {
        }
    },
    // 组件默认配置
    components,
    // 权限点，用户有权限的权限点列表
    // key（权限点） => value（boolen/object）
    authority: {}
};