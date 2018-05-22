/**
 * @file 文档 - 打包编译配置文件
 * @author liuzechun@baidu.com
 * */
const webpack = require('webpack');
const path = require('path');
const packageConfig = require('./package.json');
// 路径是相对于入口文件的路径
const nodeModulesPath = __dirname + '/node_modules';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const production = process.env.NODE_ENV === 'production';
// 用版本号作为生成文件的后缀：版本+次版本号，过滤掉修订版本
// const version = packageConfig.version.split('.').slice(0, 2).join('.');
const version = packageConfig.version;

console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('FILE_VERSION: ', version);

var cssBuilder = new ExtractTextPlugin(`${version}/doc.min.css`);
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
        // home: './docs/home/index.jsx'
    },
    output: {
        path: 'public/',
        // 指定资源文件引用的目录（CDN资源），被许多Webpack的Plugins用于在生产模式下更新内嵌到css、html文件里的url值
        // publicPath: 'uf-react/',
        filename: `${version}/[name].js`
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
                test: /\.(less)$/,
                loader: cssBuilder.extract('style', 'css!less') // 分离css和js文件
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ["transform-object-rest-spread"]
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
            'docs': __dirname + '/docs',
            'src': __dirname + '/src',
            'root': __dirname,
            'uf': __dirname
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
        'moment/locale/zh-cn': 'window.DLL.moment_zh_cn',
        'antd': 'window.DLL.Antd',

        'echarts': 'window.echarts'
    },
    plugins: plugins
};
