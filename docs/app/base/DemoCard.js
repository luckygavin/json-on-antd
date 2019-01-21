/**
 * @file Demo展示
 * **/
import React from 'react';
import marked from 'marked';
import {Card, Icon} from 'antd';
import UF from 'src';
import {Utils} from 'src/utils';

const $uf = UF;
const uf = UF;
const ufName = '$uf';

// 把配置转换成字符串
export function switchCode(config) {
    let funcList = [];
    let cfgStr = JSON.stringify(config, (key, value)=>{
        let result = value;
        if (Utils.typeof(value, 'function')) {
            result = `$F${funcList.length}$`;
            funcList.push(value.toString().replace(/\t/g, ''));
            // if (/\t/g) {
            //     funcList.push(value.toString().replace(/\t/g, ''));
            // }
            // funcList.push(value.toString().replace(/\n\s{5}/g, '\n'));
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


export default class DemoCard extends React.Component {
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
        this.setSourceCode(this.props.config);
    }
    componentDidMount() {
        // clone一份，防止内部修改了配置的源数据影响demo代码的展示
        let conf = Utils.clone(this.props.config);
        UF.init(conf, `#${this.id}`);
    }
    componentDidUpdate(prevProps, prevState) {
        Prism && Prism.highlightAll();
    }
    toggle(i) {
        this.setState({show: !this.state.show});
    }
    // 获取UF接口
    getufIns() {
        return UF;
    }
    viewcode() {
        UF.Modal.create({
            title: this.props.title,
            maskClosable: true,
            width: 850,
            // footer: null,
            okText: '保存',
            cancelText: '关闭',
            onSubmit: ()=>{
                if (this.codeContainer) {
                    let content = this.codeContainer.innerText;
                    let confCode = content.replace(/^var\s+?config\s+?=\s+?/g, '').replace(/\n\$uf\.init.*$/g, '');
                    try {
                        let config = eval(confCode);
                        let uf = this.getufIns();
                        if (uf) {
                            let conf = Utils.clone(config);
                            uf.init(conf, `#${this.id}`);
                            this.setSourceCode(config);
                            this.forceUpdate();
                        }
                    } catch (e) {
                        console.warn(e);
                    }
                }
            },
            afterCreate() {
                Prism && Prism.highlightAll();
            },
            content: {type: 'div', className: 'demo codeviewer', content: {
                type: 'div', className: 'demo-card', content: {
                    type: 'div', className: 'ant-card-body', content: [
                        {
                            type: 'alert', mode: 'warning', showIcon: true, className: 'tips',
                            message: '可以直接编辑下面的配置，点击底部的保存按钮会自动刷新Demo展示'
                        },
                        {
                            type: 'div',
                            className: 'source-code',
                            content: this.renderSourceCode(true)
                        }
                    ]
                }
            }}
        });
    }
    setSourceCode(config) {
        this.sourceCode = `var config = ${switchCode(config)};\n${ufName}.init(config, \'#demo\');`;
    }
    renderSourceCode(editable) {
        let props = {};
        if (editable) {
            props = {
                contentEditable: true,
                ref: ele => (this.codeContainer = ele)
            };
        }
        return (
            <pre className="language-javascript" style={{background: 'transparent'}}>
                <code className="language-javascript" {...props}
                    dangerouslySetInnerHTML={{__html: this.sourceCode}}></code>
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
                    <Icon className="viewcode bymodal" type="scan" onClick={this.viewcode.bind(this)} />
                    <Icon className="viewcode collapse" type={this.state.show ? 'up-circle-o' : 'down-circle-o'}
                        onClick={this.toggle.bind(this)} />
                </div>
                <div className="source-code" style={{display: this.state.show ? 'block' : 'none'}}>
                    {this.renderSourceCode()}
                </div>
            </Card>
        );
    }
}

// 仅展示代码的卡片（不有代码的实现效果）
export class DemoCodeCard extends DemoCard {
    componentDidMount() {}
    getufIns() {
        let iframe = this.props.getDemoIframe();
        return iframe && iframe.contentWindow && iframe.contentWindow.UF;
    }
    render() {
        return (
            <Card className="demo-card" {...this.props.card}>
                {/* <div className="show" id={this.id}></div> */}
                <div className="description">
                    <div className="title">{this.props.title}</div>
                    <div className="content markdown" dangerouslySetInnerHTML={{__html: marked(this.props.description || '')}}></div>
                    <Icon className="viewcode bymodal" type="scan" onClick={this.viewcode.bind(this)} />
                    <Icon className="viewcode collapse" type={this.state.show ? 'up-circle-o' : 'down-circle-o'}
                        onClick={this.toggle.bind(this)} />
                </div>
                <div className="source-code" style={this.state.show ? {} : {maxHeight: '240px'}}>
                    {this.renderSourceCode()}
                </div>
            </Card>
        );
    }
}