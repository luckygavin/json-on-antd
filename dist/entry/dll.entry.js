/**
 * @file React等库文件单独打包
 * @author liuzechun@baidu.com
 */

 // 公共库
window.DLL = {
    React: require('react'),
    ReactDOM: require('react-dom'),
    ReactRouter: require('react-router'),
    // 这个要保留，Antd 内部也在用
    Immutable: require('immutable'),
    reqwest: require('reqwest')
};