import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

// function mapStateToProps(state) {
//     return {

//     };
// }
import {local,biyuan} from '../api'
import { Empty } from 'antd';


class Home extends Component {
 
async componentDidMount(){
    let data=await biyuan.get('/flash/default/list',{
        type:2,page:0
    })
    console.log(data);
    
} 
 
    render() {
            return (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )
    }
}

export default Home;