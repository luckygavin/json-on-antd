/**
 * @file 解析配置，生成一个组件
 * @author liuzechun
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loader from './loader.js';

class Factory extends Component {
    constructor(props) {
        super(props);
    }
    getConfig(item) {
        if (item.config) {
            return item.config;
        } else {
            let config = Object.assign({}, item);
            // delete config['name'];
            // delete config['type'];
            return config;
        }
    }
    // 解析组件配置，生成组件
    generateItem(item) {
        let name = item.name;
        let type = item.type;
        let Item = Loader.get(type);
        let config = this.getConfig(item);
        return <Item config={config}/>;
    }
    // 拆分多个config，分离成组件的配置
    generateElement(config) {
        config = config || this.props.config;
        let result;
        if (config instanceof Array) {
            result = [];
            for (let item of config) {
                result.push(this.generateElement(item));
            }
        } else {
            result = this.generateItem(config);
        }
        return result;
    }
    render() {
        return <div>{this.generateElement()}</div>;
    }
}

export default Factory;