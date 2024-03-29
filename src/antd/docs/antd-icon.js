/**
 * @file 按钮
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import BaseDoc from 'docs/app/base/BaseDoc.js';
import {Icon} from 'antd';

export default class IconApp extends BaseDoc {
    constructor(props) {
        super(props);
        this.doc = 'antd-icon.md';
        this.__init();
    }
    componentDidMount() {
        ReactDOM.render(<IconSet className="icons" catigory="direction" />,
                document.getElementById('direction-demo'));
        ReactDOM.render(<IconSet className="icons" catigory="suggestion" />,
                document.getElementById('suggestion-demo'));
        ReactDOM.render(<IconSet className="icons" catigory="other" />,
                document.getElementById('other-demo'));
        ReactDOM.render(<IconSet className="icons" catigory="logo" />,
                document.getElementById('logo-demo'));
    }
    render() {
        return <div>
            <div>
                <h3 style={{margin: '1.6em 0 .6em'}}>方向性图标</h3>
                <div id="direction-demo"></div>
            </div>
            <div>
                <h3 style={{margin: '1.6em 0 .6em'}}>提示建议性图标</h3>
                <div id="suggestion-demo"></div>
            </div>
            <div>
                <h3 style={{margin: '1.6em 0 .6em'}}>网站通用图标</h3>
                <div id="other-demo"></div>
            </div>
            <div>
                <h3 style={{margin: '1.6em 0 .6em'}}>品牌和标识</h3>
                <div id="logo-demo"></div>
            </div>
        </div>;
    }
}

class IconSet extends React.Component {
    constructor(props) {
        super(props);
        this.icons = {
            direction: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'up-circle-o', 'down-circle-o', 'right-circle-o', 'left-circle-o', 'double-right', 'double-left', 'verticle-left', 'verticle-right', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'play-circle-o', 'up-square', 'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o', 'left-square-o', 'right-square-o', 'login', 'logout', 'menu-fold', 'menu-unfold'],
            suggestion: ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'plus-square-o', 'minus-square', 'minus-square-o', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'close', 'close-circle', 'close-circle-o', 'close-square', 'close-square-o', 'check', 'check-circle', 'check-circle-o', 'check-square', 'check-square-o', 'clock-circle-o', 'clock-circle'],
            logo: ['android', 'android-o', 'apple', 'apple-o', 'windows', 'windows-o', 'ie', 'chrome', 'github', 'aliwangwang', 'aliwangwang-o', 'dingding', 'dingding-o'],
            other: ['lock', 'unlock', 'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'code-o', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf', 'file-excel', 'file-jpg', 'file-ppt', 'file-add', 'folder', 'folder-open', 'folder-add', 'hdd', 'frown', 'frown-o', 'meh', 'meh-o', 'smile', 'smile-o', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'mail', 'mobile', 'notification', 'paper-clip', 'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'tablet', 'tag', 'tag-o', 'tags', 'tags-o', 'to-top', 'upload', 'user', 'video-camera', 'home', 'loading', 'loading-3-quarters', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customer-service', 'qrcode', 'scan', 'like', 'like-o', 'dislike', 'dislike-o', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o', 'bulb', 'select', 'switcher', 'rocket', 'bell', 'disconnect', 'database', 'compass', 'barcode', 'hourglass', 'key', 'flag', 'layout', 'printer', 'sound', 'usb', 'skin', 'tool', 'sync', 'wifi', 'car', 'schedule', 'user-add', 'user-delete', 'usergroup-add', 'usergroup-delete', 'man', 'woman', 'shop', 'gift', 'idcard', 'medicine-box', 'red-envelope', 'coffee', 'copyright', 'trademark', 'safety', 'wallet', 'bank', 'trophy', 'contacts', 'global', 'shake', 'api', 'fork'],
        };
    }
    render() {
        const { className, catigory } = this.props;
        const listClassName = 'anticons-list clearfix ' + (className || '');
        return (
            <ul className={listClassName}>
                {this.icons[catigory].map(type=>
                    <li key={type}>
                        <Icon type={type} />
                        <span className="anticon-class">{type}</span>
                    </li>
                )}
            </ul>
        );
    }
}