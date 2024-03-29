/**
 * @file 导出表格数据组件
 * @SuSisi <susisi>
 * @date 2017-08-25
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Icon, Button, InputNumber, Progress, Alert, Modal} from 'antd';
import {Utils} from 'src/utils';

export default class Export extends BaseComponent {
    constructor(props) {
        super(props, {type: 'export'});
        this._openApi.push('export');
        this.__init();
        this.state = {};
        // 默认配置
        this.config = {
            // 表格头部
            headers: [],
            // 用于保存计时器的句柄
            timer: null,
            // 数据导出方式 异步/同步[asyn/sync]
            // 异步 - 通过source获取要导出的数据
            // 同步 - 实例化组件是直接传入data
            type: null,
            // 记录参数中有没有message传入,如果没有传入,导出完成时进度条不隐藏
            noMessage: true,
            // 异步数据导出时的提示信息
            message: null,
            total: 0,
            // 导出文件名称和格式
            fileName: null,
            fileFormat: '.xls'
        };
        this.initExport();
    }
    initExport(nextProps) {
        let objProps = nextProps ? nextProps : this.props;
        this.config = this.__mergeProps(this.config, this.__filterProps(objProps, 'data'));
        this.data = [];
        if (objProps.data === undefined) {
            this.config.type = this.config.type || 'asyn';
            let state = {
                visible: false,
                pageSize: 200,
                exporting: false,  // 正在导出或导出完成时的界面为true
                fatchedData: 0,
                usedTime: 0,
                lastTime: 0,
                finish: false,
                error: false,
                errorMsg: '',
                total: this.config.total
            };
            // 判断参数中有没有message传入
            let message = this.config.message;
            if (!!message && !!message['page2']) {
                this.config.noMessage = false;
            }
            if (nextProps) {
                this.setState(state);
            } else {
                this.state = state;
            }
        } else {
            this.config.type = this.config.type || 'sync';
            // 用于存储导出的数据，为避免合并数据时出错，请求过来的数据没有合并到一个数组
            // data里面的数据是这样的：[[{...},{...},...],[],[]]
            this.data = [objProps.data];
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.__shouldUpdate(this.props, nextProps)) {
            this.initExport(nextProps);
        }
        // if (nextProps.data) {
        //     this.config.type = 'sync';
        //     this.data = [nextProps.data];
        // }
        // this.config = this.__mergeProps(this.config, nextProps);
        // // Table后端分页的情况会用到
        // if (this.config.total && this.config.total !== this.state.total) {
        //     this.setState({
        //         total: this.config.total
        //     });
        // }
    }
    // 重置数据
    initState() {
        clearInterval(this.config.timer);
        this.config.timer = null;
        delete this.data;
        this.data = [];
        this.setState({
            pageSize: 200,
            exporting: false,
            fatchedData: 0,
            usedTime: 0,
            lastTime: 0,
            finish: false,
            error: false,
            errorMsg: '',
            total: this.config.total
        });
        // 销毁之前创建的url
        window.URL.revokeObjectURL(this.url);
    }
    setTimer() {
        clearInterval(this.config.timer);
        this.config.timer = setInterval(()=>{
            this.setState({usedTime: this.state.usedTime + 1});
            // 如果时间只剩一秒且导出没完成，则停在1s不动
            if (this.state.lastTime > 1) {
                this.setState({lastTime: this.state.lastTime - 1});
            }
        }, 1000);
    }
    // 支持直接传入待导出的数据直接导出
    export(data) {
        if (data) {
            this.data = [data];
            this.config.type = 'sync';
            this.forceUpdate();
            Utils.defer(()=>{
                this.aRef && this.aRef.click();
            });
        } else if (this.config.type === 'asyn') {
            this.showModal();
        } else {
            this.aRef && this.aRef.click();
        }
    }
    showModal() {
        this.setState({visible: true});
    }
    handleCancel() {
        this.setState({visible: false});
        this.initState();
    }
    pageSizeChange(value) {
        this.setState({pageSize: value});
    }
    // 点击开始导出
    doExport() {
        this.setState({exporting: true});
        this.setTimer();
        this.getData(1);
    }
    // 覆盖原生获取异步数据的函数
    _handleAsyncData() {}
    // 导出进程
    getData(pageNum) {
        let params = this.__filtered.source.params;
        params = Object.assign({}, params, {
            total: this.state.total,
            page: pageNum,
            size: this.state.pageSize
        });
        // 调用通用source获取数据逻辑
        this.__getSourceData({
            params: params,
            success: (data, res) => {
                if (this.state.exporting && !this.state.error) {
                    // 存储数据
                    this.saveData(res);
                    let pageSize = this.state.pageSize;
                    let total = this.state.total;
                    // 计算剩余时间
                    let fatchedData = this.state.fatchedData;
                    let usedTime = this.state.usedTime;
                    let lastTime = this.state.lastTime;
                    let newLastTime = 0;
                    if (usedTime !== 0 && fatchedData !== 0) {
                        newLastTime = usedTime * (total - fatchedData) / fatchedData;
                        newLastTime = Math.max(0, Math.ceil(newLastTime));
                    }
                    // 防止剩余时间一直波动，如果波动区间在5秒之内就用原来的值
                    let range = Math.abs(newLastTime - lastTime);
                    if (range > 5 || (newLastTime < 10 && range > 1)) {
                        this.setState({
                            lastTime: newLastTime,
                            currentPage: pageNum
                        });
                    }
                    // 判断是否已经取得全部数据
                    if (pageNum * pageSize < total) {
                        this.getData(pageNum + 1);
                    } else {
                        this.finish();
                    }
                }
            },
            error: err => {
                this.error(err);
            }
        });
    }
    // 存储数据
    saveData(res) {
        this.data.push(res.data);
        this.setState({
            fatchedData: this.state.fatchedData + res.data.length,
            total: res.total || res.count || this.state.total
        });
        if (this.state.fatchedData > this.state.total) {
            this.error('服务器返回数据异常，请重新导出或联系管理员');
        }
    }
    // 创建下载链接
    createDownload() {
        let data = this.data;
        let headers = this.config.headers;
        // 组装数据,打包成文件
        let link;
        if (this.config.fileFormat === '.xls') {
            link = this.packageDataToXLS(data, headers);
        }
        else if (this.config.fileFormat === '.csv') {
            link = this.packageDataToCSV(data, headers);
        }
        let download = this.refs.download;
        download.href = link;
        download.download = this.getFileName();
    }
    // 导出文件名前缀+文件格式
    getFileName() {
        let fileName = this.config.fileName;
        let fileFormat = this.config.fileFormat;
        if (fileName) {
            return fileName + fileFormat;
        }
        let date = new Date();
        let prefix = '';
        prefix += date.getFullYear();
        prefix += date.getMonth() + 1;
        prefix += date.getDate();
        prefix += date.getHours();
        prefix += date.getMinutes();
        return prefix  + '导出数据' + fileFormat;
    }
    // 从一个对象中获取需要导出的关键字
    getKeyDataOfObject(obj) {
        let val = '';
        // 如果传入的是一个数组，则递归的遍历这个数组，拿出数组中各个对象的关键字
        if (Utils.typeof(obj, 'array')) {
            let tArr = [];
            for (let t of obj) {
                tArr.push(this.getKeyDataOfObject(t));
            }
            val = tArr.join('\n');
        } else if (Utils.typeof(obj, 'object')) {
            // 如果字段是个对象，则优先获取Title字段，否则将该对象转化为json字符串
            if (obj.hasOwnProperty('title')) {
                val = obj['title'];
            } else {
                val = JSON.stringify(obj);
            }
        } else if (obj) {
            val = obj.toString ? obj.toString() : obj;
        }
        return val;
    }
    // 把数据打包成xls文件，返回文件链接
    packageDataToXLS(data, headers) {
        let thead = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>';
        // headers的格式为[{key: '', title: ''}, ...]
        for (let i = 0; i < headers.length; i++) {
            thead += ('<th>' + headers[i].title + '</th>');
        }
        let tbody = '';
        data.forEach(list=>{
            list.forEach(item=>{
                tbody += '<tr>';
                for (let i = 0; i < headers.length; i++) {
                    let key = headers[i].key;
                    let val = this.columnHander(key, item, headers[i]);
                    tbody += ('<td>' + val + '</td>');
                }
                tbody += '</tr>';
            });
        });
        // 如果单元格内容长度大于11，则将number类型的数字强制转换成文本
        let format = 'style="vnd.ms-excel.numberformat:@"';
        let table = '<table ' + format + '>' + thead + tbody + '</table>';
        let htmlParts = [table];
        let dataBlob = new Blob(htmlParts, {'type': 'text/xls'});
        let link = window.URL.createObjectURL(dataBlob);
        this.url = link;
        return link;
    }
    columnHander(key, row, columnConf) {
        let val = row[key];
        if (columnConf.render && columnConf.render) {
            val = columnConf.render(val, row);
        }
        if (Utils.typeof(val, 'object')) {
            val = this.getKeyDataOfObject(val);
        }
        val = (val === undefined || val === null) ? '' : val;
        return val;
    }
    // 把数据打包成csv文件，返回文件链接
    packageDataToCSV(data, headers) {
        let thead = '';
        // headers的格式为[{key: '', title: ''}, ...]
        for (let i = 0; i < headers.length; i++) {
            thead += i === headers.length - 1 ? headers[i].title : (headers[i].title + ',');
        }
        thead += '\n';
        let tbody = '';
        data.forEach(list=>{
            list.forEach(item=>{
                for (let i = 0; i < headers.length; i++) {
                    let key = headers[i].key;
                    let val = this.columnHander(key, item, headers[i]);
                    tbody += i === headers.length - 1 ? val : (val + ',');
                }
                tbody += '\n';
            });
        });
        let table = thead + tbody;
        let htmlParts = [table];
        let dataBlob = new Blob(htmlParts, {'type': 'text/csv,charset=UTF-8'});
        let link = window.URL.createObjectURL(dataBlob);
        this.url = link;
        return link;
    }
    reExport() {
        this.initState();
    }
    finish() {
        clearInterval(this.config.timer);
        this.setState({finish: true, lastTime: 0});
        this.createDownload();
        // 判断数据是否丢失
        let fatchedData = this.state.fatchedData * 1;
        let total = this.state.total * 1;
        if (fatchedData !== total) {
            this.error('服务器返回数据异常，预期获取数据' + total + '条，实际获取到' + fatchedData + '条。');
        }
    }
    // 导出发生错误
    error(res) {
        let msg = JSON.stringify(res);
        clearInterval(this.config.timer);
        this.setState({
            error: true,
            errorMsg: msg,
            lastTime: 0
        });
    }
    // 同步导出方式页面 - 即实例化组件时直接传入数据
    syncExportRender() {
        let data = this.data;
        let headers = this.config.headers;
        let link;
        if (this.config.fileFormat === '.xls') {
            link = this.packageDataToXLS(data, headers);
        }
        else if (this.config.fileFormat === '.csv') {
            link = this.packageDataToCSV(data, headers);
        }
        let name = this.getFileName();
        return (
            <div className={'uf-export ' + (this.config.className || '')} style={this.config.style}>
                <a ref={ele=>(this.aRef = ele)} href={link} download={name}>
                    {this.props.children}
                </a>
            </div>
        );
    }
    // 异步导出方式页面 - 即通过url异步加载数据
    asynExportRender() {
        return (
            <div className={'uf-export ' + (this.config.className || '')} style={this.config.style}>
                <span onClick={this.showModal.bind(this)}>
                    {this.props.children}
                </span>
                <Modal ref="modal" className="export_modal"
                    maskClosable = {false}
                    visible = { this.state.visible }
                    title = "导出数据"
                    onCancel = { this.handleCancel.bind(this) }
                    footer = {[
                            <Button type="primary" key="btn1"
                                disabled={ this.state.exporting }
                                onClick={ this.doExport.bind(this) }>
                                开始导出
                            </Button>,
                            <Button type="primary" key="btn2"
                                onClick={ this.reExport.bind(this) }>
                                重新导出
                            </Button>
                        ]}>
                    {/*导出前的设置界面*/}
                    <section hidden={ this.state.exporting }>
                        {this.renderSetting()}
                    </section>
                    {/*正在导出的界面*/}
                    <section hidden={ !this.state.exporting }>
                        {this.renderExporting()}
                    </section>
                </Modal>
            </div>
        );
    }
    getRequestTimes() {
        let pageSize = this.state.pageSize;
        let total = this.state.total;
        return Math.ceil(total / pageSize);
    }
    // 导出前的设置界面
    renderSetting() {
        let pageSize = this.state.pageSize;
        let total = this.state.total;
        return (
            <div>
                <div className="export_info">
                    <div>您即将导出现有的<span className="fw700">全部数据</span>，
                        {total === 0
                            ? '数据总数未知。'
                            : <span>共计 <span className="fw700"> {total} </span> 条</span>
                        }
                    </div>
                    <div>每次服务器请求的大小为 <InputNumber
                                size="small" min={10} max={1000} step={100}
                                defaultValue={pageSize} onChange={this.pageSizeChange.bind(this)} /> 条
                        {total === 0 ? '' : <span>，本次导出共需 <span className="fw700">
                                {this.getRequestTimes()}
                            </span> 次服务器请求
                        </span>}
                    </div>
                </div>
                {this.renderMessage(1)}
            </div>
        );
    }
    // 正在导出的界面
    renderExporting() {
        let total = this.state.total;
        let usedTime = this.state.usedTime;
        let fatchedData = this.state.fatchedData;
        let progress = (total === 0) ? 0 : ((fatchedData / total) * 100).toFixed(2);
        progress = progress > 100 ? 100 : progress;
        return (
            <div>
                <div className="export_progress" hidden={ !this.config.noMessage && this.state.finish }>
                    <span className="ex_percent">
                        <span hidden={this.state.finish || this.state.error}><Icon type="loading" />正在导出，</span>
                        已完成 {progress}%...
                    </span>
                    <span className="ex_time">已用时 {Utils.timeFormatter(usedTime)}，预计剩余
                        {' ' + Utils.timeFormatter(this.state.lastTime)}
                    </span>
                    <Progress percent={Math.floor(progress)}
                            status={ this.state.finish ? 'success'
                                    : (this.state.error ? 'exception' : 'active') }
                            showInfo={false} />
                    <p>每次服务器请求数据 {this.state.pageSize} 条，已导出数据 {fatchedData} of {total}</p>
                </div>
                {/*导出出错时会隐藏之前的提示信息，替换为错误信息*/}
                <div hidden={this.state.error}>
                    {this.renderMessage(2)}
                </div>
                {/*导出出错时显示错误信息*/}
                <div hidden={!this.state.error}>
                    <Alert description={'出错了：' + this.state.errorMsg}
                        type="error"
                        showIcon />
                </div>
                <div hidden={ !this.state.finish } className="finish-export">
                    {/* <Button type="primary"><a ref="download">下载文件</a></Button> */}
                    <a ref="download" style={{color: '#fff'}}><Button type="primary">下载文件</Button></a>
                    <p className="mt8">
                        <Icon type="check-circle" className="success-icon" />
                        数据导出完毕，合计{fatchedData}条数据，用时 {Utils.timeFormatter(usedTime)}
                    </p>
                </div>
            </div>
        );
    }
    // 渲染提示信息模块
    renderMessage(pageNum) {
        let message = this.config.message;
        if (!message) {
            return '';
        } else if (!message['page' + pageNum]) {
            return '';
        } else {
            let msg = message['page' + pageNum];
            return (
                <div>
                    {msg.map(item=> {
                        return (<Alert description={item} key={item}
                                    type="warning"
                                    showIcon />
                        );
                    })}
                </div>
            );
        }
    }
    render() {
        if (this.config.type === 'asyn') {
            return this.asynExportRender();
        } else {
            return this.syncExportRender();
        }
    }
}
