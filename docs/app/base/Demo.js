/**
 * @file Table使用说明
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import {Modal, Card, Row, Col, Icon} from 'antd';
import Uf from 'uf/tools';

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
    }
    componentDidMount() {
        (this.props.list || []).map((item, i)=>{
            Uf.init(item.config, `demo-${i}`);
        });
    }
    toggle(i) {
        this.show[i] = !this.show[i];
        this.forceUpdate();
    }
    getSourceCode(config) {
        let code = 'var config = ' + JSON.stringify(config, null, 2) + ';\nUf.init(config, \'demo\');';
        return (
            <pre className="language-json" style={{background: 'transparent'}}>
                <code className="language-json" dangerouslySetInnerHTML={{__html: code}}></code>
            </pre>
        );
    }
    getCard(item, i) {
        return (
            <Card key={i} style={{borderRadius: '4px'}}>
                <div className="show" id={`demo-${i}`}></div>
                <div className="description">
                    <div className="title">{item.title}</div>
                    <div className="content">{item.description}</div>
                    <Icon className="collapse" type={this.show[i] ? 'up-circle-o' : 'down-circle-o'}
                            onClick={this.toggle.bind(this, i)}/>
                </div>
                <div className="source-code" style={{display: this.show[i] ? 'block' : 'none'}}>
                    {this.getSourceCode(item.config)}
                </div>
            </Card>
        );
    }
    render() {
        let odd = [], even = [];
        (this.props.list || []).map((item, i)=>{
            if (i % 2 > 0) {
                odd.push(this.getCard(item, i));
            } else {
                even.push(this.getCard(item, i));
            }
        });
        return <div className="demo">
            <h2 style={{margin: '16px 0'}}>代码演示</h2>
            <Row gutter={24}>
                <Col span={12}>{even}</Col>
                <Col span={12}>{odd}</Col>
            </Row>
        </div>;
    }
}
