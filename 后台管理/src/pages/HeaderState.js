import React from 'react';
import { Row, Col, Avatar } from 'antd';

function HeaderState({ role }) {

    return (
        <div className="logo"><img src="http://m.coingogo.com/wap/image/login_logo.png" alt="" />
            <div>  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span>level:{role}</span>
            </div>
            
        </div>

    )
}


export default HeaderState;