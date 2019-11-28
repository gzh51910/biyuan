import React, { Component } from 'react';
import { biyuan } from '../api'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class forum extends Component {
    render() {
        return (
            <div>
                论坛
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(forum);