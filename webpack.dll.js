/**
 * @file 库文件单独打包
 * @author liuzechun@baidu.com
 */

const webpack = require('webpack');
const path = require('path');

const production = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);

let jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});
let plugins = [];
if (production) {
    plugins.push(jsBuilder);
}

module.exports = {
    entry: {
        'dll': __dirname + '/dist/entry/dll.entry.js'
    },
    output: {
        path: __dirname + "/dist",
        // filename: "[name].min.js"
        filename: !production ? '[name].js' : '[name].min.js'
    },
    plugins: plugins
};
