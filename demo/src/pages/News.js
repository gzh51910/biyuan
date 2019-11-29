import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import { Route } from "react-router-dom";

import Information from "./Information";
import Newsflash from "./Newsflash";

class New extends Component {
    state = {
        menu: [],
        activeKey: ""
    };

    goto = ({ key: path }) => {
        let { history, match } = this.props;
        this.setState({
            activeKey: path
        });
        history.push(match.path + path);
    };

    componentDidMount() {
        this.setState({
            menu: [
                { title: "资讯", key: "/information" },
                { title: "快讯", key: "/newsflash" }
            ],
            activeKey: this.props.location.pathname.slice(5)
        });
    }

    render() {
        let { menu, activeKey } = this.state;
        let { match } = this.props;

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
                        onChange={this.goto}
                        tabBarInactiveTextColor="#999999"
                        page={activeKey}
                    ></Tabs>
                </div>
                <Route
                    path={match.path + "/information"}
                    component={Information}
                />
                <Route path={match.path + "/newsflash"} component={Newsflash} />
            </div>
        );
    }
}

export default New;
