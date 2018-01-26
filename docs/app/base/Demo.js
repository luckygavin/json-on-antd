/**
 * @file Demo展示
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import {Modal, Card, Row, Col, Icon} from 'antd';
import UF from 'uf/tools';
import {Utils} from 'uf/utils';

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
        let obj = this.handleFunction(config);
        let cfgStr = JSON.stringify(obj, null, 4);
        cfgStr = cfgStr.replace(/\"\$F(\d+)\$\"/g, (v, v1)=>this.funcList[v1]);
        cfgStr = cfgStr.replace(/\(0\, _tools2\.default\)/g, 'UF');
        cfgStr = cfgStr.replace(/_tools2\.default/g, 'UF');
        
        let code = 'var config = ' + cfgStr + ';\nUF.init(config, \'#demo\');';
        return (
            <pre className="language-javascript" style={{background: 'transparent'}}>
                <code className="language-json" dangerouslySetInnerHTML={{__html: code}}></code>
            </pre>
        );
    }
    // 处理配置里的函数
    handleFunction(config) {
        let result;
        if (Utils.typeof(config, 'array')) {
            result = [];
            for (let v of config) {
                result.push(this.handleFunction(v));
            }
        } else if (Utils.typeof(config, 'object')) {
            result = {};
            for (let i in config) {
                result[i] = this.handleFunction(config[i]);
            }
        } else if (Utils.typeof(config, 'function')) {
            result = `$F${this.funcList.length}$`;
            this.funcList.push(config.toString());
        } else {
            result = config;
        }
        return result;
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
