/**
 * @file fieldset 封装
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

export default class List extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
        this.state = {};
        this.init();
    }
    init(nextProps) {
        let props = nextProps || this.props;
        this.config = props.config || {};
        this.tags = this.config.tags || {};
        if (!!nextProps) {
            this.forceUpdate();
        }
    }
    generateList() {
        let data = this.props.data;
        let tags = this.tags;
        let liList = [];
        for (let key in tags) {
            let v = tags[key];
            let title = v;
            let value = data[key];
            if (typeof v === 'object') {
                if (v.disabled) {
                    continue;
                }
                title = v.title || key;
                if (v.render) {
                    value = v.render(data[key], data);
                } else {
                    value = data[key];
                }
            }
            liList.push(<li key={key}>
                <div className="uf-li-title">{title} :</div>
                <div className="uf-li-value">{value}</div>
            </li>);
        }
        return <ul className="uf-list-ul">
            {liList}
        </ul>;
    }
    render() {
        return <div className="uf-list">
            {this.props.data && this.generateList()}
        </div>;
    }
}
