/**
 * @file 文件打包编译配置文件
 * @author liuzechun@baidu.com
 * */
// const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const {outputPath, production, __root} = require('./env.js');
const cssSuffix = (!production ? `.css` : `.min.css`);
const themes = require(__root + '/theme/index.js');

// 主题列表
const themeList = Object.keys(themes).map(i=>({
    name: i,
    path: new RegExp(themes[i])
}));
// 全部 ExtractLessPlugin 的集合
const themeBuilders = themeList.map(({name}) => new ExtractTextPlugin(`${name + cssSuffix}`));
// 主题 Loader 的集合
const themeLoaders = themeList.map(({path}, index) => {
    return {
        test: /\.(less|css)$/,
        include: path,
        loader: themeBuilders[index].extract('style', 'css!postcss!less')
    }
});

console.log('THEME_NAMES: ', themeList.map(({name})=>`${name + cssSuffix}`).join(' | '));

const jsBuilder = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});

module.exports = {
    entry: {
        'uf.p': __dirname + '/entry/uf.p.entry.js',
        'uf': __dirname + '/entry/uf.entry.js'
    },
    output: {
        path: outputPath,
        filename: (!production ? `[name].js` : `[name].min.js`)
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
            },
            ...themeLoaders
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
            'theme': __root + '/theme'
        }
    },
    externals: [
        {
            'react': 'window.DLL.React',
            'react-dom': 'window.DLL.ReactDOM',
            'react-router': 'window.DLL.ReactRouter',
            'immutable': 'window.DLL.Immutable',
            'core-js': 'window.DLL.CoreJs',
            'moment': 'window.DLL.moment',
            'moment/locale/zh-cn': 'window.DLL.moment_zh_cn',
            'antd': 'window.DLL.Antd'
        },
        // 根据配置，过滤无需打包的主题，加快效率
        function (context, request, callback) {
            // 针对这种形式 ./we-theme/index.less
            if (/\.\/.*\/index\.less/.test(request)){
                // 转换包名进行匹配
                let package = request.replace('./', 'theme/').replace('/index.less', '');
                // 如果不在打包列表中，则跳过不打包
                if (Object.values(themes).indexOf(package) === -1) {
                    return callback(null, 'global ' + request);
                }
            }
            callback();
        }
    ],
    plugins: [].concat(
        // js压缩
        production ? jsBuilder : [],
        // 其他主题文件
        themeBuilders
    )
};
