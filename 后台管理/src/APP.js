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
import { connect } from 'react-redux';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import HeaderState from './pages/HeaderState'
import Reader from './pages/user/Reader'
import Writers from './pages/user/Writers'
import FNews from './pages/AM/FNews'
import News from './pages/AM/News'
import WeiBo from './pages/AM/WeiBo'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
    withTest
} from "./utils/withTest"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
let mapState = (state) => {
    let admin = state.admin
    return admin
}
let mapDispatch = (dispatch) => {
    return {
        LOGIN(user) {
            dispatch({ type: 'LOGIN', payload: { user } })
        },
        LOGOUT(state) {
            dispatch({ type: 'LOGOUT', payload: { user } })
        }
    }
}
@connect(mapState, mapDispatch)
@withTest
class App extends Component {
    state = {
        currentPath: localStorage.currentPath?localStorage.currentPath:'/home',
        collapsed: false,
        // Authorization : localStorage.Authorization,
        menu: [
            {
                text: "用户管理",
                Icon: "usergroup-delete",
                path: '/home',
                list2: [{
                    name: "普通用户",
                    type: "reader",
                    path: '/Reader'
                }, {
                    name: "新媒体人",
                    type: "/author",
                    path: '/Writers'
                }, {
                    name: "文章审核员",
                    type: "inspector",
                    path: 'Reade124r'
                }]
            },
            {
                text: "内容管理",
                Icon: "file-search",
                path: '1',
                list2: [{
                    name: "资讯",
                    type: "News",
                    path: '/News'
                }, {
                    name: "快讯",
                    type: "FNews",
                    path: '/FNews'
                }, {
                    name: "微博",
                    type: "WeiBo",
                    path: '/WeiBo'
                }]
            }, {
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
            }

        ],
        Routelist: [
            {
                path: "/home",
                component: Home,
            }, {
                path: '/Reader',
                component: Reader
            }, {
                path: '/Writers',
                component: Writers
            }, {
                path: '/FNews',
                component: FNews
            }, {
                path: '/News',
                component: News
            }, {
                path: '/WeiBo',
                component: WeiBo
            }
        ],
        role:'最高层'
    }
    // 跳转组件
    goto = ({ key: path }) => {
        let { history } = this.props;
        this.setState({
            currentPath: path
        })
        localStorage.setItem("currentPath",path);
        history.push(path)
    }
    // 左边菜单栏显示隐藏
    onCollapse = collapsed => {
        this.setState({ collapsed: !this.state.collapsed, });
    };  
    render() {
      let  {currentPath}=this.state
        return (
            this.props.Authorization?
                <Layout  >
                    <Header style={{
                        background: "#58bc58"
                    }}>
                        <HeaderState role={this.state.role} />
                    </Header>
                    <Layout id='main'>
                        <Sider collapsed={this.state.collapsed}
                            collapsible
                            onCollapse={this.onCollapse}>
                            <Menu theme="dark"
                                defaultSelectedKeys={[currentPath]}
                                mode="inline"
                                onClick={this.goto}
                                ref="mymenu" >
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
                                                }>  {ele.list2.map(item => <Menu.Item key={item.path}>{item.name}</Menu.Item>)}
                                            </SubMenu>
                                        }
                                    })}
                            </Menu>
                        </Sider>
                        <Content style={{ margin: '0 16px' }}>
                            <div style={{ padding: 8, background: '#fff', minHeight: 360 }}>
                                <Switch>
                                     <Route path="/notfound"  render={() => <div>404页面</div>} />
                                    {this.state.Routelist.map(ele => <Route {...ele} key={ele.path} />)}
                                    {/* <Redirect to="/notfound" /> */}
                                    <Redirect to={currentPath?currentPath:"/home"} exact/>
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                    <Footer style={{ textAlign: 'center', background: "red" }}> Design ©2019-11-28 Created by SSR</Footer>
                </Layout>
                : <><Redirect to='/login' /> <Route path="/login" component={Login} /></>
        )
    }
}
App = withRouter(App);
export default App
