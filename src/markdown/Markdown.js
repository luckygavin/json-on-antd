/**
 * @file 生成MarkDown样式
 * */
import React from 'react';
import marked from 'marked';
import {BaseComponent} from 'src/base';

export default class Markdown extends BaseComponent {
    constructor(props) {
        super(props);
        this._filter.push('docs', 'highlight');
        this.__init();
        marked.setOptions(this.__props);
    }
    // componentDidMount() {
    //     // 代码高亮处理
    //     if (this.props.highlight) {
    //         this._factory.$requirejs(['highlight'], hl=>{
    //             if (hljs) {
    //                 marked.setOptions(Object.assign({}, this.__props, {
    //                     highlight: code => {
    //                         return hljs.highlightAuto(code).value;
    //                     }
    //                 }));
    //             }
    //         });
    //     }
    // }
    render() {
        console.log(this.__filtered.docs);
        return <div className="uf-markdown">
            <div dangerouslySetInnerHTML={{
                __html: marked(this.__filtered.docs || '')
            }}/>
        </div>;
    }
}