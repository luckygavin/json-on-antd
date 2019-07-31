/**
 * @file 普通组件默认配置
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-11 14:06:24
 */

export default {
    'button': {
    },
    'list-view': {
        pageSize: 1,
        source: {
            target: 'data'
        }
    },
    'table': {
        rowKey: 'id',
        source: {
            target: 'data',
            // 自动加载数据
            autoLoad: true,
            autoReload: true
        },
        data: []
    },
    'select': {
        source: {
            target: 'options'
        }
    },
    'picker': {
        source: {
            target: 'options'
        }
    }
};