/**
 * @file ReactModal 适用于弹出层快速提交表单
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, message} from 'antd';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import UF from 'src';

class NewModal extends BaseComponent {
    constructor(props) {
        super(props);
        // 开放给用户使用的 Api，需处理下
        this._openApi.push('show', 'close');
        this.__init();
    }
    _beforeInit() {
        super._beforeInit();
        // 增加一些默认的事件处理函数
        this.__props = Object.assign({
            onCancel: this._defaultCancelHandler.bind(this),
        }, this.__props);
    }
    _afterSetProps() {
        super._afterSetProps();
        // footer的按钮点击时增加一些默认处理逻辑
        if (this.__props.footer) {
            let buttons = this.__props.footer;
            if (Utils.typeof(buttons, 'object')) {
                buttons = [buttons];
            }
            buttons = buttons.map(item=>{
                return this._handleButton(item);
            });
            this.__props.footerContent = this.__analysis(buttons);
            delete this.__props.footer;
        }
        // 如果有form属性，说明是form弹框，做额外处理
        if (this.__props.form) {
            let formConf = this.__props.form;
            if (Utils.typeof(formConf, 'function')) {
                formConf = formConf();
                // 如果form为函数，则认为用户想要每次都刷新form整个配置，所以此处给form.key一个随机值，使form强制刷新
                if (formConf.key === undefined) {
                    formConf.key = Utils.uniqueId();
                }
            } else {
                // 如果是
                delete this.__props.form;
            }
            // form配置
            formConf = Object.assign({
                type: 'form',
                wrappedComponentRef: inst=>{
                    this.formRef = inst;
                }
            }, formConf);
            // 兼容 formData 置于不同位置
            formConf.formData = formConf.formData || this.__props.params;
            // 可以写其他内容在content中，置于form之上
            this.__props.formContent = this.__analysis(formConf);
        }
    }

    /********** 外部调用函数 *************************************************/
    // 展示弹框
    show(data) {
        let newProps = {visible: true};
        // 保存传入的值
        if (data) {
            newProps.params = data;
        }
        // 重新执行 render 函数
        if (Utils.typeof(this.__props.render, 'function')) {
            newProps.renderContent = this.__analysis(this.__props.render(data));
        }
        this.__setProps(newProps, ()=>{
            // 如果是form弹框，填充form内容为data或重置
            this.formRef && this.formRef.resetValues(data);
        });
    }
    // 关闭弹框
    close() {
        this.__setProps({visible: false}, ()=>{
            // 如果是form弹框，重置form内容
            this.formRef && this.formRef.clearValues();
        });
    }

    /********** 内部调用函数 *************************************************/
    // 默认点击取消时的处理逻辑
    _defaultCancelHandler() {
        this.close();
    }
    // 获取参数函数，可能会在新子组件中重写
    _getParams() {
        // 如果是form弹框，返回form内容
        if (this.formRef) {
            let values = this.formRef.getValues();
            if (values) {
                return values;
            }
            // 如果验证失败，返回null，阻止提交数据
            return null;
        // 否则返回params
        } else {
            return this.__props.params || this.__filtered.api.params || {};
        }
    }
    // onSubmit 以此函数为入口
    _onSubmit(...op) {
        let params = this._getParams();
        if (!params) {
            return;
        }
        // 由于复用 BaseComponent 通用发送数据逻辑，从Form中获取到的数据直接放到 api.params 中，供action注册的onSubmit取用
        // this.__filtered.api.params 可能等于 undefined，此时merge无效
        // Utils.merge(this.__filtered.api.params, params);
        this.__filtered.api.params = params;
        // this.__props.onSubmit 有可能是用户自定义的，也有可能是action注册上去的
        let result = this.__props.onSubmit && this.__props.onSubmit(params, ...op);
        // 如果回调函数返回了promise实例，则展示按钮上的loading效果，防止多次点击
        if (result instanceof Promise) {
            this.__setProps({confirmLoading: true});
        }
        // 不管是否为Promise，成功与失败逻辑如下
        this.__compatePromise(result, success=>{
            let finish = this._onSuccess(result);
            this.__compatePromise(finish, success=>{
                this.__setProps({confirmLoading: false});
                this.close();
            });
        }, error=>{
            this.__setProps({confirmLoading: false});
        });
    }
    _onSuccess(...params) {
        return this.__props.onSuccess && this.__props.onSuccess(...params);
    }
    // 处理 footer 按钮
    _handleButton(item) {
        let result = Utils.copy(item);
        delete result.action;
        switch (item.action) {
            case 'submit':
                // action === 'submit' 的按钮和默认的确认按钮等价（onClick === onSubmit）
                this.__props.onSubmit = item.onClick || this.__props.onSubmit;
                result.onClick = this._onSubmit.bind(this);
                break;
            case 'cancel':
                // action === 'cancel' 的按钮和默认的取消按钮等价（onClick === onCancel)
                if (result.onClick) {
                    this.__props.onCancel = item.onClick;
                } else {
                    result.onClick = this.__props.onCancel;
                }
                break;
            default:
                break;
        }
        return result;
    }
    // 根据用户配置的 posRank 对展示内容进行排序
    // 默认顺序是：render|content|form
    getChildrenRank() {
        let map = {
            render: this.__props.renderContent,
            content: this.__props.children,
            form: this.__props.formContent
        };
        let rank = ['render', 'content', 'form'];
        if (this.__props.posRank) {
            let arr = this.__props.posRank.split('|');
            // 去重并取后三个，防止用户传入非规定的字符串导致程序异常
            rank = Utils.distinct(arr.concat(rank)).splice(-3);
        }
        return rank.map(v=>map[v]);
    }
    render() {
        // footer是在组件中解析的，解析后放置在footerContent中
        let selfProps = {
            onOk: this._onSubmit.bind(this)
        };
        if (this.__props.footerContent) {
            selfProps.footer = this.__props.footerContent;
        }
        // 获取排序后的结果
        let children = this.getChildrenRank();
        return <Modal {...Utils.filter(this.__props, 'children')} {...selfProps} className="uf-modal">
            {children[0]}
            {children[1]}
            {children[2]}
        </Modal>;
    }
}


/**** Modal静态类调用函数 *************************************************************************/

// 可随时随地用来创建新的弹框，且创建完成后返回destroy函数用于销毁弹框
NewModal.create = function (config) {
    config.type = 'modal';
    config.visible = config.visible || true;
    // 增加关闭弹窗删除dom节点逻辑
    return UF._append(config, null, 'onCancel');
};



/**** Modal自带快捷调用函数 *************************************************************************/

// 统一处理config（某些属性需要二次解析）
function showMessage(type, config) {
    for (let v of ['title', 'content']) {
        if (config[v] && !Utils.typeof(config[v], 'string')) {
            config[v] = UF.render(config[v]);
        }
    }
    config.className = 'uf-modal ' + (config.className ? config.className : '');
    return Modal[type](config);
}

NewModal.info = showMessage.bind(null, 'info');
NewModal.success = showMessage.bind(null, 'success');
NewModal.error = showMessage.bind(null, 'error');
NewModal.warning = showMessage.bind(null, 'warning');
NewModal.confirm = showMessage.bind(null, 'confirm');

export default NewModal;
