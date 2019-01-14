/**
 * @file Description
 * @author liuzechun
 * Created Date: 2017-09-29 07:26:02
 *
 * Last Modified: 2017-09-29 07:26:02
 * Modified By: liuzechun
 */

import React from 'react';
import BaseLayout from 'src/antd/base/Layout.js';
import {Utils} from 'src/utils';
import * as Antd from 'antd-mobile';

/************* Grid 宫格 ************************************************************************** */
export class Grid extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Grid {...Utils.filter(this.__props, ['items'])}
            data={(this.__props.items || []).map(v=>{
                if (v && Utils.typeof(v.icon, 'object')) {
                    v.icon = this.__analysis(v.icon);
                }
                return v;
            })}/>;
    }
}

/************* Flex 布局 ************************************************************************** */
export class Flex extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Flex {...this.__props}/>;
    }
}
export class FlexItem extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Flex.Item {...this.__props}/>;
    }
}

/************* WingBlank 两翼留白 ************************************************************************** */
export class WingBlank extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.WingBlank {...this.__props}/>;
    }
}

/************* WhiteSpace 上下留白 ************************************************************************** */
export class WhiteSpace extends BaseLayout {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.WhiteSpace {...this.__props}/>;
    }
}
