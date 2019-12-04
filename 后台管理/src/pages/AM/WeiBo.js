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
import { Empty } from 'antd';

class WeiBo extends Component {
 
    render() {
        console.log(this.props);
        
        return (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />)
    }
}

export default WeiBo;