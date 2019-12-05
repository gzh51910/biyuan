import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import NewsflashList from "@@/NewsflashList";
import Weibo from "@@/Weibo";

class Newsflash extends Component {
    state = {
        tabs: [{ title: "快讯" }, { title: "微博" }]
    };
    render() {
        let { tabs } = this.state;

        return (
            <div>
                <Tabs tabs={tabs}>
                    <NewsflashList />
                    <Weibo />
                </Tabs>
            </div>
        );
    }
}

export default Newsflash;
