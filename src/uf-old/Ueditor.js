/**
 * @file Ueditor封装
 *      重写了上传图片组件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import UploadImage from './UploadImage.js';

export default class Ueditor extends React.PureComponent {
    constructor(props) {
        super(props);
        // 保证每次实例化都有一个唯一的name
        this.name = (props.name || 'create_editor') + '_' + Date.now();
        this.value = this.props.value;
        this.config = props.config || {};
    }
    componentWillReceiveProps(nextProps) {
        // Should be a controlled component.
        if ('value' in nextProps) {
            if (this.value !== nextProps.value) {
                this.value = nextProps.value;
                this.ueSetData(nextProps.value);
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
    triggerChange(changedValue) {
        if (this.value !== changedValue) {
            this.value = changedValue;
            // Should provide an event to pass value to Form.
            this.props.onChange && this.props.onChange(changedValue);
        }
    }
    componentDidMount() {
        // 注册一个自定义button
        UE.registerUI('cusUpload', ()=>{
            return new UE.ui.Button({
                name: 'cusUpload',
                title: '上传图片',
                // icon: 'image',
                cssRules: 'background-position: -380px 0px;',
                onclick: ()=>{
                    this.refs.upload.show();
                }
            });
        });
        // 初始化
        let config = Object.assign({
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
        }, this.config.cfg);
        // 简版，适合给普通用户使用
        if (this.config.simple) {
            config['toolbars'] = [[
                'undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'fontsize', 'forecolor', 'removeformat',
                '|', 'insertorderedlist', 'insertunorderedlist', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify',
                '|', 'link', 'fullscreen', 'cusUpload'
            ]]
        }
        this.ue = UE.getEditor(this.name, config);
        // 同步数据
        this.ue.addListener('contentChange', ()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                let newValue = this.ue.getContent();
                this.triggerChange(newValue);
            }, 150);
        });
    }
    componentWillUnmount() {
        // 需要销毁，否则再次渲染本组件，ueditor渲染不出来
        this.ue.destroy();
    }
    onAddImage(src) {
        let img = '<p><img src="' + src + '"/></p>';
        this.ue.setContent(img, true);
    }
    render() {
        return (
            <div>
                <script type="text/plain" id={this.name} style={{width: '100%', height: '220px', lineHeight: 'initial'}} />
                <UploadImage ref="upload" onAddImage={this.onAddImage.bind(this)}/>
            </div>    
        );
    }
}
