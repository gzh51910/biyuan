import React, { Component } from 'react';
import { biyuan } from '../api'
import { connect } from 'react-redux';
import '../css/forum.css';
function mapStateToProps(state) {
    return {

    };
}

class forum extends Component {
    render() {
        return (
            <div className="container-forum">
                <header>
                    <div className="header-home"><img src="http://m.coingogo.com/wap/image/logo.png"/></div>
                    <div className="header-center">泡论坛</div>
                    <Icon type="search" />
                    <Icon type="plus" />
                </header>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(forum);