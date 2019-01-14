/**
 * @file 第三方组件列表
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';

export default class GuideApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'mobile-guide.md';
        this.__init();
    }
}
