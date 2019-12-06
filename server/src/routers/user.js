const express = require('express');

const Router = express.Router();

// 引入数据库
const mongodb = require('../db/mongodb');
// const mongodb = require('../db/mongodb.js') ;
const {
    formatData
} = require('../utils')
// 
const colName = 'user';

// 前端注册reg

Router.post('/reg', async (req, res) => {
    console.log(req.body);
    
    const colName = 'user'
    let {
        phone,
        psw,
    } = req.body;
    let msg = '失败，';
    let phoneData = await mongodb.find(colName, {
        phone
    })
    if (phoneData.length > 0) {
        msg += "手机已被人注册"
    }
    if (!phoneData.length > 0) {
        let level = "1"
        let status = '正常',
            avatar = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        let data = await mongodb.create(colName, {
            phone,
            psw,
            level,
            status,
            avatar
        })
        res.send(formatData({
            data
        }))
    } else {
        res.send(formatData({
          msg
        }))

    }
})



module.exports = Router