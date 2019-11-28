import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import { Route } from "react-router-dom";

class New extends Component {
    state = {
        menu: [
            { title: "资讯", key: "1" },
            { title: "快讯", key: "2" }
        ],
        page: ""
    };

    changeType = page => {
        console.log(page);
        console.log(this.props);
    };

    render() {
        let { menu, page } = this.state;
        return (
            <div>
                <div
                    style={{
                        width: "120px",
                        fontSize: "16px",
                        margin: "0 auto"
                    }}
                >
                    <Tabs
                        tabs={menu}
                        onChange={this.changeType}
                        tabBarInactiveTextColor="#999999"
                    ></Tabs>
                </div>
            </div>
        );
    }
}

export default New;
