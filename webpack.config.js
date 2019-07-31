/**
 * @file 文档 - 打包编译配置文件
 * @author liuzechun
 * */
const webpack = require('webpack');
const path = require('path');
const packageConfig = require('./package.json');
// 路径是相对于入口文件的路径
const nodeModulesPath = __dirname + '/node_modules';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const production = process.env.NODE_ENV === 'production';
const version = !process.env.NODE_ENV ? 'dev' : packageConfig.version;

console.log('NODE_ENV: ', process.env.NODE_ENV);
// 如果未设置NODE_ENV，默认生成到dev目录
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
        doc: './docs/entry.js',
        demo: './docs/entry-demo.js'
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
        extensions: ['', '.js', '.jsx', '.json', '.less'],
        alias: {
            'docs': __dirname + '/docs',
            'src': __dirname + '/src',
            'theme': __dirname + '/theme',
            'root': __dirname,
            'uf': __dirname,
            'mobile': __dirname + '/mobile',
            // 动态基准目录，例如 config目录、lib.js之类的使用
            'variety': __dirname + '/src'
        }
    },
    externals: {
        'react': 'window.DLL.React',
        'react-dom': 'window.DLL.ReactDOM',
        'react-router': 'window.DLL.ReactRouter',
        'immutable': 'window.DLL.Immutable',
        'core-js': 'window.DLL.CoreJs',
        'moment': 'window.DLL.moment',
        'moment/locale/zh-cn': 'window.DLL.moment_zh_cn',
        'antd': 'window.DLL.Antd'
    },
    plugins: plugins
};
