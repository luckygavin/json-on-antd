/**
 * @file 可配置表单
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';

import DataEntry from './components/DataEntry.js';
import Genaral from './components/Genaral.js';

import * as Antd from 'antd';

/* Genaral 类组件 ****************************************************************************************** */

export class Button extends Genaral {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Button {...this.__props}/>
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

/* DataEntry 类组件 ****************************************************************************************** */
export class Input extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Input {...this.__props}/>
    }
}

export class Select extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Select {...this.__props} {...this.control}/>
    }
}

export class Radio extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Radio {...this.__props}/>
    }
}

export class Checkbox extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Checkbox {...this.__props}/>
    }
}