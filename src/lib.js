/**
 * @file index.js 汇总所有 src 里对用户暴露的组件
 * @author liuzechun@baidu.com
 */

module.exports = Object.assign(
    {
        '_env': 'uf'
    },
    require('./dom'),
    // antd 组件统一迁移，见 src/antd/index.js
    require('./antd'),
    // 路由组件
    require('./router'),
    // 其他自己实现/封装的组件
    {
        Iframe: require('./iframe'),
        Fieldset: require('./fieldset'),

        AutoComplete: require('./auto-complete').AutoComplete,
        LocalComplete: require('./auto-complete').LocalComplete,
        Export: require('./export'),
        Tree: require('./tree'),
        Table: require('./table'),
        Form: require('./form').Form,
        Forms: require('./form').Forms,
        Modal: require('./modal').Modal,
        Dashboard: require('./modal').Dashboard,
        Drawer: require('./modal').Drawer,
        List: require('./list'),

        Ueditor: require('./ueditor').Ueditor,
        UeditorParse: require('./ueditor').UeditorParse,
        Echarts: require('./echarts'),
        Markdown: require('./markdown'),
        Fullscreen: require('./fullscreen')
    }
);
