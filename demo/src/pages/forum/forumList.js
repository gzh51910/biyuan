import React, { Component } from 'react';
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
    render() {
        let {flist} = this.props;
        return (
            <div className="forumList">
                <ul>
                    {
                        flist.map(item => {
                            return (
                                <li key={item.f_id}>
                                    <div className="forumList-title">
                                        {item.f_id <= 1 ?
                                            <span><i className="ding">顶</i><i className="jing">精</i></span> : ""}

                                        <span>{item.f_title}</span>
                                    </div>
                                    <div className="forumList-msg">
                                        <span className="forumList-msg-time">{item.f_time}</span>
                                        <div className="forumList-msg-source">
                                            <span className="forumList-msg-source-active">{item.f_active}</span>
                                            <span className="forumList-msg-source-value"><Icon type="money-collect" />{item.f_value}</span>
                                        </div>
                                        <span className="forumList-msg-seen"><Icon type="eye" />{item.f_seen}</span>
                                        <span className="forumList-msg-discuss"><Icon type="message" />{item.f_discuss}</span>
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

export default forumList;
// export default connect(
//     mapStateToProps,
// )(forumList);