/**
 * @file Ueditor封装
 */
import React from 'react';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';

// export default class Ueditor extends React.PureComponent {
export default class Ueditor extends BaseComponent {
    constructor(props) {
        super(props);
        // 在form组件中使用时，会额外传入一个 data-__meta 字段
        this._filter.push('data-__meta');
        this.name = this._getTransmitName();
        this.ueditor = null;
        // 保证每次实例化都有一个唯一的id
        this.ueditorId = (this.name || 'create_editor') + '_' + Date.now();
        this.data = props.data;
    }
    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        if ('data' in nextProps) {
            if (this.data !== nextProps.data) {
                this.data = nextProps.data;
                this.ueSetData(nextProps.data);
            }
        }
    }
    ueSetData(value) {
        // 临时解决方案。ueditor内不是用iframe实现，iframe加载需要时间，所以直接调用setContent会报错
        // 这里重试5次，间隔300ms
        Utils.retry(()=>{
            if (!this.ue.body) {
                return false;
            }
            this.ue.setContent(value);
        }, 300, 5);
    }
    componentDidMount() {
        this._factory.$requirejs(['ueditor'], UE=>{
            // ueditor未做umd兼容，而且不知为何 requirejs shim 无效，只能从window上拿
            this.ueditor = window.UE;
            this.initUeditor();
            this.ueSetData(this.data);
        });
    }
    initUeditor() {
        // 初始化
        let config = {
            autoHeightEnabled: true,
            autoFloatEnabled: true,
            elementPathEnabled: false,
            wordCount: false,
            zIndex: 0,
            fontsize: [12, 14, 16, 18, 20, 24],
            toolbars: [[
                'source', '|', 'undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'paragraph', 'fontfamily', 'fontsize',
                '|', 'superscript', 'subscript', '|', 'forecolor', 'backcolor', '|', 'removeformat',
                '|', 'insertorderedlist', 'insertunorderedlist', 'inserttable', '|', 'selectall', 'cleardoc',
                '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify',
                '|', 'link', 'unlink', '|', 'map', '|', 'horizontal', 'print', 'preview', 'fullscreen', 'drafts', 'formula',
                '|', 'cusUpload'
            ]]
        };
        // 简版，适合给普通用户使用
        // 默认为简版
        if (this.props.simple === undefined || this.props.simple) {
            config['toolbars'] = [[
                'undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'fontsize', 'forecolor', 'removeformat',
                '|', 'insertorderedlist', 'insertunorderedlist', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify',
                '|', 'link', 'fullscreen', 'cusUpload'
            ]]
        }
        Object.assign(config, Utils.filter(this.props, this._filter));
        console.log(config);
        this.ue = this.ueditor.getEditor(this.ueditorId, config);
        // 同步数据
        let contentChange = Utils.debounce(()=>{
            let newValue = this.ue.getContent();
            this.triggerChange(newValue);
        }, 150);
        this.ue.addListener('contentChange', contentChange);
        this._transmitComponent();
    }
    componentWillUnmount() {
        // 需要销毁，否则再次渲染本组件，ueditor渲染不出来
        this.ue.destroy();
        this._unsetTransmitComponent();
    }
    // 共享组件
    _transmitComponent() {
        if (!!this.name) {
            this._factory.$components.set(this.name, this.ue);
        }
    }
    // 解除共享
    _unsetTransmitComponent() {
        if (!!this.name) {
            this._factory.$components.del(this.name);
        }
    }
    triggerChange(changedValue) {
        if (this.data !== changedValue) {
            this.data = changedValue;
            // Should provide an event to pass value to Form.
            this.props.onChange && this.props.onChange(changedValue);
        }
    }
    render() {
        let style = Object.assign({width: '100%', height: '220px', lineHeight: 'initial'}, this.props.style);
        return (
            <script type="text/plain" id={this.ueditorId} style={style} />
        );
    }
}
