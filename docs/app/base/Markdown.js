/**
 * @file 生成MarkDown样式，text是通过require引入的
 * */
import React from 'react';
import marked from 'marked';
import mdfile from 'docs/markdown';

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
    }
    render() {
        return this.props.doc
            ? <div dangerouslySetInnerHTML={{__html: marked(mdfile[this.props.doc])}}></div>
            : null;
    }
}
