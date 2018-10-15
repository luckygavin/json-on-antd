/**
 * @file Demo展示
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';
import DemoCard from './DemoCard.js'

// 把配置转换成字符串
export const switchCode = require('./DemoCard.js').switchCode;

export default class Demo extends React.Component {
    render() {
        let odd = [], even = [];
        (this.props.list || []).map((item, i)=>{
            if (!this.props.single) {
                if (i % 2 > 0) {
                    odd.push(<DemoCard key={i} id={i} {...item}/>);
                } else {
                    even.push(<DemoCard key={i} id={i} {...item}/>);
                }
            } else {
                odd.push(<DemoCard key={i} id={i} {...item}/>);
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
