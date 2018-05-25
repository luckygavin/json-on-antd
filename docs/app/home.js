/**
 * @file 第三方组件列表
 * **/
import React from 'react';
import ReactDOM from 'react-dom';
// import BaseDoc from 'docs/app/base/BaseDoc.js';
import Markdown from './base/Markdown.js';
import Demo from './base/Demo.js';
import {Button, Tag, Card} from 'antd';

export default class Home extends React.Component{
    render() {
        return <div className="umpui-component home">
            <h1 className="umpui-layer umpui-title">Umpfe Framework</h1>
            <div className="umpui-layer umpui-block markdown">
                <p>一个自助配置框架，通过配置 JSON 即能生成页面。</p>
                <div>
                    <Button className="banner-btn start" type="primary" size="large">
                        <a href="#/Docs">开始使用</a>
                    </Button>
                    <Button className="banner-btn component" type="default" size="large">
                        <a href="#/Component">组件文档</a>
                    </Button>
                    <Tag style={{marginLeft: '12px'}}><a href="#/Standard">加入我们</a></Tag>
                </div>
                {/* <div className="section">
                    <Card/>
                </div> */}
            </div>
        </div>;
    }
}
