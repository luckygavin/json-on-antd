/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from './Markdown.js';

export default class BaseDoc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // 获取 markdown 文档
    __getDoc() {
        return (
            <div className="umpui-layer umpui-block markdown">
                <Markdown doc={this.doc}/>
            </div>
        );
    }
}
