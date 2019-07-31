/**
 * @file antd组件统一封装，实现几个基础抽象类做继承
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-10 00:01:26
 */

import * as DataEntry from './dataentry.js';
import * as DataDisplay from './datadisplay.js';
import * as Genaral from './genaral.js';
import * as Navigation from './navigation.js';
import * as Feedback from './feedback.js';
import * as Layout from './layout.js';
import * as Message from './message.js';


module.exports = Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback, Message, Layout);
