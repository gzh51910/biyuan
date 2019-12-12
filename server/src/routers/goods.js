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
// @查询所有商品
Router.get('/', async (req, res) => {
    // page     index
    // 1        0
    // 2        10
    // 3        20
    // 推导公式：index = (page-1)*size;
    // 语句：find().skip(index).litmit(size)

    let {
        page = 1, pagesize = 8,
    } = req.query;
    // 根据分页和每页数量计算跳过的索引值
    let index = (page - 1) * pagesize
    // let type="地板"
    // mongodb查询数据库
    // let data = await mongodb.find(colName)
    // let leng = data.length
    data = await mongodb.find(colName, {}, {
        skip: index,
        limit: pagesize
    });
    // let data = await mongodb.find(colName,{type});
    res.send(formatData({
        data
    }))
})


// 后台用户注册
Router.post('/', async (req, res) => {
    const colName = 'user'
    let {
        email,
        phone,
        psw,
        username,
        name
    } = req.body;
    var msg = '失败，';
    let emailData = await mongodb.find(colName, {
        email
    })
    if (emailData.length > 0) {
        msg += "邮箱已被人注册"
    }
    let phoneData = await mongodb.find(colName, {
        phone
    })
    if (phoneData.length > 0) {
        msg += "手机已被人注册"
    }
    let usernameData = await mongodb.find(colName, {
        username
    })
    if (usernameData.length > 0) {
        msg += "账号被人使用"
    }
    if (emailData.length > 0 || phoneData.length > 0 || usernameData.length > 0) {

        res.send({
            msg
        })
    } else {
        let level = "1"
        let status = '正常',
            avatar = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        let result = await mongodb.create(colName, {
            email,
            phone,
            psw,
            username,
            name,
            level,
            status,
            avatar
        })
        res.send({
            msg: "注册成功"
        })

    }
})

// 删除用户
Router.delete('/:_id', async (req, res) => {
    let {
        _id
    } = req.params;
    let data = await mongodb.remove(colName, {
        _id
    });
    if (data.length > 0) {
        res.send(formatData({
            data
        }))
    } else {
        res.send(formatData({
            status: 0
        }))
    }
})

// 更新用户
Router.patch('/:_id', async (req, res) => {
    let {
        _id
    } = req.params;
    let {
        email,
        name,
        phone,
        psw,
        username,
        level,
        status
    } = req.body.params
    let data = await mongodb.update(colName, {
        _id
    }, {
        email,
        name,
        phone,
        psw,
        username,
        level,
        status
    })
    res.send(formatData({
        data
    }))
})
// 根据类型查询使用匹配正则查询 {key string}
Router.get('/:key', async (req, res) => {
    let {
        key
    } = req.params;
    let {
        FindText
    } = req.query


    let result = {};

    result[`${key}`] = RegExp(FindText)
    var data = await mongodb.find(colName, result)
    res.send({
        data
    })
})


module.exports = Router