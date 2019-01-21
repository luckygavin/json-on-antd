/**
 * @file antd组件统一封装，实现几个基础抽象类做继承
 *
 * Author: liuzechun (liuzechun@baidu.com)
 * Created: 2019-01-10 00:01:26
 */

import * as DataEntry from './dataentry.js';
import * as DataDisplay from './datadisplay.js';
import * as Genaral from './genaral.js';
import * as Navigation from './navigation.js';
import * as Feedback from './feedback.js';
import * as Layout from './layout.js';
// 直接复用PC端开发的message类组件，并通过compat对antd模块进行处理(改为Toast实现)，以达到message代码逻辑的复用
import * as Message from 'src/antd/message.js';

module.exports = Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback, Message, Layout);
