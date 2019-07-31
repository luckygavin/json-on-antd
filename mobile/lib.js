/**
 * @file 汇总所有组件
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-06 18:04:22
 */

module.exports = Object.assign(
    {
        '_env': 'uf-mobile'
    },
    require('src/dom'),
    // 路由组件
    require('src/router'),
    // IconPlus

    // antd-mobile 组件统一封装
    require('./antd'),

    // 其他自己实现/封装的组件
    {
        Iframe: require('src/iframe'),
        Ueditor: require('src/ueditor').Ueditor,
        UeditorParse: require('src/ueditor').UeditorParse,
        Echarts: require('src/echarts'),

        Table: require('./table')
    }
);
