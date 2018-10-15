/**
 * @file 新功能提示
 */
import React from 'react';
import ReactDOM from 'react-dom';
import DemoCard from 'docs/app/base/DemoCard.js';
import UF from 'src';

import Mapping from './mapping.js';

const version = '0.3.0';

const config = {
    type: 'modal',
    className: "new-tips",
    visible: true,
    width: 600,
    title: [
        '新功能一览：',
        // 'WHAT\'S NEW：',
        {
            type: 'span',
            name: 'tips-count',
            content: ''
        }
    ],
    content: Mapping[version].map((item, i) => (
        <div>
            {/* <h4>按钮提供了可交互状态</h4>
            <p>按钮提供了可交互状态</p> */}
            <div className="demo">
                <DemoCard id={`newtips-${i}`} {...item.config} card={{noHovering: true}} />
            </div>
        </div>
    ))
};

export default class NewTips extends React.Component {
    
    componentDidMount() {
        // UF.init(config, '#new-tips');
    }
    
    render() {
        return <div id="new-tips"></div>;
    }
};