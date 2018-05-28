/**
 * @file 表格组件:antd Table的基础上增加了原来uf Table中的一些功能
 * @author susisi@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Input, Table, Button, Icon, Dropdown, Menu, Modal, Checkbox, Popover, Popconfirm, message} from 'antd';
// 扩展功能 - 增删改查等
import Export from 'src/export';
import Crud from './Crud.js';
import Title from './Title.js';
import EditCell from './Edit.js';

const CheckboxGroup = Checkbox.Group;
// 从obg2中获取obj1所需要的一些属性
const getNeedObject = (obj1, obj2) => {
    for (let i in obj1) {
        if (!!obj2[i]) {
            obj1[i] = obj2[i];
        }
    }
};

export default class NewTable extends BaseComponent {
    // 以下是函数定义
    constructor(props) {
        super(props);
        // 暴露给用户使用的函数
        this._openApi.push(
            'reload', 'refresh', 'export',
            'showCrud',
            'getSelected', 'getSelectedKeys', 'selectAll', 'clearSelect',
            // 纯粹为了 bind this
            'toggleFullScreen', 'refreshTable', 'toShowAllTags', '_handleExport', 'handleAction'
        );
        this.__init();
        this.state = {
            antdConfig: null,
            // 数据默认为空
            completeData: [],
            // 单列过滤
            filterInputValue: '',
            // 全屏展示与否
            fullScreen: false,
            // 是否展示全部字段
            showAllTags: false,
            // 加载状态
            loading: false,
            selectedRowKeys: []
        };
        // 保存选中的行数据
        this.selectedRows = [];
        // 用于存储多列的筛选条件
        this.filterConditions = {};
        // 请求序号，当执行新请求时，之前的未返回数据的请求则废弃，通过index值是否相等判断
        this.requerstIndex = 0;
        this.initTable(true);
    }
    componentWillReceiveProps(nextProps) {
        // 即使props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
        if (this.__shouldUpdate(this.props, nextProps)) {
            this.initTable();
            // 只有自动获取数据开启时，参数变化才会导致数据刷新；否则需用户手动调用 loadData() 函数拉取数据
            if (this.__filtered.source.autoLoad) {
                // 置为第一页
                this.getData(1);
            }
        }
    }
    componentWillUnmount() {
        // 组件删除时，请求返回的数据无效
        this.requerstIndex = null;
    }
    initTable(isFirst) {
        let objProps = this.__props;
        // 兼容参数处理，兼容params的两种用法（写source外面也可以）
        this.__filtered.source.params = objProps.params;
        let state = {};
        // TODO: rowKey 为函数时，下面很多地方不适用
        this.rowKey = objProps.rowKey || 'id';
        // 注意：引用类型，this.pagination 和 this.__props.pagination 是同一个东西
        this.pagination = objProps.pagination;
        // 是否为后端分页
        this.serverPaging = this.__filtered.source.url && (this.pagination && this.pagination.pageType === 'server');
        // 列配置
        this.columns = objProps.columns;
        let propsData = objProps.data;
        // 行配置
        this.rowSelection = null;
        if (!!objProps.rowSelection) {
            this.rowSelection = objProps.rowSelection;
            if (this.rowSelection.selectedRowKeys) {
                state.selectedRowKeys = this.rowSelection.selectedRowKeys;
            }
        }
        // 判断数据是disable。如果没定义，默认处理逻辑为数据中是否有disable/disabled === true
        // this.disabledRow = this.rowSelection && (this.rowSelection.disabledRow !== undefined)
        //         ? this.rowSelection.disabledRow
        //         : v=>v.disable || v.disabled;
        let defaultCif = {
            size: 'default',
            rowKey: 'id',
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
        getNeedObject(defaultCif, this.__props);
        // 关于表头
        if (!!objProps.title) {
            let titleConfig = objProps.title;
            // 如果是字符串 或者 非对象（组件配置，可以是数组）或者 单一组件配置
            if (Utils.typeof(titleConfig, 'string')) {
                titleConfig = {text: titleConfig};
            }
            titleConfig.showText = titleConfig.showText !== undefined ? titleConfig.showText : true;
            this.title = titleConfig;
        } else {
            this.title = null;
        }
        // 关于异步操作
        if (propsData) {
            state.completeData = propsData;
            if (this.pagination) {
                this.pagination.total = propsData.length
            }
        }
        // 关于行样式与不可选相关联，不可选时至为灰色
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
                } else {
                    return customRowClassName;
                }
            };
        }
        this.antdConfig = defaultCif;
        state.antdConfig = this.antdConfig;
        if (isFirst) {
            this.state = Object.assign({}, this.state, state);
        } else {
            this.setState(state);
        }
    }
    componentDidMount() {
        // 可以通过给 source.autoLoad 设置 false 来阻止自动加载数据
        if (this.__filtered.source.autoLoad) {
            this.getData();
        }
    }


    /* 供用户调用接口 ***********************************************************************/
    // 手动拉取数据
    loadData() {
        this.getData();
    }
    // 刷新表格
    refresh() {
        this.refreshTable();
    }
    // 展示增删改查等弹框，具体实现逻辑见 Crud.js
    showCrud(...params) {
        this.crud && this.crud.showCrud(...params);
    }
    // 获取当前全部选中行的数据
    getSelected() {
        return this.selectedRows;
    }
    // 获取当前全部选中行的key
    getSelectedKeys() {
        return this.state.selectedRowKeys;
    }
    // 全选
    selectAll() {
        this._selectAllData();
    }
    clearSelect() {
        this.rowOnChange([], []);
    }
    // 导出数据
    export() {
        this.exportRef && this.exportRef.export();
    }

    /* 内部函数 ****************************************************************************/
    _handleExport() {
        this.export();
    }
    // 获取要下载导出数据的配置
    _getExportConfig() {
        let columns = this.columns;
        let headers = [];
        for (let i in columns) {
            // 只导出展示的字段
            if (columns[i].display !== false || (this.titleRef && this.titleRef.state.showAllTags)) {
                headers.push({
                    key: columns[i].dataIndex || columns[i].key,
                    title: columns[i].title
                });
            }
        }
        // 如果为后端分页，则传递 source 配置
        if (this.serverPaging) {
            return {
                headers: headers,
                source: this.__filtered.source,
                total: this.pagination && this.pagination.total || 0
            };
        }
        // 否则传递 data
        let data = this.__props.data || [];
        return {
            headers: headers,
            data: data,
            total: data.length
        };
    }
    // 对编辑状态的表格进行数据提交调用的函数
    _cellSubmit(key, dataIndex, value) {
        let dataSource = [...this.__props.data];
        let dataResult = dataSource.map(item => {
            if (item[this.rowKey] === key) {
                item[dataIndex] = value;
            }
            return item;
        });
        // 使用UF的修改数据的方式
        this.__setProps({data: dataResult});
    }
    // 覆盖原生获取异步数据的函数
    _handleAsyncData() {}
    // 异步获取数据
    getData(pageNum) {
        let {url, params} = this.__filtered.source;
        if (!url) {
            return;
        }
        // 如果有pageNum，则置为对应页；否则，pageNum等于当前页
        if (pageNum) {
            this.pagination.current = pageNum;
        } else {
            pageNum = this.pagination.current || 1;
        }
        if (this.pagination.pageType === 'server') {
            params = Object.assign({}, params, {
                page: pageNum,
                size: this.pagination.pageSize,
            });
        }
        // 当前请求的标号
        // 快速多次相同的请求会被合并到第一个（ajax中实现）
        let index = Utils.hash(params);
        this.requerstIndex = index;
        // 调用通用source获取数据逻辑
        this.__getSourceData({
            params: params,
            success: (data, res) => {
                if (index !== this.requerstIndex) {
                    return;
                }
                let displayData = data || [];
                if (this.pagination.pageType === 'server') {
                    displayData = displayData.slice(0, this.pagination.pageSize);
                }
                this.pagination.total = +(res.total || res.count || data.length);
                this.__setProps({data: displayData}, false);
                this.setState({completeData: displayData});
                this.onRefreshData(data);
            },
            onchange: loading => {
                if (index !== this.requerstIndex) {
                    return;
                }
                this.setState({loading});
            }
        });
    }
    // 数据刷新
    onRefreshData(data) {
        this.forceUpdate();
    }
    // 刷新表格
    refreshTable() {
        // 清空某些控制状态
        this.clearState();
        this.__setProps({data: this.state.completeData}, false);
        if (this.__filtered.source.url) {
            this.getData();
        } else {
            this.onRefreshData(this.state.completeData);
        }
    }
    // 清空某些控制状态
    clearState() {
        this.setState({
            filterInputValue: '',
            selectedRowKeys: []
        });
        this.filterConditions = {};
        this.titleRef && this.titleRef.clearState();
        this.forceUpdate();
    }
    // 全屏或退出全屏
    toggleFullScreen() {
        this.setState({
            fullScreen: !this.state.fullScreen
        });
    }
    // 展示全部字段
    toShowAllTags() {
        this.setState({
            showAllTags: !this.state.showAllTags
        });
    }
    // 通过Pagination组建设置展示多少条
    onShowSizeChange(current, size) {
        this.pagination.pageSize = parseInt(size, 10);
        this.forceUpdate();
        if (this.pagination.onShowSizeChange) {
            this.pagination.onShowSizeChange(current, size);
        }
    }
    // 过滤
    onFilterData() {
        let data = this.state.completeData;
        // 对数据进行单列过滤
        if (!Utils.empty(this.filterConditions)) {
            data = this.filterInputSearch(data);
        }
        this.__setProps({data});
    }
    // 单列数据搜索
    filterChange(filterProperty, e) {
        // this.filterConditions用于记录多个列的同时筛选条件
        const searchText = e.target.value;
        if (!!searchText && searchText.length > 0) {
            this.filterConditions[filterProperty] = searchText;
        } else {
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
    _selectAllData() {
        let displayData = this.__props.data;
        let selectedRowKeys = [];
        let selectedRows = [];
        let rowKey = this.__props.rowKey;
        // 只有选择形式为复选框时才能进行全选
        selectedRows = displayData.filter(record => {
            if (this.rowSelection.disabledRow && this.rowSelection.disabledRow(record)) {
                // 当满足不可选条件时，不可以进行选择
                return false;
            } else {
                selectedRowKeys.push(record[rowKey]);
                return true;
            }
        });
        // 通过组件的onChange函数完成全选
        this.rowOnChange(selectedRowKeys, selectedRows);
    }
    // 行change时触发此函数
    rowOnChange(selectedRowKeys, selectedRows) {
        this.selectedRows = selectedRows;
        this.setState({
            selectedRowKeys: selectedRowKeys
        });
        if (this.rowSelection.onChange) {
            this.rowSelection.onChange(selectedRowKeys, selectedRows);
        }
    }
    onPageChange(page) {
        this.pagination.current = page;
        if (this.pagination.pageType === 'server') {
            this.getData(page);
        }
        this.forceUpdate();
    }
    // 从一个对象中获取需要用于过滤的关键字
    _getKeyDataOfObject(obj) {
        let val = '';
        // 如果传入的是一个数组，则递归的遍历这个数组，拿出数组中各个对象的关键字
        if (obj instanceof Array) {
            let tArr = [];
            for (let t of obj) {
                tArr.push(this._getKeyDataOfObject(t));
            }
            val = tArr.join('\n');
        } else if (obj instanceof Object) {
            // 如果字段是个对象，则优先获取Title字段，否则获取该对象的第一个字段
            if ('title' in obj) {
                val = obj['title'];
            } else {
                for (let i in obj) {
                    val = obj[i];
                    break;
                }
            }
        } else if (obj) {
            val = obj.toString ? obj.toString() : obj;
        }
        return val;
    }
    _syntaxHighlight(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        let reg = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g;
        return json.replace(reg, match=>{
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    try {
                        let type = JSON.parse(match);
                        if (typeof(JSON.parse(type)) === 'object') {
                            return this._syntaxHighlight(JSON.parse(type));
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
    // _operation 为一个特殊属性，此属性中可以使用特定的action，关联table的crud等功能
    handleAction(config, record) {
        let arr = config;
        if (!Utils.typeof(arr, 'array')) {
            arr = [config];
        }
        for (let v of arr) {
            // action的值与crud中的配置的key一一对应
            if (v.action) {
                v.onClick = e=>{
                    e && e.preventDefault();
                    e && e.stopPropagation();
                    this.showCrud(v.action, record);
                }
            }
        }
        return config;
    }
    renderColumns() {
        // 列功能相关
        let antdColumnConfig = [];
        for (let i in this.columns) {
            let item = this.columns[i];
            if (!this.state.showAllTags && item.display === false) {
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

            getNeedObject(defaultColumn, item);
            if (defaultColumn.dataIndex === '_operation') {
                defaultColumn.className += ' uf-operation';
            }
            // 用户配置的render是一个uf组建配置，在此转为dom
            if (!!item.render) {
                defaultColumn.render = (text, record, index) => {
                    // 配置中的render返回的是配置，配置再解析后才是真正的元素
                    let config = item.render(text, record, index);
                    // _operation 为一个特殊属性，此属性中可以使用特定的action，关联table的crud等功能
                    if (defaultColumn.dataIndex === '_operation') {
                        config = this.handleAction(config, record);
                    }
                    // 根据是否可编辑状态来判断是否包裹编辑组件
                    return  this.__analysis(config);
                };
            }
            // 将用户配置的单列筛选选项转换成antd的配置
            if (!!item.filter) {
                let filter = item.filter;
                if (!filter.type) {
                    // 若没有配置type则直接返回
                    return;
                }
                let dataIndex = item.dataIndex;
                if (filter.type === 'checkbox' || filter.type === 'radio') {
                    // 多选框或单选框筛选
                    let filterObj = {
                        options: null,
                        filterMultiple: false,
                        onFilter: null
                    };
                    if (!!filter.options) {
                        // 用户配置了options,则将用户配置进行转换
                        filterObj.filters = filter.options.map(o => {
                            return {text: o, value: o};
                        });
                    }
                    else {
                        // 用户没有配置options，则将该字段的所有可能值展示出来
                        filterObj.filters = this.getAllFilterValue(dataIndex);
                    }
                    filterObj.filterMultiple = filter.type === 'checkbox' ? true : false;
                    filterObj.onFilter = (value, record) => {
                        return record[item.dataIndex].indexOf(value) !== -1;
                    };
                    defaultColumn = Object.assign({}, defaultColumn, filterObj);
                }
                else if (filter.type === 'input') {
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
            if (!!item.ellipsis) {
                defaultColumn.render = (text, record, index) => {
                    let newText = item.render
                        ? this.__analysis(item.render(text, record, index))
                        : text;
                    let returnText = (
                        <Popover content={newText}>
                            <span className="uf-table-td-ellipsis">{newText}</span>
                        </Popover>
                    );
                    // 根据是否可编辑状态来判断是否包裹编辑组件
                    return returnText;
                };
            }
            // 对特殊格式进行展示处理，包括html格式，json格式，duration格式
            if (item.textType) {
                let textType = item.textType.toString().toLowerCase();
                // let elliClass = v['ellipsis'] ? ' ellipsis' : '';
                // style.className += elliClass;
                defaultColumn.render = (text, record, index) => {
                    let newText = text;
                    switch (textType) {
                        case 'duration': {
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
                            // 若用户配置了render，则将转换之后的数据给用户的render
                            newText = item.render
                                ? this.__analysis(item.render(tdData, record, index))
                                : tdData;
                            break;
                        }
                        case 'json': {
                            // 会出现重复json字符串编码现象,加入类型判断
                            let json = typeof text === 'string' ? text : JSON.stringify(text, null, 2);
                            if (text && json !== '""') {
                                let html = this._syntaxHighlight(json);
                                newText = <Popover content={<pre className="json" dangerouslySetInnerHTML={{__html: html}}></pre>}>
                                        <pre className="json" dangerouslySetInnerHTML={{__html: html}}></pre>
                                    </Popover>;
                            }
                            break;
                        }
                        case 'html':
                            newText = <span dangerouslySetInnerHTML={{__html: text}}></span>;
                            break;
                        // 默认将格式进行一下转换然后输出
                        default:
                            text = this._getKeyDataOfObject(text);
                            newText = item.render
                                ? this.__analysis(item.render(text, record, index))
                                : text;
                            break;
                    }
                    return newText;
                };
            }
            // 根据是否可编辑状态来判断是否包裹编辑组件
            if (item.editable) {
                // 声明获取前面设置过的配置
                let oRender = defaultColumn.render;
                defaultColumn.render = (text, record, index) => {
                    let displayStr = !oRender ? text : oRender(text, record, index);
                    let editableConf = item.editable;
                    // 支持配置为一个函数
                    if (Utils.typeof(editableConf, 'function')) {
                        editableConf = editableConf(text, record, index);
                    }
                    // 如果editableConf返回为false，则直接返回原render
                    if (!editableConf) {
                        return displayStr;
                    }
                    return <EditCell parent = {this}
                            value={text}
                            columnChild={displayStr}
                            editConf = {editableConf}
                            api = {editableConf.api}
                            cellSubmit={this._cellSubmit.bind(this, record[this.rowKey], defaultColumn.dataIndex)}
                        />;
                };
            }
            antdColumnConfig.push(defaultColumn);
        }
        return antdColumnConfig;
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
        rowSelection.onSelect = this.rowSelection.onSelect;
        rowSelection.onSelectAll = this.rowSelection.onSelectAll;
        rowSelection.onSelectInvert = this.rowSelection.onSelectInvert;
        if (this.rowSelection.selections) {
            // 在自定义选择项中增加全选功能
            rowSelection.selections = [
                {
                    key: 'uf-table-select-all',
                    text: '全选',
                    onSelect: this._selectAllData.bind(this)
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
            showTotal: total => {
                return <span>{'共' + total + '条数据'}</span>;
            },
            current: 1,
            total: 0,
            onShowSizeChange: this.onShowSizeChange.bind(this),
            onChange: this.onPageChange.bind(this)
        };
        getNeedObject(pagination, this.pagination);
        return pagination;
    }
    render() {
        let className = 'uf-table ';
        className += this.state.fullScreen ? 'uf-fullscreen ' : '';
        className += this.__props.className || '';
        // 额外加一个mini类型的size
        let size = this.state.antdConfig.size;
        if (size === 'mini') {
            className += ' uf-table-mini';
            size = 'small';
        }
        return <div className={className} style={this.__props.style}>
            <Table {...this.state.antdConfig} size={size}
                title={this.title && (()=>(
                    <Title parent={this} ref={ele=>(this.titleRef = ele)} config={this.title}/>
                ))}
                dataSource={this.__props.data}
                columns={this.renderColumns()}
                rowSelection={this.renderRowSelection()}
                pagination={this.renderPagination()}
                loading={this.state.loading} />
            {/* 导出功能 */}
            <Export ref={ele=>(this.exportRef = ele)} {...this._getExportConfig()} />
            {/* 增删改查 */}
            {this.__props.crud && (<Crud parent={this} ref={ele=>(this.crud = ele)}
                config={this.__props.crud}/>
            )}
        </div>;
    }
}
