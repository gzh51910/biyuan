import React, { Component } from "react";
import { Accordion, WhiteSpace } from "antd-mobile";
import { Icon } from "antd";
import NewsflashListData from "../api/NewsflashListData";

class NewsflashList extends Component {
    state = {
        time: "",
        count: "",
        datalist: []
    };

    getTime() {
        const now = new Date();
        const month = now.getMonth() + 1,
            day = now.getDate(),
            week = "星期" + "日一二三四五六".charAt(now.getDay());
        return `${month}月${day}日 ${week}`;
    }

    async componentDidMount() {
        let { count, data } = NewsflashListData;
        this.setState({
            time: this.getTime(),
            count,
            datalist: data
        });
    }

    render() {
        let { time, count, datalist } = this.state;

        return (
            <div>
                <h3
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "3vw",
                        backgroundColor: "#F5F5F5"
                    }}
                >
                    <span>{time}</span>
                    <span>共{count.count}条</span>
                </h3>
                {datalist.map(item => {
                    return (
                        <div key={item.id}>
                            <Accordion
                                defaultActiveKey="0"
                                onChange={this.onChange}
                            >
                                <Accordion.Panel header={item.title}>
                                    <div
                                        style={{
                                            padding: "5vw",
                                            backgroundColor: "#F5F5F5"
                                        }}
                                    >
                                        <p style={{ wordBreak: "break-all" }}>
                                            {item.content}
                                        </p>
                                        <WhiteSpace size="sm" />
                                        <h5 style={{ color: "#999999" }}>
                                            来源：{item.source}
                                        </h5>
                                        <WhiteSpace size="sm" />
                                        <h4
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-around"
                                            }}
                                        >
                                            <span>
                                                <Icon
                                                    type="caret-up"
                                                    style={{ color: "#FFC600" }}
                                                />
                                                &nbsp;利好&nbsp;{item.lihao}
                                            </span>
                                            <span>
                                                <Icon type="caret-down" />
                                                &nbsp;利空&nbsp;{item.likong}
                                            </span>
                                            <span>
                                                <Icon type="share-alt" />
                                                &nbsp;分享
                                            </span>
                                        </h4>
                                    </div>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default NewsflashList;
