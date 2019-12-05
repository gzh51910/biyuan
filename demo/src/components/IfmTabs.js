import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import IfmList from "@@/IfmList";
import IfmListData from "../api/IfmListData";

class IfmTabs extends Component {
    state = {
        datalist: []
    };

    async componentDidMount() {
        // let res = await news.get();
        let res = IfmListData;
        this.setState({
            datalist: res
        });
    }

    render() {
        let { tabs } = this.props;
        let { datalist } = this.state;

        return (
            <div>
                <Tabs
                    tabs={tabs}
                    renderTabBar={props => (
                        <Tabs.DefaultTabBar {...props} page={5} />
                    )}
                >
                    <IfmList datalist={datalist} />
                </Tabs>
            </div>
        );
    }
}

export default IfmTabs;
