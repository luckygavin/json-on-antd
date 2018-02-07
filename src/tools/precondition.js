/**
 * @file 执行阻塞页面加载的函数（init之前执行的函数，多为调用api）
 * @author liuzechun
 * Created Date: 2017-12-18 07:48:32
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {notification} from 'antd';

export default {
    uf: {},
    count: 0,
    success() {
        --this.count;
        if (this.count === 0) {
            // 全部执行完成后执行再执行init初始化页面
            this.uf._reInit();
        }
    },
    error(err) {
        notification.error({
            top: 24,
            message: '执行出错，已阻止页面加载',
            duration: 0,
            description: JSON.stringify(err)
        });
    },
    handle(arr, uf) {
        this.waiting = true;
        this.uf = uf;
        this.count = arr.length;
        for (let func of arr) {
            func(
                this.success.bind(this),
                this.error.bind(this)
            );
        }
    }
};