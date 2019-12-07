import React, { Component } from "react";
// import {render} from 'react-dom';
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

// 引入的模块
import "./App.scss";
import Home from "~/Home";
import News from "~/News";
import Details from "~/Details";
import data from "~/data";
import forum from "~/forum/forum";
import mine from "~/mine";
import leftlist from '~/leftlist';
import reg from '~/reg';
import login from '~/login';
import loginargument from '~/loginargument';
import forumArticle from "~/forum/forumArticle";
import { Menu, Icon } from "antd";

class App extends Component {
  state = {
    currentPath: "/home",
    menu: [
      {
        icon: "home",
        name: "home",
        path: "/home",
        text: "首页"
      },
      {
        icon: "profile",
        name: "news",
        path: "/news/information",
        text: "资讯"
      },
      {
        icon: "line-chart",
        name: "data",
        path: "/data",
        text: "币数据"
      },
      {
        icon: "message",
        name: "forum",
        path: "/forum",
        text: "论坛"
      },
      {
        icon: "user",
        name: "mine",
        path: "/mine",
        text: "我的"
      }
    ]
  };
  // 方法
  goto = ({ key: path }) => {
    let { history } = this.props;
    this.setState({
      currentPath: path
    });
    history.push(path);
  };
  // 生命周期函数
  // 刷新后选中刷新前的状态
  componentDidMount() {
    // console.log('props',this.props)
    this.setState({
      currentPath: this.props.location.pathname
    });
  }
  render() {
    return (
      <div className="container-app">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/details" component={Details} />
          <Route path="/data" component={data} />
          <Route path="/forum" component={forum} />
          <Route path="/leftlist" component={leftlist} />
          <Route path="/mine" component={mine} />
          <Route path="/reg" component={reg} />
          <Route path="/login" component={login} />
          <Route path="/loginargument" component={loginargument} />
          <Route path="/foruminfo/:id" component={forumArticle} />
          <Route path="/notfound" render={() => <div>404页面</div>} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/notfound" />
        </Switch>
        <div className="footer">
          <Menu
            onClick={this.goto}
            selectedKeys={[this.state.currentPath]}
            mode="horizontal"
          >
            {this.state.menu.map(item => {
              return (
                <Menu.Item key={item.path}>
                  <Icon type={item.icon} />
                  {item.text}
                </Menu.Item>
              );
            })}
          </Menu>
        </div>

      </div>
    );
  }
}
App = withRouter(App);
export default App;
