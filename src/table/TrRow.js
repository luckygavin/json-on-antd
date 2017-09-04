
/**
 * @file 简易表格组件 依赖Immutable
 * @author luyongfang@baidu.com
 * */
/* eslint-disable fecs-camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';
import {Input, Radio, Checkbox, Select, Popover} from 'antd';
import {Utils} from 'uf/utils';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const Option = Select.Option;

export default class TrRow extends React.Component {
    constructor(props) {
        super(props);
        this.key = this.props.primaryKey;
        this.state = {
            // checked: this.props.checked,
            lineData: this.props.obj,
            isDown: this.props.expandAll || false,
            active: false
        };
    }
    componentWillReceiveProps(nextProps) {
        if (!Utils.equals(nextProps.obj, this.props.obj)) {
            this.key = nextProps.primaryKey;
            this.setState({
                lineData: nextProps.obj
            });
        }
    }
    checkIt(e) {
        e = e || window.event;
        // e.stopPropagation();
        // e.preventDefault();
        this.props.checkRow && this.props.checkRow();
        return;
    }

    /**
     * 因为是多行编辑，所以编辑之后的数据应该统一在table上存储
     * 同时需要记录编辑的是哪行
     * 编辑之后的数据，都是保存的value而不是展示的label等
     * stopPropagation 防止冒泡到tr上触发checkbox的选择事件
     * @param {string} field 编辑的是哪个字段
     * @param {string} fieldValue 编辑之后的字段值
     * @param {Object} e event对象
     */
    setLineData(field, fieldValue, e) {
        e = e || window.event;
        e.stopPropagation();
        e.preventDefault();
        let objNewData = {};
        objNewData[field] = fieldValue;
        let objNewLineData = Object.assign({}, this.state.lineData, objNewData);
        this.props.setEditTableData && this.props.setEditTableData(this.props.id, objNewLineData);
        this.setState({lineData: objNewLineData});
    }

    /**
     * radio/inpu没有直接获取事件之后的值，需要通过e获取，封装一层
     * @param {string} field  要编辑的字段
     * @param {Object} e Event对象
     */
    setEditData(field, e) {
        e = e || window.event;
        e.stopPropagation();
        e.preventDefault();
        let value = e.target.value;
        this.setLineData(field, value);
    }
    // 从一个对象中获取需要展示的关键字
    getKeyDataOfObject(obj) {
        let val = '-';
        // 如果传入的是一个数组，则递归的遍历这个数组，拿出数组中各个对象的关键字
        if (obj instanceof Array) {
            let tArr = [];
            for (let t of obj) {
                tArr.push(this.getKeyDataOfObject(t));
            }
            val = tArr.join(', ');
        } else if (obj instanceof Object) {
            // 如果字段是个对象，则优先获取Title字段，否则将该对象转化为json字符串
            if (obj.hasOwnProperty('title')) {
                val = obj['title'];
            } else {
                val = JSON.stringify(obj);
            }
        } else if (obj){
            val = obj.toString ? obj.toString() : obj;
        }
        return val;
    }
    generatorRow() {
        let tdList = [];
        let self = this;
        let data = self.state.lineData;
        // rowspan，合并行属性
        let rowSpan = this.props.rowSpan || 0;
        let hideDepth = this.props.hideDepth || 0;
        // 当前行是灰色的,不可以进行编辑
        let disabled = data['disabled'] ? data['disabled'] : false;
        // 标签计数器
        let index = 0;
        for (let k in self.props.showTags) {
            // 由于有合并行，所以根据hideDepth跳过前面几列的展示
            if (hideDepth > index && ++index) {
                continue;
            }
            // 给td加上rowSpan以合并行
            let rowspan = {};
            if (index - hideDepth >= 0) {
                rowSpan[index] && (rowspan = {rowSpan: rowSpan[index]});
                index++;
            }
            let v = self.props.showTags[k];
            // let tdData = data[k] || '--';
            let tdData = (data[k] !== null && typeof(data[k]) !== 'undefined' && data[k] !== '') ? data[k] : '-';
            // 给 td 上添加自定义的 style 和 className
            let className = '';
            let style = {};
            if (typeof v === 'object') {
                if (v.className) {
                    if (typeof v.className === 'function') {
                        className += v.className(tdData, data);
                    } else if (typeof v.className === 'string') {
                        className += v.className;
                    }
                }
                if (v.style) {
                    if (typeof v.style === 'function') {
                        Object.assign(style, v.style(tdData, data));
                    } else if (typeof v.style === 'object') {
                        Object.assign(style, v.style);
                    }
                }
            }
            style = {
                className: className,
                style: style
            };
            if (typeof v === 'object' && v.display === false) {
                continue;
            } else if (typeof v === 'object' && v['type']) {
                let elliClass = v['ellipsis'] ? ' ellipsis' : '';
                style.className += elliClass;
                switch (v.type) {
                    case 'duration':
                        const timeDiff = ((+new Date()) - (+new Date(Date.parse(tdData.replace(/-/g, '/'))))) / 1000;
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
                        tdData = timeArr.join('');
                        typeof v === 'object' && v['render'] !== undefined && (tdData = v.render(data[k], data));
                        tdList.push(<td {...style} {...rowspan} key={k} data-key={k}>{tdData}</td>);
                        break;
                    /*case 'edit':
                        let tdDiv = <td {...rowspan} key={k} data-key={k} ref={k}
                                onClick={self.props.handleEdit.bind(null, data, k, data[k])}>
                                <span className="fa fa-pencil"></span>{data[k] ? data[k] : ''}</td>;
                        if (elliClass) {
                            tdDiv = <Popover content={data[k]}>{tdDiv}</Popover>;
                        }
                        tdList.push(tdDiv);
                        break;*/
                    case 'JSON':
                        let json = JSON.stringify(tdData, null, 2);
                        let html = self.syntaxHighlight(json);
                        let content = self.createMarkup(html);
                        tdList.push(<td {...style} {...rowspan} key={k} data-key={k}>
                            <Popover content={<pre className="json" dangerouslySetInnerHTML={content}></pre>}>
                                <pre className="json" dangerouslySetInnerHTML={content}></pre>
                            </Popover>
                        </td>);
                        break;
                    case 'html':
                        tdList.push(<td {...style} {...rowspan} key={k} data-key={k}
                                dangerouslySetInnerHTML={self.createMarkup(tdData)}></td>);
                        break;
                    // 默认不能不输出啊，页面会乱掉的
                    default:
                        tdList.push(<td {...style} {...rowspan} key={k} data-key={k}>{this.getKeyDataOfObject(tdData)}</td>);
                        break;
                }
            } else {
                
                let elliClass = (typeof v === 'object' && v['ellipsis']) ? ' ellipsis' : '';
                style.className += elliClass;
                typeof v === 'object' && v['render'] !== undefined && (tdData = v.render(data[k], data));
                /**
                 * 1. 是否可编辑edit: true/false
                 * 2. 当前编辑字段的类型: text/radio/checkbox/select
                 * 3. text => input
                 *    radio => 只有1个 boolean选择是或者否
                 *    radioGroup => group组选择
                 *    checkbox => 可能有多个选择-配置map[]
                 *    select => 提供map
                 * 4. tr处在disabled的状态下是不可以进行编辑的,且展示的字段是中文不能够是值
                 *    这里的编辑配置只适合数据比较少的情况，前端可以配置的
                 *    对于编辑项的配置比较复杂的情况不适合，如下拉框好长好长的需要从后端获取的
                 *    对于从后端获取的option的这种情况可以在ajax请求后更改tableCfg重新渲染获得-待做感觉不太好
                 */
                let arrEdit = [];
                let newTdData = null;
                if (typeof v === 'object' && v['editCfg'] && v['editCfg']['edit']) {
                    switch (v.editCfg['elemType']) {
                        case 'text':
                            if (disabled || !this.props.lineEdit) {
                                newTdData = tdData;
                                break;
                            }
                            arrEdit.push(<Input defaultValue={tdData}
                                    onChange={this.setEditData.bind(this, k)}/>);
                            break;
                        case 'radio':
                            if (disabled || !this.props.lineEdit) {
                                newTdData = tdData;
                                break;
                            }
                            let arrValues = ['是', 1, false, '1'];
                            let arrAgainstValues = ['否', 0, true, '0'];
                            let checked = false;
                            let bSwitchVal = -1;
                            let iDex = arrValues.indexOf(tdData);
                            if (iDex !== -1) {
                                checked = true;
                                bSwitchVal = arrAgainstValues[iDex];
                            } else {
                                iDex = arrAgainstValues.indexOf(tdData);
                                bSwitchVal = arrValues[iDex];
                            }
                            arrEdit.push(<Radio defaultChecked={checked} checked={checked}
                                    onClick={this.setLineData.bind(this, k, bSwitchVal)}></Radio>);
                            break;
                        case 'checkbox':
                            /**
                             * defaultValue对应options中的label字段
                             * checkbox可以多选，就说明值可以是多个，这里多个值用逗号进行分割
                             */
                            let arrOptions = v['editCfg']['options'];
                            let arrData = tdData.split(',');
                            let arrDefv = [];
                            let arrDefL = [];
                            for (let option of arrOptions) {
                                if (arrData.indexOf(option['value'].trim()) !== -1) {
                                    arrDefv.push(option['value']);
                                    arrDefL.push(option['label']);
                                }
                            }
                            if (disabled || !this.props.lineEdit) {
                                newTdData = arrDefL.join(',');
                                break;
                            }
                            arrEdit.push(<CheckboxGroup options={arrOptions} defaultValue={arrDefv}
                                    onClick={this.setLineData.bind(this, k)}/>);
                            break;
                        case 'radioGroup':
                            /**
                             * radioGroup只能选择一个, 大于等于2个可选项的情况
                             * 后端返回的data中的值是value而不是展示的label
                             */
                            let arrGOptions = v['editCfg']['options'];
                            let tdLabel = null;
                            let arrRadioList = [];
                            for (let option of arrGOptions) {
                                let strKey = option['value'] + data[this.key];
                                (tdData === option['value']) && (tdLabel = option['label']);
                                arrRadioList.push(<Radio key={strKey} value={option['value']}>
                                        {option['label']}</Radio>);
                            }
                            if (disabled || !this.props.lineEdit) {
                                newTdData = tdLabel;
                                break;
                            }
                            arrEdit.push(<RadioGroup value={tdData}
                                    onChange={this.setEditData.bind(this, k)}>{arrRadioList}</RadioGroup>);
                            break;
                        case 'select':
                            /**
                             * select列表
                             */
                            let objOptions = v['editCfg']['options'];
                            let selList = [];
                            if (disabled || !this.props.lineEdit) {
                                newTdData = objOptions[tdData];
                                break;
                            }
                            for (let i in objOptions) {
                                if (objOptions.hasOwnProperty(i)) {
                                    selList.push(<Option key={'option' + i} value={i}>
                                        {objOptions[i]}</Option>);
                                }
                            }
                            arrEdit.push(<Select defaultValue={tdData}
                                onChange={this.setLineData.bind(this, k)}>{selList}</Select>);
                            break;
                        default:
                            break;
                    }
                }
                let tdDiv = <td {...style} {...rowspan} key={k} ref={k}
                    data-key={k}>{arrEdit.length > 0 ? arrEdit : (newTdData ? newTdData : tdData)}</td>;
                // 气泡卡片
                if (elliClass) {
                    tdDiv = <Popover content={data[k]}>{tdDiv}</Popover>;
                }
                tdList.push(tdDiv);

            }
        }
        let operationSpan = [];
        let tableCfg = self.props.tableCfg;
        let cfg = tableCfg.cfg || {};
        if (cfg.checkBox) {
            operationSpan.push(<span key="trcheckbox">
                <Checkbox checked={self.props.checked} onChange={this.checkIt.bind(this)} disabled={disabled}/></span>);
        }
        if (cfg.expand) {
            let foldUp = 'fa fa-caret-right';
            let foldDown = 'fa fa-caret-down';
            let strClaName = this.state.isDown || this.props.expandAll ? foldDown : foldUp;
            operationSpan.push(<span key="trexpand" data-key={data[this.key]} className={strClaName}
                onClick={self.expandExtraInfo.bind(self, 'expandtr' + data[this.key])}></span>);
        }
        if (hideDepth === 0 && operationSpan.length > 0) {
            let tipEle;
            if (cfg.tips) {
                let tips = this.props.obj[cfg.tips];
                // 如果数据没有tips字段，则不添加气泡。这样用户就可指定某些行展示气泡，而某些不展示
                tipEle = tips && (<Popover content={tips}>
                        <span key="trtips" data-key={data[this.key]}>{operationSpan}</span>
                    </Popover>);
            }
            tdList.unshift(<td key={'extra' + data[this.key]} className="extra">{tipEle || operationSpan}</td>);
        }
        return tdList;
    }
    expandExtraInfo(refK, e) {
        e = e || window.event;
        e.stopPropagation();
        e.preventDefault();
        this.props.expandExtraInfo(refK, !this.state.isDown);
        this.setState({isDown: !this.state.isDown});
    }
    syntaxHighlight(json) {
        if (typeof json !== 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        let self = this;
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            let cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                }else {
                    try {
                        let type = JSON.parse(match);
                        if (typeof(JSON.parse(type)) === 'object') {
                            return self.syntaxHighlight(JSON.parse(type));
                        }else {
                            cls = 'string';
                        }
                    }catch (e) {
                        cls = 'string';
                    }
                }
            }else if (/true|false/.test(match)) {
                cls = 'boolean';
            }else if (/null/.test(match)) {
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
    removeActiveStatus() {
        this.setState({active: false});
    }
    handleClick(event) {
        let data = this.state.lineData;
        // 当前行是灰色的,不可以进行编辑
        let disabled = data['disabled'] ? data['disabled'] : false;
        if (!disabled) {
            // this.props.onClick(this.props.id, !this.props.checked, this.props.obj, event);
            this.props.onClick && this.props.onClick(event);
        }
    }
    doubleClick(event) {
        let data = this.state.lineData;
        // 当前行是灰色的,不可以进行编辑
        let disabled = data['disabled'] ? data['disabled'] : false;
        if (!disabled) {
            this.props.onDoubleClick && this.props.onDoubleClick(event);
            this.setState({active: true});
        }
    }
    handleHover(event) {
        this.props.onHover && this.props.onHover(event);
    }
    handleLeave(event) {
        this.props.onLeave && this.props.onLeave(event);
    }
    render() {
        let rowsCfg = this.props.tableCfg.rows || {};
        let disabled = this.props.obj['disabled'] ? this.props.obj['disabled'] : false;
        // let className = this.state.active ? 'actived' : '';
        // className += this.props.checked ? ' selected' : '';
        // let style = disabled ? {background: '#e4e5e7'} : {};
        // 支持自定义tr的class和style（可以是function或者string）
        let className = '';
        let style = {};
        if (rowsCfg.className) {
            if (typeof rowsCfg.className === 'function') {
                className += rowsCfg.className(this.props.obj);
            } else if (typeof rowsCfg.className === 'string') {
                className += rowsCfg.className;
            }
        }
        if (rowsCfg.style) {
            if (typeof rowsCfg.style === 'function') {
                Object.assign(style, rowsCfg.style(this.props.obj));
            } else if (typeof rowsCfg.style === 'object') {
                Object.assign(style, rowsCfg.style);
            }
        }
        className += this.state.active ? ' actived' : '';
        className += this.props.checked ? ' selected' : '';
        Object.assign(style, disabled ? {background: '#e4e5e7'} : {});
        return <tr ref="tr" style={style}
                    className={className}
                    onMouseEnter={this.handleHover.bind(this)}
                    onMouseLeave={this.handleLeave.bind(this)}
                    onClick={this.handleClick.bind(this)}
                    onDoubleClick={this.doubleClick.bind(this)}>
                    {this.generatorRow()}
                </tr>;
    }
}
