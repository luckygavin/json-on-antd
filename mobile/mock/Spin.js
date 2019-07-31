/**
 * @file Loading 组件
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-09 20:28:09
 */

import React from 'react';
import {Utils} from 'src/utils';
import {ActivityIndicator} from 'antd-mobile';

export default class Spin extends React.Component {
    render() {
        return <div>
            <ActivityIndicator {...Utils.filter(this.props, 'loading')}
                animating={!!this.props.spinning}/>
            {this.props.children}
        </div>;
    }
}