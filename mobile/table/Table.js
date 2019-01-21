/**
 * @file Table 组件封装
 *
 * Author: liuzechun (liuzechun@baidu.com)
 * Created: 2019-01-20 17:23:12
 */

import React from 'react';
// import RcTable from 'rc-table';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

export default class Table extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
    }
    render() {
        return <div {...this.__getCommonProps({className: 'uf-mobile-table'})}>
            <table>
                <TableHeader columns={this.__props.columns}/>
                <TableBody columns={this.__props.columns}
                    data={this.__props.data}
                    rowKey={this.__props.rowKey}/>
            </table>
        </div>;
    }
    // render() {
    //     return <RcTable {...this.__props}></RcTable>;
    // }
}

class TableHeader extends React.Component {
    render() {
        return <thead>
            <tr>
                {(this.props.columns || []).map(
                    column => <th key={column.dataIndex}>{column.title}</th>
                )}
            </tr>
        </thead>;
    }
}

class TableBody extends React.Component {
    getRowKey(row) {
        if (Utils.typeof(this.props.rowKey, 'function')) {
            return this.props.rowKey(row);
        } else if (Utils.typeof(this.props.rowKey, 'string')) {
            return row[this.props.rowKey];
        } else {
            return Utils.hash(row);
        }
    }
    getTdContent(column, row) {
        let value = row[column.dataIndex];
        let result = value;
        if (column.render) {
            result = column.render(value, row);
        }
        return result;
    }
    render() {
        return <tbody>
            {(this.props.data || []).map(row =>
                <tr key={this.getRowKey(row)}>
                    {(this.props.columns || []).map(column =>
                        <td key={column.dataIndex}>
                            {this.getTdContent(column, row)}
                        </td>
                    )}
                </tr>
            )}
        </tbody>;
    }
}
