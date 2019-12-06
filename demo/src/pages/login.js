import React from "react";
import '../css/login.scss';
import { Form, Input, Button, Row, Col } from "antd";
const FormItem = Form.Item;
class Login extends React.Component {
    constructor(props) {
        super(props)

    }
    regto = () => {
        this.props.history.push(`/reg`)
    }
    // 点击注册
    loginto = () => {

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
                <Form className="formdata">
                    <Form.Item>
                        <Row gutter={8}>
                            <Col span={19}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: '请输入验证码' }],
                                })(<Input placeholder="输入账号/手机号..." />)}
                            </Col>
                            <Col span={5}>
                                <span onClick={this.regto}>注册账号</span>
                            </Col>
                        </Row>
                    </Form.Item>


                    {/* 输入密码 */}
                    <FormItem hasFeedback>
                        {
                            getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: '密码不能为空',
                                }, {
                                    min: 4,
                                    message: '密码不能少于4个字符',
                                }, {
                                    max: 12,
                                    message: '密码不能大于12个字符',
                                }],
                            })(<Input.Password placeholder="输入密码..." />)

                        }
                    </FormItem>

                    <FormItem>
                        <Button type="primary" block className="login" onClick={this.loginto}>
                            登录
                         </Button>
                    </FormItem>
                </Form>

            </div >
        );
    }
}
export default Form.create()(Login);