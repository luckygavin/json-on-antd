/**
 * @file 库文件单独打包
 * @author liuzechun@baidu.com
 */

const webpack = require('webpack');
const path = require('path');
const __root = path.join(__dirname, '../../');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const production = process.env.NODE_ENV === 'production';
const cssName = (process.env.CSS_NAME || 'antd') + (!production ? '' : '.min') + '.css';

console.log('NODE_ENV: ', process.env.NODE_ENV);
console.log('CSS_NAME: ', cssName);

const cssBuilder = new ExtractTextPlugin('css/' + cssName);
const jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});
let plugins = [cssBuilder];
if (production) {
    plugins.push(jsBuilder);
}

module.exports = {
    entry: {
        'antd': __root + '/dist/entry/antd.entry.js'
    },
    output: {
        path: __root + "/dist",
        filename: 'js/' + (!production ? '[name].js' : '[name].min.js')
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
            'uf': __root + '/src',
            'root': __root
        }
    },
    externals: {
        'react': 'window.DLL.React',
        'react-dom': 'window.DLL.ReactDOM',
        'react-router': 'window.DLL.ReactRouter',
        'immutable': 'window.DLL.Immutable',
        'reqwest': 'window.DLL.reqwest'
    },
    plugins: plugins
};
