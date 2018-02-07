/**
 * @file Ueditor封装
 *      重写了上传图片组件
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import {BaseComponent} from 'src/base';
import {ComponentsCache} from 'src/cache';

export default class Ueditor extends React.PureComponent {
    constructor(props) {
        super(props);
        this.name = props.name;
        // 保证每次实例化都有一个唯一的id
        this.ueditorId = (props.name || 'create_editor') + '_' + Date.now();
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
        let count = 1;
        let setData = ()=>{
            if (this.ue.body || count > 5) {
                this.ue.setContent(value);
            } else {
                setTimeout(setData, 300);
            }
            count++;
        };
        setData();
    }
    componentDidMount() {
        // 初始化
        let config = {
            autoHeightEnabled: true,
            autoFloatEnabled: true,
            elementPathEnabled: false,
            wordCount: false,
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
        if (this.props.simple) {
            config['toolbars'] = [[
                'undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'fontsize', 'forecolor', 'removeformat',
                '|', 'insertorderedlist', 'insertunorderedlist', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify',
                '|', 'link', 'fullscreen', 'cusUpload'
            ]]
        }
        Object.assign(config, this.props);
        this.ue = UE.getEditor(this.ueditorId, config);
        // 同步数据
        this.ue.addListener('contentChange', ()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                let newValue = this.ue.getContent();
                this.triggerChange(newValue);
            }, 150);
        });
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
            ComponentsCache.set(this.name, this.ue);
        }
    }
    // 解除共享
    _unsetTransmitComponent() {
        if (!!this.name) {
            ComponentsCache.del(this.name);
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
            <div>
                <script type="text/plain" id={this.ueditorId} style={style} />
            </div>
        );
    }
}
