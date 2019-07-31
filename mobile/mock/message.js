/**
 * @file message 组件
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-09 20:28:09
 */

import {Toast} from 'antd-mobile';

export default {
    success: Toast.success,
    error: Toast.fail,
    info: Toast.info,
    warning: Toast.info,
    warn: Toast.info,
    loading: Toast.loading
};