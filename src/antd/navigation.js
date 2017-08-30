/**
 * @file 导航 类组件
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './base/Navigation.js';
import * as Antd from 'antd';

// Affix 图钉 组件
// export class Affix extends Navigation {
//     constructor(props) {
//         super(props);
//         this.__init();
//     }
//     render() {
//         return <Antd.Affix {...this.__props}/>
//     }
// }


/************ Breadcrumb 面包屑 *************************************************************************** */

export class Breadcrumb extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Breadcrumb {...this.__props}/>
    }
}
// Breadcrumb面包屑 子组件
export class BreadcrumbItem extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Breadcrumb.Item {...this.__props}/>
    }
}


/************ Dropdown 下拉菜单 *************************************************************************** */

export class Dropdown extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Dropdown {...this.__props}/>
    }
}
export class DropdownButton extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Dropdown.Button {...this.__props}/>
    }
}


/************ Menu 导航菜单 *************************************************************************** */

export class Menu extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Menu {...this.__props}/>
    }
}
// Menu.Item 组件
export class MenuItem extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Menu.Item {...this.__props}/>
    }
}
// Menu.ItemGroup 组件
export class MenuItemGroup extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Menu.ItemGroup {...this.__props}/>
    }
}
// Menu.SubMenu 组件
export class SubMenu extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Menu.SubMenu {...this.__props}/>
    }
}


/************ Pagination 分页 *************************************************************************** */

export class Pagination extends Navigation {
    constructor(props) {
        super(props);
        // current为受控属性，父类中统一实现属性的绑定和变更（BaseComponent）
        this.__controlled = 'current';
        this.__init();
    }
    render() {
        return <Antd.Pagination {...this.__props}/>
    }
}


/************ Steps 步骤条 *************************************************************************** */

export class Steps extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Steps {...this.__props}/>
    }
}
// Step 单条步骤
export class Step extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Steps.Step {...this.__props}/>
    }
}
