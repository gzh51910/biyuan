import React from "react";
import pic from '../img/logo.png';
import '../css/login.scss';
import { Form, Input, Button, message, Row, Col } from "antd";
import { local } from '../api'
const FormItem = Form.Item;
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btnText: '发送验证码',
            btnBool: false,
            loading: false,
            yztime: 59,
            captcha: null
        }
    }
    //倒计60s
    count = () => {
        let { yztime, loading } = this.state;
        this.setState({ loading: true })
        let siv = setInterval(() => {
            this.setState({ yztime: (yztime--) }, () => {
                if (yztime <= -1) {
                    clearInterval(siv);　　//倒计时( setInterval() 函数会每秒执行一次函数)，用 clearInterval() 来停止执行:
                    this.setState({ loading: false, yztime: 59 })
                }
            });
        }, 1000);
    }
    // 发送短信验证
    verifiedSubmit = () => {
        this.props.form.validateFields(["phone"], (err, values) => {
            if (!this.state.yztime == 0 && !err) {
                this.count();
                this.state.captcha = this.getRandonNum()
                alert(this.state.captcha)
            }
        });

    }
    // 注册请求发送
    RegSubmit = () => {
        this.props.form.validateFields((err, values) => {
            let { captcha, phone, psw } = values
            if (!err && this.state.captcha == captcha) {
                let msg = this.loginto(phone, psw)

            }
        });
    }
    // 获取随机数
    getRandonNum() {
        let res = "";
        for (let i = 0; i < 6; i++) {
            let a = parseInt(Math.random() * 10);
            res += a;
        }
        return res;
    }


    // 跳转到协议
    xieyi = () => {
        this.props.history.push(`/loginargument`)
    }
    // 发送注册请求
    loginto = async (phone, psw) => {
        let { data } = await local.post("/user/reg", {
            phone, psw
        })
        alert(data.msg)
        if (data.msg == "success") {
            // 跳转到login界面
            this.props.history.push(`/login`)
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;//es6语法解构赋值，getFieldDecorator 此方法可以帮助你获取表单数据，初始化表单数据，校验表单数据，具体用法如下代码所示
        return (
            <div className="logina">
                <header className="loginhead">
                    <img src={pic} className="touxiang" />
                    <h3 className="zhuce">注册</h3>
                    <p className="dakai">App打开</p>
                </header>
                <Form className="formdata">
                    <Form.Item >
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
                    </Form.Item>
                    {/* 短信验证码 */}
                    <Form.Item>
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'onBlur'
                                })(<Input placeholder="验证码" />)}
                            </Col>
                            <Col span={12}>
                                {/* <Button type='primary'>发送验证码</Button> */}
                                <Button loading={this.state.loading} htmlType="submit" onClick={this.verifiedSubmit}> 　　{this.state.loading ? this.state.yztime + '秒' : '发送验证码'}</Button>
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
                            })(<Input.Password placeholder="密码" />)

                        }
                    </FormItem>

                    <FormItem>
                        <Button type="primary" block className="login" onClick={this.RegSubmit}>
                            注册
                         </Button>
                    </FormItem>
                </Form>
                <span className="tongyi">注册即同意<a className="xieyi" onClick={this.xieyi}>币源社区用户协议</a></span>
            </div >
        );
    }
}
export default Form.create()(Login);