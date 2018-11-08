/**
 * @file 表格组件:antd Table的基础上增加了原来uf Table中的一些功能
 * @author susisi@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Table, Popover, Tooltip, Icon} from 'antd';
// 扩展功能 - 增删改查等
import Export from 'src/export';
import Crud from './Crud.js';
import Title from './Title.js';
import Edit from './Edit.js';
import Enum from './Enum.js';
import {Filter} from './Filters.js';

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
        this._injectEvent.push('onRowDoubleClick', 'onChange');
        // 暴露给用户使用的函数
        this._openApi.push(
            'reload', 'refresh', 'export',
            'showCrud',
            'getSelected', 'getSelectedKeys', 'selectAll', 'clearSelect',
            'getValues', 'getDisplayValues',
            // 纯粹为了 bind this
            'toggleFullScreen', 'refreshTable', 'toShowAllTags', '_handleExport', 'handleAction'
        );
        this.__init();
        this._showLoading = this.__filtered.source.showLoading === undefined || this.__filtered.source.showLoading;
        this.state = {
            antdConfig: null,
            // 数据默认为空
            completeData: [],
            // 全屏展示与否
            fullScreen: false,
            // 是否展示全部字段
            showAllTags: false,
            // 加载状态
            loading: false,
            selectedRowKeys: [],
            expandedRowKeys: []
        };
        // 保存选中的行数据
        this.selectedRows = [];
        // 请求序号，当执行新请求时，之前的未返回数据的请求则废弃，通过index值是否相等判断
        this.requestIndex = null;
        this.filter = new Filter(this);
        this.enum = new Enum({
            execAjax: this.__execAjax.bind(this),
            continue: this.componentDidMount.bind(this),
            getConf: this.__getConf.bind(this)
        });
        this.initTable(true);
    }
    componentWillReceiveProps(nextProps) {
        // 即使props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
        if (this.__shouldUpdate(this.props, nextProps)) {
            this.initTable();
        }
    }
    componentWillUnmount() {
        // 组件删除时，请求返回的数据无效
        this.requestIndex = null;
        this.expandThEle && this.expandThEle.removeEventListener('click', this.expandAllEventListener.bind(this));
    }
    _afterSetProps(changeProps) {
        super._afterSetProps();
        // 当只改了source.params参数，未更改params，则将source.params更新的值覆盖到params上
        if (!changeProps.params && changeProps.source && changeProps.source.params) {
            this.__props.params = Utils.merge(this.__props.params, changeProps.source.params);
        }
    }
    // 为了兼容params的两种用法。
    // 需使用params的地方，直接调用此函数
    // 参数逻辑为，params为直接覆盖，source.params为增量更新；params > source.params
    getSourceParams() {
        return Utils.merge({}, this.__filtered.source.params, this.__props.params)
    }
    initTable(isFirst) {
        let objProps = this.__props;
        // isFirst && (this.oriSourceParams = Utils.clone(this.__filtered.source.params));
        // 兼容参数处理，兼容params的两种用法（写source外面也可以）
        // if (objProps.params) {
        //     this.__filtered.source.params = Object.assign({}, this.oriSourceParams, objProps.params);
        // }
        let state = {};
        // TODO: rowKey 为函数时，下面很多地方不适用
        this.rowKey = objProps.rowKey || 'id';
        this.rowKeyFunc = null;
        // 如果rowKey为一个函数，则把函数转存到rowKeyFunc中，rowKey置为_uniqueRowKey
        if (Utils.typeof(this.rowKey, 'function')) {
            this.rowKeyFunc = this.rowKey;
            this.rowKey = '_uniqueRowKey';
        }
        // 注意：引用类型，this.pagination 和 this.__props.pagination 基本上是同一个东西
        this.pagination = objProps.pagination || {};
        // 是否为后端分页
        this.serverPaging = this.__filtered.source.url && this.pagination.pageType === 'server';
        // 列配置
        this.columns = objProps.columns;
        // 根据列初始化枚举类
        isFirst && this.enum.init(this.columns);
        let propsData = objProps.data;
        propsData = this.handleRowKeyFunc(propsData);
        // 行配置
        this.rowSelection = null;
        if (!!objProps.rowSelection) {
            this.rowSelection = objProps.rowSelection;
            if (this.rowSelection.selectedRowKeys) {
                state.selectedRowKeys = this.rowSelection.selectedRowKeys;
            }
        }
        // 展开相关
        if (!!objProps.expandedRowKeys) {
            state.expandedRowKeys = objProps.expandedRowKeys;
        }
        let defaultCif = {
            size: 'default',
            rowKey: this.rowKey,
            rowClassName: () => {},
            expandedRowRender: null,
            defaultExpandedRowKeys: [],
            // expandedRowKeys: [], // 配置之后会变为受控组件
            defaultExpandAllRows: false,
            locale: {filterTitle: '筛选', filterConfirm: '确定', filterReset: '重置', emptyText: '暂无数据'},
            indentSize: 15,
            bordered: false,
            showHeader: true,
            footer: null,
            scroll: {},
            onChange: null,
            onExpand: () => {},
            onExpandedRowsChange: () => {},
            onRowClick: () => {},
            onRowDoubleClick: () => {},
            onRowMouseEnter: () => {},
            onRowMouseLeave: () => {}
        };
        // 为了层级清晰，把扩展行相关的属性聚合到了expended属性中。此处兼容放属性里和属性外两种用法
        if (this.__props.expanded) {
            getNeedObject(defaultCif, this.__props.expanded);
        }
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
        // this.header = this.handleHeader(objProps.header);
        // 关于异步操作
        if (propsData) {
            state.completeData = propsData;
            this.pagination.total = this.pagination.total || propsData.length;
            // 如果传入新的data，则需刷新total
            if (!this.__prevProps.data || this.__prevProps.data.length !== propsData.length) {
                this.pagination.total = propsData.length;
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
    // 双击行进行编辑功能
    _onRowDoubleClick(record) {
        if (this.__props.doubleClickEdit) {
            this.showCrud('edit', record);
        }
    }
    // 分页、排序、筛选变化时触发
    _onChange(page, filter, sorter) {
        // filter发生变化时，如果是后端分页进行处理
        if (this.serverPaging && Utils.isChange(filter, this.filterParams)) {
            let oldFilterParams = this.filterParams || {};
            this.filterParams = filter;
            this.filter.handleChange(filter, oldFilterParams);
        }
    }
    componentDidMount() {
        // for enum, 无论如何都刷新一次组件
        this.setState({loading: this.enum.loading && this._showLoading});
        // 请求数据见公共的BaseComponent的_componentDidMount逻辑
        // code
        // 添加展开全部功能按钮
        this.handleExpandAllIcon();
    }

    /* 供用户调用接口 ***********************************************************************/
    // 手动拉取数据
    reload() {
        this.getData();
    }
    // 刷新表格
    refresh(page) {
        this.refreshTable(page);
    }
    // 展示增删改查等弹框，具体实现逻辑见 Crud.js
    showCrud(...params) {
        this.crudRef && this.crudRef.showCrud(...params);
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
    // 所有分页全部选中
    selectAllPage() {
        this._selectAllData(true);
    }
    clearSelect() {
        this.rowOnChange([], []);
    }
    // 导出数据
    export() {
        this.exportRef && this.exportRef.export();
    }
    getValues() {
        return Utils.map(Utils.clone(this.__props.data || []), item => {
            for (let i in item) {
                delete item[`${i}.fyi`];
            }
            return item;
        });
    }
    // 获取展示内容
    getDisplayValues() {
        return Utils.clone(this.__props.data);
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
                mode: 'asyn',
                headers: headers,
                source: {
                    ...this.__filtered.source,
                    params: this.getSourceParams()
                },
                total: this.pagination.total || 0
            };
        }
        // 否则传递 data
        let data = this.__props.data || [];
        return {
            mode: 'sync',
            headers: headers,
            data: data,
            total: data.length
        };
    }
    // 执行用户自定义的 rowKey 函数，生成唯一key
    handleRowKeyFunc(data) {
        if (this.rowKeyFunc) {
            data.forEach(v => {
                v[this.rowKey] = this.rowKeyFunc(v);
            });
        }
        return data;
    }
    // 添加展开全部功能按钮
    // 因为原始组件未提供相应API，所以此处通过操作真是dom上的className实现
    handleExpandAllIcon() {
        if (this.__props.expandedRowRender || this.__props.expanded) {
            // 需操作真是dom
            let collection = ReactDOM.findDOMNode(this).getElementsByClassName('ant-table-expand-icon-th');
            this.expandThEle = collection[0];
            // 可能会进来多次，这里判断当没oriClassName才执行
            if (this.expandThEle && !this.expandThEle.oriClassName) {
                this.expandThEle.oriClassName = this.expandThEle.oriClassName || this.expandThEle.className;
                // 切换图标
                this.expandThEle.toggleClassName = () => {
                    if (this.expandThEle.className.indexOf('uf-table-expand-all') === -1) {
                        this.expandThEle.className = this.expandThEle.oriClassName + ' uf-table-expand-all';
                        this.expandThEle.isExpand = false;
                    } else {
                        this.expandThEle.className = this.expandThEle.oriClassName + ' uf-table-fold-all';
                        this.expandThEle.isExpand = true;
                    }
                };
                this.expandThEle.toggleClassName();
                this.expandThEle.addEventListener('click', this.expandAllEventListener.bind(this));
            }
        }
    }
    expandAllEventListener() {
        this.expandThEle && this.expandThEle.toggleClassName();
        if (this.expandThEle.isExpand) {
            let obj = this.getAllCanSelectRows();
            this.onExpandedRowsChange(obj.rowKeys);
        } else {
            this.onExpandedRowsChange([]);
        }
    }
    // 行展开收起相关的两个方法
    onExpandedRowsChange(expandedRows) {
        this.setState({
            expandedRowKeys: expandedRows
        });
        this.antdConfig.onExpandedRowsChange(expandedRows);
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
    _handleAsyncData() {
        Utils.defer(() => {
            if (!this.enum.loading) {
                this.getData(1);
                // 清空过滤状态
                // this.refreshTable(1);
            }
        });
    }
    // 异步获取数据
    getData(pageNum) {
        let url = this.__filtered.source.url;
        let params = this.getSourceParams();
        if (!url) {
            return;
        }
        // 如果有pageNum，则置为对应页；否则，pageNum等于当前页
        if (pageNum) {
            this.pagination.current = pageNum;
        } else {
            pageNum = this.pagination.current || 1;
        }
        // 可以通过 paramIndex 属性更改默认传递的page和size参数
        let paramIndex = this.pagination.paramIndex || {};
        let {page = 'page', size = 'size'} = paramIndex;
        if (this.pagination.pageType === 'server') {
            params = Object.assign({}, params, {
                [page]: pageNum,
                [size]: this.pagination.pageSize
            });
        }
        // 当前请求的标号
        // 快速多次相同的请求会被合并到第一个（ajax中实现）
        let index = Utils.hash(params);
        this.requestIndex = index;
        // 调用通用source获取数据逻辑
        this.__getSourceData({
            params: params,
            success: (data, res) => {
                if (index !== this.requestIndex) {
                    return;
                }
                let displayData = data || [];
                // 生成唯一key
                displayData = this.handleRowKeyFunc(displayData);
                if (this.pagination.pageType === 'server') {
                    displayData = displayData.slice(0, this.pagination.pageSize);
                }
                // 实时翻译
                // 返回值为promise对象
                let promise = this.enum.realtimeTrans(displayData);
                promise.then(()=>{
                    this.pagination.total = +(res.total || res.count || data.length);
                    this.__setProps({data: displayData}, false);
                    this.setState({completeData: displayData});
                    this.onRefreshData();
                });
            },
            onchange: loading => {
                if (index !== this.requestIndex) {
                    return;
                }
                this.setState({loading: loading && this._showLoading});
            },
            error: res => {
                this.pagination.total = 0;
                this.__setProps({data: []});
            }
        });
    }
    // 数据刷新
    onRefreshData() {
        this.forceUpdate();
    }
    // 刷新表格
    refreshTable(page) {
        // 清空某些控制状态，例如过滤
        this.clearState();
        this.__setProps({data: this.state.completeData}, false);
        if (this.__filtered.source.url) {
            this.getData(page);
        } else {
            this.onRefreshData(this.state.completeData);
        }
    }
    // 清空某些控制状态
    // TODO: 清空的时机待考量，特别针对filter的情况，当前处理不太准确
    clearState() {
        this.setState({
            selectedRowKeys: []
        });
        this.filter && this.filter.clearState();
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
    getAllCanSelectRows(isAllPage = false) {
        let displayData = isAllPage ? this.state.completeData : this.__props.data;
        let rowKey = this.rowKey;
        let selectedRowKeys = [];
        let selectedRows = [];
        // 只有选择形式为复选框时才能进行全选
        selectedRows = displayData.filter(record => {
            if (this.rowSelection && this.rowSelection.disabledRow && this.rowSelection.disabledRow(record)) {
                // 当满足不可选条件时，不可以进行选择
                return false;
            } else {
                selectedRowKeys.push(record[rowKey]);
                return true;
            }
        });
        return {
            rows: selectedRows,
            rowKeys: selectedRowKeys
        };
    }
    _selectAllData(isAllPage) {
        let {rows, rowKeys} = this.getAllCanSelectRows(isAllPage);
        // 通过组件的onChange函数完成全选
        this.rowOnChange(rowKeys, rows);
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
            Utils.defer(() => this.getData(page));
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
        return json.replace(reg, match => {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    try {
                        let type = JSON.parse(match);
                        if (typeof (JSON.parse(type)) === 'object') {
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
    handleAction(oConfig, record) {
        let config = Utils.clone(oConfig);
        let arr = config;
        if (!Utils.typeof(arr, 'array')) {
            arr = [config];
        }
        for (let v of arr) {
            // action的值与crud中的配置的key一一对应
            if (v.action && !v.control) {
                // BaseComponet不接受更新函数，使用control作为临时解决方案
                v.control = {
                    type: 'bind',
                    trigger: 'onClick',
                    target: this.showCrud,
                    params: [v.action, record]
                };
            }
        }
        return config;
    }
    renderColumns() {
        // 列功能相关
        let antdColumnConfig = [];
        for (let i in this.columns) {
            let item = this.columns[i];
            // 如果列为枚举类型，则进行枚举转换
            if (item.enum) {
                item = this.enum.handleColumn(item);
            }
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
                sorter: null,
                colSpan: null,
                width: null,
                className: '',
                fixed: false,
                // 当配置了sorter时，默认自动设置sortOrder为正序
                sortOrder: !!item.sorter ? 'ascend' : false,
                onCellClick: null
            };

            getNeedObject(defaultColumn, item);
            if (defaultColumn.dataIndex === '_operation') {
                defaultColumn.className += ' uf-operation';
            }
            // 自定义样式参数
            if (item.minWidth || item.style) {
                let style = item.style || {};
                let orender = item.render;
                item.render = (v, row, ...params) => {
                    if (Utils.typeof(style, 'function')) {
                        style = style(v, row);
                    }
                    if (item.minWidth) {
                        Object.assign(style, {minWidth: item.minWidth});
                    }
                    return {
                        type: 'div',
                        style: style,
                        content: orender ? orender(v, row, ...params) : v
                    };
                };
            }
            // 用户配置的render是一个uf组件配置，在此转为dom
            if (!!item.render) {
                defaultColumn.render = (text, record, index) => {
                    // 配置中的render返回的是配置，配置再解析后才是真正的元素
                    let config = item.render(text, record, index);
                    // _operation 为一个特殊属性，此属性中可以使用特定的action，关联table的crud等功能
                    if (defaultColumn.dataIndex === '_operation') {
                        config = this.handleAction(config, record);
                    }
                    // 根据是否可编辑状态来判断是否包裹编辑组件
                    return this.__analysis(config);
                };
            }
            // 将用户配置的单列筛选选项转换成antd的配置
            if (!!item.filter) {
                let filterConf = this.filter.handleFilterConf(item.filter, item.dataIndex);
                if (filterConf) {
                    defaultColumn = Object.assign({}, defaultColumn, filterConf);
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
                        case 'array':
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
                    return <Edit parent={this} _factory={this._factory}
                        value={text}
                        columnChild={displayStr}
                        editConf={editableConf}
                        api={editableConf.api}
                        cellSubmit={this._cellSubmit.bind(this, record[this.rowKey], defaultColumn.dataIndex)}
                    />;
                };
            }
            // 处理 cellColSpan 和 cellRowSpan 参数
            defaultColumn = this.colSpanHandler(defaultColumn, item);
            antdColumnConfig.push(defaultColumn);
        }
        // 提示信息，主要用于行不可选是勾选框那里的提示
        if (this.__props.rowTooltips) {
            antdColumnConfig.unshift({
                title: '',
                key: '_tooltips',
                className: 'uf-row-tooltips',
                render: (...params) => {
                    let content = this.__props.rowTooltips(...params);
                    if (content) {
                        return <div className="uf-row-tooltips-content">
                            <Tooltip title={content} placement="right">
                                <Icon type={this.__props.rowTooltipsIcon || 'question-circle'} />
                            </Tooltip>
                        </div>;
                    }
                    return '';
                }
            });
        }
        return antdColumnConfig;
    }
    // 处理 cellColSpan 和 cellRowSpan 参数
    colSpanHandler(defaultColumn, {cellColSpan, cellRowSpan}) {
        if (cellColSpan || cellRowSpan) {
            let origin = defaultColumn.render;
            defaultColumn.render = (text, row, index) => {
                let obj = {
                    children: origin ? origin(text, row, index) : text,
                    props: {}
                };
                if (Utils.typeof(cellColSpan, 'function')) {
                    obj.props.colSpan = cellColSpan(text, row, index);
                }
                if (Utils.typeof(cellRowSpan, 'function')) {
                    obj.props.rowSpan = cellRowSpan(text, row, index);
                }
                return obj;
            };
        }
        return defaultColumn;
    }
    renderRowSelection() {
        if (!this.rowSelection) {
            return null;
        }
        let rowSelection = {
            type: 'checkbox',
            hideDefaultSelections: true
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
                    onSelect: this._selectAllData.bind(this, true)
                }
            ];
            if (Utils.typeof(this.rowSelection.selections, 'array')) {
                rowSelection.selections.push(this.rowSelection.selections);
            }
        }

        return rowSelection;
    }
    renderPagination() {
        if (!this.__props.pagination) {
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
            onShowSizeChange: null,
            onChange: null
        };
        getNeedObject(pagination, this.pagination);
        this._inject(pagination, 'onChange', this.onPageChange.bind(this));
        this._inject(pagination, 'onShowSizeChange', this.onShowSizeChange.bind(this));
        return pagination;
    }
    renderTitle() {
        return [
            // 增删改查
            <Crud key="crud" _factory={this._factory} parent={this} enum={this.enum}
                ref={ele => (this.crudRef = ele)}
                config={this.__props.crud || {}}>
                {/* 原title内容 */}
                <Title key="title" _factory={this._factory} parent={this} config={this.title}
                    ref={ele => (this.titleRef = ele)} />
            </Crud>,
            // 导出功能
            <Export key="export" _factory={this._factory} style={{display: 'none'}}
                ref={ele => (this.exportRef = ele)}
                {...this._getExportConfig()} />
        ];
    }
    getClassName() {
        let className = 'uf-table';
        className += this.state.fullScreen ? ' uf-fullscreen' : '';
        // 额外加一个mini类型的size和一个crowd类型的size
        let size = this.state.antdConfig.size;
        if (size === 'mini' || size === 'crowd') {
            className += ` uf-table-${size}`;
        }
        if (this.pagination && this.pagination.layout) {
            if (this.pagination.layout === 'left') {
                className += ' uf-table-pagination-left';
            } else if (this.pagination.layout === 'center') {
                className += ' uf-table-pagination-center';
            }
        }
        if (!this.title) {
            className += ' uf-table-no-title';
        }
        // 当同时有提示信息且有复选框时，修改样式节省空间
        if (this.__props.rowTooltips && this.rowSelection) {
            className += ' uf-table-special-tooltips';
        }
        return className;
    }
    render() {
        // 额外加一个mini类型的size和一个crowd类型的size
        let size = this.state.antdConfig.size;
        if (size === 'mini' || size === 'crowd') {
            size = 'small';
        }
        let expandedRowRender = this.state.antdConfig.expandedRowRender;
        let expandedRowKeys = this.state.expandedRowKeys;
        let footer = this.state.antdConfig.footer;
        return <div {...this.__getCommonProps({className: this.getClassName()})}>
            <Table {...this.state.antdConfig} size={size}
                title={() => this.renderTitle()}
                onExpandedRowsChange={this.onExpandedRowsChange.bind(this)}
                {...(expandedRowRender && ({expandedRowRender: row => this.__analysis(expandedRowRender(row))}))}
                {...(expandedRowKeys && ({expandedRowKeys: expandedRowKeys}))}
                {...(footer && (Utils.typeof(footer, 'function')
                    ? {footer: currentPageData => this.__analysis(footer(currentPageData))}
                    : {footer: v => this.__analysis(footer)}
                ))}
                dataSource={this.__props.data}
                columns={this.renderColumns()}
                rowSelection={this.renderRowSelection()}
                pagination={this.renderPagination()}
                loading={this.state.loading} />
        </div>;
    }
}
