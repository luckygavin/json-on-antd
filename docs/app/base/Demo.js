/**
 * @file Demo展示
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import {Modal, Card, Row, Col, Icon} from 'antd';
import UF from 'src/tools';
import {Utils} from 'src/utils';

const ufName = '$uf';

// 把配置转换成字符串
export function switchCode(config) {
    let funcList = [];
    let cfgStr = JSON.stringify(config, (key, value)=>{
        let result = value;
        if (Utils.typeof(value, 'function')) {
            result = `$F${funcList.length}$`;
            funcList.push(value.toString());
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
    return cfgStr;
}

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.show = {};
        marked.setOptions({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });
        this.funcList = [];
        this.sourceCode = [];
        (this.props.list || []).map((item, i)=>{
            this.sourceCode[i] = this.getSourceCode(item.config);
        });
    }
    componentDidMount() {
        Utils.clone(this.props.list).map((item, i)=>{
            UF.init(item.config, `#demo-${i}`);
        });
    }
    toggle(i) {
        this.show[i] = !this.show[i];
        this.forceUpdate();
    }
    getSourceCode(config) {
        let code = `var config = ${switchCode(config)} + ;\n${ufName}.init(config, \'#demo\');`;
        return (
            <pre className="language-javascript" style={{background: 'transparent'}}>
                <code className="language-json" dangerouslySetInnerHTML={{__html: code}}></code>
            </pre>
        );
    }
    getCard(item, i) {
        return (
            <Card key={i} style={{borderRadius: '4px', marginBottom: '16px'}}>
                <div className="show" id={`demo-${i}`}></div>
                <div className="description">
                    <div className="title">{item.title}</div>
                    <div className="content" dangerouslySetInnerHTML={{__html: marked(item.description || '')}}></div>
                    <Icon className="collapse" type={this.show[i] ? 'up-circle-o' : 'down-circle-o'}
                            onClick={this.toggle.bind(this, i)}/>
                </div>
                <div className="source-code" style={{display: this.show[i] ? 'block' : 'none'}}>
                    {this.sourceCode[i]}
                </div>
            </Card>
        );
    }
    render() {
        let odd = [], even = [];
        (this.props.list || []).map((item, i)=>{
            if (!this.props.single) {
                if (i % 2 > 0) {
                    odd.push(this.getCard(item, i));
                } else {
                    even.push(this.getCard(item, i));
                }
            } else {
                odd.push(this.getCard(item, i));
            }
        });
        return <div className="demo">
            <h2 style={{margin: '16px 0'}}>代码演示</h2>
            {(!this.props.single)
                ? <Row gutter={18}>
                    <Col span={12}>{even}</Col>
                    <Col span={12}>{odd}</Col>
                </Row>
                : odd
            }
        </div>;
    }
}
