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