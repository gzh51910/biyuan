

import React, { Component } from 'react';
import { biyuan } from '../api';
import pic from '../img/logo.png';
import { connect } from 'react-redux';
import '../css/mian.scss';
import { List, Avatar, Layout } from 'antd';
const { Header, Content } = Layout;
import { Icon, Typography } from 'antd';


class leftlist extends Component {


    render() {


        // 列表
        const data = [
            '看资讯',
            '泡论坛.',
            '我的论坛',
            '发达领',
            '韭菜门',
            '币数据',
            '交易汇',
        ];
        const icona = [
            <Icon type="message" />,
            <Icon type="ci" />,
            <Icon type="crown" />,
            <Icon type="property-safety" />,
            <Icon type="dollar" />
        ];

        return (
            <div className="minea">

                <Layout>
                    <Header style={{ background: '#ffc600', padding: 0 }} className="peoplepic">
                        <div className="peoplepicaa"><img src={pic} className="touxiang" /></div>


                    </Header>
                    <Content className="listcontent">   <List
                        className="listmine"
                        size="small"

                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                {/* <i>{}</i> */}
                                {item}
                            </List.Item>
                        )}
                    /></Content>


                </Layout>
            </div>


        )
    }

}

export default connect(

)(leftlist);
