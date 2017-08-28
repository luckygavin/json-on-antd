/**
 * @file 文件打包编译配置文件
 * @author liuzechun@baidu.com
 * */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var production = process.env.NODE_ENV === 'production';
// 用版本号作为生成文件的后缀：版本+次版本号，过滤掉修订版本
const version = process.env.npm_package_version.split('.').slice(0, 2).join('.');

console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('FILE_VERSION: ', version);

// 分离css文件
var cssBuilder = new ExtractTextPlugin(!production ? `[name]_v${version}.css` : `[name]_v${version}.min.css`);
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
        'uf': __dirname + '/dist/entry/uf.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: !production ? `[name]_v${version}.js` : `[name]_v${version}.min.js`
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
        ],
        noParse: ['react', 'react-dom', 'antd', 'react-router']
    },
    // 调用autoprefixer插件，实现自动添加-webkit-等前缀
    postcss: [autoprefixer],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            'uf': __dirname + '/src',
            'root': __dirname
        }
    },
    externals: {
        'react': 'window.DLL.React',
        'react-dom': 'window.DLL.ReactDOM',
        'react-router': 'window.DLL.ReactRouter',
        'immutable': 'window.DLL.Immutable',
        'reqwest': 'window.DLL.reqwest',
        'uf': 'window.Uf'
    },
    plugins: plugins
};
