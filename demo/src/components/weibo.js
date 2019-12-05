import React, { Component } from "react";
import { Card, WhiteSpace, WingBlank, Flex } from "antd-mobile";
import WeiboData from "../api/WeiboData";

const showsix = {
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 6,
    WebkitBoxOrient: "vertical"
};

const head = {
    width: "15vw",
    height: "15vw",
    borderRadius: "50%",
    overflow: "hidden"
};

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

        return (
            <div>
                {datalist.map(item => {
                    return (
                        <Card full key={item.mid}>
                            <WhiteSpace size="lg" />
                            <Flex align="start" justify="around">
                                <i style={head}>
                                    <img src={item.user.profile_image_url} />
                                </i>
                                <div style={{ width: "75vw" }}>
                                    <h4>
                                        <strong>{item.user.name}</strong>
                                    </h4>
                                    <p style={showsix}>{item.text}</p>
                                </div>
                            </Flex>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

export default Weibo;
