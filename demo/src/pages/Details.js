import React from "react";
import { Flex, WingBlank, WhiteSpace } from "antd-mobile";
import { Icon } from "antd";

function Details({ history, location }) {
    console.log(history, location);

    let { state } = location;
    return (
        <div>
            <WingBlank>
                <WhiteSpace size="md" />
                <Flex justify="between">
                    <Icon
                        type="left"
                        onClick={() => {
                            history.goBack();
                        }}
                        style={{ fontSize: "7vw" }}
                    />
                    <Icon type="export" style={{ fontSize: "7vw" }} />
                </Flex>
                <WhiteSpace size="lg" />

                <h2 style={{ fontWeight: "bold" }}>{state.title}</h2>
                <p>{state.from}</p>
                {/* <h5>{state.content}</h5> */}
                <h1>Details</h1>
            </WingBlank>
        </div>
    );
}

export default Details;
