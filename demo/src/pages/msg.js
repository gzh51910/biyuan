import React, { Component } from 'react';
import { biyuan } from '../api'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class msg extends Component {
    render() {
        return (
            <div>
                资讯
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(msg);