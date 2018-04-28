/**
 * @file 生成MarkDown样式，text是通过require引入的
 * */
import React from 'react';
import marked from 'marked';
import mdfile from 'docs/markdown';
// import requirejs from 'src/tools/requirejs.js';
// import {switchCode} from './Demo.js';
const config = require('root/package.json');

export default class Markdown extends React.Component {
    constructor(props) {
        super(props);
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });
        // this.replaceTemplate = {};
    }
    render() {
        return (this.props.doc && mdfile[this.props.doc])
            ? <div dangerouslySetInnerHTML={{__html: marked(
                // markdown 中可以使用变量（package.json中定义的属性）
                mdfile[this.props.doc].replace(/\%\{(.+?)\}\%/g, function(s, v) {
                    return config[v] || s;
                })
            )}}></div>
            : <div dangerouslySetInnerHTML={{__html: marked(this.props.doc)}}></div>;
    }

    // 增加异步引用文件功能
    // 用法：%{require=docs/demo/config/router-page.2.js}%
    //   暂时弃置，因为只有模块也是用requirejs写法书写时才能这样用
    // refresh() {
    //     for (let i in this.replaceTemplate) {
    //         if (!this.replaceTemplate[i]) {
    //             return;
    //         }
    //     }
    //     this.forceUpdate();
    // }
    // render() {
    //     return (this.props.doc && mdfile[this.props.doc])
    //         ? <div dangerouslySetInnerHTML={{__html: marked(
    //             // markdown 中可以使用变量（package.json中定义的属性）
    //             mdfile[this.props.doc].replace(/\%\{(.+?)\}\%/g, (s, v)=>{
    //                 // %{require=xxx}% 可异步引入模块代码
    //                 if (v.indexOf('require=') === 0) {
    //                     // 如果已经获取到模块文件，直接替换
    //                     if (this.replaceTemplate[s]) {
    //                         return this.replaceTemplate[s];
    //                     // 否则，使用requirejs获取文件，并储存
    //                     } else {
    //                         this.replaceTemplate[s] = null;
    //                         requirejs([v.replace(/require=/g, '')], (foo, a)=>{
    //                             this.replaceTemplate[s] = switchCode(foo);
    //                             this.refresh();
    //                         });
    //                         return s;
    //                     }
    //                 }
    //                 return config[v] || s;
    //             })
    //         )}}></div>
    //         : <div dangerouslySetInnerHTML={{__html: marked(this.props.doc)}}></div>;
    // }
}
