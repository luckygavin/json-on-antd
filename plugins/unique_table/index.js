/**
 * @file 表格组件，满足在任意位置合并，减少不必要的合并需要在数据的dontMerge字段做配置
 * @auhor huzaibin
 */
import React, {PureComponent, Component} from 'react';
import {Button, Spin, notification} from 'antd';
import html2canvas from 'html2canvas';
import axios from 'axios';
import SuperHeaders from './SuperHeaders.js';
import Td from './Td.js';

import './style.less';

export default class UniqueTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dataToRender: null,
            superHeadersData: undefined,
            superHeadersExist: false,
            showColumns: true,
            fontColor: '#666',
            tableName: '',
            editable: false,
            loading: false
        };
        this.formatData = this.formatData.bind(this);
    }
    componentWillMount() {
        this.getData();
    }
    componentWillReceiveProps(nextProps) {
        this.getData(nextProps);
    }

    getData(props = this.props) {
        this.setState({
            loading: true
        });
        // 根据传递进组件的API获取数据
        axios.get(props.api, props.reqData)
            .then(res => {
                let data = res.data;
                if (data.status === 0) {
                    const pathData = data.data;
                    this.setState({
                        tableName: data.tableName,
                        data: this.formatData(pathData),
                        showColumns: pathData.columns_show === undefined ? true : pathData.columns_show,
                        fontColor: pathData.fontColor === undefined ? this.state.fontColor : pathData.fontColor
                    });

                    let tableArr = this.formatColsAndRows(pathData.columns, pathData.rows);

                    if (pathData.superHeaders.length !== 0) {
                        this.setState({
                            superHeadersData: this.state.data.superHeaders,
                            superHeadersExist: true
                        });
                    }
                } else {
                    this.setState({
                        'loading': false
                    });
                    notification['info']({
                        message: '整点报表提示',
                        description: '查询整点报表数据失败'
                    });
                }
            })
            .catch(err => {
                this.setState({
                    'loading': false
                });
                console.warn('There has been a problem with your API: ' + err.message);
                notification['error']({
                    message: '整点报表提示',
                    description: '查询整点报表数据失败'
                });
            });
    }

    /**
     * [formatData 初始化Table数据格式]
     * @param  {[Object]} data1 根据API取得的数据
     * @return {[Object]}  newState 格式化之后的数据
     */
    formatData(data1) {
        let newState = {
            columns: [],
            superHeaders: [],
            rows: [],
            total: 0,
            invalid: false,
            errorMsg: '数据格式有误！'
        };
        let columns = data1.columns;
        let superHeaders = data1.superHeaders || [];
        let rows = data1.rows;
        let showColumns = data1.columns_show === undefined ? true : data1.columns_show;

        if (!columns || !(columns instanceof Array) || !rows || !(rows instanceof Array)) {
            newState.invalid = true;
        } else {
            newState.columns = columns;
            newState.superHeaders = superHeaders;
            newState.rows = rows;
            newState.showColumns = showColumns;
        }
        return newState;
    }

    /**
     * [formatColsAndRows 处理行列数据，生成最终render需要的数据]
     * @param {Array} cols 为取到的表格columns数据
     * @param {Array} rows 为取得的表格rows数据
     */
    formatColsAndRows(cols, rows) {
        let newState = {
            rows: [],
            columns: []
        };
        let colsArr = cols.map((item, index) => {
            return item.dataIndex;
        });
        let rowsArr = rows.map((item, index) => {
            let tempTr = [];
            for (let key in item.data) {
                // 存key——对应到col的索引值
                let colsIndex = colsArr.indexOf(key);
                tempTr[colsIndex] = item.data[key];
            }
            newState.rows.push(tempTr);
        });


        // 行倒叙遍历，方便向上递归删除重复的单元格
        for (let i = newState.rows.length - 1; i >= 0; i--) {
            for (let j = 0; j < newState.rows[i].length; j++) {
                if (i === 0) {
                    continue;
                } else {
                    // console.log(JSON.stringify(newState.rows[i][j]))
                    if (newState.rows[i][j] !== undefined
                        && newState.rows[i - 1][j] !== undefined
                        && newState.rows[i][j].value === newState.rows[i - 1][j].value
                        && newState.rows[i][j].dontMerge !== true) {
                        newState.rows[i - 1][j].rowspan = (newState.rows[i][j].rowspan || 1)
                                                        + (newState.rows[i - 1][j].rowspan || 1);
                        newState.rows[i][j].rowspan = 0;
                        newState.rows[i][j].colspan = 0;
                        newState.rows[i][j].delete = true;
                        // 如果和上一行一致则设置delete属性，方便合并
                    } else if (newState.rows[i][j] !== undefined
                        && (newState.rows[i][j].rowspan === 0 || newState.rows[i][j].colspan === 0)) {
                        newState.rows[i][j].delete = true;
                    }
                }
            }
        }


        let tempData = this.state.data;
        tempData.rows = newState.rows;
        // console.log(tempData.rows);
        this.setState({
            dataToRender: tempData,
            loading: false
        });
    }

    getPixelRatio(context) {
        let backingStore = context.backingStorePixelRatio
            || context.webkitBackingStorePixelRatio
            || context.mozBackingStorePixelRatio
            || context.msBackingStorePixelRatio
            || context.oBackingStorePixelRatio
            || context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }

    _fixType(type) {
        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
        let r = type.match(/png|jpeg|bmp|gif/)[0];
        return 'image/' + r;
    }

    // 将表格下载为图片
    handleDownloadPic(e) {
        e.preventDefault();
        // console.log('download as picture');
        let w = document.getElementById(this.state.tableName).offsetWidth;
        let h = document.getElementById(this.state.tableName).offsetHeight;
        let canvas = document.createElement('canvas');
        canvas.width = w * 2;
        canvas.height = h * 2;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        let context = canvas.getContext('2d');
        // 改善Retina屏幕显示的清晰度
        // context.scale(1.6, 1.6);
        let scaleBy = this.getPixelRatio(context);
        context.scale(scaleBy, scaleBy);
        notification['success']({
            message: '整点报表提示',
            description: '数据太多会导致图片生成较慢'
        });
        // console.log(canvas);
        html2canvas(document.getElementById(this.state.tableName), {
            canvas: canvas,
            taintTest: false,
            onrendered: canvas => {
                canvas.id = 'mycanvas';
                let dataUrl = canvas.toDataURL('png');
                let imgData = dataUrl.replace(this._fixType('png'), 'image/octet-stream');
                let newImg = document.createElement('img');
                newImg.src = dataUrl;
                // document.body.appendChild(newImg);
                // 创建下载链接
                let a = document.createElement('a');
                a.href = dataUrl;
                let prefix = this.getPrefix();
                // 设置文件名
                a.download = prefix + '-' + this.state.tableName + '.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        });
    }
    // 将表格导出为Excel
    handleDownloadExcel(e) {
        // console.log('export as excel');
        e.preventDefault();
        let htmlEle = '<html><head><meta charset="utf-8" /></head><body>'
                        + document.getElementById(this.state.tableName).outerHTML
                        + '</body></html>';
        let blob = new Blob([htmlEle], {'type': 'text\/xls'});
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        // 设置文件名
        a.download = this.getPrefix() + '-' + this.state.tableName + '.xls';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    // 导出文件名前缀
    getPrefix() {
        let date = new Date();
        let prefix = '';
        prefix += date.getFullYear();
        prefix += date.getMonth() + 1;
        prefix += date.getDate();
        prefix += date.getHours();
        prefix += date.getMinutes();
        return prefix;
    }

    handleEdit() {
        console.log('edit');
        this.setState({
            editable: true
        });
    }
    render() {
        let data = this.state.dataToRender;
        let {superHeadersExist, superHeadersData, showColumns, fontColor, editable} = this.state;
        return <Spin tip="报表数据正在努力Loading...请耐心等待！" spinning={this.state.loading}>
            <div className="unique-table">
                <Button className='report-btn' type='primary'
                        onClick={this.handleDownloadPic.bind(this)}
                        >
                    下载为图片
                </Button>
                &nbsp;&nbsp;
                <Button className='report-btn' type='primary'
                        onClick={this.handleDownloadExcel.bind(this)}>
                    导出为Excel
                </Button>
                {/*&nbsp;&nbsp;
                <Button className='report-btn' type='primary'
                        onClick={this.handleEdit.bind(this)}>
                    编辑
                </Button>*/}
                <br/><br/>
                <table className="table table-bordered table-hover"
                        id={this.state.tableName}
                        ref='tableExport'
                        style={{color: this.state.fontColor, tableLayout: 'fixed',
                            'wordBreak': 'break-all', width: '100%'}}>
                    <thead>
                        {/*** superHeaders part ****/}
                        { superHeadersExist && superHeadersData !== undefined
                        && superHeadersData.map((trItem, trIndex) => (
                                <tr key={'tr' + trIndex} className='superHeaders'>
                                    {
                                        trItem.map((item, index) => (
                                            <td key={'td' + index}
                                                ref={'td' + index}
                                                colSpan={item.colspan}
                                                rowSpan={item.rowspan === undefined ? 1 : item.rowspan}
                                                style={{
                                                        textAlign: 'center',
                                                        verticalAlign: 'center',
                                                        backgroundColor: item.backgroundColor ? item.backgroundColor
                                                            : item.background ? item.background : 'rgb(247,247,247)'
                                                    }}>
                                                {item.flagIshtml
                                                    ? this.transformToHtml.bind(this, item.name, 'td' + index)
                                                    : item.name}
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }

                        {/***normal title***/}
                        {showColumns && data !== null && data.columns !== null
                        &&  <tr>
                                {
                                    data.columns.map((item, index) => (
                                        <th key={index}>
                                            {item.title}
                                        </th>
                                    ))
                                }
                            </tr>
                        }
                    </thead>
                    <tbody style={{textAlign: 'center'}}>
                            {data !== null && data.rows !== null
                                && data.rows.map((trItem, index1) => {
                                    let items = [];
                                    for (let row in trItem) {
                                        let item = trItem[row];
                                        if (item.delete === true) {
                                        } else {
                                            items.push(<Td key={row}
                                                editable={editable}
                                                tdItem={item}
                                                tdIndex={row}
                                                rowKey={index1 + 4}/>);
                                        }
                                    }
                                    return <tr key={'tr_' + index1}>
                                    {
                                        items
                                    }
                                    </tr>;
                                })
                            }
                    </tbody>
                </table>
            </div>
        </Spin>;
    }
}
