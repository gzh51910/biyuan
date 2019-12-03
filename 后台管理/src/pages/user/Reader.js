// ant
import { Row, Col, Button, PageHeader, Input, Divider, Menu, Dropdown } from 'antd';
const ButtonGroup = Button.Group;
const menus = (
    <Menu>
        <Menu.Item onClick={() => console.log(11)} key="username">id查找</Menu.Item>
        <Menu.Item key="phone">手机查找</Menu.Item>
        <Menu.Item key="email">邮箱查找</Menu.Item>
        <Menu.Item key="name">名称查找</Menu.Item>
    </Menu>
);
const { Search } = Input;
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
        GERALL_READER_USER(list){
            dispatch({
                type:"GERALL_READER_USER",payload:
                    list
            })
        }
    }
}
@connect(mapState, mapDispatch)
class Reader extends Component {
   
  async componentDidMount() {
   let {data} = await local.get("/goods", {})
//    获取数据
    this.props.GERALL_READER_USER(data.data)
}       


    render() {
        
        return (<main className='userlist' >
            <PageHeader title="用户管理" />
            <Row gutter={2} className="listTitle" type="flex" align="middle">
                <Col className="gutter-row title" span={8} offset={5}>
                    <Input placeholder="input search text" />
                </Col>
                <Col className="gutter-row" span={3} >
                    <Dropdown overlay={menus}>
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
            <UserList/>
        </main>
        );
    }
}

export default Reader;