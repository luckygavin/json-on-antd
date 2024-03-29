/**
 * @file 执行阻塞页面加载的函数（init之前执行的函数，多为调用api）
 * @author liuzechun
 * Created Date: 2017-12-18 07:48:32
 */

import {notification} from 'antd';
import {generate, getInstance} from './instance.js';

export default generate(function (insName) {
    return {
        count: 0,
        // 设置预处理超时时间 30s
        delay: 30000,
        timer: null,
        reduce() {
            
        },
        success() {
            if (this.count > 0 && --this.count === 0) {
                clearTimeout(this.timer);
                // 全部执行完成后执行再执行init初始化页面
                getInstance(insName)._reInit();
            }
        },
        error(err) {
            notification.error({
                top: 24,
                message: '页面载入时出错，请联系平台管理员',
                duration: 0,
                description: JSON.stringify(err)
            });
        },
        handle(arr) {
            this.waiting = true;
            this.count += arr.length;
            for (let func of arr) {
                func(
                    this.success.bind(this),
                    this.error.bind(this)
                );
            }
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                this.count = 0;
                this.error('预加载数据超时！');
            }, this.delay);
        }
    };
});