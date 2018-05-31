/**
 * @file Table扩展 - 表格上方的title以及其全部可选控件实现
 * @author liuzechun@baidu.com
 * */

import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Table, Button, Icon, Dropdown, Menu, Modal, Popover, Popconfirm, message} from 'antd';
import {Input, Checkbox} from 'antd';

import Export from 'src/export';

const CheckboxGroup = Checkbox.Group;
const MenuItem = Menu.Item;

// 从obg2中获取obj1所需要的一些属性
const getNeedObject = (obj1, obj2) => {
    for (let i in obj1) {
        if (!!obj2[i]) {
            obj1[i] = obj2[i];
        }
    }
};

export default class Title extends BaseComponent {
    constructor(props) {
        super(props);
        // 其本身无需初始化组件
        // this.__init();
        this.parent = props.parent;
        this.title = props.config;
        this.state = {
            antdConfig: null,
            // table表头右侧设置按钮的下拉框是否展示
            showTableMenu: false,
            // 是否展示全部字段
            showAllTags: false,
            showSetTagsModal: false,
            // 存储模糊搜索输入的值
            filterValue: ''
        };
        // 过滤字段黑名单/白名单
        this.globalFilterList = null;
    }
    clearState() {
        this.setState({filterValue: ''});
        this.hideMenuDropdown();
    }

    /* 内部函数 ****************************************************************************/
    // // 表头生成-包括文字标题及自定义控件
    titleGenerate() {
        if (!this.title) {
            return null;
        }
        let {text = '', extra} = this.title;
        let result = [];
        // 表头标题
        if (text) {
            result.push(<div key="table-title" className="uf-header">
                    <span>{this.parent.__analysis(text)}</span>
                </div>
            );
        }
        // 标题之后额外自定义内容
        if (extra) {
            let extraConf = this.parent.handleAction(extra);
            result.push(<div key="table-extra" className="uf-extra">
                    <span>{this.parent.__analysis(extraConf)}</span>
                </div>
            );
        }
        // 以下为一些控件的生成，全部保存在divList里
        // 直接展示在表头的控件
        let divList = this.getBasicWidghts();
        // 展示在menu下拉列表中的控件
        let gearsList = this.getMenuWidghts();
        if (gearsList) {
            divList.push(gearsList);
        }
        result.push(<div key="table-widget" className="uf-header-widget-con">{divList}</div>);
        return result;
    }
    // 基本控件
    getBasicWidghts() {
        // 因为使用频率较高，暂时保留原参数，后续版本中移除
        let arrBasic = this.title.basicWidget || this.title.basicControls;
        let result = [];
        if (!arrBasic) {
            return result;
        }
        let showText = this.title.showText;
        for (let v of arrBasic) {
            // 全部转化为对象
            if (Utils.typeof(v, 'string')) {
                v = {name: v};
            }
            switch (v.name) {
                case 'filter':
                    if (!this.globalFilterList && (v.whitelist || v.blacklist)) {
                        this.globalFilterList = {
                            whitelist: v.whitelist,
                            blacklist: v.blacklist
                        };
                    }
                    result.push(<div className="uf-header-widget filter no-hover" key="uf-header-widget">
                            <Input.Search name="filter" placeholder={v.text || '模糊搜索'}
                                value={this.state.filterValue}
                                onChange={this.onFilterChange.bind(this)}
                                onSearch={this.onFilterSearch.bind(this)}/>
                        </div>);
                    break;
                case 'refresh':
                    result.push(<div className="uf-header-widget" key="refresh"
                                title={v.text || '刷新'}
                                onClick={this.parent.refreshTable}>
                            <Icon type={v.icon || 'retweet'} />
                            {showText && <span>{v.text || '刷新'}</span>}
                        </div>);
                    break;
                case 'fullScreen':
                    result.push(<div className="uf-header-widget" key="fullscreen"
                            title={!this.parent.state.fullScreen ? v.text || '全屏' : v.text || '退出全屏'}
                            onClick={this.parent.toggleFullScreen}>
                            {!this.parent.state.fullScreen
                                ? <Icon type={v.text || 'arrows-alt'} />
                                : <Icon type={v.text || 'shrink'} />}
                            {showText && (
                                !this.parent.state.fullScreen
                                    ? <span>{v.text || '全屏'}</span>
                                    : <span>{'退出' + (v.text || '全屏')}</span>
                            )}
                        </div>);
                    break;
                case 'export':
                    result.push(<div className="uf-header-widget" key="export"
                        title={v.text || '导出'}
                        onClick={this.parent._handleExport}>
                            <Icon type={v.icon || 'download'} />
                            {showText && <span>{v.text || '导出'}</span>}
                        </div>);
                    break;
                case 'switchTags':
                    result.push(<div className="uf-header-widget" key="switchTags"
                                title={v.text || '展示字段'}
                                onClick={this.showSwitchTags.bind(this)}>
                            <Icon type={v.icon || 'setting'} />
                            {showText && <span>{v.text || '展示字段'}</span>}
                        </div>);
                    break;
                case 'showAllTags':
                    result.push(<div key="showAllTags"
                                title={v.text || '展示全部'}
                                className={'uf-header-widget ' + (this.parent.state.showAllTags ? 'active' : '')}
                                onClick={this.parent.toShowAllTags}>
                            <Icon type={v.icon || 'eye-o'} />
                            {showText && <span>{v.text || '展示全部'}</span>}
                        </div>);
                    break;
                case 'setPageSize':
                    result.push(<Popconfirm placement="top" key="basic-setPageSize"
                            title={this.renderPageInput('basic')}
                            onConfirm={this.getPageSizeSetting.bind(this, 'basic')}
                            okText="Yes" cancelText="No">
                            <div className="uf-header-widget"
                                title={v.text || '分页设置'}
                                onClick={this.showSetPageSize.bind(this, 'basic')}>
                                <Icon type={v.icon || 'switcher'} />
                                {showText && <span>{v.text || '分页设置'}</span>}
                            </div>
                        </Popconfirm>);
                    break;
                default:
                    result.push(<div key={v.name} className={'uf-header-widget ' + (v.name || '')}
                            title={v.text}
                            onClick={v.onClick && v.onClick.bind(null, this.parent)}>
                            <Icon type={v.icon || 'file-unknown'} />
                            {showText && <span>{v.text || ''}</span>}
                        </div>);
            }
        }
        return result;
    }
    // 下拉列表中的控件
    getMenuWidghts() {
        // COMPAT: 因为使用频率较高，暂时保留原参数，后续版本中移除
        let arrMenus = this.title.menuWidget || this.title.menuControls;
        let result = null;
        let gearsList = [];
        if (!arrMenus) {
            return result;
        }
        for (let v of arrMenus) {
            // 全部转化为对象
            if (Utils.typeof(v, 'string')) {
                v = {name: v};
            }
            switch (v.name) {
                case 'refresh':
                    gearsList.push(<MenuItem key="refresh1">
                        <div onClick={()=>{
                                this.parent.refreshTable();
                                this.hideMenuDropdown();
                            }}>
                            <Icon type={v.icon || 'retweet'} className="menu-item-icon" />
                            <span>{v.text || '刷新表格'}</span>
                        </div>
                    </MenuItem>);
                    break;
                case 'fullScreen':
                    gearsList.push(<MenuItem key="fullScreen1">
                        <div onClick={()=>{
                                this.parent.toggleFullScreen();
                                this.hideMenuDropdown();
                            }}>
                            {!this.parent.state.fullScreen
                                ? <Icon type={v.text || 'arrows-alt'} className="menu-item-icon"/>
                                : <Icon type={v.text || 'shrink'} className="menu-item-icon"/>}
                            {!this.parent.state.fullScreen
                                ? <span>{(v.text || '全屏') + '显示'}</span>
                                : <span>{'退出' + (v.text || '全屏')}</span>
                            }
                        </div>
                    </MenuItem>);
                    break;
                case 'export':
                    gearsList.push(<MenuItem key="export1">
                        <div onClick={()=>{
                                this.parent._handleExport();
                                this.hideMenuDropdown();
                            }}>
                            <Icon type={v.icon || 'download'} className="menu-item-icon" />
                            <span>{v.text || '导出数据'}</span>
                        </div>
                    </MenuItem>);
                    break;
                case 'switchTags':
                    gearsList.push(<MenuItem key="switchTags1">
                        <div onClick={()=>{
                                this.showSwitchTags();
                                this.hideMenuDropdown();
                            }}>
                            <Icon type={v.icon || 'setting'} className="menu-item-icon" />
                            <span>{v.text || '展示字段'}</span>
                        </div>
                    </MenuItem>);
                    break;
                case 'showAllTags':
                    gearsList.push(<MenuItem key="showAllTags1">
                        <div onClick={()=>{
                                this.parent.toShowAllTags();
                                this.hideMenuDropdown();
                            }}>
                            <Icon type={v.icon || 'eye-o'} className="menu-item-icon" />
                            <span>{v.text || '展示全部'}</span>
                        </div>
                    </MenuItem>);
                    break;
                case 'setPageSize':
                    gearsList.push(<MenuItem key="basic-setPageSize1">
                        <Popconfirm placement="left"
                            title={this.renderPageInput('menu')}
                            onConfirm={this.getPageSizeSetting.bind(this, 'menu')}
                            onCancel={this.hideMenuDropdown.bind(this)}
                            okText="Yes" cancelText="No">
                            <div onClick={this.showSetPageSize.bind(this, 'menu')}>
                                <Icon type={v.icon || 'switcher'} className="menu-item-icon" />
                                <span>{v.text || '分页设置'}</span>
                            </div>
                        </Popconfirm>
                    </MenuItem>);
                    break;
                default:
                    gearsList.push(<MenuItem key={v.name} onClick={(...p)=>{
                            v.onClick(this.parent, ...p);
                            this.hideMenuDropdown();
                        }}>
                        <Icon type={v.icon || 'file-unknown'} className="menu-item-icon" />
                        <span>{v.text || ''}</span>
                    </MenuItem>);
            }
        }
        if (gearsList.length > 0) {
            result = (<Dropdown trigger={['click']} key="uf-table-menu"
                overlay={<Menu className="uf-table-menu">{gearsList}</Menu>}
                onVisibleChange={this.switchMenuList.bind(this)}
                placement="bottomRight"
                visible={this.state.showTableMenu}>
                <span className={'uf-header-widget menu ' + (this.state.showTableMenu ? 'active' : '')}
                    title="菜单">
                    {this.state.showTableMenu
                        ? <Icon type="menu-unfold" />
                        : <Icon type="menu-fold" />
                    }
                    {this.title.showText && <span>菜单</span>}
                </span>
            </Dropdown>);
        }
        return result;
    }

    /* 模糊搜索 **********************************************************************/

    // 过滤输入框点回车搜索时 (用于后端分页)
    onFilterSearch(value) {
        // 如果为后端分页，则不立刻搜索，onSearch 时才会搜索
        if (!this.parent.serverPaging) {
            return;
        }
        // 在原有参数基础上，追加一个search参数
        let oParams = this.parent.__filtered.source.params;
        oParams.search = value;
        this.parent.set({params: oParams});
    }
    // 过滤输入框变化时(用于前端分页)
    onFilterChange(e) {
        let iVal = e.target.value;
        this.setState({filterValue: iVal});
        // 如果为后端分页，则不立刻搜索，onSearch 时才会搜索
        if (this.parent.serverPaging) {
            return;
        }
        clearTimeout(this.filterTimer);
        this.filterTimer = setTimeout(()=>{
            this.onFilterData();
        }, 150);
    }
    onFilterData() {
        // 过滤
        let data = this.parent.state.completeData;
        // @bugfix at 2018/01/31 15:38，展示模糊搜索内容时，分页条数及当前分页使用模糊搜索自己的；取消模糊搜索时还原之前的状态
        // Table.js 中的 this.pagination 和 this.parant.__props.pagination 是同一个东西
        let pagination = this.parent.__props.pagination;
        let total = pagination && pagination.total;
        let current = pagination && pagination.current;
        // 对数据进行全局过滤
        if (this.state.filterValue.length !== 0) {
            data = this.doFilterData(this.state.filterValue, data);
            this.cacheTotal = this.cacheTotal || total;
            this.cacheCurrent = this.cacheCurrent || current;
            total = data.length;
            current = 1;
        } else {
            total = this.cacheTotal;
            current = this.cacheCurrent;
            this.cacheTotal = null;
            this.cacheCurrent = null;
        }
        let newProps = {data};
        if (pagination) {
            newProps.pagination = {total, current};
        }
        this.parent.__setProps(newProps);
    }
    // 全局搜索数据
    doFilterData(iVal, content) {
        let strVal = iVal.toLowerCase().replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
        // 过滤使用的数据，如果是有传入的数据则进行过滤，没有则需要进行
        if (strVal) {
            let arrFilterData = [];
            // 字段黑名单/白名单
            let filterlist = this.globalFilterList;
            for (let oRow of content) {
                let row = {};
                let data = [];
                // 按照展示的字段过滤，自定义render字段无效，问题比较大
                for (let i in oRow) {
                    // 把数据的key也全部转换成纯小写
                    row[i.toLowerCase()] = oRow[i];
                    // 如果不在白名单里或者在黑名单里，则跳过此字段
                    if (filterlist && filterlist['whitelist'] && filterlist['whitelist'].indexOf(i) === -1) {
                        continue;
                    } else if (filterlist && filterlist['blacklist'] && filterlist['blacklist'].indexOf(i) !== -1) {
                        continue;
                    }
                    let value = oRow[i];
                    if (Utils.typeof(value, 'string')) {
                        data.push(this.handleString(value));
                    } else if (Utils.typeof(value, 'object')) {
                        data.push(this.parent._getKeyDataOfObject(value));
                    } else if (value) {
                        data.push(value.toString ? value.toString() : value);
                    }
                }

                let str = data.join('\n').toLowerCase();
                // 输入值不是字符串，而是几个词，要拆分后分别查找
                let result = true;
                let keys = strVal.split(/\s+/);
                for (let key of keys) {
                    // update by liuzechun@baidu.com @2016-12-11
                    let orResult = false;
                    // 支持指定字段过滤(如 id:123)，先选出关键词对应的字段，再对字段内容进行检索
                    let [kWord, kVal] = key.split(':');
                    // kv为当前搜索的字段值，如果没有指定字段，则kv为全部字段拼成的字符串
                    let kv = '';
                    if (kVal) {
                        // 如果关键词字段直接为数据的key
                        if (row[kWord] !== undefined) {
                            kv = row[kWord] || '';
                        // 否则在配置的tag里匹配每个tag的中文名
                        } else {
                            for (let item of this.parent.columns) {
                                if (kWord === item.title.toLowerCase()) {
                                    kv = row[item.dataIndex.toLowerCase()];
                                }
                            }
                        }
                        if (typeof kv !== 'string') {
                            kv = typeof kv === 'object' && kv.title || JSON.stringify(kv);
                        }
                        kv = (kv || '').toLowerCase();
                    } else {
                        kv = str;
                        kVal = key;
                    }
                    // 支持使用|搜索，实现或的关系
                    for (let k of kVal.split(/\|+/)) {
                        // 一旦有一个能匹配到，则结果true
                        (!k || kv.indexOf(k) !== -1) && (orResult = true);
                    }
                    // 如果都匹配不到，则此关键字无效，整条数据无效
                    !orResult && (result = false);
                }
                if (result) {
                    arrFilterData.push(oRow);
                }
            }
            // return Utils.clone(arrFilterData);
            return arrFilterData;
        }
        // 清除已勾选内容
        // this.parent.clearSelect();
        return content;
    }
    // 若有html，则剥掉标签
    handleString(string) {
        let pattern1 = /<(\w+).*?>(.*?)<\/\1>/g; // 匹配是否有闭合标签
        if (pattern1.test(string)) {
            return string.replace(/<([/]?\w+).*?>/g, ''); // 剥掉所有标签
        } else {
            return string;
        }
    }

    /* 展示字段设置 **********************************************************************/

    // 显示’展示字段‘设置弹框
    showSwitchTags() {
        this.setState({showSetTagsModal: true});
    }
    // 自定义展示某些列
    setTableColumns() {
        // 根据this.columnsCheckedValues中存储的用户的选择进行展示
        let showColumns = this.columnsCheckedValues;
        let allColumns = this.parent.columns;
        for (let i in allColumns) {
            if (showColumns.some(v => allColumns[i].dataIndex === v)) {
                allColumns[i].display = true;
            } else {
                allColumns[i].display = false;
            }
        }
        this.setState({showSetTagsModal: false});
        this.parent.forceUpdate();
    }
    onSetColumnsCheckboxChange(checkedValues) {
        this.columnsCheckedValues = checkedValues;
    }
    cancleSetTableColumns() {
        this.setState({showSetTagsModal: false});
    }
    // 生成弹框中的checkbox组，以选择展示哪些列
    generateColumnsCheckboxGroup() {
        let options = [];
        let defaultValue = [];
        let allColumns = this.parent.columns;
        for (let item in allColumns) {
            let option = {
                label: allColumns[item].title,
                value: allColumns[item].dataIndex
            };
            options.push(option);
            if (allColumns[item].display !== false) {
                defaultValue.push(allColumns[item].dataIndex);
            }
        }
        this.columnsCheckedValues = defaultValue;
        if (options.length > 0) {
            return <CheckboxGroup options={options}
                defaultValue={defaultValue}
                onChange={this.onSetColumnsCheckboxChange.bind(this)} />;
        }
    }

    /* 设置分页条数 **********************************************************************/

    renderPageInput(name) {
        // return <Input placeholder="输入每页数据条数" refs={`pageSizeInput${name}`}
        //     value={this.parent.pagination.pageSize}
        //     onChange={this.changePageSize.bind(this)}/>;
        return <Input ref={`pageSizeInput${name}`}
            placeholder="输入每页数据条数"
            defaultValue={this.parent.pagination.pageSize}/>;
    }
    // 展示每页展示条数
    getPageSizeSetting(name) {
        let value = this.refs[`pageSizeInput${name}`].refs.input.value;
        let pageSize = parseInt(value, 10);
        if (isNaN(pageSize)) {
            pageSize = 10;
        }
        this.parent.pagination.pageSize = pageSize;
        this.parent.forceUpdate();
        this.setState({showTableMenu: false});
    }
    // 展示分页设置输入框时，使得输入框获取焦点
    showSetPageSize(name) {
        // 设定延迟的原因，this[`pageSizeInput${name}`]以提示框的形式渲染到页面
        // 而此函数触发时还未渲染完毕，输入框无法获得焦点，输入框手动获取焦点会引起menu下拉列表关闭
        setTimeout(() => {
            let obj = this[`pageSizeInput${name}`];
            obj && obj.focus();
        }, 10);
    }

    /* menu 菜单 **********************************************************************/

    // 展示头部隐藏菜单
    switchMenuList(visible) {
        this.setState({showTableMenu: visible});
    }
    showTableMenu() {
        this.setState({showTableMenu: true});
    }
    // menu下拉列表隐藏
    hideMenuDropdown() {
        this.setState({showTableMenu: false});
    }

    render() {
        return <div>
            {this.titleGenerate()}
            <Modal title="展示字段" className="uf-table-modal"
                visible={this.state.showSetTagsModal}
                onOk={this.setTableColumns.bind(this)}
                onCancel={this.cancleSetTableColumns.bind(this)}>
                {this.generateColumnsCheckboxGroup()}
            </Modal>
        </div>;
    }
}
