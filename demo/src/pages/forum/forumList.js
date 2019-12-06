import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { biyuan } from '../../api'
import { connect } from 'react-redux';
import { Icon } from "antd";
import '../../css/forumList.css';
// function forumList({ flist }) {
//     // console.log("datalist",datalist);
//     return (
//     )
// }

class forumList extends Component {
    goto = (id) => {
        this.props.history.push(`/foruminfo/${id}`)
    }
    
    componentDidMount() {
    }
    render() {
        let { flist } = this.props;
        return (
            <div className="forumList">
                <ul>
                    {
                        flist.map((item, index) => {
                            return (
                                <li key={index} onClick={this.goto.bind(this, item.id)}>
                                    <div className="forumList-title">
                                        {index <= 1 ?
                                            <span><i className="ding">顶</i><i className="jing">精</i></span> : ""}

                                        <span>{item.title}</span>
                                    </div>
                                    <div className="forumList-msg">
                                        <span className="forumList-msg-time">{item.created_at}</span>
                                        <div className="forumList-msg-source">
                                            <span className="forumList-msg-source-active">{item.username}</span>
                                            <span className="forumList-msg-source-value"><Icon type="money-collect" />{item.rmb}</span>
                                        </div>
                                        <span className="forumList-msg-seen"><Icon type="eye" />{item.view_count}</span>
                                        <span className="forumList-msg-discuss"><Icon type="message" />{item.comment_count}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
forumList = withRouter(forumList);
export default forumList;
// export default connect(
//     mapStateToProps,
// )(forumList);