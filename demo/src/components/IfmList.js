import React from "react";
import { Card, WhiteSpace, Flex } from "antd-mobile";
import { Icon } from "antd";

import "../css/IfmList.scss";

function IfmList({ datalist }) {
    return (
        <div>
            {datalist.map(item => {
                return (
                    <div key={item.id}>
                        <WhiteSpace size="xs" />
                        <Card full>
                            <Flex
                                justify="around"
                                align="center"
                                className="card"
                            >
                                <div className="tit">
                                    <h3>
                                        <strong>{item.title}</strong>{" "}
                                    </h3>
                                    <p>
                                        <span>{item.username}</span>
                                        <span>
                                            <Icon type="eye" />
                                            &nbsp;{item.view_count}
                                        </span>
                                    </p>
                                </div>
                                <div className="titImg">
                                    <img src={item.image} />
                                </div>
                            </Flex>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}

export default IfmList;
