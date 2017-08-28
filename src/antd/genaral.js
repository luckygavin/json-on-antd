/**
 * @file Genaral 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Genaral from './base/Genaral.js';
import * as Antd from 'antd';

export class Button extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Button {...this.__props}/>
    }
}

export class ButtonGroup extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Button.Group {...this.__props}/>
    }
}

export class Icon extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Icon {...this.__props}/>
    }
}

// Layout 组件
export class Layout extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Layout {...this.__props}/>
    }
}
