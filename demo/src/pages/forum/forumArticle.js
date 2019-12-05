import React, { Component } from 'react';
import { log } from 'util';
import { Icon } from "antd";
import { local } from '../../api'
import '../../css/forumArticle.css';
class forumArticle extends Component {
    state = {
        id: 0,
        msg:{}
    };
    componentDidMount() {
        let { id } = this.props.match.params;
        this.getArticle(id);
    }
    getArticle = async(id) => {
        let {data:{data}}=await local.get('/home/article/',{
            id
        })
        data.cate_names=data.cate_names.split('-')[1];
        data.time=this.getTime(data.time);
        this.setState({
            msg:data
        })
    }
    //转化时间戳
    getTime = (time) => {
        let date = new Date().getTime();
        let offset=date/1000-time;
        let d = parseInt(offset  / 60 / 60 / 24);
        let h = parseInt(offset  / 60 / 60 % 24);
        let f = parseInt(offset  / 60 % 60);
        let s = parseInt(offset  % 60);
        let res = "";
        if(d!=0){
            res=d+"天";
        }else{
            if(h!=0){
                res=h+"小时"
            }else{
                if(f!=0){
                    res=f+"分钟"
                }else{
                    res=s+"秒"
                }
            }
        }
        res+="前";
        return res;
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
        let {msg,content}=this.state;
        return (
            <div className="forumArticle-container">
                <div className="forumArticle-header">
                    <div className="forumArticle-header-back" onClick={this.goback}><Icon type="left" /></div>
                    <div className="forumArticle-header-share"><Icon type="upload" /></div>
                </div>
                <div className="forumArticle-box">
                    <div className="forumArticle-topinfo">
                        <img src={msg.img}></img>
                        <div className="forumArticle-topinfo-msg">
                            <p>{msg.username}</p>
                            <p>发帖64·评论167·源点3264</p>
                        </div>
                    </div>
                    <div className="forumArticle-content">
                        <div className="forumArticle-content-title">{msg.title}</div>
                        <div className="forumArticle-content-msg">
                            <span className="forumArticle-content-msg-time">{msg.time}</span>
                            <span className="forumArticle-content-msg-menu">{msg.cate_names}</span>
                            <div className="forumArticle-content-msg-num">
                                <Icon type="eye" />
                                <span className="forumArticle-content-msg-num-seen">{msg.view_count}</span>
                                <Icon type="like" />
                                <span className="forumArticle-content-msg-num-good">{msg.like_count}</span>
                                <Icon type="message" />
                                <span className="forumArticle-content-msg-num-discuss">{msg.comment_count}</span>
                            </div>
                        </div>
                        <div className="forumArticle-content-line">
                            <div></div>
                        </div>
                        <div className="forumArticle-content-text" dangerouslySetInnerHTML={{__html:msg.content}} >
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