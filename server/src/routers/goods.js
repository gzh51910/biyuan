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
    // console.log(type,page,pagesize);
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
    console.log(data);
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
    let data = await mongodb.find(colName, {
        email,
        phone,
        username
    });
    console.log("req.body", req.body);
    console.log("data", data);
    if (!data.length > 0) {
        console.log(11);
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
    } else {
        let msg = '失败，';
        let emailData = await mongodb.find(colName, {
            email
        })
        let phoneData = await mongodb.find(colName, {
            phone
        })
        let usernameData = await mongodb.find(colName, {
            username
        })
        if (emailData.length > 0) {
            msg += "邮箱已被人注册"
        }
        if (phoneData.length > 0) {
            msg += "手机已被人注册"
        }
        if (usernameData.length > 0) {
            msg += "账号被人使用"
        }
        res.send({
            msg
        })
    }
})

// 删除用户
Router.delete('/:_id', async (req, res) => {
    console.log(111);
    let {
        _id
    } = req.params;
    console.log(2222, _id);
    let data = await mongodb.remove(colName, {
        _id
    });
    console.log(data);
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
        email, name, phone, psw, username,level,status
    } = req.body
    console.log("req.params",req.params);
    console.log("req.body",req.body);
    
    let ssr={}
        let s={email, name, phone, psw, username,_id,level,status}
        for (let key in s) {
            if (!s[key] == (undefined || "")) {
                ssr[key]=s[key]
            }
        }

    let data = await mongodb.update(colName, {
        _id
    }, {
       ...ssr
    });
    console.log(data);
    
    res.send(formatData({
        data
    }))
})


// 增加商品
Router.post('/', async (req, res) => {

    let {
        type,
        imgsrc,
        name,
        id,
        desc,
        level,
        price
    } = req.body
    // 写入数据：

    let data = await mongodb.create(colName, {
        type,
        imgsrc,
        name,
        id,
        desc,
        level,
        price
    });

    res.send(formatData({
        data
    }))
})




//  查询单个商品
Router.get('/:id', async (req, res) => {

    let {
        id
    } = req.params;
    // console.log(typeof(id));
    // 查询数据：
    //  看数据库的id是否为数字  id=id*1

    let data = await mongodb.find(colName, {
        id
    });
    // if (data.data) {
    console.log(data);
    if (data.length > 0) {
        res.send(formatData({
            data
        }))
    } else {
        id = id * 1
        data = await mongodb.find(colName, {
            id
        });
    }
    res.send(formatData({
        data
    }))
})


// const colName = 'xixi';

// 更新商品
// 根据id或者名字修改修改
// 只能用谗言字符串传id然后用post 一样从发送数据
// {type,imgsrc,desc,level,price}需要全部传否则没传的值会变null










module.exports = Router