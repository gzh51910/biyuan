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


class WeiBo extends Component {
 
    render() {
        console.log(this.props);
        
        return (<div >
            普通用户 </div>
        );
    }
}

export default WeiBo;