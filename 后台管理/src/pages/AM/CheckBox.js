import { Modal, Button } from 'antd';
import { Form, Input } from 'antd';
import React, {
  Component
} from 'react';
import local from '../../api/local';
import {
  connect
} from 'react-redux';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
      offset: 8,
    },
  },
};

let mapState = (state) => {
  let reader = state.reader
  return reader
}
let mapDispatch = (dispatch) => {
  return {
    DIPATCH_READER_USER(payload) {
      dispatch({
        type: "DIPATCH_READER_USER", payload

      })
    }
  }
}

@connect(mapState, mapDispatch)
@Form.create()
class UpdateForm extends Component {
  state = {
    visible: false,
    confirmLoading: false,
    required: false
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  // 检查密码
  checkPsd(rule, value, callback) {
    let psw = this.props.form.getFieldValue('psw');
    if (psw !== value) {
      callback(new Error('两次密码输入不一致'));
    } else {
      callback();
    }
  }
  // 表单提交
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let res = {}
        let { ele } = this.props
        for (let key in values) {
          if (!values[key] == (undefined || "")) {
            res[key] = values[key]
          } else {
            res[key] = ele[key]
          }
        }
        res._id = this.props.ele._id
        this.props.DIPATCH_READER_USER(res)
        let msg = this.updateSend(res)
      }
    })
  }
  // 更新
  updateSend = async (values) => {
    let { email, name, phone, psw, username, _id, level, status } = values
    let { data } = await local.patch(`/goods/${_id}`, {
      email, name, phone, psw, username, level, status, _id
    })
    alert(data.msg)
    // return data
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
  render() {
    const { visible, confirmLoading, } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { content } = this.props;
    console.log(this.props.content);

    // const { avatar, email, level, name, phone, psw, status, username, _id } = this.props.ele;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          {this.props.text}
        </Button>
        <Modal width="90%"
          title={this.props.text}
          visible={visible}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          footer={<div>
            <Button type="primary">
              阅读通过
            </Button>
            <Button type="danger">
              回去重写
            </Button></div>}>
          <div dangerouslySetInnerHTML={{ __html: content }} />

        </Modal>
      </div>
    );
  }
}
export default UpdateForm