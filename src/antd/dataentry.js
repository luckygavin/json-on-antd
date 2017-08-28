/**
 * @file DataEntry 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import DataEntry from './base/DataEntry.js';
import * as Antd from 'antd';

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