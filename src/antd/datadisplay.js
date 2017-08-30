/**
 * @file DataEntry 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import DataEntry from './base/DataDisplay.js';
import * as Antd from 'antd';


/************* Cascader 级联选择 ************************************************************************** */

export class Cascader extends DataEntry {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Cascader {...this.__props}/>
    }
}