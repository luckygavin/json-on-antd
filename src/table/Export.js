/**
 * @file Table扩展 - 导出组件配置处理逻辑
 * @author liuzechun
 * */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Export from 'src/export';
import {Utils} from 'src/utils';

export default class TableExport extends Component {
    constructor(props) {
        super(props);
        this.parent = props.parent;
        this.findTitleExportConf();
    }
    componentDidMount() {
        // 把export组件抛出，供外部调用
        this.props.wrappedComponentRef && this.props.wrappedComponentRef(this.exportRef);
    }
    // 从title配置中查找export组件配置
    findTitleExportConf() {
        if (this.parent.titleExportAll !== undefined) {
            return this.parent.titleExportAll;
        }
        // 从title中查找export组件配置
        let exportConf = {};
        if (this.parent.title && (this.parent.title.basicWidget || this.parent.title.basicControls)) {
            for (let v of (this.parent.title.basicWidget || this.parent.title.basicControls)) {
                if (Utils.typeof(v, 'object') && v.name === 'export') {
                    exportConf = v;
                }
            }
        }
        if (this.parent.title && (this.parent.title.menuWidget || this.parent.title.menuControls)) {
            for (let v of (this.parent.title.menuWidget || this.parent.title.menuControls)) {
                if (Utils.typeof(v, 'object') && v.name === 'export') {
                    exportConf = v;
                }
            }
        }
        let exportAll = false;
        if (exportConf.exportAll) {
            exportAll = true;
        }
        this.parent.titleExportAll = exportAll;
    }
    // 获取要下载导出数据的配置
    _getExportConfig() {
        // 如果为后端分页，则传递 source 配置
        if (this.parent.serverPaging) {
            return {
                type: 'asyn',
                headers: this.getExportHeader(this.parent.columns),
                source: {
                    ...this.parent.__filtered.source,
                    params: this.parent.getSourceParams()
                },
                total: this.parent.pagination.total || 0
            };
        }
        // 否则传递 data
        let data = this.parent.__props.data || [];
        // 考虑数据有树形关系，在此进行关系打平，将子节点与父节点放在同一级
        let newData = this.generateExportSyncData(data);
        return {
            type: 'sync',
            headers: this.getExportHeader(this.parent.columns),
            data: newData,
            total: data.length
        };
    }
    getTitle(title) {
        if (Utils.typeof(title, 'array')) {
            var titleStr = '';
            for (var v of title) {
                Utils.typeof(v, 'string') && (titleStr += v.trim());
            }
            title = titleStr;
        } else if (Utils.typeof(title, 'object')) {
            if (Utils.typeof(title.content, 'string')) {
                title = title.content;
            } else {
                title = '??';
            }
        }
        return title;
    }
    // 取出columns中配置的表头，用作导出headers
    getExportHeader(columns, preTitle = '') {
        let headers = [];
        for (let column of columns) {
            // 只导出展示的字段，如果配置了exportAll，则导出时导出全部
            if (this.parent.titleExportAll || column.display !== false
                || (this.parent.titleRef && this.parent.titleRef.state.showAllTags)
            ) {
                let titleStr = (preTitle ? preTitle + '-' : '') + this.getTitle(column.title);
                // 考虑表头行合并的情况，及column中含有children,则需要取出children中内容
                if (!!column.children) {
                    headers = headers.concat(this.getExportHeader(column.children, titleStr));
                } else {
                    let item = {title: titleStr, key: column.dataIndex || column.key};
                    // 导出专用render函数
                    if (column.exportRender) {
                        item.render = column.exportRender;
                    }
                    headers.push(item);
                }
            }
        }
        return headers;
    }

    // 取出数据中children部分
    generateExportSyncData(nowData) {
        let exportData = [];
        for (let i in nowData) {
            exportData.push(nowData[i]);
            if (!!nowData[i].children && nowData[i].children.length > 0) {
                exportData = exportData.concat(this.generateExportSyncData(nowData[i].children));
            }
        }
        return exportData;
    }
    render() {
        return <Export key="export" _factory={this.parent._factory} style={{display: 'none'}}
            ref={ele => (this.exportRef = ele)}
            {...this._getExportConfig()} />;
    }
}