/**
 * @file ReactModal 适用于弹出层快速提交表单
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import {Collapse, Button} from 'antd';
import NewModal from './Modal.js';

/**** 自己造一个使用modal处理逻辑但是不是弹框而是直接放在页面上的组件 *************************************/

export default class Dashboard extends NewModal {
    // 当传入visible时，根据visible控制是否展示
    // 未传入visible时，根据当前的状态切换是否展示
    // 即show同时包含了展示和隐藏的功能
    show(data, visible = true, ...p) {
        if (!visible || this.__props.visible) {
            this._close();
        } else {
            super.show(data, visible, ...p);
        }
    }
    _close() {
        this.__props.onClose && this.__props.onClose();
        return super.close();
    }
    // 覆盖原来关闭弹框的函数，防止页面隐藏
    close() {}
    render() {
        // 获取排序后的结果
        let children = this.getChildrenRank();
        let body = <div {...this.__getCommonProps()}>
            {children[0]}
            {children[1]}
            {children[2]}
            <div style={{overflow: 'hidden'}}>
                {this.__props.footerContent}
            </div>
        </div>;
        return !this.__props.visible
            ? null
            : (!this.__props.title && !this.__props.closable)
                ? body
                : <Collapse activeKey={'active'} bordered={!!this.__props.bordered}
                    {...this.__getCommonProps({ className: 'uf-dashboard'})}>
                    <Collapse.Panel key="active" header={
                            <div style={{overflow: 'hidden'}}>
                                {this.__analysis(this._handleButtons(this.__props.title))}
                                {this.__props.closable && (<Button size="small" style={{float: 'right'}} type="danger"
                                    onClick={this._close.bind(this)}>关闭</Button>
                                )}
                            </div>
                        }>
                        {body}
                    </Collapse.Panel>
                </Collapse>;
    }
}
