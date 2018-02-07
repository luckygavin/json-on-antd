/**
 * @file index.js 项目入口
 * @author liuzechun
 * Created Date: 2018-01-30 01:58:03
 */

'use strict';
const {version} = require('./package.json');

module.exports = {
    VERSION: version,
    ...require('./src/tools/index.js')
};
