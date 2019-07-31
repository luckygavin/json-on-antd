/**
 * @file UF 核心代码包
 * Antd 单独打包，代码里会对 Antd 全部组件进行二次封装
 * @author liuzechun
 */

// 样式入口
require('mobile/style/index.less');

// UF 组件库构建入口
window['UF'] = require('uf').default;
