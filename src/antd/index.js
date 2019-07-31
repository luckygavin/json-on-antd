/**
 * @file antd组件统一封装，实现几个基础抽象类做继承
 * @author liuzechun
 */
import * as DataEntry from './dataentry.js';
import * as DataDisplay from './datadisplay.js';
import * as Genaral from './genaral.js';
import * as Navigation from './navigation.js';
import * as Feedback from './feedback.js';
import * as Message from './message.js';
import * as Layout from './layout.js';

// 感觉 ES6 的方式用起来不灵活啊。。。
// export default Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback);

module.exports = Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback, Message, Layout);
