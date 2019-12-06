import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

import UserList from './UserList'
import { Row, Col, Button, PageHeader, Input, Divider, Menu, Dropdown ,Empty} from 'antd';
import TableForm from './TableForm'
import { local } from '../../api'

// function mapStateToProps(state) {
//     return {

//     };
// }

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

@connect(mapState,mapDispatch)


class Writers extends Component {


    
    async componentDidMount() {

        let { data } = await local.get("/goods", {})
        //    获取数据
        this.props.GETALL_READER_USER(data.data)
    }

    render() {
        // console.log(this.props);
        
        return(
       <main className='userlist' >
           <PageHeader
             title="媒体作家管理"
             />
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
          <UserList  />

         
            </main>
        )
    }
}

export default Writers;