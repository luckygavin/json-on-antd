/**
 * @file 封装
 */
import React from 'react';
import {Row, Col} from 'antd';
import {BaseComponent} from 'src/base';

export default class List extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.__init();
    }
    render() {
        let {data = {}, columns = [], layout = {}} = this.__props;
        let {labelCol, valueCol, labelStyle, valueStyle} = layout;
        let className = 'uf-list';
        className += this.__props.bordered ? ' show-border' : '';
        className += this.__props.interleave ? ' show-bg' : '';

        return <div {...this.__getCommonProps({className: className})}>
            {columns.map(item=>(
                <Row key={item.dataIndex} className="uf-list-row">
                    <Col key="label" span={labelCol} style={labelStyle} className="uf-list-label">
                        {item.title}
                    </Col>
                    <Col key="value" span={valueCol} style={valueStyle} className="uf-list-value">
                        {!item.render
                            ? data[item.dataIndex]
                            : this.__analysis(item.render(data[item.dataIndex], data))
                        }
                    </Col>
                </Row>
            ))}
        </div>;
    }
}
