/**
 * @file 可配置表单
 * @author liuzechun@baidu.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Icon, Spin, Button, message, Tooltip} from 'antd';
import {Input, Select, Cascader, Radio, Upload, Checkbox, InputNumber} from 'antd';
import Ueditor from 'uf/ueditor';
import './sass/_form.scss';

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.init();
    }
    init() {
        let config = this.props.config;
        this.config = Object.assign({
            title: '新增图片',
            items: [],
            buttons: null
        }, config, {
            layout: {
                type: (config.layout && config.layout.type) || 'horizontal',
                labelCol: (config.layout && config.layout.labelCol) || 6,
                wrapperCol: (config.layout && config.layout.wrapperCol) || 14
            }
        });
        let {labelCol, wrapperCol} = this.config.layout;
        this.formItemLayout = {
            labelCol: {span: labelCol},
            wrapperCol: {span: wrapperCol}
        };
        this.formButtonsLayout = {
            wrapperCol: {span: wrapperCol, offset: labelCol}
        };
        this.defaultValues = this.props.params;
    }
    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        // 是之成为受控组件，实现Form嵌套
        if ('params' in nextProps) {
            if (JSON.stringify(this.defaultValues) !== JSON.stringify(nextProps.params)) {
                this.defaultValues = nextProps.params;
                this.setDefaultValue();
            }
        }
    }
    componentDidMount() {
        // 把this抛出，供外部调用，因为使用refs找不到包装前的ReactForm对象
        this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
        this.setDefaultValue();
    }
    componentWillUpdate() {
        this.init();
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
        this.setDefaultValue(o);
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
        let values = this.props.form.getFieldsValue();
        // 把传入的 props.params 和 form 表单里数据合并后一起提交，可以用此方法传递额外需要的参数
        values = Object.assign({}, this.defaultValues, values);
        if (this.config.beforeSubmit) {
            values = this.config.beforeSubmit(values);
        }
        return values;
    }
    // 校验数据
    validateFields() {
        let haveErr = false;
        this.props.form.validateFields((err, values)=>{
            err && (haveErr = true);
        });
        return haveErr;
    }
    // 根据传入的 props.params 设置初始值
    setDefaultValue(values) {
        if (values || this.defaultValues) {
            values = values || this.defaultValues;
            // 设置初始值前对传入的 props.params 格式化
            if (this.config.beforeSetValues) {
                values = this.config.beforeSetValues(values);
            }
            this.props.form.resetFields();
            this.props.form.setFieldsValue(values);
        } else {
            this.props.form.resetFields();
        }
    }
    handleSubmit(e, callback) {
        // 如果没有传入callback且没有props.onSubmit回调函数，则submit没有被捕获，不阻止提交（方便后面增加 action 扩展提交功能）
        if (!callback && !this.props.onSubmit) {
            return true;
        }
        let submit = callback || this.props.onSubmit;
        // 否则阻止提交按钮默认事件
        e && e.preventDefault();
        if (this.validateFields()) {
            return;
        }

        let values = this.getFieldsValue();
        let result = submit(values);

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
        this.props.form.resetFields();
        callback && callback();
    }
    // 自定义按钮点击事件，返回表单数据
    customClick(callback) {
        if (this.validateFields()) {
            return;
        }
        let values = this.getFieldsValue();
        callback && callback(values);
    }
    generateList() {
        const getFieldDecorator = this.props.form.getFieldDecorator;
        const itemLayout = this.config.layout.type === 'horizontal' ? this.formItemLayout : null;
        let result = [];
        for (let item of this.config.items) {
            item.cfg = item.cfg || {};
            item.rules = item.rules || [{required: false}];
            let itemContent;
            let otherOptions;
            switch (item.type) {
                case 'input':
                    // 输入框
                    itemContent = <Input {...item.cfg} />;
                    break;
                case 'number':
                    // 数字输入框
                    itemContent = <InputNumber {...item.cfg} />;
                    item.rules[0]['type'] = item.rules[0]['type'] || 'integer';
                    // 验证前先把数据强制转换成数字
                    item.rules[0]['transform'] = item.rules[0]['transform'] || (v=>v !== '' ? +v : '');
                    break;
                case 'textarea':
                    // 文本框
                    itemContent = <Input type="textarea" {...item.cfg} />;
                    break;
                case 'checkbox':
                    itemContent = <Checkbox>{item.cfg.placeholder}</Checkbox>;
                    otherOptions = {
                        valuePropName: 'checked'
                    };
                    break;
                case 'ueditor':
                    // ueditor 输入框
                    itemContent = <Ueditor config={item.cfg} />;
                    break;
                case 'select':
                    // 下拉列表
                    itemContent = (
                            <Select {...item.cfg}>
                                {(item.cfg.options || []).map(v=>
                                    typeof v === 'object'
                                        ? <Select.Option key={v.value} value={v.value}>{v.label}</Select.Option>
                                        : <Select.Option key={v} value={v}>{v}</Select.Option>
                                )}
                            </Select>
                        );
                    break;
                case 'upload':
                    // 文件上传
                    let isDisabled = {};
                    // 可根据limit属性限制上传文件个数
                    let limit = item.cfg.limit;
                    if (limit) {
                        let list = this.props.form.getFieldValue(item.name) || [];
                        isDisabled = {disabled: list.length >= limit};
                    }
                    itemContent = (
                            <Upload {...item.cfg} {...isDisabled}>
                                <Button>
                                    <Icon type="upload" /> {item.cfg.label || '上传文件'}
                                </Button>
                            </Upload>
                        );
                    otherOptions = {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile.bind(this)
                    };
                    break;
                case 'cascader':
                    // 级联选择
                    itemContent = <Cascader {...item.cfg} />;
                    item.rules[0]['type'] = item.rules[0]['type'] || 'array';
                    break;
                case 'radio-group':
                    // 单选按钮组
                    itemContent = (
                        <Radio.Group {...item.cfg} />
                    );
                    break;
                case 'checkbox-group':
                    // 复选框组
                    itemContent = (
                        <Checkbox.Group {...item.cfg} />
                    );
                    item.rules[0]['type'] = item.rules[0]['type'] || 'array';
                    break;
                default:
                    // 自定义组件，略复杂
                    itemContent = '';
                    break;
            }
            if (itemContent) {
                let props = {
                    key: item.name,
                    label: !item.help
                        ? item.label
                        : <span>{item.label}&nbsp;
                                <Tooltip title={item.help}>
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>,
                    extra: item.extra
                };
                result.push(
                    <Form.Item {...props} {...itemLayout}>
                        {getFieldDecorator(item.name, Object.assign({
                            initialValue: item.default || '',
                            rules: item.rules
                        }, otherOptions))(itemContent)}
                    </Form.Item>
                );
            }
        }
        return result;
    }
    generateButton() {
        const buttonsLayout = this.config.layout.type === 'horizontal' ? this.formButtonsLayout : null;
        const buttonsCfg = this.config.buttons;
        if (!buttonsCfg) {
            return;
        }
        return (
            <Form.Item {...buttonsLayout}>
                <div className='form-buttons'>
                {buttonsCfg.map(item => {
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
        );
    }
    render() {
        return <div className="uf-form">
            <Form layout={this.config.layout.type} onSubmit={this.handleSubmit.bind(this)}>
                {this.generateList()}
                {this.generateButton()}
            </Form>
        </div>;
    }
}

export default Form.create()(ReactForm);
