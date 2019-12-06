import React from "react";
import { Flex, WingBlank, WhiteSpace } from "antd-mobile";
import { Icon } from "antd";

function Details({ location }) {
    console.log(location);
    let { state } = location;
    return (
        <div>
            <WingBlank>
                <WhiteSpace size="md" />
                <Flex justify="between">
                    <Icon
                        type="left"
                        onClick={() => {}}
                        style={{ fontSize: "7vw" }}
                    />
                    <Icon type="export" style={{ fontSize: "7vw" }} />
                </Flex>
                <WhiteSpace size="lg" />

                <h2 style={{ fontWeight: "bold" }}>{state.title}</h2>
                <h1>Details</h1>
            </WingBlank>
        </div>
    );
}

export default Details;
