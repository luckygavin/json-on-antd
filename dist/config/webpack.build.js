/**
 * @file 文件打包编译配置文件
 * @author liuzechun@baidu.com
 * */
var path = require('path');
var webpack = require('webpack');
const packageConfig = require('../../package.json');
const __root = path.join(__dirname, '../../');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var production = process.env.NODE_ENV === 'production';

// 用版本号作为生成文件的后缀：版本+次版本号，过滤掉修订版本
const version = packageConfig.version.split('.').slice(0, 2).join('.');

console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('FILE_VERSION: ', version);

// 分离css文件
const cssName = !production ? `[name]_v${version}.css` : `[name]_v${version}.min.css`;
var cssBuilder = new ExtractTextPlugin('css/' + cssName);
var jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});
var plugins = [cssBuilder];
if (production) {
    plugins.push(jsBuilder);
}

module.exports = {
    entry: {
        'uf': __root + '/dist/entry/uf.entry.js'
    },
    output: {
        path: __root + '/dist',
        publicPath: 'dist/',
        filename: 'js/' + (!production ? `[name]_v${version}.js` : `[name]_v${version}.min.js`)
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                // loader: 'style!css!sass'
                // loader: cssBuilder.extract('style', 'css!sass?modules&outputStyle=expanded')
                loader: cssBuilder.extract('style', 'css!postcss!sass') // 分离css和js文件
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
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        noParse: ['react', 'react-dom', 'antd', 'react-router']
    },
    // 调用autoprefixer插件，实现自动添加-webkit-等前缀
    postcss: [autoprefixer],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            'uf': __root + '/src',
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
        'moment/locale/zh-cn': 'window.DLL.moment_zh_cn',
        'antd': 'window.DLL.Antd'
    },
    plugins: plugins
};
