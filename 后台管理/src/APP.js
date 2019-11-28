import React, {
    Component
} from 'react';
// import {render} from 'react-dom';
import {

    Route,
    withRouter,
    Switch,
    Redirect
} from 'react-router-dom'

// 引入的模块
import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
    state = {
        currentPath: '/home',
        collapsed: false,
        menu: [
            {
                text: "主页",
                Icon: "home",
                path: '/home'
            },
            {
                text: "新闻公告",
                Icon: "read",
                path: '/home2'
            },
            {
                text: "论坛管理",
                Icon: "desktop",
                path: '/home3'
            }, {
                text: "用户管理",
                Icon: "usergroup-delete",
                path: '/home5',
                list2: [{
                    name: "普通用户",
                    type: "reader"
                }, {
                    name: "新媒体人",
                    type: "author"
                }, {
                    name: "文章审核员",
                    type: "inspector"
                }]
            },
            {
                text: "文章管理",
                Icon: "file-search",
                path: '1',
                list2: [{
                    name: "资讯",
                    type: "msg"
                }, {
                    name: "快讯",
                    type: "Fmge"
                }, {
                    name: "微博",
                    type: "wb"
                }]
            }

        ],
        textType: [
            {
                type: "自媒体"
            }, {
                type: "数字币"
            }, {
                type: "区块链"
            }, {
                type: "行情"
            }, {
                type: "交易所"
            }, {
                type: "挖矿区"
            }, {
                type: "钱包区"
            }, {
                type: "综合区"
            }, {
                type: "项目评级"
            },

        ]
    }
  
    // 跳转组件
    goto = ({ key: path }) => {
        let { history } = this.props;
        this.setState({
            currentPath: path
        })
        history.push(path)
    }
    // 左边菜单栏显示隐藏

    onCollapse = collapsed => {
        this.setState({ collapsed: !this.state.collapsed, });
    };
    render() {
        return (<Layout >
            <Header style={{
                background: "red"
            }}>
            </Header>
            <Layout>
                <Sider collapsed={this.state.collapsed}
                    collapsible
                    onCollapse={this.onCollapse}
                >
                    <Menu theme="dark"
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        onClick={this.goto}
                        ref="mymenu"
                    >
                        {
                            this.state.menu.map((ele, index) => {
                                if (ele.list2 == undefined) {
                                    return <Menu.Item key={ele.path}>
                                        <Icon type={ele.Icon} />
                                        <span>{ele.text}</span>
                                    </Menu.Item>
                                } else {
                                    return <SubMenu key={index}
                                        title={
                                            <span>
                                                <Icon type={ele.Icon} />
                                                <span>{ele.text}</span>
                                            </span>
                                        }>  {ele.list2.map(item => <Menu.Item key={item.type}>{item.name}</Menu.Item>)}
                                    </SubMenu>
                                }
                            })
                        }
                    </Menu>
                </Sider>
                <Content style={{ margin: '0 16px' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/notfound" render={() => <div>404页面</div>} />
                            <Redirect from="/" to="/login" exact />
                            <Redirect to="/notfound" />
                        </Switch>
                    </div>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center', background: "red" }}> Design ©2019-11-28 Created by SSR</Footer>
        </Layout>
        )
    }
}
App = withRouter(App);
export default App
