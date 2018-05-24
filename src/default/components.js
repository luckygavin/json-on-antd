/**
 * @file 组件默认参数定义
 * @author liuzechun
 * Created Date: 2017-10-12 03:23:12
 *
 * Last Modified: 2017-10-12 03:23:16
 * Modified By: liuzechun
 */

export default {
    'cascader': {
        source: {
            target: 'options'
        }
    },
    'checkbox': {
        source: {
            target: 'checked'
        }
    },
    'checkbox-group': {
        source: {
            target: 'options'
        }
    },
    'radio': {
        source: {
            target: 'options'
        }
    },
    'router': {
        history: 'hashHistory'
    },
    'loading': {
        delay: 150
    },
    'iframe': {
        mode: 'auto',
        delay: 0,
        showLoading: true
    },
    'select': {
        optionFilterProp: 'children',
        source: {
            target: 'options'
        }
    },
    'switch': {
        source: {
            target: 'checked'
        }
    },
    'breadcrumb': {
        style: {padding: '12px 24px', lineHeight: '18px', background: '#ececec'}
    },
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
    'upload': {
        source: {
            target: 'fileList'
        }
    },
    /****************************************************************************************/
    /***** 自定义组件默认配置 ******************************************************************/
    /****************************************************************************************/
    'form': {
        items: [],
        buttons: null,
        layout: {
            type: 'horizontal',
            labelCol: 6,
            wrapperCol: 14
        }
    },
    'table': {
        rowKey: 'id',
        pagination: {
            current: 1,
            pageSize: 10,
            pageType: 'client',
            total: 0
        },
        source: {
            // 自动加载数据
            autoLoad: true
        },
        data: []
    },
    // table 的编辑插件
    'table-cell': {
        api: {
            trigger: 'onSubmit'
        }
    },
    'modal': {
        visible: false,
        // 提交数据默认绑定到onSubmit事件上
        api: {
            trigger: 'onSubmit'
        }
    }
};