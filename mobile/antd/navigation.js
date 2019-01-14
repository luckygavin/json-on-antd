/**
 * @file 导航 类组件
 * @author liuzechun
 * Created Date: 2017-09-26 01:18:00
 *
 * Last Modified: 2017-09-29 07:31:44
 * Modified By: liuzechun
 */

import React from 'react';
import Navigation from 'src/antd/base/Navigation.js';
import * as Antd from 'antd-mobile';


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

/************ Drawer 抽屉 *************************************************************************** */

export class Drawer extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Drawer {...this.__props}/>;
    }
}

/************ NavBar 导航栏 *************************************************************************** */

export class NavBar extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.NavBar {...this.__props}/>;
    }
}


/************ Pagination 分页器 *************************************************************************** */

export class Pagination extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Pagination {...this.__props}/>;
    }
}


/************ Tabs 标签页 *************************************************************************** */

export class Tabs extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.Tabs {...this.__props}/>;
    }
}

/************ TabBar 标签栏 *************************************************************************** */

export class TabBar extends Navigation {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <Antd.TabBar {...this.__props}/>;
    }
}
