/**
 * @file Demo展示
 * **/
import React from 'react';
import {Layout, Row} from 'antd';
import {DemoCodeCard} from './DemoCard.js'
import {Utils} from 'src/utils';

const {Sider, Content} = Layout;
function getDemoUrl() {
    let urlPrefix = location.origin + location.pathname;
    let hash = location.hash;
    return urlPrefix + 'docs/demo/mobile.php' + hash;
}

// 把配置转换成字符串
export const switchCode = require('./DemoCard.js').switchCode;


export default class DemoMobile extends React.Component {
    render() {
        return this.props.isDemo
            ? <DemoDisplay {...this.props}/>
            : <DemoCode {...this.props}/>;
    }
}

// 页面代码渲染
export class DemoCode extends React.Component {
    render() {
        let demoUrl = getDemoUrl();
        return <div className="demo mobile">
            {(!this.props.list || this.props.list.length === 0)
                ? ''
                : <Layout style={{background: '#fff'}}>
                    <Content>
                        {(this.props.list || []).map((item, i)=>{
                            return <DemoCodeCard key={i} id={i} {...item} getDemoIframe={() => this.iframe}/>;
                        })}
                    </Content>
                    <Sider width={395} style={{background: '#fff', paddingLeft: '20px', height: 620}}>
                        <div className="mobile-header">
                            <div className="statbar">
                                <img width={350} alt="presentation"
                                    src="./public/img/mobile-header.png"
                                    style={{margin: '0px 2px'}} />
                            </div>
                            <div className="nav-bar">
                                <div className="url-box">
                                    {demoUrl}
                                </div>
                            </div>
                        </div>
                        <div className="mobile-content">
                            <iframe ref={ele => (this.iframe = ele)} src={demoUrl}></iframe>
                        </div>
                    </Sider>
                </Layout>
            }
        </div>;
    }
}

// 纯展示
export class DemoDisplay extends React.Component {
    componentDidMount() {
        // clone一份，防止内部修改了配置的源数据影响demo代码的展示
        {(this.props.list || []).map((item, i)=>{
            let conf = Utils.clone(item.config);
            window.UF.init(conf, `#${'demo-' + i}`);
        })}
    }
    render() {
        return <div>
            {(this.props.list || []).map((item, i)=>{
                return <div key={item.title + i}>
                    <h3>{item.title}</h3>
                    <section>
                        <div id={'demo-' + i}></div>
                    </section>
                </div>;
            })}
        </div>;
    }
}
