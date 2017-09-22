/**
 * @file ReactModal 适用于弹出层快速提交表单
 * @author liuzechun@baidu.com
 * */
import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button} from 'antd';
import ReactForm from './ReactForm';

export default class ReactModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            loading: false
        };
        this.init();
        // 防止用户写错地方
        if (props.config.beforeSetValues || props.config.beforeSubmit) {
            console.log('beforeSubmit/beforeSetValues 需写在配置`formCfg`中，请检查代码');
        }
    }
    init() {
        let props = this.props;
        this.config = Object.assign({
                type: 'tip',
                formCfg: null,
                buttons: null
            }, props.config, {
                container: props.config.container || {style: {display: 'inline-block'}}
            });
        this.params = props.params;
    }
    componentWillUpdate() {
        this.init();
    }
    show(e) {
        e && e.preventDefault();
        e && e.stopPropagation();
        this.setState({visible: true}, ()=>{
            this.config.type === 'form' && this.formRef.resetValues(this.params);
        });
    }
    close() {
        this.setState({visible: false});
        this.config.type === 'form' && this.formRef.resetValues();
    }
    cancelClick() {
        this.close();
    }
    submitClick() {
        let values = this.formRef && this.formRef.getValues();
        if (values || this.config.type !== 'form') {
            let result = this.props.onSubmit && this.props.onSubmit(values);
            // 如果回调函数返回了promise实例，则展示按钮上的loading效果，防止多次点击
            if (result instanceof Promise) {
                this.setState({loading: true});
                result.then(resolve=>{
                    this.setState({loading: false});
                    this.close();
                }).catch(reject=>{
                    this.setState({loading: false});
                });
            }
        }
    }
    // 用户自定义按钮，返回当前表单全部数据
    customClick(callback) {
        let values = this.formRef && this.formRef.getValues(false);
        callback && callback(values);
    }
    generateModal() {
        switch (this.config.type) {
            case 'form':
                return <ReactForm ref="form" config={this.config.formCfg} params={this.params}
                        wrappedComponentRef={inst=>this.formRef = inst}/>;
                break;
            default:
                return <div className="uf-tip">{this.config.msg}</div>;
                break;
        }
    }
    generateBtn() {
        const buttonsCfg = this.config.buttons;
        if (!buttonsCfg || buttonsCfg.length === 0) {
            return;
        }
        return (
            <div className='modal-footer'>
                {buttonsCfg.map(item => {
                    switch (item.action) {
                        case 'submit':
                            return <Button {...item}
                                    loading={this.state.loading}
                                    onClick={this.submitClick.bind(this, item.onClick)}>
                                    {item.value}
                                    </Button>;
                            break;
                        case 'cancel':
                            return <Button {...item}
                                    onClick={this.cancelClick.bind(this, item.onClick)}>
                                    {item.value}
                                    </Button>;
                            break;
                        default:
                            return <Button {...item}
                                    onClick={this.customClick.bind(this, item.onClick)}>
                                    {item.value}
                                    </Button>;
                            break;
                    }
                })}
            </div>
        );
    }
    render() {
        return (
            <div {...this.config.container} onClick={this.show.bind(this)}>
                {this.props.children}
                <Modal className={'uf-modal ' + (this.config.className || '')} visible={this.state.visible}
                    maskClosable={false}
                    width={this.config.width} style={this.config.style}
                    title={this.config.title || 'Modal'}
                    onCancel={this.cancelClick.bind(this)}
                    footer={this.generateBtn()}>
                    {this.generateModal()}
                </Modal>
            </div>
        );
    }
}
