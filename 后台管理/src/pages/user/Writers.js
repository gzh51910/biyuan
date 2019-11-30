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


class Writers extends Component {

    render() {
        console.log(this.props);
        
        return (<div >
            媒体人 </div>
        );
    }
}

export default Writers;