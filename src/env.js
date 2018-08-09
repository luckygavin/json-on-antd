/**
 * @file 程序中引用的环境相关变量
 * @author liuzechun
 * Created Date: 2018-07-30 12:46:16
 */

const hostname = window.location.hostname;
const isProd = !['epc.baidu.com', 'yf-sys-ump-ur-fe.yf01.baidu.com'].some(
    v=>hostname.indexOf(v) > -1
);

module.exports = {
    production: isProd,
    basePath: isProd ? 'http://uf.baidu.com' : 'http://antd.uf.baidu.com:8099',
    pluginPath: isProd ? 'http://uf.baidu.com/v/plugins/' : 'http://antd.uf.baidu.com:8099/v/plugins/'
};