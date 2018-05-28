/**
 * @file 头部导航条
 */
import React, {Component} from 'react';
import {Menu, Dropdown, Icon, Input, AutoComplete, Button} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const json = require('../package.json');
const version = json.version;
const versionList = json.versionList;

// 导航列表
const NavList = [
    {key: 'Index', name: '首页', path: '#/Index'},
    {key: 'Docs', name: '文档', path: '#/Docs'},
    {key: 'Component', name: '组件', path: '#/Component'},
    {key: 'Other', name: '其他', path: '#/Other', children: [
        {key: 'Standard', name: '开发规范', path: '#/Standard'},
        {key: 'ThirdParty', name: '第三方组件', path: '#/ThirdParty'},
        {key: 'AntdDocs', name: 'Antd 原文档', path: 'http://antd.uf.baidu.com/docs/react/introduce-cn'},
        {key: 'Old-uf', name: '返回旧版', path: 'http://uf.baidu.com/uf-react.php'}
    ]},
];

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.getCurrent(props)
        };
    }
    getCurrent(props) {
        let current;
        if (props.isComponent) {
            current = 'Component';
        } else if (props.isDocs) {
            current = 'Docs';
        } else {
            current = (props.current || 'Component').split('/')[0];
        }
        return current;
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            current: this.getCurrent(nextProps)
        });
    }
    handleClick(e) {
        this.setState({current: e.key});
    }
    render() {

        let highlight = this.state.current;
        return (
            <div id="header">
                <div className="logo">
                    {/* <img alt="logo" src="./public/img/UF.svg" /> */}
                    <img alt="logo" src="./public/img/logo.svg" />
                    <span className="version">UF 2.0</span>
                </div>
                <div className="nav">
                    <Menu mode="horizontal" selectedKeys={[highlight]}
                        onClick={this.handleClick.bind(this)}>
                        {NavList.map(v=>v.children
                                ? <Menu.SubMenu key={v.key} title={v.name}>
                                    {v.children.map(c=><Menu.Item key={c.key}>
                                        <a href={c.path}>{c.name}</a>
                                    </Menu.Item>)}
                                </Menu.SubMenu>
                                : <Menu.Item key={v.key}>
                                    <a href={v.path}>{v.name}</a>
                                </Menu.Item>
                        )}
                    </Menu>
                </div>
                <div className="search">
                    <AutoComplete dataSource={[]} placeholder="搜索组件... " />
                    <Dropdown overlay={
                            <Menu>
                                {versionList.reverse().map(v=>
                                    <Menu.Item key={`v${v}`}>
                                        <a href={`?v=${v}`}>{`v${v}`}</a>
                                    </Menu.Item>
                                )}
                            </Menu>
                        }>
                        <Button size="small">
                            {`v${version}`} <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
            </div>
        );
    }
}
