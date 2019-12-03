import React, { Component } from "react";
import { Card, WhiteSpace, WingBlank, Flex } from "antd-mobile";
import WeiboData from "../api/WeiboData";

class Weibo extends Component {
    state = {
        datalist: []
    };

    async componentDidMount() {
        let { data } = WeiboData;
        this.setState({
            datalist: data
        });
    }

    render() {
        let { datalist } = this.state;
        console.log("weibo", datalist);

        return (
            <div>
                {datalist.map(item => {
                    return (
                        <Card full key={item.mid}>
                            <WhiteSpace size="lg" />
                            <WingBlank size="lg">
                                <Flex align="start">
                                    <i
                                        style={{
                                            width: "15vw",
                                            height: "15vw",
                                            borderRadius: "50%",
                                            overflow: "hidden"
                                        }}
                                    >
                                        <img
                                            src={
                                                item.user.profile_image_url ||
                                                item.user.avatar_large ||
                                                item.user.avatar_hd ||
                                                "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg"
                                            }
                                        />
                                    </i>
                                    <div style={{ flex: 1 }}>
                                        <h4>
                                            <strong>{item.user.name}</strong>
                                        </h4>
                                        <p>{item.text}</p>
                                    </div>
                                </Flex>
                            </WingBlank>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default Weibo;
