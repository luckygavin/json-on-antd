/**
 * @file 文档基类
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import {Popover, Icon} from 'antd';
import Markdown from './Markdown.js';
import Demo from './Demo.js';
import DemoMobile from './DemoMobile.js';

function getDemoUrl() {
    let urlPrefix = location.origin + location.pathname;
    let hash = location.hash;
    return urlPrefix + 'docs/demo/mobile.php' + hash;
}

export default class BaseDoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // 日志页面需要增加更多样式
        this.className = '';
        // 标志是不是移动端demo展示页，由定义router处传入
        this.isDemo = this.props.route && this.props.route.isDemo;
        try {
            this.isMobile = 'Mobile' === this.props.location.pathname.slice(1).split('/')[0];
        } catch (e) {
            this.isMobile = false;
        }
    }
    componentWillReceiveProps(nextProps) {
        this.scrollToPos(nextProps);
    }
    componentDidMount() {
        this.scrollToPos(this.props);
        this.switchTitle();
    }

    // 二维码
    makeQrcode(visible) {
        if (visible && !this.haveQrcode) {
            let qrcode = new QRCode(ReactDOM.findDOMNode(this.qrcodeRef), {
                width : 120,
                height : 120,
                correctLevel : QRCode.CorrectLevel.M
            });
            qrcode.makeCode(getDemoUrl());
            this.haveQrcode = true;
        }
    }
    scrollToPos(props) {
        // 增加定位到页面指定位置的逻辑，根据id查找
        let pos = props.params.pos;
        let offset = 0;
        if (pos && document.getElementById(pos)) {
            offset = document.getElementById(pos).offsetTop + 100;
        }
        // window.scrollTo(0, offset);
        offset && window.scrollTo(0, offset);
    }
    switchTitle() {
        let name = this.props.route.name;
        let title = document.head.getElementsByTagName('title')[0];
        title.innerHTML = `UF2.0 - ${name}`;
    }

    __init() {
        let originRender = this.render;
        this.render = function () {
            return this._render(originRender);
        };
    }

    // 两列展示demo
    __getDemo(...list) {
        return <Demo list={list}/>;
    }

    // 单列展示demo
    __getDemoSingle(...list) {
        return <Demo list={list} single={true} />;
    }

    // 移动版Demo
    __getMobileDemo(...list) {
        return <DemoMobile list={list} isDemo={this.isDemo} />;
    }

    // 整体框架在父类里实现，继承此父类的组件，均可使用
    _render(render) {
        return this.isDemo ? render.call(this) : (<div className="umpui-component">
            <h1 className="umpui-layer umpui-title">
                {this.props.route.name}
                {this.isMobile && (
                    <Popover placement="bottom" trigger="hover" arrowPointAtCenter
                        content={<div style={{padding: '6px'}}>
                            <p style={{fontWeight: 700, marginBottom: '10px'}}>扫二维码查看演示效果: </p>
                            <div ref={ele => (this.qrcodeRef = ele)}></div>
                        </div>}
                        onVisibleChange={this.makeQrcode.bind(this)}>
                        <Icon type="qrcode" className="qrcode-icon"></Icon>
                    </Popover>
                )}
            </h1>
            {/* 组件demo，直接在各个文档的render中实现 */}
            {render && render.call(this)}
            <div className={'umpui-layer umpui-block markdown ' + this.className}>
                <Markdown doc={this.doc}/>
            </div>
        </div>);
    }
}
