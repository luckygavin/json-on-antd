/**
 * @file Demo展示
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import {Modal, Card, Row, Col, Icon} from 'antd';
import UF from 'src';
import {Utils} from 'src/utils';

const ufName = '$uf';

// 把配置转换成字符串
export function switchCode(config) {
    let funcList = [];
    let cfgStr = JSON.stringify(config, (key, value)=>{
        let result = value;
        if (Utils.typeof(value, 'function')) {
            result = `$F${funcList.length}$`;
            funcList.push(value.toString().replace(/\t/g, ''));
        }
        return result;
    }, 4);
    cfgStr = cfgStr.replace(/\"\$F(\d+)\$\"/g, (v, v1)=>funcList[v1]);
    cfgStr = cfgStr.replace(/\"(\w+?)\"\:\s/g, (v, v1)=>`${v1}: `);
    // 把双引号改为单引号
    cfgStr = cfgStr.replace(/\\"/g, '$_tmp\'');
    cfgStr = cfgStr.replace(/\"/g, '\'');
    cfgStr = cfgStr.replace(/$_tmp\'/g, '\"');
    // 替换UF名称
    cfgStr = cfgStr.replace(/\(0\, _tools2\.default\)/g, ufName);
    cfgStr = cfgStr.replace(/_tools2\.default/g, ufName);
    cfgStr = cfgStr.replace(/\(0\, _src2\.default\)/g, ufName);
    cfgStr = cfgStr.replace(/_src2\.default/g, ufName);
    // 移除匿名函数的名称
    cfgStr = cfgStr.replace(/function\s(\S+?)\(/g, (str, d)=>{return str.replace(d, '')});
    return cfgStr;
}

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.id = `demo-${this.props.id}`
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });
        this.sourceCode = this.getSourceCode(this.props.config);
    }
    componentDidMount() {
        // clone一份，防止内部修改了配置的源数据影响demo代码的展示
        let conf = Utils.clone(this.props.config);
        UF.init(conf, `#${this.id}`);
    }
    toggle(i) {
        this.setState({show: !this.state.show});
    }
    getSourceCode(config) {
        let code = `var config = ${switchCode(config)};\n${ufName}.init(config, \'#demo\');`;
        return (
            <pre className="language-javascript" style={{background: 'transparent'}}>
                <code className="language-javascript" dangerouslySetInnerHTML={{__html: code}}></code>
            </pre>
        );
    }
    render() {
        return (
            <Card className="demo-card" {...this.props.card}>
                <div className="show" id={this.id}></div>
                <div className="description">
                    <div className="title">{this.props.title}</div>
                    <div className="content markdown" dangerouslySetInnerHTML={{__html: marked(this.props.description || '')}}></div>
                    <Icon className="collapse" type={this.state.show ? 'up-circle-o' : 'down-circle-o'}
                        onClick={this.toggle.bind(this)} />
                </div>
                <div className="source-code" style={{display: this.state.show ? 'block' : 'none'}}>
                    {this.sourceCode}
                </div>
            </Card>
        );
    }
}
