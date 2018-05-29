/**
 * @file 组件默认参数定义
 * @author liuzechun
 * Created Date: 2017-10-12 03:23:12
 *
 * Last Modified: 2017-10-12 03:23:16
 * Modified By: liuzechun
 */

export default {
    /****************************************************************************************/
    /******* 基类默认配置，即一类组件通用配置 ****************************************************/
    /****************************************************************************************/
    'base-component': {
        control: {
            trigger: 'onClick'
        },
        source: {
            target: 'content'
        }
    },
    'antd': {},
    'data-entry': {
        api: {
            trigger: 'onChange'
        },
        source: {
            target: 'value'
        },
        control: {
            trigger: 'onChange',
            handler: (...p)=>p[p.length - 1].getValue()
        }
    },
    /****************************************************************************************/
    /******* 普通组件默认配置 ******************************************************************/
    /****************************************************************************************/
    'auto-complete': {
        style: {width: 160},
        options: []
    },
    'breadcrumb': {
        style: {padding: '12px 24px', lineHeight: '18px', background: '#ececec'}
    },
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
    'input': {
        api: {
            trigger: 'onPressEnter'
        },
        control: {
            trigger: 'onPressEnter'
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
    'date-picker': {
        format: 'YYYY-MM-DD'
    },
    'range-picker': {
        format: 'YYYY-MM-DD'
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
        },
        api: {
            trigger: 'onSubmit'
        },
        control: {
            trigger: 'onSubmit',
            handler: v=>v
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
        api: {
            trigger: 'onSubmit'
        },
        control: {
            trigger: 'onSubmit',
            handler: v=>v
        }
    }
};