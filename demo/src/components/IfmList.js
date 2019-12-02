import React from "react";
import { Card, WhiteSpace, Flex } from "antd-mobile";

function IfmList({ datalist }) {
    return (
        <div>
            {console.log(datalist)}
            {datalist.map(item => {
                return (
                    <div key={item.id}>
                        <WhiteSpace size="xs" />
                        <Card full>
                            <Flex
                                justify="around"
                                align="center"
                                style={{ paddingTop: "15px" }}
                            >
                                <div style={{ width: "60%" }}>
                                    <h3>{item.title}</h3>
                                </div>
                                <div style={{ width: "30%" }}>
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

{
    /* <div>
    <WhiteSpace size="xs" />
    <Card full>
        <Card.Header
            title="This is title"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>this is extra</span>}
        />
        <Card.Body>
            <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer
            content="footer content"
            extra={<div>extra footer content</div>}
        />
    </Card>
</div>; */
}
