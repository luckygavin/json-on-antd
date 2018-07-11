/**
 * @file 文档基类
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown.js';
import Demo from './Demo.js';

export default class BaseDoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // 日志页面需要增加更多样式
        this.className = '';
    }
    
    componentWillReceiveProps(nextProps) {
        this.scrollToPos(nextProps);
    }
    
    componentDidMount() {
        this.scrollToPos(this.props);
    }

    scrollToPos(props) {
        // 增加定位到页面指定位置的逻辑，根据id查找
        let pos = props.params.pos;
        let offset = 0;
        if (pos && document.getElementById(pos)) {
            offset = document.getElementById(pos).offsetTop + 100;
        }
        // window.scrollTo(0, offset);
        offset && window.scrollTo(0, offset);
    }

    __init() {
        let originRender = this.render;
        this.render = function () {
            return this._render(originRender);
        };
    }

    // 两列展示demo
    __getDemo(...list) {
        return <Demo list={list}/>;
    }

    // 单列展示demo
    __getDemoSingle(...list) {
        return <Demo list={list} single={true} />;
    }

    // 整体框架在父类里实现，继承此父类的组件，均可使用
    _render(render) {
        return (<div className="umpui-component">
            <h1 className="umpui-layer umpui-title">{this.props.route.name}</h1>
            {/* 组件demo，直接在各个文档的render中实现 */}
            {render && render.call(this)}
            <div className={'umpui-layer umpui-block markdown ' + this.className}>
                <Markdown doc={this.doc}/>
            </div>
        </div>);
    }
}
