import { Row, Col, Button, Avatar } from 'antd';
import UpdateForm from './UpdateForm'
const ButtonGroup = Button.Group;
import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import { local } from '../../api'


let mapState = (state) => {
    let reader = state.reader
    return reader
}
let mapDispatch = (dispatch) => {
    return {
        REMOVE_READER_USER(_id) {
            dispatch({ type: 'REMOVE_READER_USER', payload: { _id } })
        }
    }
}
@connect(mapState, mapDispatch)
class Userlist extends Component {
    remove = async (id) => {
        this.props.REMOVE_READER_USER(id)
        let { data } = await local.remove(`/goods/${id}`)
    }
    render() {
        let { list, menulist } = this.props
        return (
            <div className="userlist">
                <Row gutter={8} className="listTitle" type="flex" align="middle">
                    {menulist.map(item => <Col key={item.text} className="gutter-row" span={item.span}> {item.text}</Col>)}
                </Row>
                {
                    list.map((ele, idx) => {
                        return (
                            <Row gutter={[8, 15]} key={ele._id} type="flex" align="middle" >
                                <Col className="gutter-row" span={1}>{idx + 1} </Col>
                                <Col className="gutter-row" span={2}><Avatar src={ele.avatar} /></Col>
                                <Col className="gutter-row" span={2}> {ele.username} </Col>
                                <Col className="gutter-row" span={2}>{ele.name}</Col>
                                <Col className="gutter-row" span={2}>{ele.level}级</Col>
                                <Col className="gutter-row" span={3}>{ele.status}</Col>
                                <Col className="gutter-row" span={3}>{ele.phone}</Col>
                                <Col className="gutter-row" span={3}> {ele.email}</Col>
                                <Col style={{ display: "flex", justifyContent: "space-around" }}
                                 className="gutter-row" span={3}>
                                    <UpdateForm ele={ele} text="编辑"></UpdateForm>
                                    <Button type="danger"
                                        onClick={this.remove.bind(this, ele._id)}
                                             >删  除
                                    </Button>
                                </Col>
                            </Row>
                        )
                    })
                }
            </div>
        )
    }
}

export default Userlist;