import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import IfmList from "@@/IfmList";
import { local } from "../api";

class IfmTabs extends Component {
    state = {
        datalist: [],
        page: 0,
        parent: 0,
        psize: 12
    };

    changeTabs = page => {
        console.log(page.id);
        this.setState({
            parent: page.id
        });
    };

    getData = async () => {
        return await local.get("/home/news/", {
            page: 0,
            parent: 43,
            psize: 12
        });
    };

    async componentDidMount() {
        let {
            data: { data }
        } = await this.getData();

        this.setState({
            datalist: data
        });
    }

    render() {
        let { tabs } = this.props;
        let { datalist } = this.state;

        return (
            <div>
                <Tabs
                    tabs={tabs}
                    onChange={this.changeTabs}
                    renderTabBar={props => (
                        <Tabs.DefaultTabBar {...props} page={5} />
                    )}
                >
                    <IfmList datalist={datalist} {...this.props} />
                </Tabs>
            </div>
        );
    }
}

export default IfmTabs;
