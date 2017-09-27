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
        this.state = {
            loading: true
        };
        this.__init();
    }
    componentWillReceiveProps() {
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
        // return this.ifr.parentElement.offsetHeight  + 'px';
        // 因为增加了loading组件，iframe和其父元素之间隔了两层loading的标签
        let parent = this.ifr.parentElement.parentElement.parentElement;
        return parent.offsetHeight  + 'px';
    }
    render() {
        return (
            <Spin spinning={this.state.loading}>
                <iframe {...this.__props}
                    className={'uf-iframe ' + (this.__props.className || '')} 
                    ref={ele=>this.ifr = ele}
                    onLoad={even => {
                        try {
                            this.setState({loading: false});
                            let ifr = even.target;
                            let iDoc = ifr.contentWindow.document;
                            // 此处获取iframe的文档的高度，如果文档的body设置的 height:100% 的话，此处无效
                            let iDocHight = iDoc.documentElement.scrollHeight;
                            if (iDocHight > +ifr.height.replace('px', '')) {
                                ifr.height = iDocHight + 'px';
                            }
                            this.__props.onLoad && this.__props.onLoad(even);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }/>
            </Spin>
        );
    }
}