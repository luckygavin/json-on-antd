/**
 * @file 导航 类组件
 * @author liuzechun
 * Created Date: 2017-09-26 01:18:00
 *
 * Last Modified: 2017-09-29 07:31:44
 * Modified By: liuzechun
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './base/Navigation.js';
import * as Antd from 'antd';


/************ Affix 图钉 *************************************************************************** */

export class Affix extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Affix {...this.__props}/>;
    }
}


/************ Breadcrumb 面包屑 *************************************************************************** */

export class Breadcrumb extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    _initProps(...params) {
        super._initProps.call(this, ...params);
        // 如果用户配置了options，则按照用户配置的options列表类展示面包屑
        let options = this.__props.options;
        if (options) {
            let result = [];
            for (let v of options) {
                result.push(<Antd.Breadcrumb.Item children={v} />);
            }
            this.__props.children = result;
        }
    }
    render() {
        return <Antd.Breadcrumb {...this.__props} />;
    }
}


/************ Dropdown 下拉菜单 *************************************************************************** */

export class Dropdown extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Dropdown {...this.__props}/>;
    }
}
export class DropdownButton extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Dropdown.Button {...this.__props}/>;
    }
}


/************ Menu 导航菜单 *************************************************************************** */

export class Menu extends Navigation {
    constructor(props) {
        super(props);
        this.__controlled = {
            key: 'selectedKeys',
            event: 'onSelect',
            defaultVal: []
        };
        this.__init();
    }
    // 见 BaseComponent
    _onEvent(callback, ...params) {
        callback && callback(...params);
        let {selectedKeys} = params[0];
        this.__props['selectedKeys'] = selectedKeys;
        this.forceUpdate();
    }
    render() {
        return <Antd.Menu {...this.__props}/>;
    }
}
// Menu.Item 组件
export class MenuItem extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Menu.Item {...this.__props}/>;
    }
}
// Menu.ItemGroup 组件
export class MenuItemGroup extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Menu.ItemGroup {...this.__props}/>;
    }
}
// Menu.SubMenu 组件
export class SubMenu extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Menu.SubMenu {...this.__props}/>;
    }
}


/************ Pagination 分页 *************************************************************************** */

export class Pagination extends Navigation {
    constructor(props) {
        super(props);
        // current为受控属性，父类中统一实现属性的绑定和变更（BaseComponent）
        // event: onChange / paramsIndex: 0
        this.__controlled = {
            key: 'current'
        };
        this.__init();
    }
    render() {
        return <Antd.Pagination {...this.__props}/>;
    }
}


/************ Steps 步骤条 *************************************************************************** */

export class Steps extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Steps {...this.__props}/>;
    }
}
// Step 单条步骤
export class Step extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Steps.Step {...this.__props}/>;
    }
}
