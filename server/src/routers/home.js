const express = require('express');
const path = require('path');
const request = require('request');
const Router = express.Router();

// 引入数据库
const {
    formatData
} = require('../utils')



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
      
    } = req.query
    console.log(11);
    
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
            psize: 12
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
                content,
                created_at
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
                content,
                created_at
            }
            return result
        })

        qqq.send(formatData({
            data: datalist
        }))
    })
})

// 快讯
// 原网站的也很简单没做处理
// 发的数据和原网站一样 
// parent 为自媒体目录的id值 
// page 为页数
// psize 为数量
Router.get('/flash', async (req, qqq) => {
    let {
        page,
        parent,
        psize
    } = req.query
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
            psize: 10
        }
    }, function (err, res, body) {
        body2 = JSON.parse(body)
        let {
            data
        } = body2

        qqq.send(formatData({
            data
        }))
    })
})







// 微博 page 默认为1开始
// 需要page 

Router.get('/weibo', async (req, qqq) => {
    let {
        page,
    } = req.query
    request({
        url: 'http://m.coingogo.com/ajax/weibo/list.ashx',
        method: 'post',
        // timeout: 100,
        headers: {
            'Host': 'm.coingogo.com',
            'User-Agent': 'PostmanRuntime/7.20.1'
        },
        formData: {
            page,
            pagesize: 10
        }
    }, function (err, res, body) {
        body2 = JSON.parse(body)
        let {
            data
        } = body2
        console.log(data);

        let datalist = data.map(ele => {
            let {
                text,
                pic_urls,
                created_at
            } = ele
            let {
                avatar_large,
                cover_image,
                cover_image_phone,

                description,
                id,
                name,
                verified_reason,
                idstr

            } = ele.user
            result = {
                idstr,
                text,
                pic_urls,
                avatar_large,
                cover_image,
                cover_image_phone,
                created_at,
                description,
                id,
                name,
                verified_reason
            }
            return result
        })
        qqq.send(formatData({
            data: datalist
        }))
    })
})


// last_comment_time
// 论坛
// 传 page,catid,
Router.get('/article', async (req, qqq) => {
    let {
        page,
        catid,
    } = req.query
    request({
        url: 'http://m.coingogo.com/ajax/article/q2ndlist.ashx',
        method: 'post',
        // timeout: 100,
        headers: {
            'Host': 'm.coingogo.com',
            'User-Agent': 'PostmanRuntime/7.20.1'
        },
        formData: {
            page,
            catid,
            psize: 6
        }
    }, function (err, res, body) {
        body2 = JSON.parse(body)
        let {
            data
        } = body2
        let datalist = data.map(ele => {
            let {
                avatar,
                content,
                title,
                id,
                username,
                created_at,
                view_count,
                comment_count,
                rmb
            } = ele
            avatar = `https://statics.coingogo.com/uploads/avatars/${avatar}`
            result = {
                avatar,
                content,
                title,
                id,
                username,
                created_at,
                view_count,
                comment_count,
                rmb
            }
            return result
        })
        qqq.send(formatData({
            data: datalist
        }))
    })
})

Router.get('/article', async (req, qqq) => {
    let {
        page,
        catid,
    } = req.query
    request({
        url: 'http://m.coingogo.com/ajax/article/q2ndlist.ashx',
        method: 'post',
        // timeout: 100,
        headers: {
            'Host': 'm.coingogo.com',
            'User-Agent': 'PostmanRuntime/7.20.1'
        },
        formData: {
            page,
            catid,
            psize: 6
        }
    }, function (err, res, body) {
        body2 = JSON.parse(body)
        let {
            data
        } = body2
        let datalist = data.map(ele => {
            let {
                avatar,
                content,
                title,
                id,
                username,
                updated_at,
                view_count,
                comment_count,
                rmb
            } = ele
            avatar = `https://statics.coingogo.com/uploads/avatars/${avatar}`
            result = {
                avatar,
                content,
                title,
                id,
                username,
                updated_at,
                view_count,
                comment_count,
                rmb
            }
            return result
        })
        qqq.send(formatData({
            data: datalist
        }))
    })
})

// 币数据之币指数
// index_type: 1
// name: 
// page: 0
// pagesize: 1000
Router.get('/coin', async (req, qqq) => {
    let {
        name,
        page,
        index_type,
    } = req.query
    request({
        url: 'http://m.coingogo.com/ajax/coin/coin_index.ashx',
        method: 'post',
        // timeout: 100,
        headers: {
            'Host': 'm.coingogo.com',
            'User-Agent': 'PostmanRuntime/7.20.1'
        },
        formData: {
            index_type,
            name,
            page,
            pagesize: 1000
        }
    }, function (err, res, body) {
        body2 = JSON.parse(body)
        let {
            data
        } = body2
        qqq.send(
           body2
       )
    })
})
Router.get('/coin', async (req, qqq) => {
    let {
        name,
        page,
        index_type,
    } = req.query
    request({
        url: 'http://m.coingogo.com/ajax/coin/coin_index.ashx',
        method: 'post',
        // timeout: 100,
        headers: {
            'Host': 'm.coingogo.com',
            'User-Agent': 'PostmanRuntime/7.20.1'
        },
        formData: {
            index_type,
            name,
            page,
            pagesize: 1000
        }
    }, function (err, res, body) {
        body2 = JSON.parse(body)
        let {
            data
        } = body2
        qqq.send(
           body2
       )
    })
})


module.exports = Router