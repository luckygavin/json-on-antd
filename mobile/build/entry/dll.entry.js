/**
 * @file React等库文件单独打包
 * @author liuzechun
 */

// 公共库
window.DLL = {
    // 这两行不能删~
    React: require('react'),
    ReactDOM: require('react-dom'),
    ReactRouter: require('react-router'),
    // 这个要保留，Antd 内部也在用
    Immutable: require('immutable'),
    // Antd 内部也在用
    CoreJs: require('core-js'),
    moment: require('moment'),
    // 使用moment时，需指定locale，会导致重新打包
    'moment_zh_cn': require('moment/locale/zh-cn')
};