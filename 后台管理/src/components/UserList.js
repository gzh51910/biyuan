import { Row, Col, Button } from 'antd';
const ButtonGroup = Button.Group;
import React, {
    Component
} from 'react';


function Userlist({list}) {
    return (
        <div className="userlist">
            {
                list.map((ele, idx) => {
                    return (
                        <Row gutter={8} key={ele.id} type="flex"   align="middle" >
                            <Col className="gutter-row" span={1}>
                                {idx + 1}
                            </Col>
                            <Col className="gutter-row" span={2}>
                               {ele.id}
                            </Col>
                            <Col className="gutter-row" span={2}>
                            {ele.name}
                            </Col>  
                             <Col className="gutter-row" span={3}>
                            {ele.level}级
                            </Col>
                            <Col className="gutter-row" span={3}>
                                {ele.status}
                            </Col>
                            <Col className="gutter-row" span={3}>
                                {ele.phone}
                            </Col>
                            <Col className="gutter-row" span={3}>
                                {ele.email}
                            </Col>
                            <Col className="gutter-row" span={4}>
                                <ButtonGroup>
                                    <Button type="primary">编辑</Button>
                                    <Button  type="danger">删除</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    )
                })
            }

        </div>
    )
}

export default Userlist;