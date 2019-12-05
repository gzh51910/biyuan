const express = require('express');
const path = require('path');
const request = require('request');
const Router = express.Router();

// 引入数据库
// const mongodb = require('../db/mongodb');
// const {
//     formatData
// } = require('../utils')



// 服务器转发
// 由于是新闻资讯类，数据变化较大，本次demo不爬数据
// 发的数据和原网站一样
// parent 为自媒体目录的id值 
// page 为页数
// psize 为数量
// 资讯
Router.get('/news', async (req, qqq) => {
    let {
        page,
        parent,
        psize
    } =req.query
    request({
        url: 'http://m.coingogo.com/ajax/news/all.ashx',
        method: 'post',
        // timeout: 100,
        headers: {
            'Host': 'm.coingogo.com',
            'User-Agent': 'PostmanRuntime/7.20.1'
        },
        formData: {
            page,
            parent,
            psize
        }
    }, function (err, res, body) {
        body2 = JSON.parse(body)
        let {
            data
        } = body2
        let datalist = data.map(ele => {
            let {
                id,
                avatar,
                from,
                image,
                title,
                username,
                view_count,
                right,
                content
            } = ele
            avatar = `https://statics.coingogo.com/uploads/avatars/${avatar}`
            result = {
                id,
                avatar,
                from,
                image,
                title,
                username,
                view_count,
                right,
                content
            }
            return result
        })
        qqq.send(datalist)
    })
})

// 快讯
// 原网站的也很简单没做处理
// 发的数据和原网站一样 
// parent 为自媒体目录的id值 
// page 为页数
// psize 为数量
// 资讯
Router.get('/flash', async (req, qqq) => {
    let {
        page,
        parent,
        psize
    } =req.query
    request({
        url: 'http://m.coingogo.com/ajax/flash/index.ashx',
        method: 'post',
        timeout: 1000,
        headers: {
            'Host': 'm.coingogo.com',
            'User-Agent': 'PostmanRuntime/7.20.1'
        },
        formData: {
            page,
            parent,
            psize
        }
    }, function (err, res, body) {
        body2 = JSON.parse(body)
        let {
            data
        } = body2
      
        qqq.send(data)
    })
})
module.exports = Router