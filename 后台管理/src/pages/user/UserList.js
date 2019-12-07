import { Row, Col, Button, Avatar,Pagination,Divider ,Empty } from 'antd';
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
        },
        GETALL_READER_USER(list) {
            dispatch({
                type: "GETALL_READER_USER", payload:
                    list
            })
        }
    }
}
@connect(mapState, mapDispatch)
class Userlist extends Component {
    remove = async (id) => {
        this.props.REMOVE_READER_USER(id)
        let { data } = await local.remove(`/goods/${id}`)
    }

    onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
      }
      componentDidMount() {

        this.getdata()
        console.log(123);
        
    }
    getdata= async()=>{
        let { data } = await local.get("/goods", {
            page:1, pagesize:8
        })
        //    获取数据
        this.props.GETALL_READER_USER(data.data)
    }
   
    render() {
        console.log(2);
        console.log(this.props);
        
        let { list, menulist } = this.props
        console.log(this.props.list.length!=0);
        
        return (
            this.props.list.length!=0?
            <div className="userlist" >
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
                <Divider></Divider>
                <Pagination onChange={(page)=>this.onChange(page)} total={list.length} hideOnSinglePage={true} />
            </div>
            :<Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
        )
    }
}

export default Userlist;