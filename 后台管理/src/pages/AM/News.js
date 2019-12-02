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


class News extends Component {
    state={
        textType: [
            {
                type: "自媒体"
            }, {
                type: "数字币"
            }, {
                type: "区块链"
            }, {
                type: "行情"
            }, {
                type: "交易所"
            }, {
                type: "挖矿区"
            }, {
                type: "钱包区"
            }, {
                type: "综合区"
            }, {
                type: "项目评级"
            },

        ],
    
    }
    render() {
        console.log(this.props);
      
        return (<div >
            new </div>
        );
    }
}

export default News;