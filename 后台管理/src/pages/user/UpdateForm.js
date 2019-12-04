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
        let res={}
        let {ele}=this.props
        for (let key in values) {
          if (!values[key] == (undefined || "")) {
              res[key]=values[key]
          }else{
            res[key]=ele[key]
          }
        }
        res._id=this.props.ele._id   
         this.props.DIPATCH_READER_USER(res)
        let msg = this.updateSend(res)
      }
    })
  }
  // 更新
  updateSend = async (values) => {
    let {  email, name, phone, psw, username,_id,level,status } = values
    let { data } = await local.patch(`/goods/${_id}`, {
      email, name, phone, psw, username,level,status,_id
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
    // const { avatar, email, level, name, phone, psw, status, username, _id } = this.props.ele;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          {this.props.text}
        </Button>
        <Modal
          title={this.props.text}
          visible={visible}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          footer={null}>
          <Form className="loginForm" {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
              label="用户id"
              hasFeedback>
              {getFieldDecorator('username',
                {
                  rules: [{ max: 11, message: "大爷写一个" }],
                  validateTrigger: 'onBlur'
                })(
                  <Input id="username" />)}
            </Form.Item>
            <Form.Item
              label="用户名称"
              hasFeedback>
              {getFieldDecorator('name', {
                rules: [],
                validateTrigger: 'onBlur'
              })(
                <Input id="name" />)}
            </Form.Item>
            {/*  */}
            <Form.Item
              label="用户等级"
              hasFeedback>
              {getFieldDecorator('level', {
                rules: [],
                validateTrigger: 'onBlur'
              })(
                <Input id="level" />)}
            </Form.Item>
            <Form.Item
              label="用户状态"
              hasFeedback>
              {getFieldDecorator('status', {
                rules: [],
                validateTrigger: 'onBlur'
              })(
                <Input id="status" />)}
            </Form.Item>
            {/*  */}
            <Form.Item

              label="用户手机"
              hasFeedback>
              {getFieldDecorator('phone', {
                rules: [
                  { message: "不能不填" },
                  { pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: "请输入正确的手机号" }],
                validateTrigger: 'onBlur',
              })(
                <Input id="phone" />)}
            </Form.Item>
            <Form.Item
              label="用户邮箱"
              hasFeedback>
              {getFieldDecorator('email', {
                rules: [
                  { pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: "请输入正确的邮箱" }],
              })(
                <Input id="email" />)}
            </Form.Item>
            <Form.Item

              label="密码" hasFeedback
            >{getFieldDecorator("psw", {
              rules: [
                { pattern: /^[0-9a-zA-Z]{6,}$/, message: "6位数密码含字母数字" }],
              validateTrigger: 'onBlur'
            })(
              <Input.Password placeholder="input password" id="psw" visibilityToggle={false} />
            )}
            </Form.Item>
            <Form.Item
              label="确认密码" hasFeedback
            >{getFieldDecorator("Rpsw", {
              rules: [
                { pattern: /^[0-9a-zA-Z]{6,}$/, message: "6位数密码含字母数字" }, {
                  validator: async (rule, value, callback) => { this.checkPsd(rule, value, callback) }
                }],
              validateTrigger: 'onBlur'
            })(
              <Input.Password placeholder="input password" id="Rpsw" visibilityToggle={false} />
            )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" className="reg-form-button"
                htmlType="submit">
                更新
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default UpdateForm