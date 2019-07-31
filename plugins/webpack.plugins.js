/**
 * @file 文件打包编译配置文件
 * @author liuzechun
 * */

const webpack = require('webpack');
const path = require('path');
const __root = path.join(__dirname, '../');
const production = process.env.NODE_ENV === 'production';

const jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});
const plugins = [];
if (production) {
    plugins.push(jsBuilder);
}

module.exports = {
    entry: {
        'example': __root + '/plugins/example',
        'unique_table': __root + '/plugins/unique_table'
    },
    output: {
        path: __root + '/dist/plugins/',
        filename: (!production ? '[name].js' : '[name].min.js'),
        // 模块名称，使用匿名模块
        // library: '[name]',
        // 生成amd形式的文件，即requirejs引入。另外还可以使用umd
        // http://www.css88.com/doc/webpack2/concepts/output/
        libraryTarget: 'amd'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    // 注意顺序：presets的执行顺序是从下往上执行的
                    // 提供编译ES6/7的全部能力，包含 stage-1 ~ 3，stage-1 ~ 3 依次弱化
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.(css|less)$/,
                loader: 'style!css!less'
            }
        ],
        noParse: ['react', 'react-dom', 'antd', 'react-router']
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            'root': __root,
            'uf': __root,
            'react': __root + '/plugins/dll/react.js',
            'react-dom': __root + '/plugins/dll/react-dom.js',
            'react-router': __root + '/plugins/dll/react-router.js',
            'antd': __root + '/plugins/dll/antd.js',
            'moment': __root + '/plugins/dll/moment.js'
        }
    },
    // amd模式下不能这样重定向
    // externals: {
    //     'react': 'window.DLL.React',
    //     'react-dom': 'window.DLL.ReactDOM',
    //     'react-router': 'window.DLL.ReactRouter',
    //     'immutable': 'window.DLL.Immutable',
    //     'core-js': 'window.DLL.CoreJs',
    //     'moment': 'window.DLL.moment',
    //     'moment/locale/zh-cn': 'window.DLL.moment_zh_cn',
    //     'antd': 'window.DLL.Antd'
    // },
    plugins: plugins
};
