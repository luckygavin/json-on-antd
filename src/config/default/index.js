/**
 * @file 全局默认配置
 * @author liuzechun
 * Created Date: 2018-01-30 10:55:45
 */

import env from 'src/env.js';
import baseComponents from './base-components.js';

import components from 'variety/config/default/components.js';

// 指定ueditor资源路径，否则css等加载路径不对
window.UEDITOR_HOME_URL = `${env.basePath}/third_party/ueditor/`;

export default {
    // 模块引入相关配置
    modules: {
        // 加载模块时是否展示loading
        showLoading: false,
        paths: {
            'echarts': `${env.basePath}/third_party/echarts/echarts${env.production ? '.min' : ''}`,
            'ueditor': `${env.basePath}/third_party/ueditor/ueditor.all${env.production ? '.min' : ''}`,
            'ueditorconfig': `${env.basePath}/third_party/ueditor/ueditor.config${env.production ? '.min' : ''}`,
            'zeroclipboard': `${env.basePath}/third_party/ueditor/ZeroClipboard${env.production ? '.min' : ''}`,
            'ueditorparse': `${env.basePath}/third_party/ueditor/ueditor.parse${env.production ? '.min' : ''}`
        },
        shim: {
            'ueditor': ['zeroclipboard', 'ueditorconfig', 'ueditorparse'],
            'echarts': {
                exports: 'echarts'
            }
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
    components: Object.assign(baseComponents, components),
    // 权限点，用户有权限的权限点列表
    // key（权限点） => value（boolen/object）
    authority: {}
};