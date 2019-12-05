import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import { List, Avatar, Icon, Button } from 'antd';

import CheckBox from './CheckBox'
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            `最有魅力的第${i+1}个女生`
    });
}
const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);
class News extends Component {
    state = {
        textType: [
            {
                name: "自媒体", directory: "0", type: "自媒体"
            }, {
                name: "数字币", directory: "0", type: "数字币"
            }, {
                name: "区块链", directory: "0", type: "区块链"
            }, {
                name: "行情", directory: "0", type: "行情"
            }, {
                name: "交易所", directory: "0", type: "交易所"
            }, {
                name: "挖矿区", directory: "0", type: "挖矿区"
            }, {
                name: "钱包区", directory: "0", type: "钱包区"
            }, {
                name: "综合区", directory: "0", type: "综合区"
            }, {
                name: "项目评级", directory: "0", type: "项目评级"
            },

        ],

    }
    render() {
        console.log(this.props);

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
            dataSource={listData}
            itemLayout="vertical"
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                        <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                        <IconText type="message" text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <aside>
                            <Button type="danger"
                            // onClick={this.remove.bind(this, ele._id)}
                            >删  除
                         </Button>
                            <CheckBox text="阅读审核" /></aside>
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar style={{ width: "80px", height: "80px" }} src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
        )
    }
}

export default News;