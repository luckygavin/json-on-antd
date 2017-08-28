import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';

export default class Antd extends BaseComponent {
    constructor(props) {
        super(props);
    }

    __init() {
        super.__init.call(this);
        this._antdInitProps();

        const originRecieiveProps = this.componentWillReceiveProps;
        this.componentWillReceiveProps = (nextProps, ...params) => {
            this._antdComponentWillReceiveProps(nextProps);
            originRecieiveProps && originRecieiveProps(nextProps, ...params);
        }

    }

    // 组件的 componentWillReceiveProps 函数默认处理逻辑
    _antdComponentWillReceiveProps(nextProps) {
        this._antdInitProps(nextProps);
    }

    // 使用Rest对象解构 去除掉多余的属性（解决报warning问题）
    // 后面传入组件的参数用 __props 代替 props
    _antdInitProps(props) {
        let {__cache, ...__props} = props || this.props;
        this.__props = __props;
    }

}
