/**
 * @file 表格组件:antd Table的基础上增加了原来uf Table中的一些功能
 * @author susisi@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';
import {Utils} from 'uf/utils';
import {Input, Table, Button, Icon, Dropdown, Menu, Modal, Checkbox, Popover, Popconfirm} from 'antd';
// import {Input} from 'uf/antd';
import Export from 'uf/export';
import UF from 'uf/tools';
import './style.scss';
const CheckboxGroup = Checkbox.Group;
// 从obg2中获取obj1所需要的一些属性
const getNeedObject = (obj1, obj2) => {
    for (let v in obj1) {
        if (!!obj2[v]) {
            obj1[v] = obj2[v];
        }
    }
};

export default class NewTable extends BaseComponent {
    // 以下是函数定义
    constructor(props) {
        super(props);
        this.state = {
            antdConfig: null,
            // 数据默认为空
            data: [],
            completeData: [],
            // 单列过滤
            filterInputValue: '',
            filterDropdownVisible: false,
            // 全局数据过滤
            globalfilterValue: '',
            // table表头右侧设置按钮的下拉框是否展示
            showTableMenu: false,
            // 全屏展示与否
            fullScreen: false,
            // 是否展示全部字段
            showAllTags: false,
            // 存储选择的行信息
            selectedRowKeys: [],
            // 与分页相关状态
            pageSize: 10,
            current: 1,
            total: 0,
            // 加载状态
            loading: false
        };
        // 用于存储多列的筛选条件
        this.filterConditions = {};
        this.globalFilterInput = '';
        // 过滤字段黑名单/白名单
        this.globalFilterList = null;
        // // 导出配置
        // this.exportConfig = {};
        // 请求序号，当执行新请求时，之前的未返回数据的请求则废弃，通过index值是否相等判断
        this.requerstIndex = 0;

        this.__init();
    }
    componentDidMount() {
        this.initTable();
    }
    componentWillReceiveProps(nextProps) {
        // 即使props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
        if (!Utils.equals(this.config, nextProps)) {
            this.initTable(nextProps);
        }
    }
    initTable(nextProps) {
        let objProps = nextProps ? nextProps : this.__props;
        this.config = Utils.clone(objProps);
        let propsData = Utils.clone(objProps.data);
        // 列配置
        this.columns = Utils.clone(objProps.columns);
        // 行配置
        if (!!objProps.rowSelection) {
            this.rowSelection = Utils.clone(objProps.rowSelection);
            if (this.rowSelection.selectedRowKeys) {
                this.setState({selectedRowKeys: this.rowSelection.selectedRowKeys});
            }
        }
        else {
            this.rowSelection = null;
        }
        // 分页配置
        if (!objProps.pagination) {
            this.pagination = false;
        }
        else {
            this.pagination = !!objProps.pagination ? Utils.clone(objProps.pagination) : {};
            if (this.pagination.pageSize) {
                this.setState({
                    pageSize: this.pagination.pageSize
                });
            }
            if (this.pagination.current) {
                this.setState({current: this.pagination.current});
            }
        }
        let defaultCif = {
            size: 'default',
            rowKey: 'key',
            rowClassName: () => {},
            expandedRowRender: null,
            defaultExpandedRowKeys: [],
            expandedRowKeys: [],
            defaultExpandAllRows: false,
            locale: {filterTitle: '筛选', filterConfirm: '确定', filterReset: '重置', emptyText: '暂无数据'},
            indentSize: 15,
            bordered: false,
            showHeader: true,
            footer: null,
            scroll: {},
            onChange: () => {},
            onExpand: () => {},
            onExpandedRowsChange: () => {},
            onRowClick: () => {},
            onRowDoubleClick: () => {},
            onRowMouseEnter: () => {},
            onRowMouseLeave: () => {}
        };
        getNeedObject(defaultCif, this.config);
        /* 关于表头 */
        if (!!objProps.titleConfig) {
            this.titleConfig = objProps.titleConfig;
            this.titleConfig.showText = this.titleConfig.showText !== undefined ? this.titleConfig.showText : true;
        }
        else {
            this.titleConfig = null;
        }
        /* 关于异步操作 */
        if (objProps.source) {
            this.getData(null, objProps.params);
        } else {
            this.setState({
                data: propsData,
                completeData: propsData,
                loading: false,
                total: propsData.length
            });
            // 导出数据的配置
            this.exportConfig = this.getExportConfig(propsData);
        }
        /* 关于行样式与不可选相关联，不可选时至为灰色 */
        if (this.rowSelection && this.rowSelection.disabledRow) {
            // 暂存用户配置
            let rowClassNameFun = defaultCif.rowClassName;
            defaultCif.rowClassName = (record, index) => {
                let customRowClassName = rowClassNameFun(record, index);
                // 用户未定义rowClassName时customRowClassName为undefined
                if (!customRowClassName) {
                    customRowClassName = '';
                }
                if (this.rowSelection.disabledRow(record)) {
                    return 'disabledRow ' + customRowClassName;
                }
                else {
                    return customRowClassName;
                }
            };
        }
        this.antdConfig = defaultCif;
        this.setState({
            antdConfig: this.antdConfig
        });
        this.forceUpdate();
    }
    // 异步获取数据
    getData(pageNum, params, nextProps) {
        let url = this.config.source;
        if (!url) {
            // 用户为传接口，则直接返回
            return;
        }
        let method = this.config.method || 'get';
        let ajax = method === 'post' ? this.__postData : this.__getData;
        let dataParams = {};
        let requestParams = params ? params : (nextProps ? nextProps.params : this.config.params);
        if (this.pagination.pageType === 'server') {
            dataParams = Object.assign({}, requestParams, {
                page: pageNum ? pageNum : 1,
                size: this.pagination.pageSize,
                pageType: 'server'
            });
        } else {
            dataParams = Object.assign({}, requestParams, {
                pageType: 'client'
            });
        }
        this.setState({
            loading: true
        });
        // 当前请求的标号
        let index = ++this.requerstIndex;
        ajax(url, params, (data, res) => {
            if (index !== this.requerstIndex) {
                return;
            }
            let displayData = data;
            if (this.pagination.pageType === 'server') {
                displayData = data.slice(0, this.state.pageSize);
            }
            this.setState({
                data: displayData,
                completeData: displayData,
                // total: data.length,
                total: res.total || res.count,
                loading: false
            });
            this.onRefreshData(data);
        });
    }
    // 数据刷新
    onRefreshData(data) {
        // 刷新导出组件配置
        this.exportConfig = this.getExportConfig(data);
        this.forceUpdate();
    }
    // 表头生成-包括文字标题及自定义控件
    titleGenerate() {
        if (!this.titleConfig) {
            return null;
        }
        let title = this.titleConfig.title || '';
        let showText = this.titleConfig.showText;
        let result = [];
        // 表头标题
        if (title) {
            result.push(<div key="table-title" className="umpui-header">
                    <span>{title}</span>
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
        result.push(<div key="table-extra" className="umpui-header-extra-con">{divList}</div>);
        return () => result;
    }
    // 基本控件
    getBasicWidghts() {
        let arrBasic = this.titleConfig.basicControls;
        let result = [];
        if (!arrBasic) {
            return result;
        }
        let showText = this.titleConfig.showText;
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
                    result.push(<div className="umpui-header-extra filter no-hover" key="umpui-header-extra">
                            <Input name="filter" prefix={<Icon type={v.icon || 'filter'}/>}
                                placeholder={showText ? (v.text || '要过滤的内容') : ''}
                                onChange={this.globalFilterChange.bind(this)}/>
                        </div>);
                    break;
                case 'refresh':
                    result.push(<div className="umpui-header-extra" key="refresh"
                                title="刷新"
                                onClick={this.refreshTable.bind(this)}>
                            <Icon type={v.icon || 'retweet'} />
                            {showText && <span>{v.text || '刷新'}</span>}
                        </div>);
                    break;
                case 'fullScreen':
                    result.push(<div className="umpui-header-extra" key="fullscreen"
                            title={!this.state.fullScreen ? '全屏' : '退出全屏'}
                            onClick={this.toggleFullScreen.bind(this)}>
                            {!this.state.fullScreen
                                ? <Icon type={v.text || 'arrows-alt'} />
                                : <Icon type={v.text || 'shrink'} />}
                            {showText && (
                                !this.state.fullScreen
                                    ? <span>{v.text || '全屏'}</span>
                                    : <span>{v.text || '退出全屏'}</span>
                            )}
                        </div>);
                    break;
                case 'export':
                    result.push(<div className="umpui-header-extra" key="export"
                        title='导出'>
                            <Export {...this.exportConfig}>
                                <Icon type={v.icon || 'download'} />
                                {showText && <span>{v.text || '导出'}</span>}
                            </Export>
                        </div>);
                    break;
                case 'switchTags':
                    result.push(<div className="umpui-header-extra" key="switchTags"
                                title="展示字段"
                                onClick={this.showSwitchTags.bind(this)}>
                            <Icon type={v.icon || 'setting'} />
                            {showText && <span>{v.text || '展示字段'}</span>}
                        </div>);
                    break;
                case 'showAllTags':
                    result.push(<div key="showAllTags"
                                title="展示全部"
                                className={'umpui-header-extra ' + (this.state.showAllTags ? 'active' : '')}
                                onClick={this.toShowAllTags.bind(this)}>
                            <Icon type={v.icon || 'eye-o'} />
                            {showText && <span>{v.text || '展示全部'}</span>}
                        </div>);
                    break;
                case 'setPageSize':
                    result.push(<Popconfirm placement="top" key="basic-setPageSize"
                            title={<Input
                                placeholder="输入每页数据条数"
                                ref = {ele => this['uf-table-pagesize-setting-basic'] = ele}
                                value={this.state.pageSize}
                                onChange={this.changePageSize.bind(this)}/>
                            }
                            onConfirm={this.getPageSizeSetting.bind(this, 'basic')}
                            onCancel={this.hideMenuDropdown.bind(this)}
                            okText="Yes" cancelText="No">
                            <div className="umpui-header-extra"
                                title="分页设置"
                                onClick={this.showSetPageSize.bind(this, 'basic')}>
                                <Icon type={v.icon || 'switcher'} />
                                {showText && <span>{v.text || '分页设置'}</span>}
                            </div>
                        </Popconfirm>);
                    break;
                default:
                    result.push(<div key={v.name} className={'umpui-header-extra ' + (v.name || '')}
                            title={v.text}
                            onClick={v.onClick.bind(null, this)}>
                            <Icon type={v.icon || 'file-unknown'} />
                            {showText && <span>{v.text || ''}</span>}
                        </div>);
            }
        }
        return result;
    }
    // 下拉列表中的控件
    getMenuWidghts() {
        let arrMenus = this.titleConfig.menuControls;
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
                    gearsList.push(<li key="refresh1" onClick={this.refreshTable.bind(this)}>
                        <Icon type={v.icon || 'retweet'} className="menu-item-icon" />
                        <span>{v.text || '刷新表格'}</span>
                    </li>);
                    break;
                case 'fullScreen':
                    gearsList.push(<li key="fullScreen1" onClick={this.toggleFullScreen.bind(this)}>
                            {!this.state.fullScreen
                                ? <Icon type={v.text || 'arrows-alt'} className="menu-item-icon"/>
                                : <Icon type={v.text || 'shrink'} className="menu-item-icon"/>}
                            {!this.state.fullScreen
                                ? <span>{v.text || '全屏显示'}</span>
                                : <span>{v.text || '退出全屏'}</span>
                            }
                        </li>);
                    break;
                case 'switchTags':
                    gearsList.push(<li key="switchTags1" onClick={this.showSwitchTags.bind(this)}>
                        <Icon type={v.icon || 'setting'} className="menu-item-icon" />
                        <span>{v.text || '展示字段'}</span>
                    </li>);
                    break;
                case 'showAllTags':
                    gearsList.push(<li key="showAllTags1" onClick={this.toShowAllTags.bind(this)}
                        className={this.state.showAllTags ? 'active' : ''}>
                        <Icon type={v.icon || 'eye-o'} className="menu-item-icon" />
                        <span>{v.text || '展示全部'}</span>
                    </li>);
                    break;
                case 'export':
                    gearsList.push(<li key="export1">
                        <Export {...this.exportConfig}>
                            <Icon type={v.icon || 'download'} className="menu-item-icon" />
                            <span>{v.text || '导出数据'}</span>
                        </Export>
                    </li>);
                    break;
                case 'setPageSize':
                    gearsList.push(<Popconfirm placement="left" key="basic-setPageSize1"
                            title={<Input
                                placeholder="输入每页数据条数"
                                ref={ele => this['uf-table-pagesize-setting-menu'] = ele}
                                value={this.state.pageSize}
                                onChange={this.changePageSize.bind(this)} />}
                            onConfirm={this.getPageSizeSetting.bind(this, 'menu')}
                            onCancel={this.hideMenuDropdown.bind(this)}
                            okText="Yes" cancelText="No">
                            <li onClick={this.showSetPageSize.bind(this, 'menu')} className={'ant-popover-open'}>
                                <Icon type={v.icon || 'switcher'} className="menu-item-icon" />
                                <span>{v.text || '分页设置'}</span>
                            </li>
                        </Popconfirm>);
                    break;
                default:
                    gearsList.push(<li key={v.name} onClick={v.onClick.bind(null, this)}>
                        <Icon type={v.icon || 'file-unknown'} className="menu-item-icon" />
                        <span>{v.text || ''}</span>
                    </li>);
            }
        }
        if (gearsList.length > 0) {
            result = (<Dropdown trigger={['click']} key="umpui-table-menu"
                overlay={
                    <ul className="uf-dropdown-menu-ul">{gearsList}</ul>
                }
                onVisibleChange={this.switchMenuList.bind(this)}
                placement="bottomRight"
                visible={this.state.showTableMenu}>
                <span className={'umpui-header-extra menu ' + (this.state.showTableMenu ? 'active' : '')}
                    title="菜单">
                    {this.state.showTableMenu
                        ? <Icon type="menu-unfold" />
                        : <Icon type="menu-fold" />
                    }
                    {this.titleConfig.showText && <span>菜单</span>}
                </span>
            </Dropdown>);
        }
        return result;
    }
    // 获取要下载导出数据的配置
    getExportConfig(data) {
        let tableCfg = this.config;
        let tableColumns = this.columns;
        // let objHeaders = {};
        let objHeaders = [];
        // let arrKeys = [];
        // let typeDef = Object.prototype.toString;
        for (let i in tableColumns) {
            objHeaders.push({
                key: tableColumns[i].dataIndex || tableColumns[i].key,
                title: tableColumns[i].title
            });
        }
        /**
         * 1. 没有url就是直接传递了content的数据
         * 2. 有url但是是client分页-Export需要传递data,默认是client分页
         * 3. 有url但是是server端分页-Export需要传递url配置
         */
        if (!tableCfg.source || (this.pagination !== false && this.pagination.pageType !== 'server')) {
            return {
                headers: objHeaders,
                data: data,
                total: data.length
            };
        }
        return {
            headers: objHeaders,
            source: tableCfg.source,
            params: tableCfg.params ? tableCfg.params : {},
            total: this.state.total
        };
    }
    // 刷新表格
    refreshTable() {
        if (this.config.source) {
            this.getData();
        }
        // 清空某些控制状态
        this.clearState();
        this.setState({data: this.state.completeData});
        // 刷新导出组件配置
        this.exportConfig = this.getExportConfig(this.state.completeData);
        this.forceUpdate();
    }
    // 清空某些控制状态
    clearState() {
        this.setState({
            filterInputValue: '',
            filterDropdownVisible: false,
            showTableMenu: false,
            selectedRowKeys: []
        });
        this.globalFilterInput = '';
        this.filterConditions = {};
        this.forceUpdate();
    }
    // 全屏或退出全屏
    toggleFullScreen() {
        this.setState({
            fullScreen: !this.state.fullScreen,
            showTableMenu: false
        });
    }
    // 显示’展示字段‘设置弹框
    showSwitchTags() {
        this.setState({showSetTagsModal: true});
    }
    // 展示全部字段
    toShowAllTags() {
        this.setState({
            showAllTags: !this.state.showAllTags,
            showTableMenu: false
        });
    }
    // 自定义展示某些列
    setTableColumns() {
        // 根据this.columnsCheckedValues中存储的用户的选择进行展示
        let showColumns = this.columnsCheckedValues;
        let allColumns = this.columns;
        for (let i in allColumns) {
            if (showColumns.some(ele => allColumns[i].dataIndex === ele)) {
                allColumns[i].display = true;
            }
            else {
                allColumns[i].display = false;
            }
        }
        this.setState({showSetTagsModal: false});
        this.forceUpdate();
    }
    // 生成弹框中的checkbox组，以选择展示哪些列
    generateColumnsCheckboxGroup() {
        let options = [];
        let defaultValue = [];
        let allColumns = this.columns;
        for (let item in allColumns) {
            let option = {label: allColumns[item].title, value: allColumns[item].dataIndex};
            options.push(option);
            if (allColumns[item].display === false) {
                continue;
            }
            defaultValue.push(allColumns[item].dataIndex);
        }
        if (options.length > 0) {
            return <CheckboxGroup options={options}
                defaultValue={defaultValue}
                onChange={this.onSetColumnsCheckboxChange.bind(this)} />;
        }
    }
    // 输入框设置每页展示多少条
    changePageSize(e) {
        this.setState({
            pageSize: e.target.value
        });
    }
    // 通过Pagination组建设置展示多少条
    onShowSizeChange(current, size) {
        this.setState({
            pageSize: parseInt(size, 10)
        });
        this.pagination.pageSize = parseInt(size, 10);
        this.forceUpdate();
        if (this.pagination.onShowSizeChange) {
            this.pagination.onShowSizeChange(current, size);
        }
    }
    // 展示每页展示条数
    getPageSizeSetting(from) {
        let pageSize = this.state.pageSize;
        if (pageSize.length === 0 || isNaN(parseInt(pageSize, 10))) {
            // 若用户输入
            pageSize = 10;
        }
        this.pagination.pageSize = parseInt(pageSize, 10);
        this.setState({
            // pageSize: parseInt(pageSize, 10),
            showTableMenu: false
        });
        this.forceUpdate();
    }
    // 展示分页设置输入框时，使得输入框获取焦点
    showSetPageSize(from) {
        // 设定延迟的原因，this['uf-table-pagesize-setting-' + from]以提示框的形式渲染到页面
        // 而此函数触发时还未渲染完毕，输入框无法获得焦点，输入框手动获取焦点会引起menu下拉列表关闭
        setTimeout(() => {
            let obj = this['uf-table-pagesize-setting-' + from];
            obj && obj.trigger('focus');
        }, 10);
    }
    showTableMenu() {
        this.setState({
            showTableMenu: true
        });
    }
    // menu下拉列表隐藏
    hideMenuDropdown() {
        this.setState({
            showTableMenu: false
        });
    }
    onSetColumnsCheckboxChange(checkedValues) {
        this.columnsCheckedValues = checkedValues;
    }
    cancleSetTableColumns() {
        this.setState({showSetTagsModal: false});
    }
    // 展示头部隐藏菜单
    switchMenuList(visible) {
        this.setState({showTableMenu: visible});
    }
    onFilterData() {
        // 过滤
        let data = this.state.completeData;
        // 对数据进行全局过滤
        if (this.globalFilterInput.length !== 0) {
            data = this.globalFilterData(this.globalFilterInput, data);
        }
        // 对数据进行单列过滤
        if (this.filterConditions.toString() !== '{}') {
            data = this.filterInputSearch(data);
        }
        this.setState({
            data: data
        });
    }
    // 过滤输入框变化时
    globalFilterChange(e) {
        let iVal = e.target.value;
        clearTimeout(this.filterTimer);
        this.filterTimer = setTimeout(()=>{
            this.globalFilterInput = iVal;
            this.onFilterData();
        }, 150);
    }
    // 全局搜索数据
    globalFilterData(iVal, filteredData) {
        let content = !!filteredData ? filteredData : this.state.completeData;
        let strVal = iVal.toLowerCase().replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
        // 过滤使用的数据，如果是有传入的数据则进行过滤，没有则需要进行
        if (strVal) {
            let arrFilterData = [];
            // 字段黑名单/白名单
            let filterlist = this.globalFilterList;
            for (let row of content) {
                let data = [];
                // 按照展示的字段过滤，自定义render字段无效，问题比较大
                for (let i in row) {
                    // 如果不在白名单里或者在黑名单里，则跳过此字段
                    if (filterlist && filterlist['whitelist'] && filterlist['whitelist'].indexOf(i) === -1) {
                        continue;
                    } else if (filterlist && filterlist['blacklist'] && filterlist['blacklist'].indexOf(i) !== -1) {
                        continue;
                    }
                    let value = row[i];
                    if (typeof(value) === 'string') {
                        data.push(this.handleString(value));
                    } else if (typeof(value) === 'object') {
                        data.push(this.getKeyDataOfObject(value));
                    } else {
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
                        if (row[kWord]) {
                            kv = row[kWord];
                        } else {
                            // 否则在配置的tag里匹配每个tag的中文名
                            for (let i in this.showTags) {
                                if ((typeof this.showTags[i] === 'string'
                                        && kWord === this.showTags[i].toLowerCase())
                                    || (typeof this.showTags[i] === 'object'
                                        && kWord === this.showTags[i].title.toLowerCase())) {
                                    kv = row[i];
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
                    arrFilterData.push(row);
                }
            }
            return Utils.clone(arrFilterData);

        }
        // else if (this.pagination.pageType === 'server') {
        //     // 服务器端分页的content都是当前页的数据
        //     this.setState({
        //         currentPage: 1,
        //         currPageData: Utils.clone(this.state.content),
        //         count: this.state.allCount,
        //         filter: false
        //     });
        // }
        // else {
        //     // 前端分页, content是返回的所有数据，当前页的数据需要截取
        //     let curData = this.state.content.slice(0, this.pagination.pageSize);
        //     this.setState({
        //         currentPage: 1,
        //         currPageData: Utils.clone(curData),
        //         count: this.state.allCount,
        //         filter: false
        //     });
        // }

        // 清除已勾选内容
        // this.clearSelect();

    }
    // 从一个对象中获取需要用于过滤的关键字
    getKeyDataOfObject(obj) {
        let val = '';
        // 如果传入的是一个数组，则递归的遍历这个数组，拿出数组中各个对象的关键字
        if (obj instanceof Array) {
            let tArr = [];
            for (let t of obj) {
                tArr.push(this.getKeyDataOfObject(t));
            }
            val = tArr.join('\n');
        } else if (obj instanceof Object) {
            // 如果字段是个对象，则优先获取Title字段，否则获取该对象的第一个字段
            if (obj.hasOwnProperty('title')) {
                val = obj['title'];
            } else {
                for (let v in obj) {
                    val = obj[v];
                    break;
                }
            }
        } else if (obj) {
            val = obj.toString ? obj.toString() : obj;
        }
        return val;
    }
    // 若有html，则剥掉标签
    handleString(string) {
        let pattern1 = /<(\w+).*?>(.*?)<\/\1>/g; // 匹配是否有闭合标签
        if (pattern1.test(string)) {
            return string.replace(/<([\/]?\w+).*?>/g, ''); // 剥掉所有标签
        } else {
            return string;
        }
    }
    // 单列数据搜索
    filterChange(filterProperty, e) {
        // this.filterConditions用于记录多个列的同时筛选条件
        const searchText = e.target.value;
        if (!!searchText && searchText.length > 0) {
            this.filterConditions[filterProperty] = searchText;
        }
        else {
            delete this.filterConditions[filterProperty];
        }
        this.forceUpdate();
    }
    filterInputSearch(filteredData) {
        let data = [];
        let needFilterData = !!filteredData ? filteredData : this.state.completeData;
        // 如果传入filteredData,则在filteredData基础上筛选
        // 如果没有传入如果传入filteredData，则在全量数据上进行筛选
        data = needFilterData.filter(record => {
            let flag = true;
            for (let cdit in this.filterConditions) {
                if (record[cdit].toString().indexOf(this.filterConditions[cdit]) === -1) {
                    flag = false;
                    break;
                }
            }
            return flag;
        });
        return data;
    }
    // 从全量数据中提取某列的所有可能的值
    getAllFilterValue(dataIndex) {
        let obj = {};
        let result = [];
        let data = this.state.completeData;
        for (let i = 0; i < data.length; i++) {
            // 用obj存储所有可能的字段
            if (data[i][dataIndex] && !obj[data[i][dataIndex]]) {
                obj[data[i][dataIndex]] = 1;
            }
        }
        // 将obj转换为数组
        for (let key in obj) {
            result.push({text: key, value: key});
        }
        return result;
    }
    syntaxHighlight(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        let self = this;
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        let reg = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;
        return json.replace(reg, function (match) {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    try {
                        let type = JSON.parse(match);
                        if (typeof(JSON.parse(type)) === 'object') {
                            return self.syntaxHighlight(JSON.parse(type));
                        } else {
                            cls = 'string';
                        }
                    } catch (e) {
                        cls = 'string';
                    }
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
    createMarkup(htmlString) {
        return {
            __html: htmlString
        };
    }
    renderColumns() {
        // 列功能相关
        let antdColumnConfig = [];
        for (let item in this.columns) {
            if (!this.state.showAllTags && this.columns[item].display === false) {
                // 在展示部分字段下过滤掉不展示的列数据
                continue;
            }
            let defaultColumn = {
                title: '',
                key: '',
                dataIndex: '',
                // 默认是从用户配置中获取此字段，对于特殊的格式再做处理
                render: null,
                sorter: false,
                colSpan: null,
                width: '',
                className: '',
                fixed: false,
                sortOrder: false,
                onCellClick: null
            };

            getNeedObject(defaultColumn, this.columns[item]);
            // 用户配置的render是一个uf组建配置，在此转为dom
            if (!!this.columns[item].render) {
                defaultColumn.render = (text, record, index) => {
                    return UF.init(this.columns[item].render(text, record, index));
                };
            }
            // 将用户配置的单列筛选选项转换成antd的配置
            if (!!this.columns[item].filterConfig) {
                let filterConfig = this.columns[item].filterConfig;
                if (!filterConfig.filterType) {
                    // 若没有配置filterType则直接返回
                    return;
                }
                let dataIndex = this.columns[item].dataIndex;
                if (filterConfig.filterType === 'checkBox' || filterConfig.filterType === 'radio') {
                    // 多选框或单选框筛选
                    let filterObj = {
                        filters: null,
                        filterMultiple: false,
                        onFilter: null
                    };
                    if (!!filterConfig.filters) {
                        // 用户配置了filters,则将用户配置进行转换
                        filterObj.filters = filterConfig.filters.map(o => {
                            return {text: o, value: o};
                        });
                    }
                    else {
                        // 用户没有配置filters，则将该字段的所有可能值展示出来
                        filterObj.filters = this.getAllFilterValue(dataIndex);
                    }
                    filterObj.filterMultiple = filterConfig.filterType === 'checkBox' ? true : false;
                    filterObj.onFilter = (value, record) => {
                        return record[this.columns[item].dataIndex].indexOf(value) !== -1;
                    };
                    defaultColumn = Object.assign({}, defaultColumn, filterObj);
                }
                else if (filterConfig.filterType === 'input') {
                    // 通过输入筛选
                    let filterObj = {
                        filterDropdown: null,
                        filterIcon: <Icon type="filter"
                            style={{color: !! this.filterConditions[dataIndex] ? '#108ee9' : '#aaa'}} />
                    };
                    filterObj.filterDropdown = (
                        <div className="custom-filter-dropdown">
                            <Input placeholder="Search"
                                value={!!this.filterConditions[dataIndex] ? this.filterConditions[dataIndex] : ''}
                                onChange={this.filterChange.bind(this, dataIndex)}
                                onPressEnter={this.onFilterData.bind(this)}
                            />
                        </div>
                    );
                    defaultColumn = Object.assign({}, defaultColumn, filterObj);
                }
            }
            // 文字过长，鼠标移入时进行气泡展示
            if (!!this.columns[item].ellipsis) {
                defaultColumn.render = (text, record, index) => {
                    let newText = this.columns[item].render
                        ? UF.init(this.columns[item].render(text, record, index))
                        : text;
                    return <Popover content={newText}>
                        <span className="uf-table-td-ellipsis">{newText}</span>
                    </Popover>;
                };
            }
            // 对特殊格式进行展示处理，包括html格式，json格式，duration格式
            if (this.columns[item]['textType']) {
                // let elliClass = v['ellipsis'] ? ' ellipsis' : '';
                // style.className += elliClass;
                defaultColumn.render = (text, record, index) => {
                    let newText = text;
                    switch (this.columns[item].textType) {
                        case 'duration':
                            const timeDiff = ((+new Date()) - (+new Date(Date.parse(text.replace(/-/g, '/'))))) / 1000;
                            const dayTime = Math.floor(timeDiff / (24 * 3600));
                            const hourTime = Math.floor((timeDiff % (24 * 3600)) / 3600);
                            const minuteTime = Math.floor((timeDiff % (24 * 3600) % 3600) / 60);
                            const secTime = Math.floor(timeDiff % (24 * 3600) % 3600 % 60);
                            let timeArr = [];

                            dayTime > 0 && timeArr.push(dayTime + '天');
                            hourTime > 0 && timeArr.push(hourTime + '时');
                            minuteTime > 0 && timeArr.push(minuteTime + '分');

                            (dayTime === 0 && hourTime === 0 && minuteTime === 0)
                                && secTime > 0 && timeArr.push(secTime + '秒');
                            let tdData = timeArr.join('');
                            // typeof v === 'object' && v['render'] !== undefined && (tdData = v.render(data[k], data));
                            // tdList.push(<td {...style} {...rowspan} key={k} data-key={k}>{tdData}</td>);
                            // 若用户配置了render，则将转换之后的数据给用户的render
                            newText = this.columns[item].render
                                ? UF.init(this.columns[item].render(tdData, record, index))
                                : tdData;
                            return newText;
                            break;
                        case 'JSON':
                            let json = JSON.stringify(text, null, 2);
                            let html = this.syntaxHighlight(json);
                            let content = this.createMarkup(html);
                            return <Popover content={<pre className="json" dangerouslySetInnerHTML={content}></pre>}>
                                    <pre className="json" dangerouslySetInnerHTML={content}></pre>
                                </Popover>;
                            break;
                        case 'html':
                            return <span dangerouslySetInnerHTML={this.createMarkup(text)}></span>;
                            break;
                        // 默认将格式进行一下转换然后输出
                        default:
                            text = this.getKeyDataOfObject(text);
                            newText = this.columns[item].render
                                ? UF.init(this.columns[item].render(text, record, index))
                                : text;
                            return newText;
                            break;
                    }
                };
            }
            antdColumnConfig.push(defaultColumn);
        }
        return antdColumnConfig;
    }
    onSelectChange(selectedRowKeys, selectedRows) {
        this.setState({selectedRowKeys: selectedRowKeys});
    }
    selectAllData() {
        let displayData = this.state.data;
        let selectedRowKeys = [];
        let selectedRows = [];
        let rowKey = this.config.rowKey || 'key';
        // 只有选择形式为复选框时才能进行全选
        selectedRows = displayData.filter(record => {
            if (this.rowSelection.disabledRow && this.rowSelection.disabledRow(record)) {
                // 当满足不可选条件时，不可以进行选择
                return false;
            }
            else {
                selectedRowKeys.push(record[rowKey]);
                return true;
            }
        });
        // 通过组件的onChange函数完成全选
        this.rowOnChange(selectedRowKeys, selectedRows);
    }
    clearSelect() {
        this.rowOnChange([], []);
    }
    // 行change时触发此函数
    rowOnChange(selectedRowKeys, selectedRows) {
        this.setState({selectedRowKeys: selectedRowKeys});
        if (this.rowSelection.onChange) {
            this.rowSelection.onChange(selectedRowKeys, selectedRows);
        }
    }
    rowOnSelect(record, selected, selectedRows) {
        if (this.rowSelection.onSelect) {
            this.rowSelection.onSelect(record, selected, selectedRows);
        }
    }
    // 当页全选
    rowOnSelectAll(selected, selectedRows, changeRows) {
        if (this.rowSelection.onSelectAll) {
            this.rowSelection.onSelectAll(selected, selectedRows, changeRows);
        }
    }
    rowOnSelectInvert(selectedRows) {
        if (this.rowSelection.onSelectInvert) {
            this.rowSelection.onSelectInvert(selectedRows);
        }
    }
    renderRowSelection() {
        if (!this.rowSelection) {
            return null;
        }
        let rowSelection = {
            type: 'checkbox'
        };
        getNeedObject(rowSelection, this.rowSelection);
        // 对行进行受控选择
        rowSelection.selectedRowKeys = this.state.selectedRowKeys;
        if (this.rowSelection.disabledRow) {
            rowSelection.getCheckboxProps = record => {
                return {disabled: this.rowSelection.disabledRow(record)};
            };
        }
        // 任何一行的选择与否都会触发改方法
        rowSelection.onChange = this.rowOnChange.bind(this);
        rowSelection.onSelect = this.rowOnSelect.bind(this);
        // 全选当前页
        rowSelection.onSelectAll = this.rowOnSelectAll.bind(this);
        // 反选当页
        rowSelection.onSelectInvert = this.rowOnSelectInvert.bind(this);
        if (this.rowSelection.selections) {
            // 在自定义选择项中增加全选功能
            rowSelection.selections = [
                {
                    key: 'uf-table-select-all',
                    text: '全选',
                    onSelect: this.selectAllData.bind(this)
                }
            ];
            if (Utils.typeof(this.rowSelection.selections, 'array')) {
                rowSelection.selections.push(this.rowSelection.selections);
            }
        }

        return rowSelection;
    }
    renderPagination() {
        if (!this.pagination) {
            return false;
        }
        let pagination = {
            pageSize: null,
            showSizeChanger: false,
            pageSizeOptions: null,
            showQuickJumper: false,
            size: '',
            simple: false,
            showTotal: null
        };
        getNeedObject(pagination, this.pagination);

        pagination.current = this.state.current;
        pagination.total = this.state.total;
        pagination.onShowSizeChange = this.onShowSizeChange.bind(this);
        pagination.onChange = (page, pageSize) => {
            this.setState({current: page});
            if (this.pagination.pageType === 'server') {
                this.getData(page);
            }
        };
        return pagination;
    }
    render() {
        return <div className={'uf-table ' + (this.state.fullScreen ? ' umpui-fullscreen' : '')}>
            <Table {...this.state.antdConfig}
                title={this.titleGenerate()}
                dataSource={this.state.data}
                columns={this.renderColumns()}
                rowSelection={this.renderRowSelection()}
                // rowSelection={null}
                pagination={this.renderPagination()}
                loading={this.state.loading} />
            {this.state.showSetTagsModal && <Modal title="展示字段" visible={this.state.showSetTagsModal}
                onOk={this.setTableColumns.bind(this)}
                onCancel={this.cancleSetTableColumns.bind(this)}>
                {this.generateColumnsCheckboxGroup()}
            </Modal>}
        </div>;
    }
}
