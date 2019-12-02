import React, { Component } from 'react';
import { biyuan } from '../../api'
import { connect } from 'react-redux';
import { Icon } from "antd";
import '../../css/forumList.css';
function forumList({ datalist }) {
    // console.log("datalist",datalist);
    return (
        <div className="forumList">
            {datalist}
            <ul>
                <li>
                    <div className="forumList-title">
                        <i className="ding">顶</i>
                        <i className="jing">精</i>
                        <span>币源社区源点介绍，源点价值，源点获取规则。（2019年3月23日更新）</span>
                    </div>
                    <div className="forumList-msg">
                        <span className="forumList-msg-time">372天前</span>
                        <div className="forumList-msg-source">
                            <span className="forumList-msg-source-active">心跳行动</span>
                            <span className="forumList-msg-source-value"><Icon type="money-collect" />862.515</span>
                        </div>
                        <span className="forumList-msg-seen"><Icon type="eye" />100944</span>
                        <span className="forumList-msg-discuss"><Icon type="message" />385</span>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="forumList-title">
                        <i className="ding">顶</i>
                        <i className="jing">精</i>
                        <span>币源社区源点介绍，源点价值，源点获取规则。（2019年3月23日更新）</span>
                    </div>
                    <div className="forumList-msg">
                        <span className="forumList-msg-time">372天前</span>
                        <div className="forumList-msg-source">
                            <span className="forumList-msg-source-active">心跳行动</span>
                            <span className="forumList-msg-source-value"><Icon type="money-collect" />862.515</span>
                        </div>
                        <span className="forumList-msg-seen"><Icon type="eye" />100944</span>
                        <span className="forumList-msg-discuss"><Icon type="message" />385</span>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div className="forumList-title">
                        <i className="ding">顶</i>
                        <i className="jing">精</i>
                        <span>币源社区源点介绍，源点价值，源点获取规则。（2019年3月23日更新）</span>
                    </div>
                    <div className="forumList-msg">
                        <span className="forumList-msg-time">372天前</span>
                        <div className="forumList-msg-source">
                            <span className="forumList-msg-source-active">心跳行动</span>
                            <span className="forumList-msg-source-value"><Icon type="money-collect" />862.515</span>
                        </div>
                        <span className="forumList-msg-seen"><Icon type="eye" />100944</span>
                        <span className="forumList-msg-discuss"><Icon type="message" />385</span>
                    </div>
                </li>
            </ul><ul>
                <li>
                    <div className="forumList-title">
                        <i className="ding">顶</i>
                        <i className="jing">精</i>
                        <span>币源社区源点介绍，源点价值，源点获取规则。（2019年3月23日更新）</span>
                    </div>
                    <div className="forumList-msg">
                        <span className="forumList-msg-time">372天前</span>
                        <div className="forumList-msg-source">
                            <span className="forumList-msg-source-active">心跳行动</span>
                            <span className="forumList-msg-source-value"><Icon type="money-collect" />862.515</span>
                        </div>
                        <span className="forumList-msg-seen"><Icon type="eye" />100944</span>
                        <span className="forumList-msg-discuss"><Icon type="message" />385</span>
                    </div>
                </li>
            </ul><ul>
                <li>
                    <div className="forumList-title">
                        <i className="ding">顶</i>
                        <i className="jing">精</i>
                        <span>币源社区源点介绍，源点价值，源点获取规则。（2019年3月23日更新）</span>
                    </div>
                    <div className="forumList-msg">
                        <span className="forumList-msg-time">372天前</span>
                        <div className="forumList-msg-source">
                            <span className="forumList-msg-source-active">心跳行动</span>
                            <span className="forumList-msg-source-value"><Icon type="money-collect" />862.515</span>
                        </div>
                        <span className="forumList-msg-seen"><Icon type="eye" />100944</span>
                        <span className="forumList-msg-discuss"><Icon type="message" />385</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

// class forumList extends Component {
//     render() {
//         return (
// <div className="forumList">
//     <ul>
//         <li>
//             <div className="forumList-title">
//                 <i className="ding">顶</i>
//                 <i className="jing">精</i>
//                 <span>币源社区源点介绍，源点价值，源点获取规则。（2019年3月23日更新）</span>
//             </div>
//             <div className="forumList-msg">
//                 <span className="forumList-msg-time">372天前</span>
//                 <div className="forumList-msg-source">
//                     <span className="forumList-msg-source-active">心跳行动</span>
//                     <span className="forumList-msg-source-value"><Icon type="money-collect" />862.515</span>
//                 </div>
//                 <span className="forumList-msg-seen"><Icon type="eye" />100944</span>
//                 <span className="forumList-msg-discuss"><Icon type="message" />385</span>
//             </div>
//         </li>
//     </ul>
// </div>
//         );
//     }
// }

export default forumList;
// export default connect(
//     mapStateToProps,
// )(forumList);