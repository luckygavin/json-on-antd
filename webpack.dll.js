/**
 * @file 库文件单独打包
 * @author liuzechun@baidu.com
 */

const webpack = require('webpack');
const path = require('path');
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
        'dll': __dirname + '/dist/entry/dll.entry.js'
    },
    output: {
        path: __dirname + "/dist",
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
            'uf': __dirname + '/src',
            'root': __dirname
        }
    },
    plugins: plugins
};
