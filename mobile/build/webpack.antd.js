/**
 * @file 库文件单独打包
 * @author liuzechun
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {outputPath, production, __root} = require('./env.js');

let cssName = !production ? '[name].css' : '[name].min.css';
const cssBuilder = new ExtractTextPlugin(cssName);
const jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        'warnings': false,
        'drop_debugger': true,
        'drop_console': true
    }
});
let plugins = [cssBuilder];
if (production) {
    plugins.push(jsBuilder);
}

module.exports = {
    entry: {
        'antd-mobile': __dirname + '/entry/antd.entry.js'
    },
    output: {
        path: outputPath,
        filename: !production ? '[name].js' : '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: cssBuilder.extract('style', 'css!less')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            'root': __root
        }
    },
    externals: {
        'react': 'window.DLL.React',
        'react-dom': 'window.DLL.ReactDOM',
        'react-router': 'window.DLL.ReactRouter',
        'immutable': 'window.DLL.Immutable',
        'core-js': 'window.DLL.CoreJs',
        'reqwest': 'window.DLL.reqwest',
        'moment': 'window.DLL.moment',
        'moment/locale/zh-cn': 'window.DLL.moment_zh_cn'
    },
    plugins: plugins
};
