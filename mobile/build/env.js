/**
 * @file 输入文件路径、版本号等控制
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-09 14:11:40
 */

// 继承自UF配置
// const base = require('../../dist/config/env.js');
// const version = '0.1';

// console.log('NODE_ENV: ', process.env.NODE_ENV);
// console.log('FILE_VERSION: ', version);

// module.exports = Object.assign(base, {
//     version,
//     outputPath: base.__root + '/dist/mobile',
// });

module.exports = require('../../dist/config/env.js');