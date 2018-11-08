/**
 * @file Drawer 抽屉组件，属性及功能和Modal一致，展示效果为侧拉展示
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import NewModal from './Modal.js';

export default class Drawer extends NewModal {
    constructor(props) {
        super(props);
        // this.containerId = 'uf-drawer-container';
        // this.containerEle = document.body;
    }
    // componentWillMount() {
    //     // 创建一个元素承载所有的抽屉弹框，方便控制样式
    //     if (!document.getElementById(this.containerId)) {
    //         let container = document.createElement('div');
    //         container.setAttribute('id', this.containerId);
    //         container.setAttribute('class', this.containerId);
    //         document.body.append(container);
    //         this.containerEle = container;
    //     }
    // }
    // 继承父组件
    handleSelfProps() {
        let selfProps = super.handleSelfProps();
        // 处理抽屉组件的样式
        let className = ' uf-drawer';
        if (this.__props.placement) {
            className += ' ' + this.__props.placement;
        }
        if (this.__props.footer === undefined || !!this.__props.footer) {
            className += ' has-ft';
        }
        if (!!this.__props.title) {
            className += ' has-tl';
        }
        selfProps.className += className;
        // 增加盛放抽屉的容器
        // selfProps.getContainer = () => this.containerEle;
        return selfProps;
    }
}
