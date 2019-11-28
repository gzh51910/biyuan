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
               欢迎管理员登陆，
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);