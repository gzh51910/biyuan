const express = require('express');

const Router = express.Router();

// 引入数据库
const mongodb = require('../db/mongodb');
const {
    formatData
} = require('../utils')

// 首页分页

Router.get('/fenye', async (req, res) => {
    let colName = 'fenye';
    let
        {index} = req.query
   let a= index*1
    let data = await mongodb.find(colName, {index:a})
    res.send(formatData({data}))
})

// 推荐页
Router.get('/', async (req, res) => {
    let colName = 'homecomand';
    let data = await mongodb.find(colName, {});
    res.send(formatData({
        data
    }))
})
// 分类
Router.get('/sorts', async (req, res) => {
    let colName = 'typeshop';
    let data = await mongodb.find(colName, {})
    res.send(formatData({data}))

})
// 分类列表页
Router.post('/sorts', async (req, res) => {
        let  {type,page=1,pagesize=10}= req.body
    // 表名
        let colName = 'xihuan';
        // 商品开始位置
        let index = (page-1)*pagesize
    let data = await mongodb.find(colName, {type},{skip:index,limit:pagesize})
    // console.log(data);
    res.send(formatData({data}))
})




module.exports = Router