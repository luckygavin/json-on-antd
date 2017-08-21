/**
 * @file 表格组件
 * @author liuzechun@baidu.com
 * */

import React from 'react';
import ReactDOM from 'react-dom';
import {Tooltip, Spin, Popconfirm, message, Pagination} from 'antd';
import reqwest from 'reqwest';

import {BaseComponent} from 'uf/component';
import {Utils} from 'uf/utils';

import Export from 'uf/export';
import ReactInput from 'uf/input';
import ReactModal from 'uf/modal';
import TrRow from './TrRow';
import ThRow from './ThRow';

import './table.scss';

const pagerInfo = total => {
    return <span>{'共' + total + '条数据'}</span>;
};

export default class Table extends BaseComponent {
    // 以下是函数定义
    constructor(props) {
        super(props);
        this.initTable();
    }

    /**
     * 适用于同一个Table可能展示不同的数据
     * 比如服务器-网络 他们的Tags是不同的，但第一次调用constructor后就没有地方更新了
     * @param Object nextProps 用于tableCfg等发生变化时重新初始化state
     */
    initTable(nextProps) {
        let objProps = nextProps ? nextProps : this.props;
        let tableCfg = objProps.config;
        let cacheSize = tableCfg.name ? localStorage.getItem(tableCfg.name) : null;

        // 把所有配置放到this上，方便后续使用
        this.tableCfg = tableCfg || {};
        this.cfg = Object.assign({}, {
            checkBox: false,
            tableClass: 'table table-striped'
        }, tableCfg.cfg, true);
        this.pager = tableCfg.pager
            ? Object.assign({}, {
                    pageSize: cacheSize || 15,
                    pageType: 'client'
                }, tableCfg.pager, true)
            : false;
        this.pager.showCount && (this.pager.showTotal = pagerInfo);
        this.display = tableCfg.display || {};
        this.key = tableCfg.key || 'id';
        // 显示哪些字段
        !nextProps && (this.showTags = tableCfg.tags);

        // 存储当前tablet选中的数据,key为id, value为行数据
        this.selectedData = {};
        this.rowState = {};
        // 存储当前编辑的table数据
        this.editData = {};
        // 仅针对props传递content数据时才使用,为了判断再接收到新的props时是否进行更新的判断,url方式不适用
        this.tableDatas = [];
        let arrData = [];
        let data = [];
        let content = [];
        if (!tableCfg.url) {
            content = objProps.content ? objProps.content : [];
            this.generateRowId(content);
            if (this.pager) {
                data = content.slice(0, this.pager.pageSize);
            } else {
                data = content;
            }
            arrData = Utils.clone(content);
        }
        this.tableDatas = Utils.clone(arrData);
        let retract = false;
        let display = tableCfg.display;
        display && display.retract && (retract = display.retract);
        let state = {
            // 所有请求回来的数据或者传递过来的数据
            content: arrData,
            // 一共多少条数据
            count: arrData.length,
            // 一共多少条数据 - 过滤时保存原所有数据总数
            allCount: arrData.length,
            // 当前页的数据
            currPageData: Utils.clone(data),
            // 当前页
            currentPage: 1,
            flag: 0,
            // 当前是否处在filter的状态
            filter: false,
            // 是否选择全部行
            checkAll: false,
            // loading的spin提示及提示信息
            spinning: false,
            spinTip: '',
            // table表头右侧设置按钮的下拉框是否展示
            showTableMenu: false,
            // 是否允许表格编辑
            editTable: false,
            // 全屏展示与否
            fullScreen: false,
            // 是否展示全部字段
            showAllTags: false,
            // 是否收起Table
            retract: retract
        };
        // 请求序号，当执行新请求时，之前的未返回数据的请求则废弃，通过index值是否相等判断
        this.requerstIndex = 0;
        // update at 2016/11/03 by liuzechun@baidu.com
        if (!!nextProps) {
            this.setState(state);
            // 重置Table后要手动触发componentDidMount函数中的逻辑来加载数据
            this.componentDidMount();
        } else {
            this.state = state;
        }
        // 导出数据的配置
        this.exportConfig = this.getExportConfig();
        // return this.state;
    }
    // 刷新数据时调用 - 包括直接传入数据和通过url获取数据
    // 数据变更时都需要调用此函数，以刷新导出组件的数据或查询条件
    onRefreshData() {
        this.clearSelect();
        // 刷新导出组件配置
        this.exportConfig = this.getExportConfig();
        this.forceUpdate();
        this.defaultCheckAll();
    }
    // 默认全部选中
    defaultCheckAll() {
        this.cfg.checkAll && this.cfg.checkBox && this.checkAll(true);
    }
    componentWillReceiveProps(nextProps) {
        // 就算props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
        // 如果table的tableCfg是动态的则需要重新设置tableCfg和showTags
        if (!Utils.equals(this.props.config, nextProps.config)) {
            this.initTable(nextProps);
        }
        // 针对传数据进来的方式
        let currentTableDatas = Utils.clone(nextProps.content);
        if (currentTableDatas && !Utils.equals(currentTableDatas, this.tableDatas)) {
            let content = this.generateRowId(nextProps.content);
            let data;
            if (this.pager) {
                data = content.slice(0, this.pager.pageSize);
            } else {
                data = content;
            }
            this.setState({
                content: Utils.clone(content),
                currPageData: Utils.clone(data),
                count: content.length,
                allCount: content.length,
                checkAll: false
            }, ()=>{
                // 重置分页
                this.setState({currentPage: 1});
                this.onRefreshData();
            });
            this.tableDatas = Utils.clone(currentTableDatas);
        }
        // 针对通过url向后台请求数据时，当params变化时才会刷新
        if (this.tableCfg.url) {
            if (!Utils.equals(this.props.params, nextProps.params)) {
                // 清空过滤控件
                this.refs.filter && this.refs.filter.setVal('');
                this.getData(null, null, nextProps);
            }
        }
    }
    componentDidMount() {
        if (this.tableCfg.url) {
            this.getData(null, this.props.params);
        } else {
            this.defaultCheckAll();
        }
    }
    componentWillUnmount() {
        this.clearSelect();
    }
    /**
     *  获取要下载导出数据的配置
     *  @return {Object}
     */
    getExportConfig() {
        let tableCfg = this.tableCfg;
        let objTags = this.showTags;
        let objHeaders = {};
        let arrKeys = [];
        let typeDef = Object.prototype.toString;
        for (let key in objTags) {
            if (key === '_operation' || key === 'operation') {
                continue;
            }
            arrKeys.push(key);
            objHeaders[key] = (typeDef.call(objTags[key]) === '[object Object]') ? objTags[key]['title'] : objTags[key];
        }
        /**
         * 1. 没有url就是直接传递了content的数据
         * 2. 有url但是是client分页-Export需要传递data,默认是client分页
         * 3. 有url但是是server端分页-Export需要传递url配置
         */
        if (!tableCfg.url || this.pager.pageType !== 'server') {
            return {
                headers: objHeaders,
                data: this.state && this.state.content ? this.state.content : (this.props.content || []),
                total: this.state.count
            };
        }
        return {
            headers: objHeaders,
            url: tableCfg.url,
            params: this.props.params ? this.props.params : {},
            total: this.state.count
        };
    }
    // 拖动表头更改列排序
    changeColumnOrder(srcField, dstField) {
        let arrKeys = Object.keys(this.tableCfg.tags);
        let srcIndex = arrKeys.indexOf(srcField);
        let dstIndex = arrKeys.indexOf(dstField);
        let arrNewKeys = [];
        let len = arrKeys.length;
        if (srcIndex < dstIndex) {
            arrNewKeys = arrKeys.slice(0, srcIndex).concat(arrKeys.slice(srcIndex + 1, dstIndex + 1)).concat(arrKeys[srcIndex]).concat(arrKeys.slice(dstIndex + 1, len));
        } else {
            arrNewKeys = arrKeys.slice(0, dstIndex).concat(arrKeys[srcIndex]).concat(arrKeys.slice(dstIndex, srcIndex)).concat(arrKeys.slice(srcIndex + 1, len));
        }
        // 根据最新的字段顺序进行调整
        let newTags = {};
        for (let v of arrNewKeys) {
            newTags[v] = this.tableCfg.tags[v];
        }
        this.showTags = newTags;
        this.tableCfg['tags'] = newTags;
        this.forceUpdate();
    }
    /**
     *  设置显示字段
     *  @param {Object}  oriTags 初始的tags配置
     *  @param {Object} showTags 要展示的tags，回传的参数
     */
    setShowTags(oriTags, showTags) {
        let typeDef = Object.prototype.toString;
        for (let val of Object.keys(oriTags)) {
            if (showTags[val]) {
                oriTags[val] && (typeDef.call(oriTags[val]) === '[object Object]')
                    && (oriTags[val]['display'] = true);
            } else if (typeDef.call(oriTags[val]) === '[object String]') {
                let title = oriTags[val];
                oriTags[val]['title'] = title;
                oriTags[val]['display'] = false;
            } else {
                oriTags[val]['display'] = false;
            }
        }
        this.showTags = oriTags;
        this.refs.switchmodal.setState({visible: false});
        this.setState({switchTags: false});
    }

    /**
     *  对于后端数据中没有id的生成随机的id用于存储选择了哪些数据
     *  @param {Array} arrDatas 如果返回的行数据中没有id，自动给加上唯一的ID，用于设置选择了哪些数据
     */
    generateRowId(arrDatas) {
        let i = 0;
        for (let obj of arrDatas) {
            if (obj[this.key] || obj[this.key] === 0) {
                continue;
            } else {
                obj[this.key] = Utils.uniqueId();
            }
        }
        return arrDatas;
    }

    // 页码变化
    handlePageChange(currentPage) {
        // 切换分页时是否保留已勾选的行，默认清除
        !this.cfg.retain && this.clearSelect();
        this.setState({currentPage});
        // 更新数据
        this.changeData(currentPage);
        this.props.onPageChange && this.props.onPageChange(currentPage);
    }
    // 切换分页时，获取分页数据
    changeData(currentPage) {
        // currentPage 从1开始
        if (this.pager.pageType === 'server') {
            this.getData(currentPage);
        } else {
            let startPos = (currentPage - 1) * this.pager.pageSize;
            let endPos = currentPage * this.pager.pageSize;
            let curData = [];
            // this.state.content是对全量的,如果是过来出来的数据分页怎么办
            if (this.state.filter) {
                curData = this.state.displayConent.slice(startPos, endPos);
            } else {
                curData = this.state.content.slice(startPos, endPos);
            }
            let isCheckAll = this.isCheckAll(curData);
            this.setState({
                currPageData: Utils.clone(curData),
                checkAll: isCheckAll
            });
        }
    }

    /**
     * 异步获取数据
     * 方式请求接口的方法
     * @param {number} pageNum 请求第几页非必须
     * @param {Object} params 对象非必须
     * @param {Object} nextProps 非必须
     */
    getData(pageNum, params, nextProps) {
        // 第一次render 没有nextProps
        let tableCfg = this.tableCfg;
        let dataParams = {};
        // let requestParams = params ? params : (nextProps ? nextProps.params : null);
        let requestParams = params ? params : (nextProps ? nextProps.params : this.props.params);
        if (this.pager.pageType === 'server') {
            dataParams = Object.assign({}, requestParams, {
                    page: pageNum ? pageNum : 1,
                    pageNum: pageNum ? pageNum : 1,
                    size: this.pager.pageSize,
                    pageSize: this.pager.pageSize,
                    pageType: 'server'
                });
        } else {
            dataParams = Object.assign({}, requestParams, {
                pageType: 'client'
            });
        }
        let self = this;
        if (tableCfg.url) {
            this.setState({spinning: true, spinTip: '正在请求数据，请稍等~', size: 'large'});
            // 当前请求的标号
            let index = ++this.requerstIndex;
            reqwest({
                url: tableCfg.url,
                data: dataParams,
                type: 'json',
                method: (tableCfg.method && tableCfg.method === 'post') ? 'POST' : 'GET',
                success(res) {
                    // 如果在此之后又有其他请求，则放弃当前处理
                    if (index !== self.requerstIndex) {
                        return;
                    }
                    if (res.status * 1 === 0) {
                        self.generateRowId(res.data);
                        let data = res.data.slice(0, self.pager.pageSize);
                        let tempExConfig = {};
                        // 如果有select下拉框可以编辑，且后端返回下拉框数据，则要修改配置里的下拉框的option
                        for (let v in tableCfg.tags) {
                            let tag = tableCfg.tags[v];
                            if (res[v] && tag.editCfg && tag.editCfg.elemType
                                && tag.editCfg.elemType === 'select' && tag.editCfg.edit === true) {
                                tag.editCfg['options'] = res[v];
                            }
                        }
                        let temp = {
                            content: Utils.clone(res.data),
                            currPageData: Utils.clone(data),
                            // exportConfig: exportConfig,
                            tableCfg: tableCfg,
                            count: res.count || res.total,
                            allCount: res.count || res.total,
                            checkAll: false,
                            spinning: false,
                            spinTip: ''
                        };
                        self.setState(temp, ()=>{
                            self.onRefreshData();
                        });
                    }
                    else if (res.status * 1 === 1) {
                        let modalCon = {
                            title: '提示：',
                            type: 'warning',
                            msg: res.msg
                        };
                        self.setState({spinning: false, spinTip: ''});
                        self.createModalCon();
                        let divCon = document.getElementById('modalDiv');
                        ReactDOM.render(<ReactModal modalCon={modalCon}
                                handleModalClick={self.clearModalCon.bind(self)}
                                handleCancel={self.clearModalCon.bind(self)}/>, divCon);
                    }
                },
                error(jqXHR, textStatus, errorThrown) {
                    // 如果在此之后又有其他请求，则放弃当前处理
                    if (index !== self.requerstIndex) {
                        return;
                    }
                    let modalCon = {
                        title: '出错：',
                        type: 'warning',
                        msg: '请求出错-返回状态码' + textStatus + 'error: ' + errorThrown
                    };
                    self.setState({spinning: false, spinTip: ''});
                    self.createModalCon();
                    ReactDOM.render(<ReactModal modalCon={modalCon}
                            handleModalClick={self.clearModalCon.bind(self)}
                            handleCancel={self.clearModalCon.bind(self)}/>,
                            document.getElementById('modalDiv'));
                }
            });
        }
    }
    getSelectedData() {
        let tmpArr = [];
        for (let key in this.selectedData) {
            tmpArr.push(this.selectedData[key]);
        }
        return tmpArr;
    }
    // 清除已勾选内容
    clearSelect() {
        this.selectedData = {};
        this.rowState = {};
        // 通知父组件清除已报错勾选内容
        this.props.onCheckRow && this.props.onCheckRow({});
    }
    getSelectedIds() {
        let arrIds = [];
        for (let dex in this.selectedData) {
            if (this.selectedData.hasOwnProperty(dex)) {
                arrIds.push(dex);
            }
        }
        return arrIds;
    }
    sendEditData(item, params) {
        let self = this;
        let temp = {};
        for (let dex in item.config) {
            if (item.config.hasOwnProperty(dex)) {
                let name = item.config[dex]['name'];
                temp[name] = params[name];
            }
        }
        temp[this.key] = params[this.key];
        let ele = document.getElementById('modalDiv');
        ele && ele.remove();
        reqwest({
            url: item.url,
            data: temp,
            type: 'json',
            method: 'get',
            success(res) {
                if (res.status * 1 === 0) {
                    // 类似成功的提示不需要展示头和尾部e
                    self.refreshTable();
                } else {
                    let modalCon = {
                        title: '提示：',
                        type: 'warning',
                        msg: res.msg
                    };
                    self.createModalCon();
                    ReactDOM.render(<ReactModal modalCon={modalCon}
                            handleModalClick={self.clearModalCon.bind(self)}
                            handleCancel={self.clearModalCon.bind(self)}/>,
                            document.getElementById('modalDiv'));
                }
            },
            error(res) {
                let modalCon = {
                    title: '出错：',
                    type: 'warning',
                    msg: '发送请求时出现错误，请尝试重新发送请求'
                };
                self.createModalCon();
                ReactDOM.render(<ReactModal modalCon={modalCon}
                        handleModalClick={self.clearModalCon.bind(self)}
                        handleCancel={self.clearModalCon.bind(self)}/>,
                        document.getElementById('modalDiv'));
            }
        });
    }
    createModalCon() {
        let ele = document.getElementById('modalDiv');
        if (!ele) {
            ele = document.createElement('div');
            ele.setAttribute('id', 'modalDiv');
            document.body.append(ele);
        }
    }
    clearModalCon() {
        let ele = document.getElementById('modalDiv');
        ele && ele.remove();
    }
    handleEdit(data, tag, val, event) {
        // 单个字段的编辑用Input，多个select时序提供map或者url
        let modalCon = {
            type: 'form'
        };
        let editCfg = this.tableCfg.detailCfg.editCfg;
        let config = editCfg.filed[tag];
        config['type'] = 'input';
        config['name'] = tag;
        config['defaultVal'] = val;
        let item = {
            url: editCfg.url,
            config: [config]
        };
        this.createModalCon();
        ReactDOM.render(<ReactModal modalCon={modalCon} item={item} data={data}
                handleModalClick={this.sendEditData.bind(this)}
                handleCancel={this.clearModalCon.bind(this)}/>,
                document.getElementById('modalDiv'));
    }
    checkRow(id, value, row) {
        this.rowState[id] = value;
        if (value) {
            this.selectedData[id] = row;
        } else {
            delete this.selectedData[id];
        }
        // onCheckRow为勾选行变化时触发的函数，可返回勾选的全部数据
        this.props.onCheckRow && this.props.onCheckRow(this.selectedData);
        // 判断是否全部选中了， 全部选中需要更新选中按钮，thGenerator也需要单独拿出来
        if (this.isCheckAll(this.state.currPageData)) {
            this.setState({checkAll: true});
        } else {
            this.setState({checkAll: false});
        }
    }
    isCheckAll(curData) {
        let rowState = this.rowState;
        let pageData = curData;
        for (let i = 0, len = pageData.length; i < len; i++) {
            if (!rowState.hasOwnProperty(pageData[i][this.key]) || rowState[pageData[i][this.key]] === false) {
                return false;
            }
        }
        return true;
    }
    checkAll(val = true) {
        // 只能是当前页的数据
        let rowState = [];
        let arrDatas = this.state.currPageData;
        // 可以全选，把disabled的数据行过滤掉
        for (let i = 0, len = arrDatas.length; i < len; i++) {
            if (!arrDatas[i]['disabled']) {
                if (val) {
                    this.selectedData[arrDatas[i][this.key]] = arrDatas[i];
                } else {
                    delete this.selectedData[arrDatas[i][this.key]];
                }
                this.rowState[arrDatas[i][this.key]] = val;
            }
        }

        this.props.onCheckRow && this.props.onCheckRow(this.selectedData);
        this.setState({
            checkAll: val
        });
    }

    /**
     *  编辑之后存一份数据未editData,当取消编辑之后editData要清空
     *  @param {number} trDataId 没一行唯一的一个ID
     *  @param {Object} trNewData 编辑之后的行数据
     */
    setEditTableData(trDataId, trNewData) {
        this.editData[trNewData[this.key]] = trNewData;
    }

    /**
     * 取消编辑
     * 暂时只包含全部取消
     * 当前行的取消先不做，当前行需要还原原来的数据，而重新渲染table其他行的时候需要综合数据渲染太麻烦of course可以做
     * @param {number} trDataId 当前行的id
     */
    cancelEdit(trDataId) {
        if (trDataId) {
            delete this.editData[trDataId];
        } else {
            this.editData = {};
            this.setState({editTable: false});
        }
    }

    /**
     *  表头保存按钮的动作
     *  0. 比较的是editData中的数据
     *  1. 需要比较前后的数据是否发生了变化，如果没有则需要提示
     *  2. 如果发生了变化则需要弹出提示框，点击确定后进行提交
     *  获取到编辑之后的数据，回传到上层进行处理
     *  处理保存数据
     *  当有数据变化的时候才去confirm提交数据
     */
    confirmSaveEdit() {
        let isDataChanged = JSON.stringify(this.editData);
        if (isDataChanged === '{}') {
            message.warning('编辑的数据没有发生任何变化');
        } else {
            this.setState({editTable: false});
            this.props.saveEdit && this.props.saveEdit(this.editData);
        }
    }
    // tr上的单击事件
    // event为与触发的tr上事件相关的一个对象
    handleTrClick(row, index, id, checked, event) {
        // 只有展示勾选框的Table才会执行checkRow函数
        this.cfg.checkBox && this.checkRow(id, !checked, row);
        this.props.onTrClick && this.props.onTrClick(row, index, event);
    }
    // tr上的双击事件
    handleTrDoubleClick(row, index, event) {
        // 去掉上一次双击的行的active状态
        this.activeTr && this.activeTr.removeActiveStatus();
        this.activeTr = this.refs['tr' + index];
        this.props.onTrDoubleClick && this.props.onTrDoubleClick(row, index, event);
    }
    // tr上的鼠标移入事件
    handleTrHover(row, index, event) {
        this.props.onTrHover && this.props.onTrHover(row, index, event);
    }
    // tr上的鼠标移出事件
    handleTrLeave(row, index, event) {
        this.props.onTrLeave && this.props.onTrLeave(row, index, event);
    }
    // 整理数据，实现分组合并
    sortData(content) {
        let tableCfg = this.tableCfg;
        let gTags = [];
        // 获得有效的分组字段
        for (let i in tableCfg.tags) {
            // 分组字段必须在前面，且中间不能有不分组字段
            if (tableCfg.tagsGroup.indexOf(i) !== -1) {
                gTags.push(i);
            } else {
                break;
            }
        }
        let tmpContent = content;
        gTags.map((tag, index)=>{
            tmpContent = this.sortArrInArr(tmpContent, tag);
        });
        return this.getArrInObj(tmpContent)
    }
    // 遍历数组，把数据根data中tag对应的值分类装入不同的以tag值为键的对象中
    // 这里主要实现了数据的重新排序分组
    sortArrInArr(data, tag) {
        let content = {};
        if (data instanceof Array) {
            for (let v of data) {
                !(v[tag] in content) && (content[v[tag]] = []);
                content[v[tag]].push(v);
            }
        } else {
            for (let i in data) {
                content[i] = this.sortArrInArr(data[i], tag);
            }
        }
        return content;
    }
    // 递归遍历对象，转化为数组，并记录对象层级数据
    // 这里实现了把重新排序的数据重新组合成正常的格式，并记录需要合并的行的行数及每行需要隐藏的列
    getArrInObj(data, isRoot = true) {
        let content = [];
        let rowSpan = [];
        let hideDepth = [];
        if (data instanceof Array) {
            for (let v of data) {
                content.push(v);
                hideDepth.push(0);
                rowSpan.push([0]);
            }
            rowSpan[0] = [data.length];
        } else {
            for (let i in data) {
                let [result, rsp, dep] = this.getArrInObj(data[i], false);
                content = content.concat(result);
                rowSpan = rowSpan.concat(rsp);
                for (let d in dep) {
                    let val = +(d) === 0 ? dep[d] : dep[d]+1;
                    hideDepth.push(val);
                }
            }
            !isRoot && (rowSpan[0].unshift(rowSpan.length));
        }
        return [content, rowSpan, hideDepth];
    }
    trGenerator() {
        let selectedIds = this.getSelectedIds();
        if (Utils.empty(this.state.currPageData)) {
            return null;
        }
        let tableCfg = this.tableCfg;
        let cfg = this.cfg;
        if (this.state.currPageData) {
            let content = this.state.currPageData;
            let isGroup = false;
            let rowSpan = [];
            let hideDepth = [];
            // 分组功能
            if (tableCfg && tableCfg.tagsGroup) {
                isGroup = true;
                [content, rowSpan, hideDepth] = this.sortData(content);
            }
            let trList = [];
            let rows = content.map((row, index) => {
                let TrRows = [];
                // 有disabled行时也可以全选
                // let checked = this.state.checkAll || !!this.rowState[row[this.key]];
                let checked = !!this.rowState[row[this.key]];
                TrRows.push(<TrRow ref={'tr' + index} obj={row} checked={checked}
                    key={row[this.key]} id={row[this.key]} primaryKey={this.key}
                    rowSpan={rowSpan[index]} hideDepth={hideDepth[index]}
                    tableCfg={tableCfg}
                    expandAll={this.state.expandAll}  lineEdit={this.state.editTable}
                    showTags={this.showTags} handleEdit={this.handleEdit.bind(this)}
                    setEditTableData={this.setEditTableData.bind(this)}
                    onHover={this.handleTrHover.bind(this, row, index)}
                    onLeave={this.handleTrLeave.bind(this, row, index)}
                    onClick={this.handleTrClick.bind(this, row, index, row[this.key], checked)}
                    onDoubleClick={this.handleTrDoubleClick.bind(this, row, index)}
                    expandExtraInfo={this.expandExtraInfo.bind(this)}/>
                );
                if (cfg && cfg.expand) {
                    let tmpHtml = row[cfg.expand]; // data['html']
                    let extraHTML = this.createMarkup(tmpHtml);
                    let tdLen = 100;
                    !row['ump-expand'] && (row['ump-expand'] = false);
                    let up = this.state.expandAll || row['ump-expand'] ? {} : {display: 'none'};
                    TrRows.push(<tr></tr>); // 添加额外的tr标签以使由expand产生的额外tr标签不会影响实际内容tr的奇偶数
                    TrRows.push(<tr style={up} key={'trexpand' + row[this.key]}  ref={'expandtr' + row[this.key]}>
                        <td colSpan={tdLen} dangerouslySetInnerHTML={this.createMarkup(tmpHtml)}></td>
                    </tr>);
                }
                return TrRows;
            });
            return rows;
        }
        return null;
    }
    expandExtraInfo(refK, isDown) {
        if (isDown) {
            this.refs[refK].style.display = '';
        } else {
            this.refs[refK].style.display = 'none';
        }
    }
    expandAllExtra() {
        this.setState({expandAll: !this.state.expandAll});
    }
    createMarkup(htmlString) {
        return {
            __html: htmlString
        };
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
        } else if (obj){
            val = obj.toString ? obj.toString() : obj;
        }
        return val;
    }
    // 若有html，则剥掉标签
    handleString(string) {
        let pattern1 = /<(\w+).*?>(.*?)<\/\1>/g; // 匹配是否有闭合标签
        if (pattern1.test(string)) {
            return string.replace(/<([\/]?\w+).*?>/g, ''); //剥掉所有标签
        } else {
            return string;
        }
    }
    // 过滤输入框变化时
    filterChange(iVal) {
        clearTimeout(this.filterTimer);
        this.filterTimer = setTimeout(()=>{
            this.dealFilterData(iVal);
        }, 150);
    }
    // 过滤数据
    dealFilterData(iVal) {
        let strVal = iVal.toLowerCase().replace(/(^\s*)|(\s*$)/g, '').replace(/\s+/g, ' ');
        // 过滤当前页
        let content = this.state.content;
        if (strVal) {
            let arrFilterData = [];
            // 字段黑名单/白名单
            let filterlist = this.display.filter;
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
            let curData = arrFilterData.slice(0, this.pager.pageSize);
            let count = arrFilterData.length;
            this.setState({
                currentPage: 1,
                currPageData: Utils.clone(curData),
                count: count,
                filter: true,
                displayConent: Utils.clone(arrFilterData)
            });
        } else if (this.pager.pageType === 'server') {
            // 服务器端分页的content都是当前页的数据
            this.setState({
                currentPage: 1,
                currPageData: Utils.clone(this.state.content),
                count: this.state.allCount,
                filter: false
            });
        } else {
            // 前端分页, content是返回的所有数据，当前页的数据需要截取
            let curData = this.state.content.slice(0, this.pager.pageSize);
            this.setState({
                currentPage: 1,
                currPageData: Utils.clone(curData),
                count: this.state.allCount,
                filter: false
            });
        }
        // 清除已勾选内容
        this.clearSelect();
    }
    switchTags(obj) {
        // 多个checkbox的如何获取
        // this.setState({switchTags: true});
        this.refs.switchmodal.setState({visible: true});
    }
    // 展示全部列
    showAllTags() {
        if (this.state.showAllTags === false) {
            let tmpTags = this.showTags;
            let memoryShowTags = {};
            for (let i in tmpTags) {
                if (typeof(tmpTags[i]) === 'string') {
                    memoryShowTags[i] = tmpTags[i];
                    tmpTags[i] = {
                        title: tmpTags[i],
                        display: true
                    }
                } else {
                    memoryShowTags[i] = Object.assign({}, tmpTags[i], true);
                    tmpTags[i]['display'] = true;
                }
            }
            this.memoryShowTags = memoryShowTags;
        } else {
            this.showTags = this.memoryShowTags;
        }
        this.setState({showAllTags: !this.state.showAllTags});
    }
    refresh() {
        this.refreshTable();
    }
    refreshTable() {
        if (this.tableCfg.url) {
            this.getData();
        } else {
            this.props.refresh && this.props.refresh();
        }
        // 清空过滤控件
        this.clearFilter();
        // 重置分页
        this.setState({currentPage: 1});
    }
    // 清空过滤控件
    clearFilter() {
        this.refs.filter && this.refs.filter.setVal('');
        this.setState({filter: false, filterContent: []});
    }
    setPageSize(itemParams, NULL, item) {
        let size = itemParams.size;
        if (!isNaN(size * 1) && size) {
            this.pager.pageSize = size;
            let name = this.tableCfg.name;
            name && (localStorage.setItem(name, size));
        }
        if (this.tableCfg.url) {
            this.refreshTable();
        } else {
            let data = this.state.content.slice(0, this.pager.pageSize);
            this.setState({
                currPageData: Utils.clone(data)
            });
        }
    }
    showSetPageSize() {
        let self = this;
        let modalCon = {
            title: '设置分页：',
            type: 'form'
        };
        let item = {
            config: [
                {
                    type: 'input',
                    label: '分页行数',
                    name: 'size'
                }
            ]
        };
        self.createModalCon();
        let divCon = document.getElementById('modalDiv');
        ReactDOM.render(<ReactModal modalCon={modalCon} item={item}
                handleModalClick={self.setPageSize.bind(self)}
                handleCancel={self.clearModalCon.bind(self)}/>, divCon);
    }

    /**
     * 点击编辑按钮需要重新渲染表格且需要讲之前编辑的数据清除
     */
    editTable() {
        this.editData = {};
        this.setState({editTable: !this.state.editTable});
    }
    switchMenuList() {
        /**
         * 由于li单击时有冒泡的原理，ul上捕获之后会再出发，因为li上不需要再加入事件设置显示与否
         */
        this.setState({showTableMenu: !this.state.showTableMenu});
    }
    toggleFullScreen() {
        this.setState({fullScreen: !this.state.fullScreen});
    }
    /*收起table列表，只展示表头*/
    toggleRetract() {
        this.setState({retract: !this.state.retract});
    }
    tableHeadGenerator() {
        let title = this.tableCfg.title || '';
        let display = this.display;
        let result = [];
        /* 表头标题 */
        if (title) {
            let icon = 'fa fa-caret-' + (this.state.retract === false ? 'down' : 'right');
            result.push(typeof(display.retract) !== 'undefined'
                ? <div key="table-title" className="umpui-header" onClick={this.toggleRetract.bind(this)}>
                    <i className={icon}></i>
                    <span>{title}</span>
                </div>
                : <div key="table-title" className="umpui-header">
                    <span>{title}</span>
                </div>
            );
        }
        /* 以下为一些控件的生成，全部保存在divList里 */
        let divList = [];
        /* display.basic里面的控件视为基本操作控件 */
        let custom = display.custom;
        let arrBasic = display.basic;
        // 为了美观，如果有自定义的控件，把控件放到过滤框之后，其他控件之前
        if (custom && custom.basic) {
            for (let v of custom.basic) {
                divList.push(<div pos="basic" key={v.name}
                    className={'umpui-header-extra ' + (v.name||'')}
                    onClick={()=>v.onClick(this)}>
                    <i className={v.icon}></i>
                    <span>{v.text}</span>
                </div>);
            }
        }
        if (arrBasic) {
            let basic = this.getBasicWidghts();
            for (let v of arrBasic) {
                // 为了美观，如果有自定义的控件，把控件放到过滤框之后，其他控件之前
                if (v === 'filter') {
                    basic[v] && divList.unshift(basic[v]);
                } else {
                    basic[v] && divList.push(basic[v]);
                }
            }
        }
        /* display.menus视为不常用的一些控件，为了节省空间，把这些不常用的控件，放在一个下拉列表里 */
        let gearsList = [];
        let arrMenus = display.menus;
        if (arrMenus) {
            let menus = this.getMenuWidghts();
            for (let v of arrMenus) {
                menus[v] && gearsList.push(menus[v]);
            }
        }
        if (custom && custom.menus) {
            for (let v of custom.menus) {
                gearsList.push(<li key={v.name} onClick={()=>v.onClick(this)}>
                    <i className={v.icon}></i>
                    <span>{v.text}</span>
                </li>);
            }
        }
        if (gearsList.length > 0) {
            divList.push(<div key="umpui-table-menu"
                className={'umpui-header-extra menu ' + (this.state.showTableMenu ? 'active' : '')}
                onClick={this.switchMenuList.bind(this)}>
                    <i className="fa fa-list"></i>
                    {this.display.showText && <span>菜单</span>}
                    <ul>{gearsList}</ul>
            </div>);
        }
        result.push(<div className="umpui-header-extra-con">{divList}</div>);
        return result;
    }
    getBasicWidghts() {
        let obj = {};
        let showText = this.display.showText;
        let props = {
            name: 'filter',
            placeholder: '要过滤的内容',
            handleChange: this.filterChange.bind(this)
        };
        obj['filter'] = <div className="umpui-header-extra filter no-hover" key="umpui-header-extra">
                <i className="fa fa-filter"></i>
                <ReactInput {...props} ref="filter"/>
        </div>;
        let arrList = [];
        if (this.state.editTable) {
            arrList.push(<ul className="umpui-edit-cs">
                <li onClick={this.cancelEdit.bind(this, null)} key={'cancelEdit'}>
                    <i className="fa fa-undo"></i>
                    <span className="umpui-span-left">取消</span>
                </li>
                <li key="'saveEdit'">
                    <Popconfirm title="确定修改吗?"
                        onConfirm={this.confirmSaveEdit.bind(this)}
                        onCancel={this.cancelEdit.bind(this)}>
                        <span>
                            <i className="fa fa-floppy-o"></i>
                            <span className="umpui-span-left">保存</span>
                        </span>
                    </Popconfirm>
                </li>
            </ul>);
        } else {
            arrList.push(<div className="umpui-edit" onClick={this.editTable.bind(this)} key={'editTable'}>
                    <i className="fa fa-pencil-square-o"></i>
                    {showText && <span>编辑</span>}
                </div>);
        }
        obj['editTable'] = <div className="umpui-header-extra" key="umpui-table-edit">{arrList}</div>;
        obj['refresh'] = <div className="umpui-header-extra" key="refresh"
                onClick={this.refreshTable.bind(this)}>
            <i className="fa fa-refresh" title="刷新"></i>
            {showText && <span>刷新</span>}
        </div>;
        if (!this.state.fullScreen) {
            obj['fullScreen'] = <div className="umpui-header-extra" key="fullscreen"
                    onClick={this.toggleFullScreen.bind(this)}>
                    <i className="fa fa-arrows-alt"></i>
                    {showText && <span>全屏</span>}
                </div>;
        } else {
            obj['fullScreen'] = <div className="umpui-header-extra" key="exitfullscreen"
                onClick={this.toggleFullScreen.bind(this)}>
                <i className="fa fa-compress"></i>
                {showText && <span>退出全屏</span>}
            </div>;
        }
        obj['export'] = <div className="umpui-header-extra" key="export">
            <Export config={this.exportConfig}>
                <i className="fa fa-download"></i>
                {showText && <span>导出</span>}
            </Export>
        </div>;
        obj['switchTags'] = <div className="umpui-header-extra" key="switchTags"
                onClick={this.switchTags.bind(this)}>
            <i className="fa fa-cogs" title="显示列"></i>
            {showText && <span>展示列</span>}
        </div>;
        obj['showAllTags'] = <div key="showAllTags"
                className={'umpui-header-extra ' + (this.state.showAllTags ? 'active' : '')}
                onClick={this.showAllTags.bind(this)}>
            <i className="fa fa-eye" title="展示全部列"></i>
            {showText && <span>展示全部列</span>}
        </div>;
        obj['setPageSize'] = <div className="umpui-header-extra" key="switchTags"
                onClick={this.showSetPageSize.bind(this)}>
            <i className="fa fa-cogs" title="分页设置"></i>
            {showText && <span>分页设置</span>}
        </div>;
        return obj;
    }
    getMenuWidghts() {
        let obj = {};
        obj['fullScreen'] = <li key="fullScreen1" onClick={this.toggleFullScreen.bind(this)}>
            <i className="fa fa-arrows-alt"></i>
            <span>全屏显示</span>
        </li>;
        obj['switchTags'] = <li key="switchTags1" onClick={this.switchTags.bind(this)}>
            <i className="fa fa-cog"></i>
            <span>展示字段</span>
        </li>;
        obj['export'] = <li key="export1">
            <Export config={this.exportConfig}>
                <i className="fa fa-download"></i>
                <span>导出数据</span>
            </Export>
        </li>;
        obj['setPageSize'] = <li key="setPageSize1" onClick={this.showSetPageSize.bind(this)}>
            <i className="fa fa-cogs"></i>
            <span>分页设置</span>
        </li>;
        obj['refresh'] = <li key="refresh1" onClick={this.refreshTable.bind(this)}>
            <i className="fa fa-refresh"></i>
            <span>刷新表格</span>
        </li>;
        return obj;
    }
    sortColumn(sortType, field) {
        let column = this.tableCfg.tags[field];
        // 默认排序是大小
        if (column['sort'] === true) {
            let allData = this.state.content.sort(function (lineOne, lineTwo) {
                let asc = lineOne[field] < lineTwo[field] ? -1 : (lineOne[field] > lineTwo[field] ? 1 : 0);
                return sortType ? asc : -asc;
            });
            let currPageData = allData.slice(0, this.pager.pageSize);
            this.setState({
                content: allData,
                currPageData: currPageData,
                flag: ++this.state.flag
            });
        } else if (typeof(column['sort']) === 'function') {
            let allData = this.state.content.sort(function (lineOne, lineTwo) {
                let sortVal = column['sort'](lineOne, lineTwo);
                return sortType ? sortVal : -sortVal;
            });
            let currPageData = allData.slice(0, this.pager.pageSize);
            this.setState({
                content: allData,
                currPageData: currPageData,
                flag: ++this.state.flag
            });
        }
    }

    render() {
        return (
            <div className={'umpui-table panel '
                    + (this.tableCfg.className ? this.tableCfg.className : '')
                    + (this.state.fullScreen ? ' umpui-fullscreen' : '')
                    + (this.state.retract ? ' retract' : '')
                }>
                <ReactModal ref="switchmodal" modalCon={{title: '展示字段：', type: 'checkbox'}} visible={false}
                    item={this.showTags} handleModalClick={this.setShowTags.bind(this)}/>
                {this.cfg.header !== false && (
                    <div className="panel-heading">
                        {this.tableHeadGenerator()}
                    </div>
                )}
                <div className="panel-body">
                    <Spin spinning={this.state.spinning} tip={this.state.spinTip}>
                        <div className="table-responsive">
                            <table hover={this.props.hover} className={this.cfg.tableClass}>
                                <ThRow tableCfg={this.tableCfg} checked={this.state.checkAll}
                                showTags={this.showTags} checkAll={this.checkAll.bind(this)}
                                expandAll={this.state.expandAll}
                                expandAllExtra={this.expandAllExtra.bind(this)}
                                sortColumn={this.sortColumn.bind(this)}
                                changeColumnOrder={this.changeColumnOrder.bind(this)}/>
                                <tbody>
                                    {this.trGenerator()}
                                </tbody>
                            </table>
                        </div>
                    </Spin>
                    {this.pager &&
                    <Pagination {...this.pager} current={this.state.currentPage}
                        total={this.state.count}
                        onChange={this.handlePageChange.bind(this)} />}
                </div>
            </div>
            );
    }
}
