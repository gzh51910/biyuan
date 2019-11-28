import React, { Component } from 'react';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber } from 'antd';
const { Option } = Select;
import {connect} from 'react-redux';

// 映射属性（获取）
const mapStateToProps = (state)=>{
  let ss= state.admin;
  return {
     ss
  }
}
const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };
@connect(mapStateToProps)



class Login extends Component {
 

    
    render() {
      console.log(this.props);
      
        return (
            <Form {...formItemLayout}>
            <Form.Item
              label="管理员账户"
              hasFeedback
              validateStatus="validating"
              help=""
            >
              <Input placeholder="" id="user" />
            </Form.Item>

            <Form.Item
              label="密码"hasFeedback
              
              validateStatus="validating"
              help=""
            >
              <Input placeholder="" id="psw" />
            </Form.Item>
            </Form>
        )
    }
}


export default Login