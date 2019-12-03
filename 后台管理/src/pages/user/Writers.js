import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

import UserList from '../../components/UserList'
import { Row, Col, Button ,PageHeader } from 'antd';
// function mapStateToProps(state) {
//     return {

//     };
// }

let mapState=(state)=>{
    let writer = state.writer
    return writer
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
class Writers extends Component {

    render() {
        // console.log(this.props);
        
        return(
       <main className='userlist' >
           <PageHeader
             title="媒体"
             />
            <Row gutter={8} className="listTitle" type="flex"  align="middle">
                <Col className="gutter-row"  span={1}>
                    #
                </Col>
                <Col className="gutter-row" span={2}>
                    用户头像
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
          <UserList list={this.props.writerlist} />

         
            </main>
        )
    }
}

export default Writers;