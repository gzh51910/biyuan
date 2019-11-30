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


class Reader extends Component {
    
 
    render() {
        console.log(this.props);
        
        return (<div >
            普通用户 
            <UserList></UserList>
            </div>
        );
    }
}

export default Reader;