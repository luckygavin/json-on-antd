/**
 * @file 文档 - 打包编译配置文件
 * @author liuzechun@baidu.com
 * */
var webpack = require('webpack');
var path = require('path');
// 路径是相对于入口文件的路径
var nodeModulesPath = __dirname + '/node_modules';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var production = process.env.NODE_ENV === 'production';

console.log(process.env.NODE_ENV);

var cssBuilder = new ExtractTextPlugin("css/doc.min.css");
var jsBuilder =new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});
var plugins = [];
plugins.push(cssBuilder);
if (production) {
    plugins.push(jsBuilder);
}

module.exports = {
    entry: {
        doc: './docs/entry.js'
    },
    output: {
        path: 'public/',
        // 指定资源文件引用的目录（CDN资源），被许多Webpack的Plugins用于在生产模式下更新内嵌到css、html文件里的url值
        // publicPath: 'uf-react/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(css)$/,
                loader: cssBuilder.extract('style', 'css') // 分离css和js文件
            }, {
                test: /\.(scss)$/,
                loader: cssBuilder.extract('style', 'css!sass') // 分离css和js文件
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    // antd 按需加载
                    // plugins: [['import', {libraryName: 'antd', style: 'css'}]],
                    // plugins: [['import', {libraryName: 'antd'}]],
                    // compact: false
                }
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.woff|\.woff2|\.svg|\.eot|\.ttf/,
                loader: 'url?prefix=font/&limit=10000'
            }, {
                test: /\.md$/,
                loader: 'text-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            'uf': __dirname + '/src',
            'docs': __dirname + '/docs',
            'root': __dirname
        }
    },
    externals: {
        'react': 'window.DLL.React',
        'react-dom': 'window.DLL.ReactDOM',
        'react-router': 'window.DLL.ReactRouter',
        'immutable': 'window.DLL.Immutable',
        'reqwest': 'window.DLL.reqwest',
        'antd': 'window.DLL.Antd'
    },
    plugins: plugins
};
