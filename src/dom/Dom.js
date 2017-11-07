/**
 * @file 需要操作的原生dom继承 BaseComponent
 * @author liuzechun
 * Created Date: 2017-10-17 04:11:07
 */

import React from 'react';
import {BaseComponent} from 'uf/component';
import {Utils} from 'uf/utils';

export default class Dom extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <this.props.__type {...this.__props} />
    }
}
