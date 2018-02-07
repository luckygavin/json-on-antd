/**
 * @file 库文件单独打包
 * @author liuzechun@baidu.com
 */

const webpack = require('webpack');
const path = require('path');
const __root = path.join(__dirname, '../../');

const production = process.env.NODE_ENV === 'production';

console.log('NODE_ENV: ', process.env.NODE_ENV);

const jsBuilder = new webpack.optimize.UglifyJsPlugin({
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
        'dll': __root + '/dist/entry/dll.entry.js'
    },
    output: {
        path: __root + "/dist",
        filename: 'js/' + (!production ? '[name].js' : '[name].min.js')
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    // externals: {
    //     'react': 'window.DLL.React',
    //     'react-dom': 'window.DLL.ReactDOM'
    // },
    plugins: plugins
};
