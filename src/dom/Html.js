/**
 * @file 需要操作的原生dom继承 BaseComponent
 * @author liuzechun
 * Created Date: 2017-10-17 04:11:07
 */

import Dom from './Dom.js';
import {Utils} from 'src/utils';

export default class Html extends Dom {
    constructor(props) {
        super(props);
        this.type = 'section';
    }
    _afterSetProps() {
        super._afterSetProps();
        if (this.__props.children) {
            this.__props.dangerouslySetInnerHTML = {__html: this.__props.children};
            delete this.__props.children;
        }
    }
    // 复用父组件的render
    // render() {}
}
