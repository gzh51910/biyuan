import React, { Component } from 'react';
import { biyuan } from '../api';
// import pic from '../img/logo.png';
import { connect } from 'react-redux';
import '../css/mian.scss';
import { Upload, Icon, message, List, Typography } from 'antd';
function mapStateToProps(state) {
    return {

    };
}
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('图片是JPG/PNG格式!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片在2M之内！');
    }
    return isJpgOrPng && isLt2M;
}

class mine extends Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {

            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    }

    render() {
        // 头像上传
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        // 列表
        const data = [
            '我的消息',
            '我的资产.',
            '我的论坛',
            '我的问答',
            '我的关注',
            '个人资料',
            '密码管理',
        ];
        return (
            <div className="minea">
                <div className="minepic">
                    {/* 头像上传 */}
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                    {/* 列表内容 */}
                </div>
                <List
                    className="listmine"
                    size="small"
                    header={<div>18877293590</div>}

                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
)(mine);