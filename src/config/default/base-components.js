/**
 * @file 基类默认配置，即一类组件通用配置
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-11 14:07:12
 */

export default {
    'base-component': {
        control: {
            trigger: 'onClick'
        },
        source: {
            // 如果组件没有设置target，则
            // target: 'content',
            // 默认自动移除空参数
            removeEmptyParams: true
        },
        api: {
            showLoading: true,
            trigger: 'onClick',
            method: 'post'
        }
    },
    'antd': {},
    'data-entry': {
        api: {
            trigger: 'onChange'
        },
        source: {
            // 获取数据时展示loading
            showLoading: false,
            target: 'value'
        },
        control: {
            trigger: 'onChange',
            handler: (...p)=>p[p.length - 1].getValue()
        }
    },
    'options-data-entry': {
        source: {
            target: 'options'
        }
    },

    /*************************************************************************************/
    /*********************** 其他PC、移动端共用组件  ****************************************/
    /*************************************************************************************/

    'router': {
        history: 'hashHistory'
    },
    'iframe': {
        mode: 'auto',
        delay: 0,
        showLoading: true
    },
    'echarts': {
        style: {
            width: '100%',
            height: 400
        }
    }

};