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
    {path: 'Introduction', name: '简要介绍', component: require('./app/introduction').default},
    {path: 'Usage', name: '组件使用', retract: true, children: [
        {path: 'Install', name: '快速上手', component: require('./app/install').default},
        {path: 'Join', name: '组件嵌套', component: require('./app/configure-join').default},
        {path: 'Api', name: '组件交互', component: require('./app/configure-api').default},
        {path: 'Layout', name: '页面布局', component: require('./app/antd/antd-layout').default},
        {path: 'Page', name: '页面示例', component: require('./app/configure-page').default},
        {path: 'Others', name: '更多用法', component: require('./app/configure-others').default}
    ]},
    {path: 'Develop', name: '项目开发', retract: true, children: [
        {path: 'Install', name: '快速上手', component: require('./app/develop-install').default},
        {path: 'Config', name: '全局配置', component: require('./app/develop-config').default},
        {path: 'Modules', name: '模块开发', component: require('./app/develop-modules').default},
        {path: 'Others', name: '更多用法', component: require('./app/develop-others').default},
        {path: 'Build', name: '另一种模式', component: require('./app/develop-build').default}
    ]},
    {path: 'UpdateLog', name: '更新日志', component: require('./app/update-log').default}
];

// 组件文档列表
const ComponentList = [
    {path: 'Custom', name: '定制组件', children: [
        {path: 'Export', name: 'Export 导出', component: require('./app/origin/export').default},
        {path: 'Form', name: 'Form 表单', component: require('./app/origin/form').default},
        {path: 'Iframe', name: 'Iframe 子页面', component: require('./app/origin/iframe').default},
        {path: 'Modal', name: 'Modal 弹框', component: require('./app/origin/modal').default},
        {path: 'Table', name: 'Table 表格', component: require('./app/origin/table').default},
        {path: 'Table2', name: 'Table2 表格', component: require('./app/origin/table2').default},
        {path: 'Tree', name: 'Tree 树形控件', component: require('./app/origin/tree').default}
    ]},
    {path: 'General', name: '综合组件', children: [
        {path: 'Button', name: 'Button 按钮', component: require('./app/antd/antd-button').default},
        {path: 'Icon', name: 'Icon 图标', component: require('./app/antd/antd-icon').default},
        {path: 'Grid', name: 'Grid 栅格', component: require('./app/antd/antd-grid').default},
        {path: 'Layout', name: 'Layout 布局', component: require('./app/antd/antd-layout').default},
        {path: 'Router', name: 'Router 路由', component: require('./app/origin/router').default}
    ]},
    {path: 'Navigation', name: '导航', children: [
        {path: 'Affix', name: 'Affix 固钉', component: require('./app/antd/antd-affix').default},
        {path: 'Breadcrumb', name: 'Breadcrumb 面包屑', component: require('./app/antd/antd-breadcrumb').default},
        {path: 'Dropdown', name: 'Dropdown 下拉菜单', component: require('./app/antd/antd-dropdown').default},
        {path: 'Menu', name: 'Menu 导航菜单', component: require('./app/antd/antd-menu').default},
        {path: 'Pagination', name: 'Pagination 分页', component: require('./app/antd/antd-pagination').default},
        {path: 'Steps', name: 'Steps 步骤条', component: require('./app/antd/antd-steps').default}
    ]},
    {path: 'DataEntry', name: '数据录入', children: [
        {path: 'AutoComplete', name: 'AutoComplete 自动完成', component: require('./app/antd/antd-auto-complete').default},
        {path: 'Cascader', name: 'Cascader 级联选择', component: require('./app/antd/antd-cascader').default},
        {path: 'Checkbox', name: 'Checkbox 多选框', component: require('./app/antd/antd-checkbox').default},
        {path: 'DatePicker', name: 'DatePicker 日期选择框', component: require('./app/antd/antd-date-picker').default},
        {path: 'InputNumber', name: 'InputNumber 数字输入框', component: require('./app/antd/antd-input-number').default},
        {path: 'Input', name: 'Input 输入框', component: require('./app/antd/antd-input').default},
        {path: 'Radio', name: 'Radio 单选框', component: require('./app/antd/antd-radio').default},
        {path: 'Rate', name: 'Rate 评分', component: require('./app/antd/antd-rate').default},
        {path: 'Select', name: 'Select 选择器', component: require('./app/antd/antd-select').default},
        {path: 'Switch', name: 'Switch 开关', component: require('./app/antd/antd-switch').default},
        {path: 'Upload', name: 'Upload 上传', component: require('./app/antd/antd-upload').default}
    ]},
    {path: 'DataDisplay', name: '数据展示', children: [
        {path: 'Avatar', name: 'Avatar 头像', component: require('./app/antd/antd-avatar').default},
        {path: 'Badge', name: 'Badge 徽标数', component: require('./app/antd/antd-badge').default},
        // {path: 'Calendar', name: 'Calendar 日历', component: require('./app/antd/antd-calendar').default},
        {path: 'Card', name: 'Card 卡片', component: require('./app/antd/antd-card').default},
        {path: 'Carousel', name: 'Carousel 走马灯', component: require('./app/antd/antd-carousel').default},
        {path: 'Collapse', name: 'Collapse 折叠面板', component: require('./app/antd/antd-collapse').default},
        {path: 'Popover', name: 'Popover 气泡卡片', component: require('./app/antd/antd-popover').default},
        {path: 'Tooltip', name: 'Tooltip 文字提示', component: require('./app/antd/antd-tooltip').default},
        {path: 'Tabs', name: 'Tabs 标签页', component: require('./app/antd/antd-tabs').default},
        {path: 'Tag', name: 'Tag 标签', component: require('./app/antd/antd-tag').default},
        {paht: 'Timeline', name: 'Timeline 时间轴', component: require('./app/antd/antd-timeline').default}
    ]},
    {path: 'Feedback', name: '反馈', children: [
        {path: 'Alert', name: 'Alert 警告提示', component: require('./app/antd/antd-alert').default},
        {path: 'Message', name: 'Message 全局提示', component: require('./app/antd/antd-message').default},
        {path: 'Notification', name: 'Notification 通知提醒框', component: require('./app/antd/antd-notification').default},
        {path: 'Progress', name: 'Progress 进度条', component: require('./app/antd/antd-progress').default},
        {path: 'Popconfirm', name: 'Popconfirm 气泡确认框', component: require('./app/antd/antd-popconfirm').default},
        {path: 'Loading', name: 'Loading 加载中', component: require('./app/antd/antd-loading').default}
    ]},
    {path: 'Other', name: '其他组件', children: [
        // {path: 'Anchor', name: 'Anchor 锚点', component: require('./app/antd/antd-anchor').default},
        {path: 'Backtop', name: 'Backtop 回到顶部', component: require('./app/antd/antd-backtop').default}
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
