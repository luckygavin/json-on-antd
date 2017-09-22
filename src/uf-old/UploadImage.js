/**
 * @file 工单详情
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Upload, Icon, message, Button, Spin} from 'antd';
import {upload} from 'common/config.js';
const Dragger = Upload.Dragger;

export default class UploadImage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            loading: false
        };
    }
    componentWillMount() {
    }
    loading(status = true) {
        this.setState({loading: status});
    }
    show(status = true) {
        this.setState({visible: status});
    }
    onCancel() {
        this.setState({
            visible: false,
            loading: false
        });
    }
    onStatusChange({file}) {
        let status = file.status;
        if (status === 'uploading') {
            this.loading();
        } else if (status === 'error') {
            this.loading(false);
            message.error(`${file.name} file upload failed.`, 4);
        } else if (status === 'done') {
            let response = file.response;
            if (response && +response.status === 0) {
                this.setState({
                    visible: false,
                    loading: false
                });
                this.props.onAddImage(response.src);
            } else {
                this.loading(false);
                message.error('Upload failed: ' + response.msg, 4);
            }
        }
    }
    render() {
        return (
            <Modal title="上传图片" className="no-footer" visible={this.state.visible}
                onCancel={this.onCancel.bind(this)}
                footer={[]}>
                <Spin tip="图片上传中，请稍后..." size="large" spinning={this.state.loading}>
                    <Dragger showUploadList={false} accept="image/*"
                        action={upload.src} name={upload.name} 
                        onChange={this.onStatusChange.bind(this)}>
                        <div style={{padding: '30px'}}>
                            <p className="ant-upload-drag-icon"><Icon type="inbox" /></p>
                            <p className="ant-upload-text">点击或者拖拽文件到此区域即可上传图片</p>
                        </div>
                    </Dragger>
                </Spin>
            </Modal>
        );
    }
}
