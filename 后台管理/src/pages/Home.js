import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    withTest
} from "../utils/withTest"
// function mapStateToProps(state) {
//     return {

//     };
// }

let mapState = (state) => {
    let admin = state.admin
    return admin
}
let mapDispatch = (dispatch) => {
    return {
        LOGIN(user) {
            dispatch({ type: 'LOGIN' ,payload:{user}})
        },
        LOGOUT(state){
            dispatch({ type: 'LOGOUT' ,payload:{user}})
        }
    }
}

@connect(mapState,mapDispatch)
@withTest
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: ''
        }
    }
    render() {
        console.log(this.props);
        
        return (<div >
            欢迎管理员登陆， </div>
        );
    }
}

export default Home;