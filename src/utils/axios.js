/**
 * @file 兼容axios用法
 * @author liuzechun
 * Created Date: 2018-08-01 05:16:02
 */

import axios from 'axios';
import Utils from './utils.js';

export default function (config) {
    let conf = Utils.filter(config, ['baseUrl', 'success', 'error', 'interrupt']);
    conf.data = conf.params;
    return axios(conf).then(response => {
        config.success(response.data);
    }, err => {
        config.error(err.response.data || {message: '请求出错！'});
    });
}