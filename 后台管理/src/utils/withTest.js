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
            this.state = {
                Authorization: ''
            }
        }

        componentDidMount() {
            let user = JSON.parse(localStorage.getItem('user'));
            let {
                Authorization
            } = user
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
                    console.log('校验结果：', data)
                    console.log('校验结果：', this.props)
                    if (data.status === 0) {
                        //   this.props.history.
                        this.props.LOGIN()
                          let { history } = this.props;
                          this.setState({
                            Authorization: 11
                          })
                        //   history.push(path)
                    }
                })
                // this.props.

                this.setState({
                    Authorization
                })
            }
        }
        render() {
            console.log("withtest", this.state);
            // return <InnerComponent Authorization={this.state.Authorization}/>
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