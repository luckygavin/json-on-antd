/**
 * @file antd组件统一封装，实现几个基础抽象类做继承
 * @author liuzechun@baidu.com
 */
import * as DataEntry from './dataentry.js';
import * as DataDisplay from './datadisplay.js';
import * as Genaral from './genaral.js';
import * as Navigation from './navigation.js';
import * as Feedback from './feedback.js';

export default Object.assign({}, DataEntry, DataDisplay, Genaral, Navigation, Feedback);
