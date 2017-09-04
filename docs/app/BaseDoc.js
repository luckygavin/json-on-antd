/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown.js';
import Demo from './base/Demo.js';

export default class BaseDoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    __init() {
        let originRender = this.render;
        this.render = function () {
            return this._render(originRender);
        };
    }

    __getDemo(...list) {
        return <Demo list={list}/>
    }

    // 整体框架在父类里实现，继承此父类的组件，均可使用
    _render(render) {
        return (<div className="umpui-component">
            <h1 className="umpui-layer umpui-title">{this.props.route.name}</h1>
            {/* 组件demo，直接在各个文档的render中实现 */}
            {render && render.call(this)}
            <div className="umpui-layer umpui-block markdown">
                <Markdown doc={this.doc}/>
            </div>
        </div>);
    }
}
