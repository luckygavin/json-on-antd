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
    {path: 'Configure', name: '配置化', children: [
        {path: 'Info', name: '简介', component: require('./app/configure-info').default},
        {path: 'Demo', name: '示例', component: require('./app/configure-demo').default}
    ]},
    {path: 'Global', name: 'Global', children: [
        {path: 'Api', name: '通用API', component: null},
        {path: 'Template', name: '模板', component: null}
    ]}
];

// 组件文档列表
const ComponentList = [
    {path: 'Component', name: 'Component', children: [
        {path: 'Table', name: 'Table 表格', component: require('./app/table').default},
        {path: 'Form', name: 'Form 表单', component: require('./app/form').default},
        {path: 'Export', name: 'Export 导出', component: require('./app/export').default},
        {path: 'Tree', name: 'Tree 树形控件', component: require('./app/tree').default},
        {path: 'Tabs', name: 'Tabs 标签页', component: null},
        {path: 'Modal', name: 'Modal 弹框', component: null},
        {path: 'Message', name: 'Message 提示消息', component: null},
    ]},
    {path: 'General', name: 'General', children: [
        {path: 'Button', name: 'Button 按钮', component: require('./app/antd/antd-button').default},
        {path: 'Icon', name: 'Icon 图标', component: require('./app/antd/antd-icon').default},
        {path: 'Grid', name: 'Grid 栅格', component: require('./app/antd/antd-grid').default},
        {path: 'Layout', name: 'Layout 布局', component: require('./app/antd/antd-layout').default}
    ]},
    {path: 'DataEntry', name: 'Data Entry', children: [
        {path: 'AutoComplete', name: 'AutoComplete 自动完成', component: require('./app/antd/antd-auto-complete').default},
        {path: 'Cascader', name: 'Cascader 级联选择', component: require('./app/antd/antd-cascader').default},
        {path: 'Checkbox', name: 'Checkbox 多选框', component: require('./app/antd/antd-checkbox').default},
        {path: 'DatePicker', name: 'DatePicker 日期选择框', component: require('./app/antd/antd-date-picker').default},
        {path: 'InputNumber', name: 'InputNumber 数字输入框', component: require('./app/antd/antd-input-number').default},
        {path: 'Input', name: 'Input 输入框', component: require('./app/antd/antd-input').default},
        {path: 'Radio', name: 'Radio 单选框', component: require('./app/antd/antd-radio').default},
        {path: 'Select', name: 'Select 选择器', component: require('./app/antd/antd-select').default},
        {path: 'Switch', name: 'Switch 开关', component: require('./app/antd/antd-switch').default},
        {path: 'Upload', name: 'Upload 上传', component: require('./app/antd/antd-upload').default}
    ]},
    {path: 'DataDisplay', name: 'Data Display', children: [
        {path: 'Card', name: 'Card 卡片', component: require('./app/antd/antd-card').default},
        {path: 'Carousel', name: 'Carousel 走马灯', component: require('./app/antd/antd-carousel').default},
        {path: 'Collapse', name: 'Collapse 折叠面板', component: require('./app/antd/antd-collapse').default},
        {path: 'Popover', name: 'Popover 气泡卡片', component: require('./app/antd/antd-popover').default},
        {path: 'Tooltip', name: 'Tooltip 文字提示', component: require('./app/antd/antd-tooltip').default},
        {path: 'Tabs', name: 'Tabs 标签页', component: require('./app/antd/antd-tabs').default}
    ]},
    {path: 'Navigation', name: 'Navigation', children: [
        // {path: 'Breadcrumb', name: 'Breadcrumb 面包屑', component: require('./app/antd/antd-breadcrumb').default},
        // {path: 'Dropdown', name: 'Dropdown 下拉菜单', component: require('./app/antd/antd-dropdown').default},
        {path: 'Menu', name: 'Menu 导航菜单', component: require('./app/antd/antd-menu').default},
        {path: 'Pagination', name: 'Pagination 分页', component: require('./app/antd/antd-pagination').default},
        {path: 'Steps', name: 'Steps 步骤条', component: require('./app/antd/antd-steps').default}
    ]},
    {path: 'Feedback', name: 'Feedback', children: [
        {path: 'Alert', name: 'Alert 警告提示', component: require('./app/antd/antd-alert').default},
        {path: 'Message', name: 'Message 全局提示', component: require('./app/antd/antd-message').default},
        {path: 'Notification', name: 'Notification 通知提醒框', component: require('./app/antd/antd-notification').default},
        {path: 'Progress', name: 'Progress 进度条', component: require('./app/antd/antd-progress').default},
        {path: 'Popconfirm', name: 'Popconfirm 气泡确认框', component: require('./app/antd/antd-popconfirm').default},
        {path: 'Loading', name: 'Loading 加载中', component: require('./app/antd/antd-loading').default}
    ]},
    {path: 'Other', name: 'Other', children: [
        {path: 'BackTop', name: 'BackTop 回到顶部', component: require('./app/antd/antd-backtop').default}
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
class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Router history={hashHistory}>
            <Route path="/" component={Doc}>
                <IndexRedirect to="Introduction"/>
                {RouteList.map(first=>!first.children
                    ? <Route key={first.name} name={first.name}
                            path={first.path} component={first.component}/>
                    : first.children.map(second=>
                        <Route key={second.name} name={second.name}
                                path={`${first.path}/${second.path}`} component={second.component}/>
                    )
                )}
                <Redirect path="Component" to={`Component/Table`}/>
                <Route path="*" component={null}/>
            </Route>
        </Router>;
    }
}

ReactDOM.render(<Routes />, document.getElementById('container'));
