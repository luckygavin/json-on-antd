/**
 * @file 移动端的message消息提醒组件
 *  直接复用PC端开发的message类组件，并通过mock/message.js中对antd模块进行处理(改为Toast实现)，以达到message代码逻辑的复用
 * Author: liuzechun (liuzechun@baidu.com)
 * Created: 2019-01-22 15:34:01
 */

import * as Message from 'src/antd/message.js';
import {Toast} from 'antd-mobile';

const message = Message.message;

// 将Toast原生api暴露出来，并和message进行merge
Message.message = Object.assign({}, Toast, message);

module.exports = Message;