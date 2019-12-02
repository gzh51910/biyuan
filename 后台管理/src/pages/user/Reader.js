import { Row, Col, Button ,PageHeader } from 'antd';
import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import UserList from '../../components/UserList'
// function mapStateToProps(state) {
//     return {

//     };
// }
let mapState=(state)=>{
    let reader = state.reader
    return reader
}
let mapDispatch=(dispatch)=>{
    return {
        DIPATCH_READER_USER(user) {
            dispatch({ type: 'DIPATCH_READER_USER', payload: { user } })
        },
        REMOVE_READER_USER(user_id) {
            dispatch({ type: 'REMOVE_READER_USER', payload: { user_id } })
        }
    }
}
@connect(mapState,mapDispatch)
class Reader extends Component {
  componentWillMount(){
    // console.log(this.props);
  }
  remove(){

  }
    render() {
        return (<main className='userlist' >
           <PageHeader
             title="用户管理"
             />
            <Row gutter={8} className="listTitle" type="flex"  align="middle">
                <Col className="gutter-row"  span={1}>
                    #
                </Col>
                <Col className="gutter-row" span={2}>
                用户Id
                </Col>
                <Col className="gutter-row" span={2}>
                用户名称
                </Col>
                <Col className="gutter-row" span={3}>
                    用户等级
                </Col>
                <Col className="gutter-row" span={3}>
                    使用状态
                </Col>
                <Col className="gutter-row" span={3}>
                    注册手机
                 </Col>
                <Col className="gutter-row" span={3}>
                    注册邮箱
              </Col>
                <Col className="gutter-row" span={4}>
                    操作
             </Col>
            </Row>
          <UserList list={this.props.list} />

         
            </main>
        );
    }
}

export default Reader;