/**
 * @file 图片选择
 * **/
import BaseDoc from 'docs/app/base/BaseDoc.js';
import md from '../markdown/image-picker.md';

export default class ImagePicker extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = md;
        this.__init();
    }
    render() {
        return this.__getMobileDemo();
    }
}