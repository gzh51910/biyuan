import React, { Component } from 'react';
import pic from '../img/logo.png';
import '../css/login.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class Login extends Component {

    render() {

        return (
            <div className="logina">
                <header className="loginhead">
                    < img src={pic} className="touxiang" />
                    <h3 className="zhuce">注册</h3>
                    <p className="dakai">App打开</p>

                </header>

            </div>
        )
    }


}

export default Login