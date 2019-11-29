import React, { Component } from 'react';
import { biyuan } from '../api'
import { connect } from 'react-redux';
import '../css/forum.css';
import { Menu, Icon } from "antd";
import { Carousel } from 'antd-mobile';
import ForumList from './forumList';
const { SubMenu } = Menu;
function mapStateToProps(state) {
    return {

    };
}

class forum extends Component {
    state = {
        forumBanner: [
            "https://statics.coingogo.com/uploads/setting/banner/20190522105947_5ce4bb2351604.jpg",
            "https://statics.coingogo.com/uploads/setting/banner/20190522105947_5ce4bb2351604.jpg",
            "https://statics.coingogo.com/uploads/setting/banner/20190522105947_5ce4bb2351604.jpg"
        ],
        forumMenu: [
            {
                first: "数字货币",
                second: ["比特币", "区块链", "竞争币", "消息爆料", "O撸社", "以太坊", "量子链", "NEO", "莱特币", "LEDU", "区块链项目评级"]
            },
            {
                first: "区块链讨论区",
                second: ["区块链综合讨论", "区块链项目", "Nuls", "ASCH", "瀚德FinTech创新学院", "DDN数据分发网络", "区块链文学"]
            },
            {
                first: "交易平台",
                second: ["出海交易平台", "国外交易所", "CoinBene", "ALLCOIN"]
            },
            {
                first: "综合讨论区",
                second: ["挖矿区", "钱包区", "综合", "言币于此", "数字币交易理论"]
            },
            {
                first: "论坛管理",
                second: ["公告版规", "活动中心", "模拟交易"]
            }
        ],
        current: "1",
    }
    componentDidMount() {
    }
    handleClick = e => {
        console.log("click", e);
        this.setState({
            current: e.key
        })
    };
    render() {
        let { forumBanner, forumMenu ,current} = this.state;
        return (
            <div className="container-forum">
                <header className="forum-header">
                    <div className="header-home"><img src="http://m.coingogo.com/wap/image/logo.png" /></div>
                    <div className="header-center">泡论坛</div>
                    <Icon type="search" />
                    <Icon type="plus" />
                </header>
                <div className="forum-summary">
                    <div className="forum-summary-yesterday">
                        <Icon type="bar-chart" />
                        <span>昨日：160</span>
                    </div>
                    <div className="forum-summary-today">今日：33</div>
                    <div className="forum-summary-sum">总数：81912</div>
                </div>
                <div className="forum-banner">
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {forumBanner.map(val => (
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                key={val}
                            />
                        ))}
                    </Carousel>
                </div>
                <div className="forum-menu">
                    <Menu
                        onClick={this.handleClick}
                        style={{  }}
                        defaultSelectedKeys={['1']}
                        selectedKeys={[current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="1"><span>最新</span></Menu.Item>
                        {forumMenu.map(item => {
                            return (
                                <SubMenu
                                    key={item.first}
                                    title={
                                        <span>{item.first}</span>
                                    }
                                    popupClassName="forumMenuSecond"
                                >
                                    {item.second.map(val => { return <Menu.Item key={val} ><span>{val}</span></Menu.Item> })}
                                </SubMenu>
                            )
                        })}
                    </Menu>
                </div>
                <ForumList/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(forum);