/**
 * @file 库文件单独打包
 * @author liuzechun@baidu.com
 */

const webpack = require('webpack');
const {outputPath, production, __root} = require('./env.js');

const jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        'warnings': false,
        'drop_debugger': true,
        'drop_console': true
    }
});
let plugins = [];
if (production) {
    plugins.push(jsBuilder);
}

module.exports = {
    entry: {
        'dll-mobile': __dirname + '/entry/dll.entry.js'
    },
    output: {
        path: outputPath,
        filename: !production ? '[name].js' : '[name].min.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: plugins
};
