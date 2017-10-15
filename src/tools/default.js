/**
 * @file 组件默认参数定义
 * @author liuzechun
 * Created Date: 2017-10-12 03:23:12
 *
 * Last Modified: 2017-10-12 03:23:16
 * Modified By: liuzechun
 */

export default {
    // 路由
    'router': {
        history: 'hashHistory'
    },
    // Loading
    'loading': {
        delay: 150
    },
    // Iframe
    'iframe': {
        mode: 'auto',
        delay: 0,
        showLoading: true
    },
    // 面包屑
    'breadcrumb': {
        style: {margin: '12px 24px'}
    },
    // 下拉
    'select': {
        style: {width: 120}
    },
    // 自动补全
    'auto-complete': {
        style: {width: 160},
        options: []
    },
    'month-picker': {
        format: 'YYYY-MM'
    },
    'time-picker': {
        format: 'HH:mm:ss'
    }
};