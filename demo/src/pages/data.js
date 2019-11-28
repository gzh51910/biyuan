import React, { Component } from 'react';
import { biyuan } from '../api'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class data extends Component {
    render() {
        return (
            <div>
                数据
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(data);