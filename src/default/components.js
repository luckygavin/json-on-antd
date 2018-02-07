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
    'select': {
        optionFilterProp: 'children'
    },
    // 面包屑
    'breadcrumb': {
        style: {padding: '12px 24px', lineHeight: '18px', background: '#f7f7f7'}
    },
    // 下拉
    'select': {
        // style: {width: 120}
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
    },
    'menu': {
        // 默认高亮随路由一起变换
        followRoute: true
    },
    /****************************************************************************************/
    /***** 自定义组件默认配置 ******************************************************************/
    /****************************************************************************************/
    // form
    'form': {
        items: [],
        buttons: null,
        layout: {
            type: 'horizontal',
            labelCol: 6,
            wrapperCol: 14
        }
    },
    // table
    'table': {
        rowKey: 'id',
        pagination: {
            current: 1,
            pageSize: 10,
            pageType: 'client',
            total: 0
        },
        // 自动加载数据
        autoLoadSource: true,
        data: []
    },
    // modal
    'modal': {
        visible: false
    },
    'form-modal': {
        visible: false
    }
};