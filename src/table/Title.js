/**
 * @file Table扩展 - 表格上方的title以及其全部可选控件实现
 * @author liuzechun@baidu.com
 * */

import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Icon, Dropdown, Menu, Modal, Popconfirm} from 'antd';
import {Input, Checkbox, Button} from 'antd';

import {FuzzyFilter} from './Filters.js';

const CheckboxGroup = Checkbox.Group;
const MenuItem = Menu.Item;

export default class Title extends BaseComponent {
    constructor(props) {
        super(props, {type: 'table-title'});
        // 其本身无需初始化组件
        // this.__init();
        // 缓存展示字段名称组件的cacheName
        this.cacheName = props.parent.insName + props.parent.key;
        this.useCache = true;
        this.state = {
            antdConfig: null,
            // table表头右侧设置按钮的下拉框是否展示
            showTableMenu: false,
            // 是否展示全部字段
            showAllTags: false,
            showSetTagsModal: false
        };
        this.init(props);
    }
    componentWillReceiveProps(nextProps) {
        this.init(nextProps);
    }
    // title为crud的子组件，但是crud存阻止刷新的逻辑，所以需要title刷新时，手动调用此函数
    refreshTitleConf(conf) {
        let confStr = JSON.stringify(conf);
        if (confStr !== this.currentConfStr) {
            this.currentConfStr = confStr;
            this.title = conf;
            this.forceUpdate();
        }
    }
    init(props) {
        this.parent = props.parent;
        this.title = props.config;
    }
    componentDidMount() {
        if (this.useCache) {
            // 当有缓存时，使用缓存的选中列
            let cache = Utils.getCache(this.cacheName);
            if (cache) {
                this.setTableColumns(cache);
            }
        }
    }

    clearState() {
        this.refs.filter && this.refs.filter.clearState();
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
                    result.push(<div className="uf-header-widget filter no-hover" key="uf-header-widget">
                            {v.label && (<label>{v.label}</label>)}
                            <FuzzyFilter ref="filter" parent={this.parent} {...{
                                others: Utils.filter(v, ['paramIndex', 'text', 'label', 'whitelist', 'blacklist']),
                                placeholder: v.text || '模糊搜索',
                                paramIndex: v.paramIndex,
                                globalFilterList: {
                                    whitelist: v.whitelist,
                                    blacklist: v.blacklist
                                }
                            }}/>
                        </div>);
                    break;
                case 'refresh':
                    result.push(<div className="uf-header-widget" key="refresh"
                                title={v.text || '刷新'}
                                onClick={()=>{
                                    this.parent.refreshTable();
                                }}>
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
                    if (v.cache === false) {
                        this.useCache = false;
                    }
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
                    // 如果设置了type，则按照用户的意愿进行展示，否则使用默认的展示形式
                    if (v.type) {
                        v.key = v.key || Utils.hash(v);
                        result.push(this.parent.__analysis(v));
                    } else {
                        let onClick = v.onClick && v.onClick.bind(null, this.parent);
                        if (v.action) {
                            onClick = () => {
                                this.parent.showCrud(v.action);
                            };
                        }
                        result.push(<div key={v.name || Utils.hash(v)} className={'uf-header-widget ' + (v.name || '')}
                            title={v.text}
                            onClick={onClick}>
                            <Icon key="icon" type={v.icon || 'file-unknown'} />
                            {showText && <span key="text">{v.text || ''}</span>}
                        </div>);
                    }
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
    setTableColumns(defaultValues) {
        // 根据this.columnsCheckedValues中存储的用户的选择进行展示
        let showColumns = defaultValues || this.columnsCheckbox.getValue();
        let allColumns = this.parent.columns;
        for (let i in allColumns) {
            if (showColumns.some(v => allColumns[i].dataIndex === v)) {
                allColumns[i].display = true;
            } else {
                allColumns[i].display = false;
            }
        }
        // 缓存配置
        Utils.setCache(this.cacheName, showColumns);
        this.setState({showSetTagsModal: false});
        // 需更新 __props，否则表格刷新时会被重置
        // this.parent.forceUpdate();
        this.parent.__setProps({columns: allColumns});
    }
    onSelectAll() {
        this.columnsCheckbox.selectAll();
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
        return <ColumnsCheckbox ref={ele => (this.columnsCheckbox = ele)}
                options={options} value={defaultValue}/>;
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
        this.parent.__setProps({pagination: {pageSize: pageSize}});
        this.parent.refreshTable();
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
        return <div className="uf-table-title">
            {this.titleGenerate()}
            <Modal title="展示字段" className="uf-table-modal" key="uf-table-modal"
                visible={this.state.showSetTagsModal}
                onOk={this.setTableColumns.bind(this, null)}
                onCancel={this.cancleSetTableColumns.bind(this)}
                footer={[
                    <Checkbox onChange={this.onSelectAll.bind(this)} style={{marginRight: '8px'}}>全选</Checkbox>,
                    <Button type="primary" size="large" onClick={this.setTableColumns.bind(this, null)}>确定</Button>,
                    <Button size="large" onClick={this.cancleSetTableColumns.bind(this)}>取消</Button>
                ]}>
                {this.generateColumnsCheckboxGroup()}
            </Modal>
        </div>;
    }
}

class ColumnsCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.checkedValues = props.value;
    }
    componentWillReceiveProps(nextProps) {
        this.checkedValues = nextProps.value;
    }
    selectAll() {
        this.onChange(this.props.options.map(v=>v.value));
    }
    getValue() {
        return this.checkedValues;
    }
    onChange(checkedValues) {
        console.log(checkedValues);
        this.checkedValues = checkedValues;
        this.forceUpdate();
    }
    render() {
        return <CheckboxGroup options={this.props.options}
            value={this.checkedValues}
            onChange={this.onChange.bind(this)} />;
    }
}