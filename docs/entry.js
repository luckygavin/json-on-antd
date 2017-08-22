/**
 * @file 使用文档入口文件
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect, Redirect} from 'react-router';
import {Row, Col} from 'antd';

import Header from './Header.js';
import Nav from './Nav.js';

require('./doc.scss');

// 通用文档
const CommonList = [
    {path: 'Introduction', name: '简要介绍', component: null},
    {path: 'Install', name: '快速上手', component: null},
    {path: 'ChangeLog', name: '更新日志', component: null},
    {path: 'Info', name: '配置化', component: require('./app/configure').default},
    {path: 'Global', name: 'Global', children: [
        {path: 'Api', name: '通用API', component: null},
        {path: 'Template', name: '模板', component: null},
    ]}
];

// 组件文档列表
const ComponentList = [
    {path: 'Component', name: 'Component', children: [
        {path: 'Table', name: 'Table 表格', component: require('./app/table').default},
        {path: 'Form', name: 'Form 表单', component: require('./app/form').default},
        {path: 'Export', name: 'Export 导出', component: null},
        {path: 'Tabs', name: 'Tabs 标签页', component: null},
        {path: 'Modal', name: 'Modal 弹框', component: null},
        {path: 'Message', name: 'Message 提示消息', component: null},
    ]},
    {path: 'General', name: 'General', children: [
        {path: 'Button', name: 'Button 按钮', component: null},
        {path: 'Icon', name: 'Icon 图标', component: null},
    ]}
];

// 全部路由列表
const RouteList = [
    {path: 'Standard', name: '规范', component: require('./app/standard').default},
    {path: 'ThirdParty', name: '第三方组件', component: require('./app/third-party').default}
].concat(CommonList, ComponentList);

class Doc extends React.Component {
    componentDidMount() {
        // 代码高亮
        Prism.highlightAll();
    }
    componentDidUpdate() {
        Prism.highlightAll();
    }
    render() {
        let currentHeader = this.props.routes[1] ? this.props.routes[1].path : '';
        let currentNav = this.props.location.pathname.slice(1);
        return (<section>
                    <Header current={currentHeader} />
                    <div className="main">
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={4} xl={4}>
                                <Nav current={currentNav} commons={CommonList} components={ComponentList}/>
                            </Col>
                            <Col xs={18} sm={18} md={18} lg={20} xl={20}>
                                {this.props.children}
                            </Col>
                        </Row>
                    </div>
               </section>
        );
    }
}
let Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Doc}>
            <IndexRedirect to="Introduction"/>
            {RouteList.map(first=>!first.children
                ? <Route key={first.path} path={first.path} component={first.component}/>
                : first.children.map(second=>
                    <Route key={`${first.path}/${second.path}`}
                        path={`${first.path}/${second.path}`}
                        component={second.component}/>
                )
            )}
            <Redirect path="Component" to={`Component/Table`}/>
            <Route path="*" component={null}/>
        </Route>
    </Router>
);
ReactDOM.render(Routes, document.getElementById('container'));
