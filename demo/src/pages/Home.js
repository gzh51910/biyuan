import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Home extends Component {
    render() {
        return (
            <div>
                首页
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);