import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { local } from '../api'
// 映射属性（获取）

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
const mapState = (state) => {
  let admin = state.admin
  return admin
}
const mapDispatch = (dispatch) => {

  return {
    loginadmin(isLogin) {
      dispatch({ type: 'LOGINADMIN', payload:  isLogin  })
    }
  }
}
@connect(mapState, mapDispatch)
@Form.create()
class Login extends Component {
  gettoken = async (values) => {
    let result = await local.post('./login/admin', {
      ...values
    })
    let { data, headers } = result;
    let user = data.data[0]
    user.Authorization = headers.authorization;
    
    localStorage.setItem('Authorization', JSON.stringify(user.Authorization))
    let isLogin = user.isLogin
    console.log(isLogin);
    
    this.props.loginadmin(isLogin)
    console.log(this.props);
    
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.gettoken(values)
      }
    })
  }
  render() {

    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
        <Row>
          <Col {...tailFormItemLayout.wrapperCol}><h3>登录吧 勇者</h3></Col>
        </Row>
        <Form.Item
          label="管理员账户"
          hasFeedback
          // validateStatus="validating"
          help=""
        >
          {getFieldDecorator('user', {
            rules: [
              { required: true, max: 11, pattern: /^[1][3,4,5,7,8][0-9]{9}$/ }],
          })(
            <Input placeholder="账户" id="user" />)}
        </Form.Item>
        <Form.Item
          label="密码" hasFeedback
          // validateStatus="validating"
          help=""
        >{getFieldDecorator("psw", {
          rules: [
            { required: true }]
        })(
          <Input.Password placeholder="input password" id="psw" visibilityToggle={false} />
        )}

        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" className="login-form-button"
            htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>

    )
  }
}




export default Login