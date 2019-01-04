/**
 * @file Table扩展 - 导出组件配置处理逻辑
 * @author liuzechun@baidu.com
 * */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Export from 'src/export';
import {Utils} from 'src/utils';

export default class TableExport extends Component {
    constructor(props) {
        super(props);
        this.parent = props.parent;
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
        return exportAll;
    }
    // 获取要下载导出数据的配置
    _getExportConfig() {
        let columns = this.parent.columns;
        let headers = [];
        let exportAll = this.findTitleExportConf();
        for (let column of columns) {
            // 只导出展示的字段，如果配置了exportAll，则导出时导出全部
            if (exportAll || column.display !== false || (this.parent.titleRef && this.parent.titleRef.state.showAllTags)) {
                let item = {
                    key: column.dataIndex || column.key,
                    title: column.title
                };
                // 导出专用render函数
                if (column.exportRender) {
                    item.render = column.exportRender;
                }
                headers.push(item);
            }
        }
        // 如果为后端分页，则传递 source 配置
        if (this.parent.serverPaging) {
            return {
                type: 'asyn',
                headers: headers,
                source: {
                    ...this.parent.__filtered.source,
                    params: this.parent.getSourceParams()
                },
                total: this.parent.pagination.total || 0
            };
        }
        // 否则传递 data
        return {
            type: 'sync',
            headers: headers,
            data: this.parent.__props.data || [],
            total: (this.parent.__props.data || []).length
        };
    }
    render() {
        return <Export key="export" _factory={this.parent._factory} style={{display: 'none'}}
            ref={ele => (this.exportRef = ele)}
            {...this._getExportConfig()} />;
    }
}