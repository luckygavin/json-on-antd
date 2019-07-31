/**
 * @file 文件打包编译配置文件
 * @author liuzechun
 * */
// const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const {outputPath, production, __root} = require('./env.js');

let cssName = !production ? 'theme-mobile.css' : 'theme-mobile.min.css';
const cssBuilder = new ExtractTextPlugin(cssName);

const jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        'warnings': false,
        'drop_debugger': true,
        'drop_console': true
    }
});

module.exports = {
    entry: {
        'uf-mobile': __dirname + '/entry/uf.entry.js'
    },
    output: {
        path: outputPath,
        filename: (!production ? '[name].js' : '[name].min.js')
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
                    // antd 按需加载
                    // plugins: [['import', {libraryName: 'antd', style: 'css'}]],
                    // plugins: [['import', {libraryName: 'antd'}]],
                    // compact: false
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.less$/,
                loader: cssBuilder.extract('style', 'css!less')
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
            'uf': __root,
            'mobile': __root + '/mobile',
            // 伪装的antd，某些基础组件中使用的组件，使用移动版组件进行实现以进行欺骗
            'antd': __root + '/mobile/mock',
            // 动态基准目录，例如 config目录、lib.js之类的使用
            'variety': __root + '/mobile'
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
        'antd-mobile': 'window.DLL.AntdMobile'
    },
    plugins: [].concat(
        // js压缩
        production ? jsBuilder : [],
        // 其他主题文件
        cssBuilder
    )
};
