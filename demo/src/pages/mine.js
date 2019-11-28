import React, { Component } from 'react';
import { biyuan } from '../api'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class mine extends Component {
    render() {
        return (
            <div>
                我的
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(mine);