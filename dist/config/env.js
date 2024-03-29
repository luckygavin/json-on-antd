/**
 * @file 输入文件路径、版本号等控制
 * @author liuzechun
 * Created Date: 2018-02-09 03:52:06
 */

const path = require('path');
const __root = path.join(__dirname, '../../');
const production = process.env.NODE_ENV === 'production';
const packageConfig = require('../../package.json');
// 如果未设置NODE_ENV，默认生成到dev目录
const version = !process.env.NODE_ENV ? 'dev' : packageConfig.version;

console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('FILE_VERSION: ', version);

module.exports = {
    version,
    __root,
    production,
    outputPath: __root + '/dist/' + version,
};