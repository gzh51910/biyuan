const express = require('express');

const Router = express.Router();


const mongodb = require('../db/mongodb');
const {
    formatData,
    token
} = require('../utils');

//登录 后台管理
Router.post('/admin', async (req, res) => {
    const colName = 'admin'
    let {
        username,
        psw
    } = req.body;

    let data = await mongodb.find(colName, {
        username,
        psw
    });


    // 处理不让密码暴露

    if (data.length > 0) {
        let Authorization = token.create({
            username
        });
        let {
            displayName,
            avatar,
            role,
            isLogin
        } = data[0]
        data = [{
            displayName,
            avatar,
            role,
            isLogin
        }]

        console.log(111, Authorization);
        // 登录成功创建一个token
        res.set({
            // 让浏览器运行获取自定义响应头（必须设置Access-Control-Expose-Headers响应头，才能在前端js中获取自定义的响应头）
            'Access-Control-Expose-Headers': 'Authorization',
            'Authorization': Authorization
        });
        res.send(formatData({
            data,
            msg: "登录成功"
        }));
    } else {
        res.send(formatData({
            status: 0
        }));
    }
})


// // // // // // // // // // // // // // // // // // // // // // // // 
// 登录 前端登录

// 前端  登录login

Router.post('/user', async (req, res) => {
    const colName = 'user'
    let {
        phone,
        psw
    } = req.body;
    let msg = '失败，';
    let data = await mongodb.find(colName, {
        phone,
        psw
    });

    // 处理不让密码暴露
    if (data.length > 0) {
        let Authorization = token.create({
            username
        });
        let {
            email,
            phone,
            username,
            name,
            level,
            status,
            avatar
        } = data[0]
        data = [{
            email,
            phone,
            username,
            name,
            level,
            status,
            avatar
        }]
        console.log(111, Authorization);
        // 登录成功创建一个token
        res.set({
            // 让浏览器运行获取自定义响应头（必须设置Access-Control-Expose-Headers响应头，才能在前端js中获取自定义的响应头）
            'Access-Control-Expose-Headers': 'Authorization',
            'Authorization': Authorization
        });
        res.send(formatData({
            data,
            msg: "登录成功"
        }));
    } else {
        res.send(formatData({
            status: 0
        }));
    }
})

module.exports = Router