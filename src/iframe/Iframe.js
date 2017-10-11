/**
 * @file iframe 特殊处理
 */

import React from 'react';
import {Spin} from 'antd';
import {BaseComponent} from 'uf/component';

import './style.scss';

// 解决跨域问题
document.domain = 'baidu.com';

export default class Iframe extends BaseComponent {
    constructor(props) {
        super(props);
        // 默认参数，支持多层次的参数（深层merge）
        this.__props = {
            mode: 'auto'
        };
        this.state = {
            loading: true
        };
        this.__init();
    }
    componentWillReceiveProps(nextProps) {
        // 重新获取页面时重新展示loading
        if (nextProps.src !== this.__prevProps.src) {
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
        return (
            <div className="uf-iframe" ref={ele=>this.root = ele} data-src={this.__props.src}>
                <Spin spinning={this.state.loading}>
                    <iframe {...this.__props}
                        ref={ele=>this.ifr = ele}
                        onLoad={even => {
                            try {
                                this.setState({loading: false});
                                // Iframe高度根据内容高度变化的三种模式: auto / max / fixed
                                let mode = this.__props.mode;
                                if (mode !== 'fixed') {
                                    let ifr = even.target;
                                    let iDoc = ifr.contentWindow.document;
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
                                        console.log(iDocHight);
                                        ifr.height = iDocHight + 'px';
                                    }
                                    setIfrHeight();
                                    // iframe文档做监听，如果发生变化则重新设置高度
                                    // 注意观察是否会有性能问题（监听了整个页面的元素和属性变化）
                                    let MutationObserver = window.MutationObserver || window.WebKitMutationObserver
                                            || window.MozMutationObserver;
                                    let observer = new MutationObserver(m=>{
                                        setIfrHeight();
                                    });
                                    observer.observe(iDoc, {
                                        childList: true,
                                        attributes: true,
                                        subtree: true
                                    });
                                }

                                this.__props.onLoad && this.__props.onLoad(even);
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    }/>
                </Spin>
            </div>
        );
    }
}