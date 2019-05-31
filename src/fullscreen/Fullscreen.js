/**
 * @file Fullscreen 全屏组件
 */
import React from 'react';
import {Icon} from 'antd';
import {BaseComponent} from 'src/base';

export default class Fullscreen extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            fullscreen: false
        };
        this.__init();
    }
    toggleFullScreen() {
        this.setState({fullscreen: !this.state.fullscreen});
    }
    render() {
        return <div {...this.__getCommonProps({className: 'uf-fullscreen' + (this.state.fullscreen ? ' fullscreen' : '')})}>
            {this.state.fullscreen
                ? <Icon type="close-square" className="close-fullscreen" onClick={this.toggleFullScreen.bind(this)}/>
                : <Icon type="scan" className="show-fullscreen" onClick={this.toggleFullScreen.bind(this)}/>
            }
            {this.__props.children}
        </div>;
    }
}
