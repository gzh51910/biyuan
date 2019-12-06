import React from 'react';
import { Row, Col, Avatar } from 'antd';

function HeaderState({ role }) {

    return (
        <div className="logo"><img src='../' alt="" />
            <div>  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span>level:{role}</span><b></b>
            </div>
            
        </div>

    )
}


export default HeaderState;