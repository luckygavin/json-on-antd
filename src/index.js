/**
 * @file index.js 汇总所有 src 里对用户暴露的组件
 * @author liuzechun@baidu.com
 */
import './style/index.less';

module.exports = Object.assign(
    // require('./dom'),
    // antd 组件统一迁移，见 src/antd/index.js
    require('./antd'),
    // 路由组件
    require('./router'),
    // 其他自己实现/封装的组件
    {
        // Dom: require('./dom'),
        Iframe: require('./iframe'),

        Export: require('./export'),
        Tree: require('./tree'),
        Table: require('./table'),
        Form: require('./form').Form,
        Forms: require('./form').Forms,
        Modal: require('./modal'),
        Ueditor: require('./ueditor'),
        Echarts: require('./echarts'),
        // ...require('./modal'),
        // Table2: require('./uf-old/table')
    }
);
