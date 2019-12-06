import React, { Component } from 'react';
import '../../css/forum.css';
import { Icon} from "antd";
import { Carousel } from 'antd-mobile';
import ForumMenu from './forumMenu';

class forum extends Component {
    state = {
        forumBanner: [
            "https://statics.coingogo.com/uploads/setting/banner/20190522105947_5ce4bb2351604.jpg",
            "https://statics.coingogo.com/uploads/setting/banner/20190522105947_5ce4bb2351604.jpg",
            "https://statics.coingogo.com/uploads/setting/banner/20190522105947_5ce4bb2351604.jpg"
        ]
    }
    render() {
        let { forumBanner} = this.state;
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
                    <ForumMenu/>
                </div>
            </div>
        );
    }
}
export default forum;