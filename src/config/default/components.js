/**
 * @file 普通组件默认配置
 * @author liuzechun
 * Created Date: 2017-10-12 03:23:12
 *
 * Last Modified: 2017-10-12 03:23:16
 * Modified By: liuzechun
 */

export default {
    'auto-complete': {
        style: {minWidth: 160},
        mode: 'combobox',
        options: [],
        startSign: 1,
        source: {
            showLoading: 'simple'
        }
    },
    'breadcrumb': {
        style: {padding: '12px 24px', lineHeight: '18px'}
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
    'textarea': {
        style: {minHeight: '2em'}
    },
    'radio': {
        source: {
            target: 'options'
        }
    },
    'loading': {
        delay: 150
    },
    'select': {
        optionFilterProp: 'children',
        source: {
            target: 'options'
        },
        // 默认充满全部
        style: {width: '100%', minWidth: 50},
        // 搜索时忽略大小写
        filterOption: (v, opt) => (opt.props.children !== undefined)
            && opt.props.children.toLowerCase().indexOf(v.toLowerCase()) > -1
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
        source: {
            target: 'formData'
        },
        api: {
            trigger: 'onSubmit'
        },
        control: {
            trigger: 'onSubmit',
            handler: v=>v
        }
    },
    'forms': {
        addType: 'copy'
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
            autoLoad: true,
            autoReload: true
        },
        data: []
    },
    // table 的编辑插件
    'table-edit': {
        api: {
            trigger: 'onSubmit'
        }
    },
    'modal': {
        visible: false,
        maskClosable: false,
        closable: true,
        api: {
            trigger: 'onSubmit'
        },
        control: {
            trigger: 'onSubmit',
            handler: v=>v
        }
    },
    'dashboard': {
        closable: false
    },
    'drawer': {
        placement: 'right',
        width: '40%',
        height: '40%'
    },
    'tree': {
        source: {
            autoLoad: true,
            autoReload: false,
            target: 'data'
        }
    },
    'tree-select': {
        source: {
            autoLoad: true,
            autoReload: false,
            target: 'treeData'
        }
    },
    'list': {
        interleave: true,
        bordered: true,
        layout: {
            labelCol: 6,
            labelStyle: {},
            valueCol: 18,
            valueStyle: {}
        }
    }
};