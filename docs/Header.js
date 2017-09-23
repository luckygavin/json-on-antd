/**
 * @file 头部导航条
 */
import React, {Component} from 'react';
import {Menu, Dropdown, Icon, Input, AutoComplete, Button} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const json = require('../package.json');
// 次版本号
const version = +json.version.split('.').slice(1, 2).join();
const versionList = [];
for (let i = version; i > 0; i--) {
    versionList.push(i);
}

// 导航列表
const NavList = [
    {key: 'Introduction', path: '#/Introduction', name: '组件'},
    {key: 'Standard', path: '#/Standard', name: '规范'},
    {key: 'ThirdParty', path: '#/ThirdParty', name: '第三方组件'},
    {key: 'ANT DESIGN', path: 'http://antd.uf.baidu.com/docs/react/introduce-cn', name: 'ANT DESIGN'},
    {key: 'Old-uf', path: 'http://uf.baidu.com/uf-react.php', name: '返回旧版'}
];

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.current || 'Introduction'
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            current: nextProps.current
        });
    }
    handleClick(e) {
        this.setState({current: e.key});
    }
    render() {
        return (
            <div id="header">
                <div className="logo">
                    <img alt="logo" src="./public/img/logo.svg" />
                    <span className="version">UF 2.0</span>
                </div>
                <div className="nav">
                    <Menu mode="horizontal" selectedKeys={[this.state.current]}
                        onClick={this.handleClick.bind(this)}>
                        {NavList.map(v=>
                            <Menu.Item key={v.key}>
                                <a href={v.path}>{v.name}</a>
                            </Menu.Item>
                        )}
                    </Menu>
                </div>
                <div className="search">
                    {/*<AutoComplete dataSource={DataList}
                        placeholder="搜索组件... " />*/}
                    <Dropdown overlay={
                            <Menu>
                                {versionList.map(v=>
                                    <Menu.Item key={`v0.${v}`}>
                                        <a href={`?v=0.${v}`}>{`v0.${v}`}</a>
                                    </Menu.Item>
                                )}
                            </Menu>
                        }>
                        <Button size="small">
                            {`v0.${version}`} <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
            </div>
        );
    }
}
