import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.current || 'Guide'
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
        return <div className="left-side">
            <Menu mode="inline" onClick={this.handleClick.bind(this)}
                selectedKeys={[this.state.current]}
                openKeys={this.props.navList.map(v=>v.path)}
                // defaultOpenKeys={this.props.navList.filter(
                //     v=>!!v.children && (!v.retract || this.props.current.indexOf(v.path) !== -1)
                // ).map(v=>v.path)}
                >
                {this.props.navList.map(first=>!first.children
                    ? <Menu.Item key={first.path}>
                            <a href={`#/${first.path}`}>{first.name}</a>
                        </Menu.Item>
                    : <SubMenu key={first.path} title={first.name}>
                            {first.children.map(second=>!second.children
                                ? <Menu.Item key={`${first.path}/${second.path}`}>
                                        <a href={`#/${first.path}/${second.path}`}>{second.name}</a>
                                    </Menu.Item>
                                : <MenuItemGroup key={`${first.path}/${second.path}`} title={second.name}>
                                        {second.children.map(third=>
                                            <Menu.Item key={`${second.path}/${third.path}`}>
                                                <a href={`#/${second.path}/${third.path}`}>{third.name}</a>
                                            </Menu.Item>
                                        )}
                                    </MenuItemGroup>
                            )}
                        </SubMenu>
                )}
            </Menu>
        </div>;
    }
}
