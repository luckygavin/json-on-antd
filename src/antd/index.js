/**
 * @file antd组件统一封装，实现几个基础抽象类做继承
 * @author liuzechun@baidu.com
 */
// import {Input, Button} from './Antd.js';
// import * as Antd from './entry.js';
import * as DataEntry from './dataentry.js';
import * as Genaral from './genaral.js';
import * as Layout from './layout.js';

export default Object.assign({}, DataEntry, Genaral, Layout);;
