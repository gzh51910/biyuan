const express = require('express');

const Router = express.Router();


const mongodb = require('../db/mongodb');
const {
    formatData,
    token
} = require('../utils');

// 登录注册页

Router.post('/', async (req, res) => {
    const colName = 'user'
    let {
        username
    } = req.body;
    let data = await mongodb.find(colName, {
        username
    });
    let Authorization = token.create({
        username
    });
    res.set({
        // 让浏览器运行获取自定义响应头（必须设置Access-Control-Expose-Headers响应头，才能在前端js中获取自定义的响应头）
        'Access-Control-Expose-Headers': 'Authorization',
        'Authorization': Authorization
    });
    if (data.length > 0) {
        // 登录成功创建一个token
        res.send(formatData({
            data,msg:"登录成功"
        }));
    } else {
        let result = await mongodb.create(colName, {
            username
        })
        data = await mongodb.find(colName, {
            username
        });
        res.send(formatData({
            data,
            msg: "注册成功"
        }))
    }
})



//登录 后台管理
Router.post('/admin', async (req, res) => {
    const colName = 'admin'
    let {
        user,psw
    } = req.body;
    let data = await mongodb.find(colName, {
        user,psw
    });
    console.log(data);
    // 处理不让密码暴露
    let {displayName,avatar,role,isLogin}=data[0]
    data=[{displayName,avatar,role,isLogin}]
    let Authorization = token.create({
        user
    });
    res.set({
        // 让浏览器运行获取自定义响应头（必须设置Access-Control-Expose-Headers响应头，才能在前端js中获取自定义的响应头）
        'Access-Control-Expose-Headers': 'Authorization',
        'Authorization': Authorization
    });
    if (data.length > 0) {
        // 登录成功创建一个token
        res.send(formatData({
            data,msg:"登录成功"
        }));
    } 
})

module.exports = Router

