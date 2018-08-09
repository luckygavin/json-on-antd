/**
 * @file 扩展组件开发示例
 * @author liuzechun
 * Created Date: 2018-07-29 06:36:08
 */

import React, {PureComponent, Component} from 'react';

export default class Example extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>这是一个用于测试的扩展组件</div>;
    }
}