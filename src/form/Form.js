/**
 * @file 可配置表单
 * @author liuzechun
 */
import React from 'react';
import {BaseComponent} from 'src/base';
import DataEntry from 'src/antd/base/DataEntry.js';
import {Utils} from 'src/utils';
import moment from 'moment';
import {Form, Icon, Button, Tooltip, Row, Col} from 'antd';

export class OriginForm extends BaseComponent {
    constructor(props) {
        super(props);
        // 过滤掉Form.create传入的form属性
        this._filter.push('form', 'filterExtraFieldExcept');
        this._innerFilter.push('form', 'wrappedComponentRef');
        this._openApi.push('getValues', 'resetValues', 'clearValues', 'resetItem', 'resetItems', 'getDisplayValues');
        // 不复杂的属性，即无需merge处理直接覆盖的属性
        this._uncomplex.push('formData');
        this.__init();
        this.state = {
            loading: false
        };
        // this.props.form; Antd.Form封装的函数
        this.form = props.form;
        // 用于存储子Form的引用（因为无法直接拿到refs）
        this.formRef = {};
        // 用于存储表单元素的引用
        this.itemRef = {};
        // 组件原有配置中的 default 值
        this.oriDefaultValues = {};
        // 组件传入的或者reset的值
        this.defaultValues = {};
        // 用于记录当前form是否变换过（原来单个form通过复制新增等变为了多个）
        // this.isArrayForm = false;
        this.init();
        this.originItems = {};
        this.itemsCache = {};
    }
    init(nextProps) {
        // 过滤掉Form.create传入的form属性
        let props = this.__props;
        if (nextProps) {
            props = Utils.merge({}, props, nextProps);
        }
        // this.__props = props;
        props = Utils.filter(props, 'form');
        this.formItemLayout = this.getLayout(props.layout);
        // 使之成为受控组件，实现Form嵌套
        if (props.formData && !Utils.equals(this.defaultValues, props.formData)) {
            let data = this._formDataHandler(props.formData);
            this.setDefaultValues(data);
            nextProps && this.initValues();
        }
        // 如果items改变了，则把变化更新到 this.itemsCache 中
        // 这样写不严谨，不是直接放在items上的表单项无法遍历到
        // if (nextProps && nextProps.items && !Utils.equals(this.props.items, nextProps.items)) {
        //     let oldItems = {};
        //     this.props.items && this.props.items.forEach(item => {
        //         (item && item.name) && (oldItems[item.name] = item);
        //     });
        //     // 分别对每一项进行对比，仅更新需要更新的选项
        //     nextProps.items.forEach(item => {
        //         if (item && item.name && this.itemsCache[item.name] && Utils.isChange(item, oldItems[item.name])) {
        //             let changedConf = Utils.getChange(item, oldItems[item.name]);
        //             // 如果有type，需要重新处理type
        //             changedConf.type && (changedConf = this.__getConf(changedConf));
        //             Utils.merge(this.itemsCache[item.name], changedConf);
        //         }
        //     });
        // }
        nextProps && this.forceUpdate();
    }
    componentWillReceiveProps(nextProps) {
        if (this.__shouldUpdate(this.props, nextProps)) {
            this.init(nextProps);
        }
    }
    componentDidMount() {
        // 把this抛出，供外部调用，因为使用refs找不到包装前的OriginForm对象
        this.props.wrappedComponentRef && this.props.wrappedComponentRef(this);
        // 当组件didmount前执行了resetValues时，不再次执行initValues
        this.initValues();
    }
    // 保存初始值
    setDefaultValues(data) {
        // 防止改变原值
        this.defaultValues = Utils.clone(data || {});
    }
    // 把数据格式化成需要的格式
    // 调用 setFieldsValue 时，如果多传了字段，会报 warning，所以这里只返回可用的表单项的值
    // Warning: Cannot use `setFieldsValue` until you use `getFieldDecorator` or `getFieldProps` to register it.
    _encodeValues(values) {
        let result = {};
        for (let i in values) {
            let item = this.itemsCache[i];
            if (item && item.display !== false && item.type !== 'button') {
                result[i] = values[i];
                // 数字类型表单
                if (item.type === 'number') {
                    result[i] = +result[i];
                }
                if (item.type === 'checkbox' || item.type === 'switch') {
                    result[i] = !!+result[i];
                }
            }
        }
        return result;
    }
    // 把数据格式化成正常的格式
    _formatValues(values) {
        let result = {};
        for (let i in values) {
            let item = this.itemsCache[i];
            // 如果有 formatter 属性，则使用 formatter 进行格式化，否则进行
            if (item.formatter) {
                values[i] = item.formatter(values[i], item);
            } else if (values[i] instanceof moment) {
                // datepicker等返回的是moment对象，返回前先格式化成字符串
                // 理论上已经不存在这种情况，暂时先保留
                if (this.itemsCache[i] && this.itemsCache[i].format) {
                    values[i] = values[i].format(this.itemsCache[i].format);
                }
            } else if (item.valueType) {
                // 用 format 把数据格式化成 rules.type 要求的格式
                values[i] = Utils.format(values[i], item.valueType);
            }
            if (item && item.type !== 'button') {
                result[i] = values[i];
            }
        }
        return result;
    }
    // 过滤掉多余字段
    _filterExtraField(values) {
        // 过滤除 filterExtraFieldExcept 之外的多余字段
        let whiteListStr = this.__filtered.filterExtraFieldExcept;
        let whiteList = [];
        if (Utils.typeof(whiteListStr, 'string')) {
            whiteList = whiteListStr.split(',');
        }
        let result = {};
        for (let i in values) {
            if (this.itemsCache[i] || whiteList.indexOf(i) > -1) {
                result[i] = values[i];
            }
        }
        return result;
    }


    /* 外部调用函数 **********************************************************************/

    getValues(validate = true) {
        // 校验数据
        if (validate && this.validateFields()) {
            return;
        }
        let values = this.form.getFieldsValue();
        values = this._formatValues(values);
        values = Object.assign({}, this.defaultValues, values);
        if (this.__filtered.filterExtraFieldExcept) {
            values = this._filterExtraField(values);
        }
        if (this.__props.beforeSubmit) {
            values = this.__props.beforeSubmit(values);
        }
        return values;
    }
    // 设置表单的值
    setValues(data) {
        this.form.setFieldsValue(data);
    }
    resetValues(o) {
        // 如果传入的值为空或者未设置的字段，则使用组件配置的default的值对组件进行初始化
        let resetVal = Object.assign({}, this.oriDefaultValues, o);
        let newData = Utils.clone(this._formDataHandler(resetVal));
        this.setDefaultValues(newData);
        this.initValues(newData);
    }
    // 清除表单。有别于重置
    clearValues() {
        let values = this.getClearValues();
        this.form.setFieldsValue(values);
    }
    // 更新某个表单项的配置
    resetItem(target, conf) {
        // let targetConf = this.itemsCache[target];
        // if (targetConf) {
        //     this.itemRef[target].set(conf);
        //     this.__mergeProps(targetConf, conf);
        // }
        this.joinSetValue(target, conf);
        this.forceUpdate();
    }
    // 更新多个表单项
    resetItems(config) {
        for (let i in config) {
            this.resetItem(i, Utils.filter(config[i]));
        }
    }
    // 获取表单中输入/选择完成后端展示内容
    getDisplayValues() {
        let result = Utils.each(Object.assign({}, this.itemRef, this.formRef), (item, name) => {
            if (!item) {
                return;
            }
            let getDisplay = item.getDisplayValue || item.getDisplayValues;
            return getDisplay ? getDisplay() : this.form.getFieldValue(name);
        });
        return result;
    }

    /* 组件内部逻辑 **********************************************************************/
    // 获取全部字段清空数据
    getClearValues(encode = true) {
        let values = {};
        for (let i in this.itemsCache) {
            values[i] = undefined;
        }
        if (encode) {
            values = this._encodeValues(values);
        }
        return values;
    }
    // 上传文件回调
    normFile(e) {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    // 校验数据
    validateFields() {
        let haveErr = false;
        this.form.validateFields((err, values) => {
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
    // 根据传入的 formData 设置初始值
    // TODO: 新数据传入，要重设全部字段？
    initValues(values) {
        values = values || this.defaultValues;
        // 清空未设置的值
        values = Object.assign({}, this.getClearValues(false), values);
        values = this._encodeValues(values);
        if (values && !Utils.empty(values)) {
            // 设置初始值前对传入的 formData 格式化
            if (this.__props.beforeSetValues) {
                values = this.__props.beforeSetValues(values);
            }
            this.form.setFieldsValue(values);
            // 如果设置了联动属性，均要触发onChange事件
            for (let i in values) {
                let item = this.itemsCache[i];
                if (item && item.display !== false) {
                    this.onChange(item, values[i]);
                }
            }
        }
    }
    // 对传入参数进行格式化
    _formDataHandler(data) {
        if (this.__props.formDataHandler) {
            data = this.__props.formDataHandler(data);
        }
        return data;
    }
    // 实现联动功能
    onChange(item, val, string) {
        if (string !== undefined) {
            val = string;
        } else if (Utils.typeof(val, 'object') && val.target) {
            if (val.target.value !== undefined) {
                val = val.target.value;
            } else if (val.target.checked !== undefined) {
                val = val.target.checked;
            }
        }
        // 实现联动
        if (item.join) {
            // 改为异步处理联动(否则联动的下拉框中，option还未设置是联动的value不生效)
            // 但是异步时，需要完成联动后刷新form，否则不会产生效果
            // TODO: 待斟酌
            Utils.defer(()=>{
                for (let i in item.join) {
                    // 本组件的ref
                    let self = this.itemRef[item.name];
                    this.joinSetValue(i, item.join[i], val, self);
                }
                this.forceUpdate();
            });
        }
    }
    // 前两个参数必填，后两个参数选填
    joinSetValue(name, props, val, self) {
        // 如果目标组件名称中间使用了.进行了分隔，则目标为一个复杂的组件（最终操作的目标不在同级）
        let nameArr = name.split('.');
        let isComplex = nameArr.length > 1;
        let parentName = nameArr[0];
        let attrName = nameArr[1];
        let parentTarget = this.formRef[parentName];

        // 整个联动组件配置支持为一个函数
        if (Utils.typeof(props, 'function')) {
            // 参数：value, 目标组件配置, 当前联动组件配置
            props = props(val, parentTarget, self);
        }

        // 处理属性
        let newConf = {};
        for (let j in props) {
            // 目标组件的ref
            let target = this.itemRef[name];
            // 属性结果
            let attrVal = props[j];
            let oValue;
            target && (oValue = target.get(j));
            if (Utils.typeof(attrVal, 'function')) {
                // 参数依次为：当前组件值，目标组件原值，目标组件ref，当前组件ref
                // attrVal = attrVal(val, oValue, target || parentTarget, self);
                // 参数依次为：当前组件值，目标组件原值，其他（包括目标组件ref、当前组件ref、Form的引用等）
                attrVal = attrVal(val, oValue, {target, parentTarget, self, form: this});
            }
            // 特殊值处理，:value/:label
            if (Utils.typeof(attrVal, 'string') && (
                attrVal.indexOf(':value') > -1
                || attrVal.indexOf(':checked') > -1
                || attrVal.indexOf(':label') > -1
                || attrVal.indexOf(':old') > -1
            )) {
                let label = self.getDisplayValue ? self.getDisplayValue() : '';
                // 支持使用表达式
                attrVal = eval(
                    attrVal
                        .replace(':value', JSON.stringify(val))
                        .replace(':checked', JSON.stringify(val))
                        .replace(':label', JSON.stringify(label))
                        .replace(':old', JSON.stringify(oValue))
                );
            }
            switch (j) {
                case 'checked':
                case 'value': {
                    if (isComplex) {
                        parentTarget.resetValues({[attrName]: attrVal});
                    } else {
                        if (this.itemRef[name] || this.formRef[name]) {
                            this.form.setFieldsValue({[name]: attrVal});
                        }
                        this.onChange(this.itemsCache[name], attrVal);
                    }
                    break;
                }
                case 'display':
                    // 如果是从不展示到进行展示转变，则把默认值一并填上
                    if (attrVal) {
                        if (this.defaultValues[name] !== undefined) {
                            newConf['default'] = this.defaultValues[name];
                            // 当组件已存在时（存在display为false但组件未来得及销毁的情况），设置default无效，需使用form api设置
                            if (this.itemRef[name] || this.formRef[name]) {
                                this.form.setFieldsValue({[name]: newConf['default']});
                            }
                        }
                    }
                // break;
                default: {
                    // newConf[j] = attrVal;
                    // j 支持使用多层级属性，例如：source.params.type
                    Utils.toObject(newConf, j, attrVal);
                    break;
                }
            }
        }
        if (isComplex) {
            parentTarget.resetItem(attrName, newConf);
        } else {
            // 保证能引起组件刷新（例如重新获取数据）
            // 设置display属性由false变为true时，组件不存在
            this.itemRef[name] && this.itemRef[name].set(newConf);
            this.__mergeProps(this.itemsCache[name], newConf);
        }
    }
    // 根据布局参数生成布局配置
    getLayout(layout) {
        return {
            labelCol: {span: layout.labelCol},
            wrapperCol: {span: layout.wrapperCol}
        };
    }
    // TODO: 函数太长了，需要整理下
    // 生成单个表单项
    getFormItem(oitem) {
        // 增加权限过滤
        if (!oitem || !oitem.type || oitem.type === 'empty' || !this.__authority(oitem)) {
            return;
        }
        if (!oitem.name) {
            // 这里只有第一次进入而且没name的时候才会进到这里，后面重新render回跳过这儿
            oitem = this.__getConf(oitem);
        }
        if (!oitem.name || oitem.notFormItem) {
            // button类型可以不写name，这里生成一个随机的
            if (oitem.type === 'button') {
                oitem.name = Utils.uniqueId();
            } else {
                // 支持form中使用其他非录入数据功能的组件（无name）（展示类型的组件）
                // ！！注：一个组件是否是一个FormItem是通过是否有name判断的，没name的全部直接渲染
                // 遍历content，以支持展示类组件内部嵌套表单组件
                if (oitem.content) {
                    oitem.children = Utils.traverse(oitem.content, content => {
                        // 非对象的不再解析直接返回
                        if (Utils.typeof(content, 'object')) {
                            return this.getFormItem(content);
                        }
                        if (Utils.typeof(content, 'array')) {
                            return content.map(it => {
                                return this.getFormItem(it);
                            });
                        }
                        return content;
                    });
                }
                return this.__analysis(Utils.filter(oitem, 'content'));
            }
        }
        let key = oitem.name;
        // 将当前传入的item和之前缓存（originItems）的item的原始值进行对比，如果有更新的内容，则将更新的值更新到itemsCache中
        //  待观察
        if (this.originItems[key] && this.itemsCache[key]) {
            let changedConf = Utils.getChange(oitem, this.originItems[key]);
            // 如果有type，需要重新处理type
            changedConf.type && (changedConf = this.__getConf(changedConf));
            Utils.merge(this.itemsCache[key], changedConf);
        }
        this.originItems[key] = oitem;
        // 把表单项额外存起来，方便后面各种联动的控制（需要改配置里的参数）
        if (this.itemsCache[key]) {
            oitem = this.itemsCache[key];
        } else {
            // items中的表单项可能使用了模板，需提前处理。因为部分属性form也需要使用
            oitem = this.__getConf(oitem);
            this.itemsCache[key] = oitem;
        }
        if (oitem.display === false) {
            delete this.itemRef[key];
            delete this.formRef[key];
            return;
        }
        const getFieldDecorator = this.form.getFieldDecorator;
        let itemLayout;
        // 每个表单的布局可以独立控制
        if (oitem.layout) {
            itemLayout = this.getLayout(oitem.layout);
        } else {
            itemLayout = this.__props.layout.type === 'horizontal' ? this.formItemLayout : null;
        }
        let item = Object.assign({}, oitem);
        let itemRules = {};
        delete item.layout;
        // 如果rules外单独设置了required属性，则以此值为准
        if (item.required !== undefined) {
            itemRules['required'] = item.required;
        }
        // form中不允许表单域使用value，所以如果有value值，把值转换到default上
        item.default = item.value !== undefined
                ? item.value
                : (item.default !== undefined ? item.default : item.defaultValue);
        if (item.default !== undefined) {
            this.oriDefaultValues[item.name] = item.default;
        }
        // 过滤掉一些字段后，剩余的就是组件本身需要的参数
        let itemProps = Utils.filter(
            item,
            ['label', 'default', 'value', 'help', 'extra', 'rules', 'join', 'regionConfig', 'valueType']
        );
        // 额外配置的禁止更改的字段，设置disabled
        if ((this.__props.forbidden || []).indexOf(itemProps.name) > -1) {
            itemProps.disabled = true;
        }
        // 可以统一控制输入框等的大小
        if (this.__props.size) {
            itemProps.size = itemProps.size || this.__props.size;
        }
        // 触发Change时实现联动功能
        this._inject(itemProps, 'onChange', this.onChange.bind(this, item), true)
        // 存储ref
        if (item.type !== 'button') {
            itemProps.ref = inst => (this.itemRef[key] = inst);
        }
        let otherOptions = {};
        switch (item.type) {
            case 'group':
            case 'forms':
            case 'form':
                if (item.type === 'group') {
                    itemProps.type = 'form';
                    // 子form如果使用group的type则去掉label
                    itemLayout = {labelCol: {span: 0}, wrapperCol: {span: 24}};
                } else if (item.type === 'forms') {
                    // forms组件的formData为一个数组
                    itemRules['type'] = 'array';
                    item.default = item.default || item.formData || [{}];
                }
                // 三种组件的通用个逻辑
                itemProps.wrappedComponentRef = inst => (this.formRef[key] = inst);
                delete itemProps.ref;
                otherOptions = {
                    valuePropName: 'formData'
                };
                item.default = item.default || item.formData || {};
                delete itemProps.formData;
                itemRules['type'] = itemRules['type'] || 'object';
                break;
            case 'input':
                // 输入框增加回车事件监听
                if (itemProps.onPressEnter === undefined) {
                    itemProps.onPressEnter = this.handleSubmit.bind(this);
                }
                // 收集值的时机改为onBlur
                // otherOptions.trigger = 'onBlur';
                // otherOptions.validateTrigger = 'onBlur';
                break;
            case 'input-number':
                // 数字输入框
                itemRules['type'] = 'number';
                // 收集值的时机改为onBlur，防止强制转换导致的不可输入情况
                // otherOptions.trigger = 'onBlur';
                // 可减少一些输入过程中的报错信息
                // otherOptions.validateTrigger = 'onBlur';
                break;
            case 'select':
            case 'radio':
                if (item.type === 'select') {
                    if (item.mode && item.mode !== 'combobox') {
                        itemRules['type'] = 'array';
                    }
                    // 当有required时，再加message，否则会产生默认type为string
                    if (itemRules['required']) {
                        itemRules['requiredMsg'] = `请选择${item.label || ''}`;
                    }
                    // 默认选中第一个
                    if (!item.default && item.defaultFirst) {
                        item.default = Utils.getFirstOption(item.options);
                    }
                    // 限制使用clear按钮
                    if (itemRules['required']) {
                        itemProps.allowClear = false;
                    }
                }
                // 两种组件的通用逻辑
                // 更改获onchange时form获取组件值的逻辑，把数据格式化为需要的格式
                otherOptions = {
                    getValueFromEvent(e, value) {
                        if (value === '' || value === undefined) {
                            return value;
                        }
                        // 如果没有设置类型，则根据default定义类型做转换
                        let type = itemRules.type || (item.default !== undefined ? Utils.getType(item.default) : null);
                        return type ? Utils.format(value, type) : value;
                    }
                };
                break;
            case 'checkbox':
            case 'switch':
                itemProps.content = itemProps.content || itemProps.placeholder;
                otherOptions = {
                    valuePropName: 'checked'
                };
                itemRules['type'] = 'boolean';
                break;
            case 'checkbox-group':
                // 复选框组
                itemRules['type'] = 'array';
                break;
            case 'ueditor':
                // ueditor 输入框
                otherOptions = {
                    valuePropName: 'data'
                };
                break;
            case 'cascader':
                // 级联选择
                itemProps = Object.assign({
                    showSearch: true
                }, itemProps);
                itemRules['type'] = 'array';
                itemRules['typeMsg'] = `请选择${item.label || ''}`;
                // 限制使用clear按钮
                if (itemRules['required']) {
                    itemProps.allowClear = false;
                }
                break;
            case 'upload': {
                // 文件上传
                let isDisabled = {};
                // 可根据limit属性限制上传文件个数
                let limit = itemProps.limit;
                if (limit) {
                    let list = this.form.getFieldValue(key) || [];
                    itemProps.disabled = list.length >= limit;
                }
                otherOptions = {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile.bind(this)
                };
                break;
            }
            case 'range-picker':
                // range-picker 组件的value为一个数组
                itemRules['type'] = 'array';
                // current转换为当前时间
                if (!Utils.empty(item.default) && Utils.typeof(item.default, 'array')) {
                    item.default = item.default.map(val => {
                        // current转换为当前时间
                        if (val === 'current') {
                            return Utils.moment({}).format(item.format || 'YYYY-MM-DD HH:mm:ss');
                        } else {
                            return val;
                        }
                    });
                }
            case 'date-picker':
            case 'month-picker':
            case 'time-picker':
                // 更改获onchange时form获取组件值的逻辑，传出的为字符串
                otherOptions = {
                    // 对从组件内传出的数据进行处理，直接取时间字符串
                    getValueFromEvent(date, string) {
                        return string;
                    }
                };
                // current转换为当前时间
                if (item.default === 'current') {
                    item.default = Utils.moment({}).format(item.format || 'YYYY-MM-DD HH:mm:ss');
                }
                // 限制使用clear按钮
                if (itemRules['required']) {
                    itemProps.allowClear = false;
                }
                break;
            case 'button':
                // 带有各种功能的按钮
                itemProps.content = itemProps.content || item.label;
                return this.getButtonItem(itemProps, itemLayout);
            default:
                let Item = this._factory.getComp(item);
                // 如果不是输入型组件，且没有content属性，设置受控属性为content
                // 则将组件受控属性设置为children(content)，即当Form中的item.name对应的字段值变化时，展示的内容随着变化
                if (!Utils.isExtendsOf(Item, DataEntry) && itemProps.content === undefined) {
                    otherOptions.valuePropName = 'children';
                }
                break;
        }
        // 通用的默认错误提示信息
        if (itemRules['required']) {
            itemRules['requiredMsg'] = itemRules['requiredMsg'] || `${item.label || ''}不能为空`;
        }
        if (itemRules['type']) {
            itemRules['typeMsg'] = itemRules['typeMsg'] || `${item.label || ''}数据格式有误`;
            if (itemRules['type'] === 'array') {
                itemRules['typeMsg'] += '，应为一个数组';
            }
            if (itemRules['type'] === 'number') {
                itemRules['typeMsg'] += '，应为一个数字';
            }
        }
        // 处理rules
        let rules = item.rules;
        if (Utils.typeof(rules, 'object')) {
            rules = [rules];
        }
        let valueType = null;
        rules = (rules || []).map(rule=>{
            if (rule.type) {
                // enum类型，一般用于Select组件，未定义enum属性，自动追加options的value
                // TODO: 通过source获取的options，如何在form中获取到
                // if (rule.type === 'enum' && (!rule.enum || rule.noEnum)) {
                //     rule.noEnum = true;
                //     rule.enum = Utils.optionValues(item.options);
                if (rule.type === 'enum') {
                } else {
                    valueType = rule.type;
                }
            }
            return rule;
        });
        // required放在验证最前面
        if (itemRules['required']) {
            rules.unshift({required: true, message: itemRules['requiredMsg']});
        }
        // 只有当用户未指定type时，默认type验证才有效
        if (!valueType && itemRules['type']) {
            valueType = itemRules['type'];
            rules.push({type: itemRules['type'], message: itemRules['typeMsg']});
        }
        // 对数据格式进行存储
        valueType && !item.valueType && (item.valueType = valueType);

        // 进行类型进行强制转换
        // 只有 trigger 为 onChange/onBlur 有效
        let trigger = (item.regionConfig && item.regionConfig.trigger) || otherOptions.trigger;
        if (valueType && ['number', 'string', 'boolean'].indexOf(valueType) > -1
            && ['onChange', 'onBlur', undefined].indexOf(trigger) > -1) {
            otherOptions.getValueFromEvent = (e, value) => Utils.format(value, valueType);
        }
        // 保存默认值，以form渲染完成后执行initValues
        if (item.default !== undefined) {
            item.default = Utils.format(item.default, valueType);
            // this.oriDefaultValues[item.name] = item.default;
            if (this.defaultValues[item.name] === undefined) {
                this.defaultValues[item.name] = item.default;
            }
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
            extra: this.__analysis(item.extra)
        };
        return <Form.Item {...fieldProps} {...itemLayout}>
            {getFieldDecorator(key, Object.assign({
                initialValue: item.default,
                rules: rules
            }, otherOptions, item.regionConfig))(
                // 作为子组件解析
                this.__analysis(itemProps)
            )}
        </Form.Item>;
    }
    handleSubmit(e, callback) {
        // 否则阻止提交按钮默认事件
        e && e.preventDefault();
        let onSubmit = callback || this.__props.onSubmit;
        // 如果没有传入callback且没有props.onSubmit回调函数，则submit没有被捕获，不阻止提交（方便后面增加 action 扩展提交功能）
        if (!onSubmit) {
            return true;
        }
        let values = this.getValues();
        if (values) {
            let result = onSubmit(values, this);
            // 如果回调函数返回了promise实例，则展示按钮上的loading效果，防止多次点击
            if (result instanceof Promise) {
                this.setState({loading: true});
                result.catch(() => {}).finally(
                    resolve => this.setState({loading: false})
                );
            }
        }
    }
    // submit按钮不进行处理，转移到 handleSubmit 函数上处理，在 handleSubmit 函数上判断是否需要阻止提交按钮默认事件
    submitClick(callback, e) {
        this.handleSubmit(e, callback);
    }
    resetClick(callback) {
        this.resetValues();
        callback && callback(this);
    }
    clearClick(callback) {
        this.clearValues();
        callback && callback(this);
    }
    // 自定义按钮点击事件，返回表单数据
    customClick(callback) {
        let values = this.getValues(false);
        callback && callback(values, this);
    }
    // 其他
    othersClick(callback) {
        callback && callback(this);
    }
    // 获取表单项中的 button 类型的按钮
    getButtonItem(item, itemLayout = {}) {
        let handleClick;
        let icon;
        switch (item.action) {
            case 'clear':
                icon = 'delete';
                handleClick = this.clearClick.bind(this, item.onClick);
                break;
            case 'reset':
                icon = 'reload';
                handleClick = this.resetClick.bind(this, item.onClick);
                break;
            case 'submit':
                icon = 'search';
                handleClick = this.handleSubmit.bind(this, null, item.onClick);
                break;
            default:
                handleClick = this.othersClick.bind(this, item.onClick);
                break;
        }
        let oriOnClick = item.onClick;
        let props = Object.assign({
            key: item.name,
            type: item.mode,
            icon: icon,
            style: {marginLeft: '8px'}
        }, item, {
            onClick: handleClick
        });
        return this.__analysis(props);
        // 多个按钮时不合适
        // return <Form.Item key={item.name} {...itemLayout}>
        //     {this.__analysis(props)}
        // </Form.Item>;
    }
    // 处理表单组
    generateFormItemsGroup(gitem) {
        if (!gitem.length) {
            return;
        }
        let result = [];
        // this.__props.layout.column;
        let layout = {span: 24 / gitem.length};
        gitem.forEach((item, index) => {
            if (!item) {
                return;
            }
            let formItem;
            if (item instanceof Array) {
                formItem = <Row>{this.generateFormItemsGroup(item)}</Row>;
            } else {
                formItem = this.getFormItem(item);
                (item.type === 'button') && (layout = null);
            }
            result.push(
                !!layout ? <Col key={item.name || index} {...layout}>{formItem}</Col> : formItem
            );
        });
        return result;
    }
    // 生成表单项列表
    generateFormItems(items) {
        let result = [];
        let index = 0;
        for (let item of items) {
            if (item instanceof Array) {
                result.push(
                    <Row key={`items-${index}`}>{this.generateFormItemsGroup(item)}</Row>
                );
            } else {
                result.push(this.getFormItem(item));
            }
            index++;
        }
        return result;
    }
    // 生成表单内容
    renderItems() {
        let column = this.__props.layout.column;
        let items = this.__props.items;
        if (column) {
            let merge = [];
            // Add at 2019-03-27，display: 'none'时，组件不规划到布局中，直接把组件剔除。其他情况暂不做考虑
            // 不知为啥，会导致有些组件的值获取不到。暂时先删除吧
            // items = items.filter(v => {
            //     // 由于 display:none 是更新到 this.itemsCache 中，所以要在这上面取
            //     if (v && v.name && this.itemsCache[v.name] && this.itemsCache[v.name].display === 'none') {
            //         return false;
            //     }
            //     return true;
            // });
            // 布局计算
            items.forEach((v, i) => {
                let index = Math.floor(i / column);
                merge[index] = merge[index] || [];
                // 如果v为null或空等，则不在加入到这一行，和{type: 'empty'}有区别：
                // 前者直接移除，布局会调整；后者依然在布局的逻辑中，剩余的表单项和其他表单项布局一致
                v && merge[index].push(v);
            });
            // 最后一行，如果列不够自动补齐
            let lastArr = merge[merge.length - 1];
            while (lastArr.length < column) {
                // 如果最后一项这是了layout，则证明用户想要自己布局，无需再做处理
                let lastItem = lastArr[lastArr.length - 1];
                if (lastItem && lastItem.layout) {
                    break;
                }
                lastArr.push({type: 'empty'});
            }
            items = merge;
        }
        return this.generateFormItems(items);
    }
    // 解析 Button 的配置，格式化成统一格式
    analysisButtonConfig() {
        const buttonsCfg = this.__props.buttons;
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
    renderButtons() {
        const buttonsCfg = this.analysisButtonConfig();
        if (!buttonsCfg) {
            return;
        }
        return (
            <Row type="flex" justify={buttonsCfg.layout.type}>
                <Col {...buttonsCfg.layout}>
                    <Form.Item key="buttons">
                        <div className="form-buttons">
                            {buttonsCfg.items.map(item => {
                                let value = item.value || (item.content && this.__analysis(item.content));
                                item.mode && (item.type = item.mode);
                                switch (item.action) {
                                    case 'submit':
                                        if (item.icon === undefined) {
                                            item.icon = 'search';
                                        }
                                        return <Button key="submit" {...item}
                                            loading={this.state.loading}
                                            onClick={this.submitClick.bind(this, item.onClick)}>
                                            {value}
                                        </Button>;
                                    case 'reset':
                                        if (item.icon === undefined) {
                                            item.icon = 'reload';
                                        }
                                        return <Button key="reset" {...item}
                                            onClick={this.resetClick.bind(this, item.onClick)}>
                                            {value}
                                        </Button>;
                                    case 'clear':
                                        if (item.icon === undefined) {
                                            item.icon = 'delete';
                                        }
                                        return <Button key="clear" {...item}
                                            onClick={this.clearClick.bind(this, item.onClick)}>
                                            {value}
                                        </Button>;
                                    default:
                                        return <Button key={item.value || Utils.hash(item, 8)} {...item}
                                            onClick={this.customClick.bind(this, item.onClick)}>
                                            {value}
                                        </Button>;
                                }
                            })}
                        </div>
                    </Form.Item>
                </Col>
            </Row>
        );
    }
    render() {
        let className = 'uf-form ';
        if (this.__props.layout.type === 'inline') {
            className += 'uf-form-inline ';
        }
        if (this.__props.size) {
            className += `uf-form-${this.__props.size} `;
        }
        if (this.__props.layout.column) {
            className += 'uf-form-multiseriate ';
        }
        const style = {
            className: className + (this.__props.className || ''),
            style: this.__props.style
        };
        // 当没有配置header是，省略外层的div标签
        return !this.__props.header
            ? (
                <Form {...style} layout={this.__props.layout.type} onSubmit={this.handleSubmit.bind(this)}>
                    {this.renderItems()}
                    {this.renderButtons()}
                </Form>
            ) : (
                <div {...style}>
                    {(
                        // header 可以是字符串，也可以是一个组件配置
                        Utils.typeof(this.__props.header, 'string') ? (
                            <div className="form-header">
                                <h5>{this.__props.header}</h5>
                                <hr />
                            </div>
                        ) : (
                                <div className="form-header">
                                    {this.__analysis(this.__props.header)}
                                </div>
                            )
                    )}
                    <Form layout={this.__props.layout.type} onSubmit={this.handleSubmit.bind(this)}>
                        {this.renderItems()}
                        {this.renderButtons()}
                    </Form>
                </div>
            );
    }
}

const ReactForm = Form.create({
    onValuesChange(props, values) {
        // Should provide an event to pass values to Form.
        if (props.onChange) {
            if (typeof props.formData === 'object') {
                if (Utils.isChange(values, props.formData) || props.onChange.valuesStr !== JSON.stringify(values)) {
                    // 缓存上次传入的结果
                    props.onChange.valuesStr = JSON.stringify(values);
                    props.onChange(Object.assign({}, props.formData, values));
                }
            } else {
                props.onChange(values);
            }
        }
    }
})(OriginForm);

// Update at 2017/10/26，使组件类型统一，在组件外增加一层壳子
// Form.create生成的组件是非BaseComponent类型的，需要外面再包一层壳子。
// 注意壳子只是用来声明组件类型的，不需要对参数进行任何处理，所以无需调用 __init() 函数
export default class NewForm extends BaseComponent {
    render() {
        return <ReactForm {...this.props} />;
    }
}
