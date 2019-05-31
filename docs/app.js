/**
 * @file 使用文档入口文件
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect, Redirect} from 'react-router';
import {Row, Col, BackTop} from 'antd';

import NewTips from './newTips/index.js';
import Header from './Header.js';
import Nav from './Nav.js';

require('theme/default/index.less');
require('./doc.less');

// 通用文档
export const DocsList = [
    {path: 'Guide', name: '写在最前面', component: require('./app/guide').default},
    {path: 'Introduction', name: '功能介绍', component: require('./app/introduction').default},
    {path: 'UpdateLog', name: '更新日志', component: require('./app/update-log').default},
    {path: 'Usage', name: '入门', children: [
        {path: 'Install', name: '开始使用', component: require('./app/configure-install').default},
        {path: 'Join', name: '组件嵌套', component: require('./app/configure-join').default},
        {path: 'Call', name: '组件交互', component: require('./app/configure-call').default},
        {path: 'Layout', name: '页面布局', component: require('./app/configure-layout').default},
        {path: 'Page', name: '一个例子', component: require('./app/configure-page').default}
    ]},
    {path: 'Develop', name: '进阶', children: [
        {path: 'Install', name: '路由&模块', component: require('./app/develop-install').default},
        {path: 'Config', name: '全局配置', component: require('./app/develop-config').default},
        {path: 'Modules', name: '模块开发', component: require('./app/develop-modules').default},
        {path: 'Build', name: '另一种模式', component: require('./app/develop-build').default},
        // {path: 'Others', name: '更多用法', component: require('./app/develop-others').default}
    ]},
    {path: 'Api', name: '交互API', component: require('./app/api').default},
    {path: 'Params', name: '通用参数', component: require('./app/params').default},
    {path: 'Lifecycle', name: '生命周期', component: require('./app/lifecycle').default},
    {path: 'Load', name: '特殊组件', component: require('./app/load').default},
    {path: 'Others', name: '更多用法', component: require('./app/others').default}
];

// 组件文档列表
export const ComponentList = [
    {path: 'Custom', name: '定制组件', children: [
        {path: 'Export', name: 'Export 导出', component: require('src/export/docs').default},
        {path: 'Form', name: 'Form 表单', component: require('src/form/docs').default},
        {path: 'Forms', name: 'Forms 复制新增表单', component: require('src/form/docs/formsDemo.js').default},
        {path: 'Modal', name: 'Modal 弹框', component: require('src/modal/docs').default},
        {path: 'Table', name: 'Table 表格', component: require('src/table/docs').default},
        {path: 'TableCrud', name: 'Table Crud 表格扩展', component: require('src/table/docs/crud.js').default},
        {path: 'Tree', name: 'Tree 树形控件', component: require('src/tree/docs').default},
        {path: 'Ueditor', name: 'Ueditor 富文本', component: require('src/ueditor/docs').default},
        {path: 'Echarts', name: 'Echarts 图表', component: require('src/echarts/docs').default},
        {path: 'List', name: 'List 列表', component: require('src/list/docs').default}
    ]},
    {path: 'General', name: '综合组件', children: [
        {path: 'Button', name: 'Button 按钮', component: require('src/antd/docs/antd-button').default},
        {path: 'Icon', name: 'Icon 图标', component: require('src/antd/docs/antd-icon').default},
        {path: 'IconPlus', name: 'IconPlus 扩展图标', component: require('src/antd/docs/antd-icon-plus').default},
        {path: 'Grid', name: 'Grid 栅格', component: require('src/antd/docs/antd-grid').default},
        {path: 'Layout', name: 'Layout 布局', component: require('src/antd/docs/antd-layout').default},
        {path: 'Router', name: 'Router 路由', component: require('src/router/docs').default}
    ]},
    {path: 'Navigation', name: '导航', children: [
        {path: 'Affix', name: 'Affix 固钉', component: require('src/antd/docs/antd-affix').default},
        {path: 'Breadcrumb', name: 'Breadcrumb 面包屑', component: require('src/antd/docs/antd-breadcrumb').default},
        {path: 'Dropdown', name: 'Dropdown 下拉菜单', component: require('src/antd/docs/antd-dropdown').default},
        {path: 'Menu', name: 'Menu 导航菜单', component: require('src/antd/docs/antd-menu').default},
        {path: 'Pagination', name: 'Pagination 分页', component: require('src/antd/docs/antd-pagination').default},
        {path: 'Steps', name: 'Steps 步骤条', component: require('src/antd/docs/antd-steps').default}
    ]},
    {path: 'DataEntry', name: '数据录入', children: [
        {path: 'AutoComplete', name: 'AutoComplete 自动完成', component: require('src/auto-complete/docs').default},
        {path: 'Cascader', name: 'Cascader 级联选择', component: require('src/antd/docs/antd-cascader').default},
        {path: 'Checkbox', name: 'Checkbox 多选框', component: require('src/antd/docs/antd-checkbox').default},
        {path: 'DatePicker', name: 'DatePicker 日期选择框', component: require('src/antd/docs/antd-date-picker').default},
        {path: 'InputNumber', name: 'InputNumber 数字输入框', component: require('src/antd/docs/antd-input-number').default},
        {path: 'Input', name: 'Input 输入框', component: require('src/antd/docs/antd-input').default},
        {path: 'Radio', name: 'Radio 单选框', component: require('src/antd/docs/antd-radio').default},
        {path: 'Rate', name: 'Rate 评分', component: require('src/antd/docs/antd-rate').default},
        {path: 'Select', name: 'Select 选择器', component: require('src/antd/docs/antd-select').default},
        {path: 'TreeSelect', name: 'TreeSelect 树选择', component: require('src/antd/docs/antd-tree-select').default},
        {path: 'Switch', name: 'Switch 开关', component: require('src/antd/docs/antd-switch').default},
        {path: 'Transfer', name: 'Transfer 穿梭框', component: require('src/antd/docs/antd-transfer').default},
        {path: 'Slider', name: 'Slider 滑动输入', component: require('src/antd/docs/antd-slider').default},
        {path: 'Upload', name: 'Upload 上传', component: require('src/antd/docs/antd-upload').default}
    ]},
    {path: 'DataDisplay', name: '数据展示', children: [
        {path: 'Avatar', name: 'Avatar 头像', component: require('src/antd/docs/antd-avatar').default},
        {path: 'Badge', name: 'Badge 徽标数', component: require('src/antd/docs/antd-badge').default},
        // {path: 'Calendar', name: 'Calendar 日历', component: require('src/antd/docs/antd-calendar').default},
        {path: 'Card', name: 'Card 卡片', component: require('src/antd/docs/antd-card').default},
        {path: 'Carousel', name: 'Carousel 走马灯', component: require('src/antd/docs/antd-carousel').default},
        {path: 'Collapse', name: 'Collapse 折叠面板', component: require('src/antd/docs/antd-collapse').default},
        {path: 'Popover', name: 'Popover 气泡卡片', component: require('src/antd/docs/antd-popover').default},
        {path: 'Tooltip', name: 'Tooltip 文字提示', component: require('src/antd/docs/antd-tooltip').default},
        {path: 'Tabs', name: 'Tabs 标签页', component: require('src/antd/docs/antd-tabs').default},
        {path: 'Tag', name: 'Tag 标签', component: require('src/antd/docs/antd-tag').default},
        {paht: 'Timeline', name: 'Timeline 时间轴', component: require('src/antd/docs/antd-timeline').default}
    ]},
    {path: 'Feedback', name: '反馈', children: [
        {path: 'Alert', name: 'Alert 警告提示', component: require('src/antd/docs/antd-alert').default},
        {path: 'Message', name: 'Message 全局提示', component: require('src/antd/docs/antd-message').default},
        {path: 'Notification', name: 'Notification 通知提醒框', component: require('src/antd/docs/antd-notification').default},
        {path: 'Progress', name: 'Progress 进度条', component: require('src/antd/docs/antd-progress').default},
        {path: 'Popconfirm', name: 'Popconfirm 气泡确认框', component: require('src/antd/docs/antd-popconfirm').default},
        {path: 'Loading', name: 'Loading 加载中', component: require('src/antd/docs/antd-loading').default}
    ]},
    {path: 'Other', name: '其他组件', children: [
        {path: 'Backtop', name: 'Backtop 回到顶部', component: require('src/antd/docs/antd-backtop').default},
        {path: 'Anchor', name: 'Anchor 锚点', component: require('src/antd/docs/antd-anchor').default},
        {path: 'Iframe', name: 'Iframe 子页面', component: require('src/iframe/docs').default},
        {path: 'Fieldset', name: 'Fieldset 文字块', component: require('src/fieldset/docs').default},
        {path: 'Markdown', name: 'Markdown 解析', component: require('src/markdown/docs').default},
        {path: 'Fullscreen', name: 'Fullscreen 全屏展示', component: require('src/fullscreen/docs').default}
    ]}
];

// 组件文档列表
export const MobileComponent = [
    {path: 'Mobile/Guide', name: '写在最前面', component: require('./app/mobile/guide').default},
    {path: 'Mobile/UpdateLog', name: '更新日志', component: require('./app/mobile/update-log').default},
    {path: 'Mobile/Custom', name: '定制组件', children: [
        {path: 'Table', name: 'Table 表格', component: require('mobile/table/docs').default},
    ]},
    {path: 'Mobile/Global', name: '综合组件', children: [
        {path: 'Button', name: 'Button 按钮', component: require('mobile/antd/docs/button').default},
        {path: 'Flex', name: 'Flex 布局', component: require('mobile/antd/docs/flex').default},
        {path: 'Grid', name: 'Grid 宫格', component: require('mobile/antd/docs/grid').default},
        {path: 'Icon', name: 'Icon 图标', component: require('mobile/antd/docs/icon').default},
        {path: 'IconPlus', name: 'IconPlus 扩展图标', component: require('src/antd/docs/antd-icon-plus').default},
        {path: 'Router', name: 'Router 路由', component: require('mobile/antd/docs/router').default},
        {path: 'WhiteSpace', name: 'WhiteSpace 上下留白', component: require('mobile/antd/docs/white-space').default},
        {path: 'WingBlank', name: 'WingBlank 两翼留白', component: require('mobile/antd/docs/wing-blank').default}
    ]},
    {path: 'Mobile/Navigation', name: '导航', children: [
        {path: 'Steps', name: 'Steps 步骤条', component: require('mobile/antd/docs/steps').default},
        {path: 'Drawer', name: 'Drawer 抽屉', component: require('mobile/antd/docs/drawer').default},
        {path: 'Menu', name: 'Menu 菜单', component: require('mobile/antd/docs/menu').default},
        {path: 'NavBar', name: 'NavBar 导航栏', component: require('mobile/antd/docs/nav-bar').default},
        {path: 'Pagination', name: 'Pagination 分页器', component: require('mobile/antd/docs/pagination').default},
        {path: 'Tabs', name: 'Tabs 标签页', component: require('mobile/antd/docs/tabs').default},
        {path: 'TabBar', name: 'TabBar 标签栏', component: require('mobile/antd/docs/tab-bar').default}
    ]},
    {path: 'Mobile/DataEntry', name: '数据录入', children: [
        {path: 'Checkbox', name: 'Checkbox 复选框', component: require('mobile/antd/docs/checkbox').default},
        {path: 'Input', name: 'Input 输入框', component: require('mobile/antd/docs/input').default},
        {path: 'Select', name: 'Select 选择器', component: require('mobile/antd/docs/select').default},
        {path: 'Picker', name: 'Picker 选择器', component: require('mobile/antd/docs/picker').default},
        {path: 'Calendar', name: 'Calendar 日历选择', component: require('mobile/antd/docs/calendar').default},
        {path: 'Radio', name: 'Radio 单选', component: require('mobile/antd/docs/radio').default},
        {path: 'DatePicker', name: 'DatePicker 日期选择器', component: require('mobile/antd/docs/date-picker').default},
        {path: 'Slider', name: 'Slider 滑动输入条', component: require('mobile/antd/docs/slider').default},
        {path: 'Textarea', name: 'Textarea 多行输入', component: require('mobile/antd/docs/textarea').default},
        {path: 'ImagePicker', name: 'ImagePicker 图片选择', component: require('mobile/antd/docs/image-picker').default},
        {path: 'Switch', name: 'Switch 滑动开关', component: require('mobile/antd/docs/switch').default},
        {path: 'Stepper', name: 'Stepper 步进器', component: require('mobile/antd/docs/stepper').default},
        {path: 'SearchBar', name: 'SearchBar 搜索栏', component: require('mobile/antd/docs/search-bar').default}
    ]},
    {path: 'Mobile/DataDisplay', name: '数据展示', children: [
        {path: 'Collapse', name: 'Collapse 手风琴', component: require('mobile/antd/docs/collapse').default},
        {path: 'Badge', name: 'Badge 徽标数', component: require('mobile/antd/docs/badge').default},
        {path: 'Carousel', name: 'Carousel 走马灯', component: require('mobile/antd/docs/carousel').default},
        {path: 'Card', name: 'Card 卡片', component: require('mobile/antd/docs/card').default},
        {path: 'List', name: 'List 列表', component: require('mobile/antd/docs/list').default},
        {path: 'ListView', name: 'ListView 长列表', component: require('mobile/antd/docs/list-view').default},
        {path: 'Popover', name: 'Popover 气泡', component: require('mobile/antd/docs/popover').default},
        {path: 'NoticeBar', name: 'NoticeBar 通告栏', component: require('mobile/antd/docs/notice-bar').default},
        {path: 'Tag', name: 'Tag 标签', component: require('mobile/antd/docs/tag').default},
        {path: 'Result', name: 'Result 结果页', component: require('mobile/antd/docs/result').default}
    ]},
    {path: 'Mobile/Feedback', name: '反馈', children: [
        {path: 'Modal', name: 'Modal 对话框', component: require('mobile/antd/docs/modal').default},
        {path: 'ActionSheet', name: 'ActionSheet 动作面板', component: require('mobile/antd/docs/action-sheet').default},
        {path: 'Progress', name: 'Progress 进度条', component: require('mobile/antd/docs/progress').default},
        {path: 'Loading', name: 'Loading 加载中', component: require('mobile/antd/docs/loading').default},
        {path: 'Message', name: 'Message 提示', component: require('mobile/antd/docs/message').default}
    ]},
    {path: 'Mobile/Other', name: '其他组件', children: [
        {path: 'PullRefresh', name: 'PullRefresh 拉动刷新', component: require('mobile/antd/docs/pull-refresh').default},
        {path: 'SwipeAction', name: 'SwipeAction 滑动操作', component: require('mobile/antd/docs/swipe-action').default}
    ]}
];


// 全部路由列表
const RouteList = [
    {path: 'Index', name: '首页', component: require('./app/home').default},
    {path: 'Standard', name: '规范', component: require('./app/standard').default},
    {path: 'ThirdParty', name: '第三方组件', component: require('./app/third-party').default}
].concat(DocsList, ComponentList, MobileComponent);

class App extends React.Component {
    componentDidMount() {
        // 代码高亮
        Prism && Prism.highlightAll();
    }
    componentDidUpdate() {
        Prism && Prism.highlightAll();
    }
    render() {
        let currentHeader = this.props.routes[1] ? this.props.routes[1].path : '';
        let currentNav = this.props.location.pathname.slice(1);
        // let Test = ({text, children})=><div><p>{text}</p><p>{children}</p></div>;
        let isComponent = ComponentList.map(v=>v.path).indexOf(currentNav.split('/')[0]) > -1;
        let isDocs = DocsList.map(v=>v.path).indexOf(currentNav.split('/')[0]) > -1;
        let isMobile = 'Mobile' === currentNav.split('/')[0];
        let navList = [];
        if (isComponent) {
            navList = ComponentList;
        } else if (isDocs) {
            navList = DocsList;
        } else if (isMobile) {
            navList = MobileComponent;
        }
        return (<section>
                    <Header current={currentHeader} isComponent={isComponent} isDocs={isDocs}/>
                    <div className="main">
                        {!(isComponent || isDocs || isMobile) ? this.props.children :
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={4} xl={4}>
                                <Nav current={currentNav} navList={navList}/>
                            </Col>
                            <Col xs={18} sm={18} md={18} lg={20} xl={20}>
                                {this.props.children}
                            </Col>
                        </Row>
                        }
                    </div>
                    <NewTips/>
                    <BackTop/>
               </section>
        );
    }
}
// demo入口
class DemoApp extends React.Component {
    render() {
        return this.props.children;
    }
}


export default class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let isDemo = this.props.demo;
        return <Router history={hashHistory}>
            <Route path="/" component={isDemo ? DemoApp : App}>
                <IndexRedirect to="Index"/>
                {RouteList.map(first=>!first.children
                    ? <Route key={first.name} name={first.name}
                            path={`${first.path}(/:pos)`} component={first.component}
                            isDemo={isDemo}/>
                    : (first.children.map(second=>
                        <Route key={second.name} name={second.name} isDemo={isDemo}
                                path={`${first.path}/${second.path}(/:pos)`} component={second.component}/>
                    ).concat(
                        <Redirect path={first.path} to={`${first.path}/${first.children[0].path}`}/>
                    ))
                )}
                <Redirect path="Docs" to={DocsList[0].path}/>
                <Redirect path="Component" to={ComponentList[0].path}/>
                <Redirect path="Mobile" to={MobileComponent[0].path}/>
                <Route path="*" component={null}/>
            </Route>
        </Router>;
    }
}
