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


class Home extends Component {
    render() {
            return (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )
    }
}

export default Home;