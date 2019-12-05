import { Modal, Button } from 'antd';
import { Form, Input, Row, Col } from 'antd';
import React, {
  Component
} from 'react';
import local from '../../api/local';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
}; const tailFormItemLayout = {
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
@Form.create()
class TableForm extends Component {
  state = {
    visible: false,
    confirmLoading: false,
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
        let {msg}=this.RegSend(values)
      }
    })
  }
  // 发送请求 看是否成功
  RegSend = async (values) => {
    let {Rpsw,email,name,phone,psw,username} =values
    console.log({Rpsw,email,name,phone,psw,username});
    let { data } = await local.post("/goods", {
      Rpsw,email,name,phone,psw,username
    })   
    alert(data.msg)
    return data
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
          footer ={null}>
          <Form className="loginForm" {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
              label="用户id"
              hasFeedback
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, max: 11, message: "大爷写一个" }]
                , validateTrigger: 'onBlur'
              }
              )(
                <Input id="username" />)}
            </Form.Item>
            <Form.Item
              label="用户名称"
              hasFeedback
            >
              {getFieldDecorator('name', {
                rules: [
                  { required: true }], validateTrigger: 'onBlur'
              })(
                <Input id="name" />)}
            </Form.Item>
            <Form.Item
              label="用户手机"
              hasFeedback
            >
              {getFieldDecorator('phone', {
                rules: [
                  { required: true, message: "不能不填" },
                  { pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: "请输入正确的手机号" }
                ], validateTrigger: 'onBlur',
              })(
                <Input id="phone" />)}
            </Form.Item>
            <Form.Item
              label="用户邮箱"
              hasFeedback
            >
              {getFieldDecorator('email', {
                rules: [
                  { required: true, pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: "请输入正确的邮箱" }],
              })(
                <Input id="email" />)}
            </Form.Item>

            <Form.Item
              label="密码" hasFeedback
            >{getFieldDecorator("psw", {
              rules: [
                { required: true, pattern: /^[0-9a-zA-Z]{6,}$/, message: "6位数密码含字母数字" }], validateTrigger: 'onBlur'
            })(
              <Input.Password placeholder="input password" id="psw" visibilityToggle={false} />
            )}
            </Form.Item>
            <Form.Item
              label="确认密码" hasFeedback
            >{getFieldDecorator("Rpsw", {
              rules: [
                { required: true, pattern: /^[0-9a-zA-Z]{6,}$/, message: "6位数密码含字母数字" }, {
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
                注册
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default TableForm