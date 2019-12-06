import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon,Carousel } from 'antd';
import Forum from './forum/forum';
import '../css/base.css';
import '../css/home.css';
function mapStateToProps(state) {
    return {

    };
}

class Home extends Component {
    state = {
        banner:[
            "https://statics.coingogo.com/uploads/setting/banner/20190606104133_5cf87d5d8f384.jpg",
            "https://statics.coingogo.com/uploads/setting/banner/20190618221524_5d08f1fc21af8.jpg",
            "https://statics.coingogo.com/uploads/setting/banner/20190304154824_5c7cd848bf425.jpeg"
        ],
        menu:[
            {
                src:"http://m.coingogo.com/wap/image/icon1.png",
                text:"快讯"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon2.png",
                text:"看资讯"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon3.png",
                text:"币数据"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon4.png",
                text:"交易汇"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon9.png",
                text:"猜涨跌"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon5.png",
                text:"发达领"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon6.png",
                text:"韭菜门"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon10.png",
                text:"个人中心"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon7.png",
                text:"泡论坛"
            },
            {
                src:"http://m.coingogo.com/wap/image/icon8.png",
                text:"模拟炒币"
            }
        ]
    }
    render() {
        let {banner,menu} = this.state;
        return (
            <div>
                <header>
                    <div className="header-left">
                        <Icon type="menu" />
                    </div>
                    <div className="header-center">
                        <img src="http://m.coingogo.com/wap/image/login_logo.png"/>
                    </div>
                    <div className="header-right">
                        <Icon type="search" />
                    </div>
                </header>
                <section className="banner">
                    <Carousel autoplay>
                        {
                            banner.map(item=><img key={item} src={item}/>)
                        }
                    </Carousel>
                </section>
                <section className="menu">
                    {
                        menu.map(item=>{
                            return <figure key={item.text}>
                                <img src={item.src}/>
                                <figcaption>{item.text}</figcaption>
                            </figure>
                        })
                    }
                </section>
                <section className="tip">
                    <Icon type="sound" />
                    <div>币源社区最新入住名单</div>
                    <Icon type="right" />
                </section>
                <main>
                    <div className="home-forum">
                        <Forum/>
                    </div>
                </main>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);