//  封装的react路由守卫
import React, {
    Component
} from 'react'
import {
    local
} from '../api'
import axios from 'axios'
export function withTest(InnerComponent) {
    // 高阶组件必须返回一个组件
    class OuterComponent extends Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            let Authorization = JSON.parse(localStorage.getItem('Authorization'));
            let user = JSON.parse(localStorage.getItem('user'));
           this.props.LOGIN(user)
           console.log(this.props);
           console.log(user);
            if (Authorization) {
                // 登录则放行

                // 验证
                let baseURL = local.baseURL
                let data = axios.get(`${baseURL}/verify`, {
                    headers: {
                        Authorization
                    }
                }).then(({
                    data
                }) => {
                  console.log(data);
                    if (data.status === 0) {
                        //   this.props.history.
                     console.log("data.status === 0");
                     localStorage.removeItem('user');
                     localStorage.removeItem('Authorization');
                          let { history } = this.props;
                          history.push("/")
                    }
                })
            }
        }
        render() {
            return <InnerComponent {
                ...this.props
            } {
                ...this.state
            }
            />
        }
    }
    return OuterComponent;
}