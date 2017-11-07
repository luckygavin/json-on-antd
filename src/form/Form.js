/**
 * @file 可配置表单
 * @author liuzechun
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';
import {Utils} from 'uf/utils';
import moment from 'moment';
import {Form, Icon, Spin, Button, message, Tooltip, Row, Col} from 'antd';
import {Input, Select, Cascader, Radio, Upload, Checkbox, InputNumber, DatePicker} from 'antd';

import Ueditor from 'uf/ueditor';

import './style.scss';

let uuid = 0;
class OriginForm extends BaseComponent {
    constructor(props) {
        super(props);
        // 过滤掉Form.create传入的form属性
        this._filter.push('form');
        this.__init();
        this.state = {
            loading: false
        };
        // this.props.form; Antd.Form封装的函数
        this.form = props.form;
        this.config = null;
        // 用于存储子Form的引用（因为无法直接拿到refs）
        this.formRef = {};
        this.defaultValues = null;
        // 用于记录当前form是否变换过（原来单个form通过复制新增等变为了多个）
        this.isArrayForm = false;
        this.init();
        this.itemsCache = {};
        // this.setItemsCache(this.config.items);
    }
    init(nextProps) {
        // 过滤掉Form.create传入的form属性
        let props = this.__props;
        if (nextProps) {
            props = Utils.merge({}, props, nextProps);
        }
        props = Utils.filter(props, 'form');
        this.config = props;
        this.formItemLayout = this.getLayout(props.layout);
        // 是之成为受控组件，实现Form嵌套
        if ('params' in props && !Utils.equals(this.defaultValues, props.params)) {
            this.setDefaultValues(props.params);
            !!nextProps && this.initValues();
        }
    }
    componentDidMount() {
        // 把this抛出，供外部调用，因为使用refs找不到包装前的ReactForm对象
        this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
        this.initValues();
    }
    componentWillReceiveProps(nextProps) {
        if (this.__shouldUpdate(this.props, nextProps)) {
            this.init(nextProps);
        }
    }
    // 遍历出一份items并缓存起来 key => value 形式
    // setItemsCache(items) {
    //     this.itemsCache = {};
    //     const loop = (items) => {
    //         for (let item of items) {
    //             if (item instanceof Array) {
    //                 loop(item);
    //             } else {
    //                 if (item.name) {
    //                     this.itemsCache[item.name] = Object.assign({}, item);
    //                 }
    //             }
    //         }
    //     }
    //     loop(items);
    // }
    // 获取初始值，并格式化
    setDefaultValues(data) {
        if (!this.isArrayForm && data instanceof Array) {
            this.isArrayForm = true;
        }
        this.defaultValues = data;
    }
    /* 外部调用函数 */
    getValues(validate = true) {
        // 校验数据
        if (validate && this.validateFields()) {
            return;
        }
        return this.getFieldsValue();
    }
    resetValues(o) {
        this.initValues(o);
    }
    /* 组件内部逻辑 */
    // 上传文件回调
    normFile(e) {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    // 获取全部数据
    getFieldsValue() {
        this.validateFields();
        let values = this.form.getFieldsValue();
        // 把传入的 params 和 form 表单里数据合并后一起提交，可以用此方法传递额外需要的参数
        
        values = Object.assign({}, this.defaultValues, values);
        if (this.config.beforeSubmit) {
            values = this.config.beforeSubmit(values);
        }
        return values;
    }
    // 校验数据
    validateFields() {
        let haveErr = false;
        this.form.validateFields((err, values)=>{
            err && (haveErr = true);
        });
        // 校验子form
        let childForms = this.formRef;
        if (childForms) {
            for (let i in childForms) {
                if (childForms[i].validateFields()) {
                    haveErr = true;
                }
            }
        }
        return haveErr;
    }
    // 根据传入的 params 设置初始值
    initValues(values) {
        values = values || this.defaultValues;
        // console.log(values);
        if (values) {
            // 设置初始值前对传入的 params 格式化
            if (this.config.beforeSetValues) {
                values = this.config.beforeSetValues(values);
            }
            this.form.setFieldsValue(values);
        } else {
            this.form.resetFields();
        }
    }
    // 实现联动功能
    onChange(item, val, string) {
        if (string) {
            val = string;
        } else if (val.target) {
            if (val.target.value) {
                val = val.target.value;
            } else if (val.target.checked) {
                val = val.target.checked;
            }
        }
        // 实现联动
        if (item.join) {
            for (let i in item.join) {
                let target = this.itemsCache[i];
                for (let j in item.join[i]) {
                    let result = item.join[i][j](val, target[j]);
                    switch (j) {
                        case 'display':
                            target.display = result;
                            break;
                        case 'value':
                            this.form.setFieldsValue({[i]: result})
                            break;
                        default:
                            target[j] = result;
                            break;
                    }
                }
            }
            this.forceUpdate();
        }
    }
    // 获取异步数据
    // getData(item) {
    //     let url = item.source;
    //     this.__getData(url, null, data=>{
    //         if (item.sourceHandler) {
    //             data = item.sourceHandler(data);
    //         }
    //         item.options = data;
    //         delete item.source;
    //         this.itemsCache[item.name] = item;
    //         this.forceUpdate();
    //     });
    // }
    // 根据布局参数生成布局配置
    getLayout(layout) {
        return {
            labelCol: {span: layout.labelCol},
            wrapperCol: {span: layout.wrapperCol}
        };
    }
    // 生成单个表单项
    // key 为表单name后缀，表单项循环时需要使用
    getFormItem(oitem, okey = null) {
        if (!oitem.name || oitem.type === 'empty') {
            return;
        }
        okey = okey !== null ? `-${okey}` : '';
        let name = oitem.name;
        let key = oitem.name + okey;
        // 把表单项额外存起来，方便后面各种联动的控制（需要改配置里的参数）
        if (this.itemsCache[key]) {
            oitem = this.itemsCache[key];
        } else {
            this.itemsCache[key] = oitem;
        }
        if (oitem.display === false) {
            return;
        }
        const getFieldDecorator = this.form.getFieldDecorator;
        let itemLayout;
        // 每个表单的布局可以独立控制
        if (oitem.layout) {
            itemLayout = this.getLayout(oitem.layout);
        } else {
            itemLayout = this.config.layout.type === 'horizontal' ? this.formItemLayout : null;
        }
        let item = Object.assign({rules: [{}]}, oitem);

        // 过滤掉一些字段后，剩余的就是组件本身需要的参数
        let itemProps = Utils.filter(item, ['label', 'deafult', 'help', 'extra', 'rules', 'join', 'regionConfig']);
        // 触发Change时实现联动功能, TODO
        itemProps.onChange = this.onChange.bind(this, item);

        let itemContent;
        let otherOptions;
        switch (item.type) {
            case 'group':
            case 'form':
                // 实现分组，本质上是form嵌套
                // parent属性用来传递一些父Form的函数
                itemProps.wrappedComponentRef = inst=>{this.formRef[key] = inst};
                itemLayout = {labelCol: {span: 0}, wrapperCol: {span: 24}};
                otherOptions = {
                    valuePropName: 'params',
                };
                item.default = item.default || {};
                item.rules[0]['type'] = item.rules[0]['type'] || 'object';
                break;
            case 'number':
                // 数字输入框
                item.rules[0]['type'] = item.rules[0]['type'] || 'integer';
                // 验证前先把数据强制转换成数字
                item.rules[0]['transform'] = item.rules[0]['transform'] || (v=>v !== '' ? +v : '');
                break;
            case 'checkbox':
                itemProps.content = itemProps.content || itemProps.placeholder;
                otherOptions = {
                    valuePropName: 'checked'
                };
                break;
            case 'checkbox-group':
                // 复选框组
                item.rules[0]['type'] = item.rules[0]['type'] || 'array';
                break;
            case 'ueditor':
                // ueditor 输入框
                itemProps = {config: itemProps};
                otherOptions = {
                    valuePropName: 'data'
                };
                break;
            case 'cascader':
                // 级联选择
                itemProps = Object.assign({
                    showSearch: true
                }, itemProps);
                item.rules[0]['type'] = item.rules[0]['type'] || 'array';
                break;
            case 'upload':
                // 文件上传
                let isDisabled = {};
                // 可根据limit属性限制上传文件个数
                let limit = itemProps.limit;
                if (limit) {
                    let list = this.form.getFieldValue(key) || [];
                    isDisabled = {disabled: list.length >= limit};
                }
                itemContent = (
                        <Upload {...itemProps} {...isDisabled}>
                            <Button>
                                <Icon type="upload" /> {itemProps.placeholder || '上传文件'}
                            </Button>
                        </Upload>
                    );
                otherOptions = {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile.bind(this)
                };
                break;
            case 'date-picker':
                // 日期时间选择
                item.rules[0]['type'] = item.rules[0]['type'] || 'object';
                item.default = moment(item.default);
                break;
            case 'button':
                // 带有各种功能的按钮
                itemProps.content = itemProps.content || item.label;
                return this.getButtonItem(itemProps, okey);
                break;
            default:
                break;
        }
        let fieldProps = {
            key: key,
            label: !item.help
                ? item.label
                : <span>{item.label}&nbsp;
                        <Tooltip title={item.help}>
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>,
            extra: item.extra
        };
        return <Form.Item {...fieldProps} {...itemLayout}>
            {getFieldDecorator(key, Object.assign({
                initialValue: item.default,
                rules: item.rules
            }, otherOptions, item.regionConfig))(
                // 作为子组件解析
                this.__analysis(itemProps)
            )}
        </Form.Item>;
    }
    handleSubmit(e, callback) {
        // 如果没有传入callback且没有props.onSubmit回调函数，则submit没有被捕获，不阻止提交（方便后面增加 action 扩展提交功能）
        if (!callback && !this.__props.onSubmit) {
            return true;
        }
        let submit = callback || this.__props.onSubmit;
        // 否则阻止提交按钮默认事件
        e && e.preventDefault();
        if (this.validateFields()) {
            return;
        }

        let values = this.getFieldsValue();
        let result = submit(values, this);

        // 如果回调函数返回了promise实例，则展示按钮上的loading效果，防止多次点击
        if (result instanceof Promise) {
            this.setState({loading: true});
            result.then(
                resolve=>this.setState({loading: false})
            ).catch(
                reject=>this.setState({loading: false})
            );
        }

    }
    // submit按钮不进行处理，转移到 handleSubmit 函数上处理，在 handleSubmit 函数上判断是否需要阻止提交按钮默认事件
    submitClick(callback, e) {
        this.handleSubmit(e, callback);
    }
    resetClick(callback) {
        this.form.resetFields();
        callback && callback(this);
    }
    // 自定义按钮点击事件，返回表单数据
    customClick(callback) {
        let values = this.getFieldsValue();
        callback && callback(values, this);
    }
    // 处理数据
    handleValues() {
        
    }
    // 新增按钮
    addClick(callback) {
        let form = this.form;
        let keys = form.getFieldValue('__keys');
        let nextKeys = keys.concat(++uuid);
        form.setFieldsValue({'__keys': nextKeys});

        // 处理已有数据
        this.handleValues();

        callback && callback(this);
    }
    // 复制新增
    copyClick(callback) {
        callback && callback(this);
    }
    // 删除
    deleteClick(callback, key) {
        // if (this.props.parent && !this.isArrayForm) {
        //     this.props.parent.deleteClick(callback, key);
        //     return;
        // }

        let form = this.form;
        let keys = form.getFieldValue('__keys');
        if (keys.length === 1) {
            return;
        }
        form.setFieldsValue({'__keys': keys.filter(k => k !== +key)});

        // delete this.itemsCache
        for (let i in this.itemsCache) {
            if (Utils.isLast(`-${key}`, i)) {
                delete this.itemsCache[i];
            }
        }
        // delete data

        callback && callback(this, key);
    }
    // 其他
    othersClick(callback) {
        callback && callback(this);
    }
    // 获取表单项中的 button 类型的按钮
    getButtonItem(item, key) {
        let handleClick;
        switch (item.action) {
            // case 'add':
            //     handleClick = this.addClick.bind(this, item.onClick)
            //     break;
            // case 'copy':
            //     handleClick = this.copyClick.bind(this, item.onClick)
            //     break;
            // case 'delete':
            //     handleClick = this.deleteClick.bind(this, item.onClick, key)
            //     break;
            case 'reset':
                handleClick = this.resetClick.bind(this, item.onClick, key)
                break;
            case 'submit':
                handleClick = this.handleSubmit.bind(this, null, item.onClick, key)
                break;
            default:
                handleClick = this.othersClick.bind(this, item.onClick)
                break;
        }
        let props = Object.assign({
            key: item.name,
            type: item.mode,
            style: {marginLeft: '8px'},
            onClick: handleClick
        }, item);
        return this.__analysis(props);
    }
    // 处理表单组
    generateFormItemsGroup(gitem, key) {
        if (!gitem.length) {
            return;
        }
        let result = [];
        let layout = {span: 24 / gitem.length};
        for (let item of gitem) {
            let formItem;
            if (item instanceof Array) {
                formItem = <Row>{this.generateFormItemsGroup(item, key)}</Row>;
            } else {
                formItem = this.getFormItem(item, key);
                (item.type === 'button') && (layout = null);
            }
            result.push(
                !!layout ? <Col key={item.name || Utils.hash(item)} {...layout}>{formItem}</Col> : formItem
            );
        }
        return result;
    }
    // 生成表单项列表
    generateFormItems(items, key) {
        let result = [];
        let index = 0;
        for (let item of items) {
            if (item instanceof Array) {
                result.push(
                    <Row key={`items-${index}`}>{this.generateFormItemsGroup(item, key)}</Row>
                );
            } else {
                result.push(this.getFormItem(item, key));
            }
            index++;
        }
        return result;
    }
    // 生成表单内容
    generateItems() {
        return this.generateFormItems(this.config.items);
        // const {getFieldDecorator, getFieldValue} = this.form;
        // // 创建一个隐含的表单项来存储需要展示几个form
        // getFieldDecorator('__keys', { initialValue: [0] });
        // const keys = getFieldValue('__keys');
        // let items = this.config.items;
        // let result;
        // if (keys.length > 1) {
        //     result = keys.map(v=>{
        //         return this.generateFormItems(items, v)
        //     });
        // } else {
        //     result = this.generateFormItems(items)
        // }
        // return result;
    }
    // 解析 Button 的配置，格式化成统一格式
    analysisButtonConfig() {
        const buttonsCfg = this.config.buttons;
        if (!buttonsCfg) {
            return;
        }
        let formatCfg = {
            layout: {
                type: 'center'
            }
        };
        if (buttonsCfg instanceof Array) {
            formatCfg.items = buttonsCfg;
        } else {
            if (!!buttonsCfg.layout) {
                if (typeof buttonsCfg.layout === 'string') {
                    formatCfg.layout.type = buttonsCfg.layout;
                } else {
                    formatCfg.layout = buttonsCfg.layout;
                }
            }
            formatCfg.items = buttonsCfg.items;
        }
        return formatCfg;
    }
    // 生成按钮
    generateButton() {
        const buttonsCfg = this.analysisButtonConfig();
        if (!buttonsCfg) {
            return;
        }
        return (
            <Row type="flex" justify={buttonsCfg.layout.type}>
                <Col {...buttonsCfg.layout}>
                    <Form.Item key="buttons">
                        <div className='form-buttons'>
                        {buttonsCfg.items.map(item => {
                            switch (item.action) {
                                case 'submit':
                                    return <Button key="submit" {...item}
                                            loading={this.state.loading}
                                            onClick={this.submitClick.bind(this, item.onClick)}>
                                            {item.value}
                                            </Button>;
                                    break;
                                case 'reset':
                                    return <Button key="reset" {...item}
                                            onClick={this.resetClick.bind(this, item.onClick)}>
                                            {item.value}
                                            </Button>;
                                    break;
                                default:
                                    return <Button key={item.value} {...item}
                                            onClick={this.customClick.bind(this, item.onClick)}>
                                            {item.value}
                                            </Button>;
                                    break;
                            }
                        })}
                        </div>
                    </Form.Item>
                </Col>
            </Row>
        );
    }
    render() {
        return <div className={'uf-form ' + (this.config.className || '')}>
            {this.config.header && (
                // header 可以是字符串，也可以是一个组件配置
                Utils.typeof(this.config.header, 'string') ? (
                    <div className="form-header">
                        <h5>{this.config.header}</h5>
                        <hr />
                    </div>
                ) : (
                    <div className="form-header">
                        {this.__analysis(this.config.header)}
                    </div>
                )
            )}
            <Form layout={this.config.layout.type} onSubmit={this.handleSubmit.bind(this)}>
                {this.generateItems()}
                {this.generateButton()}
            </Form>
        </div>;
    }
}

const ReactForm = Form.create({
    onValuesChange(props, values) {
        // Should provide an event to pass values to Form.
        if (typeof props.params === 'object') {
            let key = Object.keys(values)[0];
            if (!Utils.equals(props.params[key], values[key])) {
                props.onChange && props.onChange(Object.assign({}, props.params, values));
            }
        } else {
            props.onChange && props.onChange(values);
        }
    },
    // mapPropsToFields(props) {
    //     return props;
    // }
})(OriginForm);

// Update at 2017/10/26，使组件类型统一，在组件外增加一层壳子
// Form.create生成的组件是非BaseComponent类型的，需要外面再包一层壳子。
// 注意壳子只是用来声明组件类型的，不需要对参数进行任何处理，所以无需调用 __init() 函数
export default class NewForm extends BaseComponent {
    render() {
        return <ReactForm {...this.props}/>;
    }
}
