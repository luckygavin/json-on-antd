/**
 * @file iframe 功能增强
 * @author liuzechun
 * Created Date: 2017-10-12 03:13:45
 *
 * Last Modified: 2017-10-12 03:17:08
 * Modified By: liuzechun
 */

import React from 'react';
import {Spin} from 'antd';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

export default class Iframe extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.__init();
    }
    componentWillReceiveProps(nextProps) {
        // 重新获取页面时重新展示loading
        // if (nextProps.src !== this.__prevProps.src) {
        if (nextProps.src !== this.props.src) {
            let hashIndex = nextProps.src.indexOf('#');
            let srcHashIndex = this.props.src.indexOf('#');
            // 如果只是变更hash值，则不需要再展示loading
            if (hashIndex > -1 && nextProps.src.slice(0, hashIndex) === this.props.src.slice(0, srcHashIndex)) {
                return;
            }
            this.setState({loading: true});
        }
    }
    componentDidMount() {
        if (!this.ifr.height) {
            // 获取父级容器的高度，使ifame和容器等高
            this.ifr.height = this.getParentHeight();
        }
    }
    getParentHeight() {
        let parent = this.root.parentElement;
        return parent.offsetHeight  + 'px';
    }
    render() {
        let style = {height: this.__props.height, width: this.__props.width};
        return (
            <div {...this.__getCommonProps({className: 'uf-iframe', style})} ref={ele => this.root = ele}
                data-src={(new URL(this.__props.src, window.location.href)).href}>
                <Spin spinning={this.state.loading && this.__props.showLoading}>
                    <iframe {...Utils.filter(this.__props, ['showLoading', 'delay', 'className', 'style', 'height', 'width'])}
                        ref={ele=>this.ifr = ele}
                        onLoad={even => {
                            try {
                                this.setState({loading: false});
                                let ifr = even.target;
                                let iDoc = ifr.contentWindow.document;
                                let iWindow = ifr.contentWindow;
                                // Iframe高度根据内容高度变化的三种模式: auto / max / fixed
                                let mode = this.__props.mode;
                                if (mode !== 'fixed') {
                                    let setIfrHeight = ()=>{
                                        let iDocHight;
                                        // 这里分别从 documentElement 和 body 上取值，即可达到 max/auto 的效果
                                        if (mode === 'max') {
                                            iDocHight = iDoc.documentElement.scrollHeight;
                                        // mode === 'auto'
                                        } else {
                                            // 注意：如果iframe的页面body/html设置了height: 100%，则auto失效，展示效果和max相同
                                            iDocHight = iDoc.body.scrollHeight;
                                        }
                                        ifr.height = iDocHight + 'px';
                                    };
                                    setIfrHeight();
                                    // iframe文档做监听，如果发生变化则重新设置高度
                                    // 注意观察是否会有性能问题（监听了整个页面的元素和属性变化）
                                    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver
                                            || window.MozMutationObserver;
                                    let timer;
                                    let observer = new MutationObserver(m=>{
                                        // 延迟重新设定iframe高度，可防止高度闪烁
                                        timer && clearTimeout(timer);
                                        timer = setTimeout(()=>{
                                            setIfrHeight();
                                            timer = null;
                                        }, this.__props.delay);
                                    });
                                    observer.observe(iDoc, {
                                        childList: true,
                                        attributes: true,
                                        subtree: true
                                    });
                                }
                                // 监听页面跳转
                                iWindow.addEventListener('popstate', e=>{
                                    this.root.setAttribute('data-src', e.currentTarget.location);
                                });

                                this.__props.onLoad && this.__props.onLoad(even);
                            } catch (e) {
                                console.warn(e);
                            }
                        }
                    }/>
                </Spin>
            </div>
        );
    }
}