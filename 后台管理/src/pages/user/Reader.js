// ant
import { Row, Col, Button, PageHeader, Input, Divider, Menu, Dropdown } from 'antd';
const ButtonGroup = Button.Group;

import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import UserList from './UserList'
import { local } from '../../api'
import TableForm from './TableForm'


let mapState = (state) => {
    let reader = state.reader
    return reader
}
let mapDispatch = (dispatch) => {
    return {
        GETALL_READER_USER(list) {
            dispatch({
                type: "GETALL_READER_USER", payload:
                    list
            })
        }
    }
}

@connect(mapState, mapDispatch)
class Reader extends Component {
    state = {
        FindText: '',
    }

    getFindText = (e) => {
        this.state.FindText = e.target.value
    }
   getKey =  async({  key },) => {
       let {FindText}=this.state
        console.log(this.state.FindText);
       let {data}= await local.get(`/goods/${key}`,{
            FindText
        })
        console.log(data);
        this.props.GETALL_READER_USER(data.data)
    }
 
    render() {
        console.log(1);
        
        return (<main className='userlist' >
            <PageHeader title="用户管理" />
            <Row gutter={2} className="listTitle" type="flex" align="middle">
                <Col className="gutter-row title" span={8} offset={5}>
                    <Input placeholder="input search text" onBlur={(e) => this.getFindText(e)} />
                </Col>
                <Col className="gutter-row" span={3} >
                    <Dropdown overlay={
                    <Menu>
                        <Menu.Item onClick={({  key }) => this.getKey({  key })} key="username">用户id查找</Menu.Item>
                        <Menu.Item onClick={({  key }) => this.getKey({  key })} key="phone">手机查找</Menu.Item>
                        <Menu.Item onClick={({  key }) => this.getKey({  key })} key="email">邮箱查找</Menu.Item>
                        <Menu.Item onClick={({  key }) => this.getKey({  key })} key="name">名称查找</Menu.Item>
                        <Menu.Item onClick={({  key }) => this.getKey({  key })} key="status">使用状态查找</Menu.Item>
                        <Menu.Item onClick={({  key }) => this.getKey({  key })} key="level">等级查找</Menu.Item>
                    </Menu>}>
                        <Button
                        >
                            查找用户
                        </Button>
                    </Dropdown>
                </Col>
                <Col className="gutter-row" span={3} >
                    <TableForm text="添加用户"></TableForm>
                </Col>
            </Row>
            <Divider />
            <UserList />
        </main>
        );
    }
}
export default Reader;