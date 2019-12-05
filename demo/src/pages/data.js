import React, { Component } from 'react';

import axios from 'axios'
import pic from '../img/logo.png';
import { connect } from 'react-redux';
import { Row, Col, Icon, Spin } from "antd";
import '../css/data.scss';


function mapStateToProps(state) {
    return {

    };
}

class data extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        coincoute: [],
        coinlist: [],
        cointwolist: []
    }
    // 发送请求拿数据
    componentDidMount() {
        this.getSliderList();
        this.coinshuju();
        this.twocoinshuju();
    }
    // 列表数据
    getSliderList() {
        let fd = new FormData()
        fd.append("page", 0)
        fd.append("pagesize", 50)
        fd.append("sort", "market_cap")
        fd.append("order", "desc")
        axios.post("http://localhost:1910/ajax/coin/coin.ashx", fd).then((res) => {
            console.log('请求返回的数据', 1111111222);
            console.log(res.data)//此接口返回数据为jsonp格式，须进一步对数据进行处理
            this.setState({
                coinlist: res.data.data
            })
        });
    }
    twocoinshuju() {
        let fd = new FormData()
        fd.append("page", 2)
        fd.append("pagesize", 50)
        fd.append("sort", "market_cap")
        fd.append("order", "desc")
        axios.post("http://localhost:1910/ajax/coin/coin.ashx", fd).then((res) => {
            console.log('请求返回的数据', 1111111222);
            console.log(res.data)//此接口返回数据为jsonp格式，须进一步对数据进行处理
            this.setState({
                cointwolist: res.data.data
            })

        });
    }
    // 标题数据
    coinshuju() {
        let bd = new FormData()
        bd.append("index_type", 1)
        bd.append("name", '')
        bd.append("page", 0)
        bd.append("pagesize", 1000)

        axios.post("http://localhost:1910/ajax/coin/coin_index.ashx", bd).then((res) => {
            // console.log('请求返回的数据', 666);
            console.log(res.data)//此接口返回数据为jsonp格式，须进一步对数据进行处理
            this.setState({
                coincoute: res.data.data
            })

            // })

        });
    }

    render() {
        return (
            <div>

                <Row type="flex" justify="space-around" className="bishuju">
                    <Col span={4}><img src={pic} className="touxiang" /></Col>
                    <Col span={4} className="coindata">币数据</Col>
                    <Col span={1} className="search"><Icon type="search" /></Col>
                    <Col span={1} className="filter"><Icon type="filter" /></Col>
                </Row>
                {
                    this.state.coincoute.map(item =>
                        <Row type="flex" justify="space-around" className="zhishu"
                            key={item.key}>
                            <Col span={3} className="headpic"><img src={item.logo} className="touxiang" /></Col>
                            <Col span={6}>{item.name}</Col>
                            <Col span={2}>{item.price}</Col>
                            <Col span={2} className="persent">{item.percent_change_24h}%</Col>
                        </Row>)
                }

                <Row type="flex" className="hangqing">
                    <Col span={4} className="hangqinga">
                        行情  </Col>
                    <Col span={4} >
                        自选</Col>
                    <Col span={4} >
                        指数</Col>
                    <Col span={5} >
                        最近价</Col>
                    <Col span={6} >
                        涨跌幅
<span><Icon type="caret-up" />
                            <Icon type="caret-down" />
                        </span>
                    </Col>
                </Row>
                {/*  List数据渲染*/}
                {
                    this.state.coinlist.map(item => <div className="listhead" key={item.id}>

                        <main className="zhangdie">
                            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} className="list"  >
                                <Col className="gutter-row" span={3}>
                                    <div className="gutter-box listfirst">{item.rank} </div>
                                </Col>
                                <Col className="gutter-row headpic" span={4}>
                                    <img src={item.ico} className="touxiang" />
                                </Col>
                                <Col className="gutter-row" span={10}>
                                    <div className="gutter-box bba">{item.coin.coin_symbol}</div>
                                    <p className="listthird">{item.name}</p>
                                </Col>
                                <Col className="gutter-row price" span={3}>
                                    <div className="gutter-box bba">¥{(item.price * 1).toFixed(2)}</div>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <div className={item.percent_change_24h > 0 ? "green" : "red"}>{item.percent_change_24h}%</div>
                                </Col>

                            </Row>
                        </main>
                        <Row type="flex" className="underline">
                            <Col span={9} className="jiaoyie">
                                市值￥{(item.market_cap * 1 / 100000000).toFixed(2)}亿<em className="heng">|</em> </Col>
                            <Col span={10} >
                                成交额￥{(item.volume_24h * 1 / 100000000).toFixed(2)}亿</Col>
                        </Row>
                    </div>)
                }

                {
                    this.state.cointwolist.map(item => <div className="listhead" key={item.id}>
                        <main className="zhangdie">
                            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} className="list"  >
                                <Col className="gutter-row" span={3}>
                                    <div className="gutter-box listfirst">{item.rank} </div>
                                </Col>
                                <Col className="gutter-row headpic" span={4}>
                                    <img src={item.ico} className="touxiang" />
                                </Col>
                                <Col className="gutter-row" span={10}>
                                    <div className="gutter-box bba">{item.coin.coin_symbol}</div>
                                    <p className="listthird">{item.name}</p>
                                </Col>
                                <Col className="gutter-row price" span={3}>
                                    <div className="gutter-box bba">¥{(item.price * 1).toFixed(2)}</div>
                                </Col>
                                <Col className="gutter-row" span={3}>
                                    <div className={item.percent_change_24h > 0 ? "green" : "red"}>{item.percent_change_24h}%</div>
                                </Col>

                            </Row>
                        </main>
                        <Row type="flex" className="underline">
                            <Col span={9} className="jiaoyie">
                                市值￥{(item.market_cap * 1 / 100000000).toFixed(2)}亿<em className="heng">|</em> </Col>
                            <Col span={10} >
                                成交额￥{(item.volume_24h * 1 / 100000000).toFixed(2)}亿</Col>
                        </Row>
                    </div>)
                }





            </div >
        );
    }
}

export default connect(
    mapStateToProps,
)(data);