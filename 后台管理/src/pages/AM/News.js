import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import { List, Avatar, Icon, Button, Collapse } from 'antd';
const { Panel } = Collapse;
import { local } from '../../api'
import CheckBox from './CheckBox'

let mapState = (state) => {
    let newsdatalist = state.news
    return newsdatalist
}
let mapDispatch = (dispatch) => {
    return {
        GETALL_NEWS(newsdatalist) {
            dispatch({
                type: 'GETALL_NEWS', payload: newsdatalist
            })
        }
    }
}
@connect(mapState, mapDispatch)

class News extends Component {
    state = {
        textType: [
            {
                name: "自媒体", type: "自媒体",
                id: "43"
            }, {
                name: "数字币", type: "数字币",
                id: "1",
            }, {
                name: "区块链", type: "区块链",
                id: "6",
            }, {
                name: "行情", type: "行情",
                id: "7",
            }, {
                name: "交易所", type: "交易所",
                id: "8",
            }, {
                name: "挖矿区", type: "挖矿区",
                id: "9",
            }, {
                name: "钱包区", type: "钱包区",
                id: "10"
            }, {
                name: "综合区", type: "综合区",
                id: "11"
            }, {
                name: "项目评级", type: "项目评级",
                id: "46"
            },

        ],

    }

    IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
    );
    async componentDidMount() {
        let { data } = await local.get('/home/news/all', {
            page: 0
        })

        this.props.GETALL_NEWS(data.data)
        console.log("data", this.props)
        // listData=newsdatalist?newsdatalist:listData

    }
    render() {
        let { newsDatalist } = this.props
        return (<List
            header={
                <div>
                    <b>资讯板块</b>
                </div>
            }
            itemLayout="vertical"
            size="small"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 4,
            }}
            dataSource={newsDatalist}
            itemLayout="vertical"
            renderItem={item => (
                <List.Item
                    key={item.title}
                    // actions={[
                    //     <this.IconText type="star-o" text="156" key="list-vertical-star-o" />,
                    //     <this.IconText type="like-o" text="156" key="list-vertical-like-o" />,
                    //     <this.IconText type="message" text="2" key="list-vertical-message" />,
                    // ]}
                    extra={
                        <aside>
                            <Button type="danger"
                            // onClick={this.remove.bind(this, ele._id)}
                            >删  除
                         </Button>
                            <CheckBox content={item.content} text="阅读审核" />
                        </aside>
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar style={{ width: "80px", height: "80px" }} src={item.avatar} />}
                        title={<p>{item.title}</p>}
                        description={<p>作者：{item.username}</p>}
                    />
                </List.Item>
            )}
        />
        )
    }
}

export default News;