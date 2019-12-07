import React from "react";
import '../css/login.scss';
import { Form, Input, Button, Row, Col } from "antd";
import { local } from '../api'
const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props)

    }
    regto = () => {
        this.props.history.push(`/reg`)
    }
    // 点击登录
    logininto = () => {
        this.props.form.validateFields((err, values) => {
            let { phone, psw } = values
            if (!err) {
                let msg = this.loginsucess(phone, psw)

            }
        })
    }
    // 发送登录请求
    loginsucess = async (phone, psw) => {
        let { data } = await local.post("/login/user", {
            phone,
            psw
        })
        alert(data.msg)
        if (data.msg == "success") {
            // 跳转到login界面
            this.props.history.push(`/mine`)
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;//es6语法解构赋值，getFieldDecorator 此方法可以帮助你获取表单数据，初始化表单数据，校验表单数据，具体用法如下代码所示
        return (
            <div className="logina">
                <header className="loginhead">

                    <div className="header-center">
                        <img src="http://m.coingogo.com/wap/image/login_logo.png" />
                    </div>
                </header>
                {/* 输入账号/手机号... */}
                <Form className="formdata">
                    <Form.Item>
                        <Row gutter={8}>
                            <Col span={19}>
                                {getFieldDecorator('phone', {
                                    rules: [{
                                        required: true,
                                        message: '手机号不能为空',
                                    }, {
                                        pattern: /^1[3]\d{9}$/,
                                        message: '手机号码不符合规范',
                                    }], validateTrigger: 'onBlur'
                                })(<Input placeholder="手机号" />)
                                }
                            </Col>
                            <Col span={5}>
                                <span onClick={this.regto}>注册账号</span>
                            </Col>
                        </Row>
                    </Form.Item>


                    {/* 输入密码 */}
                    <FormItem hasFeedback>
                        {
                            getFieldDecorator('psw', {
                                rules: [{
                                    required: true,
                                    message: '密码不能为空',
                                }, {
                                    min: 4,
                                    message: '密码不能少于4个字符',
                                }, {
                                    max: 12,
                                    message: '密码不能大于12个字符',
                                }], validateTrigger: 'onBlur'
                            })(<Input.Password placeholder="输入密码..." />)

                        }
                    </FormItem>

                    <FormItem>
                        <Button type="primary" block className="login" onClick={this.logininto}>
                            登录
                         </Button>
                    </FormItem>
                </Form>

            </div >
        );
    }
}
export default Form.create()(Login);