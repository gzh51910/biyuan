import React, {
    Component
} from 'react';
// import {render} from 'react-dom';
import {
    HashRouter,
    Route,
    withRouter,
    Switch,
    Redirect
} from 'react-router-dom'

// 引入的模块
import './App.scss';
import Home from './pages/Home';
import msg from './pages/msg';
import data from './pages/data';
import forum from './pages/forum';
import mine from './pages/mine';

import { Menu, Icon } from 'antd';

class App extends Component {
    state = {
        currentPath: '/home',
        menu: [{
            icon: 'home',
            name: 'home',
            path: '/home',
            text: '首页'
        }, 
        {
            icon: 'profile',
            name: 'msg',
            path: '/msg',
            text: '资讯'
        },
        {
            icon: 'line-chart',
            name: 'data',
            path: '/data',
            text: '币数据'
        },
        {
            icon: 'message',
            name: 'forum',
            path: '/forum',
            text: '论坛'
        },
        {
            icon: 'user',
            name: 'mine',
            path: '/mine',
            text: '我的'
        }
        ]
    }
    // 方法
    goto = ({ key: path }) => {
        let { history } = this.props;
        this.setState({
            currentPath: path
        })
        history.push(path)
    }
    // 生命周期函数
    // 刷新后选中刷新前的状态
    componentDidMount() {
        // console.log('props',this.props)
        this.setState({
            currentPath: this.props.location.pathname
        })

    }
    render() {
        return (
            <div >

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/msg" component={msg}/>
                    <Route path="/data" component={data}/>
                    <Route path="/forum" component={forum}/>
                    <Route path="/mine" component={mine}/>
                    <Route path="/notfound" render={() => <div>404页面</div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/notfound" />
                </Switch>
                <Menu
                    onClick={this.goto}
                    selectedKeys={[this.state.currentPath]}
                    mode="horizontal"
                >
                    {this.state.menu.map(item => {
                        return <Menu.Item key={item.path}>
                            <Icon type={item.icon} />
                            {item.text}
                        </Menu.Item>
                    })}
                </Menu>
            </div>
        )
    }
}
App = withRouter(App);
export default App