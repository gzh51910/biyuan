import React, { Component } from 'react';
import { log } from 'util';
import { Icon } from "antd";
import '../../css/forumArticle.css';
class forumArticle extends Component {
    state = {
        fname: "",
        id: 0
    };
    componentDidMount() {
        let { fname, id } = this.props.match.params;
        // this.getArticle(fname,id);
    }
    getArticle = (fname, id) => {
        this.setState({
            fname,
            id
        })
    }
    goback = () => {
        this.props.history.goBack();
    }
    componentDidUpdate(prevProps) {
        // if((prevProps.match.params.id != this.props.match.params.id)||(prevProps.match.params.fname != this.props.match.params.fname)){
        //     this.getData(this.props.match.params.fname,this.props.match.params.id)
        // }
    }
    render() {
        return (
            <div className="forumArticle-container">
                <div className="forumArticle-header">
                    <div className="forumArticle-header-back" onClick={this.goback}><Icon type="left" /></div>
                    <div className="forumArticle-header-share"><Icon type="upload" /></div>
                </div>
                <div className="forumArticle-box">
                    <div className="forumArticle-topinfo">
                        <img src="http://statics.coingogo.com/uploads/avatars/VSsFuApnLBKMOJ5hyshqQW6XULu42PQT.jpg"></img>
                        <div className="forumArticle-topinfo-msg">
                            <p>光头说币</p>
                            <p>发帖64·评论167·源点3264</p>
                        </div>
                    </div>
                    <div className="forumArticle-content">
                        <div className="forumArticle-content-title">【光头说币】数字货币行情分析</div>
                        <div className="forumArticle-content-msg">
                            <span className="forumArticle-content-msg-time">323天前</span>
                            <span className="forumArticle-content-msg-menu">比特币</span>
                            <div className="forumArticle-content-msg-num">
                                <Icon type="eye" />
                                <span className="forumArticle-content-msg-num-seen">409972</span>
                                <Icon type="like" />
                                <span className="forumArticle-content-msg-num-good">65</span>
                                <Icon type="message" />
                                <span className="forumArticle-content-msg-num-discuss">526</span>
                            </div>
                        </div>
                        <div className="forumArticle-content-line">
                            <div></div>
                        </div>
                        <div className="forumArticle-content-text">
                            
                        </div>
                    </div>
                </div>
                {/* <div className="forumArticle-footer">
                    <div className="forumArticle-footer-reply"><Icon type="edit" /><span>回复</span></div>
                    <div className="forumArticle-footer-good"><Icon type="like" /></div>
                </div> */}

            </div>
        )
    }
}
export default forumArticle;