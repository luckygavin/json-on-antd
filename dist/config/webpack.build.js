/**
 * @file 文件打包编译配置文件
 * @author liuzechun@baidu.com
 * */
// const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const {outputPath, production, __root} = require('./env.js');

// 分离css文件
const cssName = !production ? `[name].css` : `[name].min.css`;
const cssBuilder = new ExtractTextPlugin(cssName);
const jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});
const plugins = [cssBuilder];
if (production) {
    plugins.push(jsBuilder);
}

module.exports = {
    entry: {
        'uf': __root + '/dist/entry/uf.entry.js'
    },
    output: {
        path: outputPath,
        filename: (!production ? `[name].js` : `[name].min.js`)
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
                    // 注意顺序：presets的执行顺序是从下往上执行的
                    // 提供编译ES6/7的全部能力，包含 stage-1 ~ 3，stage-1 ~ 3 依次弱化
                    presets: ['react', 'es2015', 'stage-0'],
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
            'src': __root + '/src',
            'root': __root,
            'uf': __root
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
