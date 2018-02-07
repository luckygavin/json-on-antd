/**
 * @file Antd 单独打包，代码里会对 Antd 全部组件进行二次封装
 * @author liuzechun@baidu.com
 */

// antd 样式
require('root/theme/default.less');

// antd 组件库
window.DLL['Antd'] = require('antd');