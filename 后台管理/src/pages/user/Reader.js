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
// function handleMenuClick(e) {
//     console.log('click', e);
// }
const { Search } = Input;
import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import UserList from '../../components/UserList'
import { local } from '../../api'
import TableForm from '../../components/TableForm'

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
        },
        DIPATCH_READER_USER(user) {
            dispatch({ type: 'DIPATCH_READER_USER', payload: { user } })
        },
        REMOVE_READER_USER(user_id) {
            dispatch({ type: 'REMOVE_READER_USER', payload: { user_id } })
        }
    }
}
@connect(mapState, mapDispatch)
class Reader extends Component {
    state = {
        menulist: [
            {
                span: 1,
                text: "#",
                type: "#"
            }, {
                span: 2,
                text: "用户头像",
                type: "avatar"
            }, {
                span: 2,
                text: "用户Id",
                type: "id"
            }, {
                span: 2,
                text: "用户名称",
                type: "name"
            }, {
                span: 2,
                text: "用户等级",
                type: "level"
            }, {
                span: 3,
                text: "使用状态",
                type: "status"
            }, {
                span: 3,
                text: "注册手机",
                type: "phone"
            }, {
                span: 3,
                text: "注册邮箱",
                type: "email"
            }, {
                span: 4,
                text: "操作",
                type: "control"
            },
        ],
    }
  async componentDidMount() {
   let {data} = await local.get("/goods", {})
   let  list=data.data
//    获取数据
    this.props.GERALL_READER_USER(list)
    console.log(this.props);
}
remove(){


    
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
                        <Button>
                            查找用户
                        </Button>
                    </Dropdown>
                </Col>
                <Col className="gutter-row" span={3} >
                    
               <TableForm text="添加用户"></TableForm>
                </Col>
            </Row>
            <Divider />
            <Row gutter={8} className="listTitle" type="flex" align="middle">
                {this.state.menulist.map(item => <Col key={item.text} className="gutter-row" span={item.span}> {item.text}</Col>)}
            </Row>
            <UserList list={this.props.list} />
        </main>
        );
    }
}

export default Reader;