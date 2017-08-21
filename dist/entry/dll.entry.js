/**
 * @file React等库文件单独打包
 * @author liuzechun@baidu.com
 */

// 公共库
window.DLL = {
    React: require('react'),
    ReactDOM: require('react-dom'),
    ReactRouter: require('react-router'),
    reqwest: require('reqwest'),
    Immutable: require('immutable')
};