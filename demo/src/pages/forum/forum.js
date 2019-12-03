import React, { Component } from 'react';
import { fapi } from '../../api'
import { connect } from 'react-redux';
import '../../css/forum.css';
import { Menu, Icon, Tabs, Radio } from "antd";
import { Carousel } from 'antd-mobile';
import ForumList from './forumList';
import { StickyContainer, Sticky } from 'react-sticky';
import axios from 'axios';
const { TabPane } = Tabs;
// const { SubMenu } = Menu;
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
        //菜单
        forumMenu: [
            {
                first: "最新",
                second: []
            },
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
        //菜单默认值
        fname: "最新",
        //分类列表
        flist:[],
        //吸顶效果
        menuStyle: {
            position: "static"
        },
        forumListStyle: {},
    }
    getmsg = async (fname)=> {
        let {data:[{flist}]} = await fapi.get({ 
            fname
        });
        this.setState({
            flist
        })
        console.log(flist);
        
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.getmsg(this.state.fname);
    }
    
    //一级菜单获取值
    callback = key => {
        if (key == 1) {
            this.setState({
                fname: "最新"
            })
            this.setState({
                forumListStyle: { 'marginTop': 0 }
            })
        } else {
            this.setState({
                forumListStyle: { 'marginTop': "33px" }
            })
        }
        document.body.scrollTop = 230;
    }
    //二级菜单获取值
    getDatalist = e => {
        this.setState({
            fname: e.target.value
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.fname!=this.state.fname){
            this.getmsg(this.state.fname);
        }
    }
    //滚动监听
    handleScroll = (event) => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 230) {
            this.setState({
                menuStyle: { position: "fixed" },
                forumListStyle: { 'marginTop': "33px" }
            })
        } else {
            this.setState({
                menuStyle: { position: "static" },
                forumListStyle: { 'marginTop': 0 }
            })
        }
    }
    //吸顶组件
    renderTabBar = (props, DefaultTabBar) => (
        <Sticky bottomOffset={80}>
            {({ style }) => (
                <DefaultTabBar {...props} style={{ ...style, zIndex: 99, background: '#fff', top: 0 }} />
            )}
        </Sticky>
    )
    render() {
        let { forumBanner, forumMenu, fname, menuStyle, forumListStyle ,flist} = this.state;
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
                <div className="forum-menu" >
                    <StickyContainer>
                        <Tabs defaultActiveKey="1" onChange={this.callback} renderTabBar={this.renderTabBar}>
                            {forumMenu.map((item, i) => {
                                return (
                                    <TabPane tab={item.first} key={i + 1} style={menuStyle}>
                                        {
                                            i == 0
                                                ?
                                                ""
                                                :
                                                <Radio.Group defaultValue="1" onChange={this.getDatalist} >
                                                    {item.second.map((val, j) => {
                                                        return (
                                                            <Radio.Button value={val} key={j + 1}>{val}</Radio.Button>
                                                        )
                                                    })}

                                                </Radio.Group>
                                        }

                                    </TabPane>
                                )
                            })}
                        </Tabs>
                    </StickyContainer>
                </div>
                <div className="forumListWrap" style={forumListStyle}>
                    <ForumList flist={flist} />
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(forum);