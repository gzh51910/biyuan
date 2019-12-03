const express = require('express');

const Router = express.Router();

// 引入数据库
const mongodb = require('../db/mongodb');
// const mongodb = require('../db/mongodb.js') ;
const {
    formatData
} = require('../utils')
// 

const colName = 'forum';

//查询所有
// Router.get('/forum', async (req, res) => {
//     // page     index
//     // 1        0
//     // 2        10
//     // 3        20
//     // 推导公式：index = (page-1)*size;
//     // 语句：find().skip(index).litmit(size)
//     let {
//         page=1, pagesize = 8, 
//     } = req.query;
// // console.log(type,page,pagesize);
//     // 根据分页和每页数量计算跳过的索引值
//     let index = (page - 1) * pagesize
//     // let type="地板"
//     // mongodb查询数据库
//     let data = await mongodb.find(colName,{},{skip:index,limit:pagesize});
//     // let data = await mongodb.find(colName,{type});
//     console.log(data);
//     res.send(formatData({data}))
// })

//分类
Router.get('/', async (req, res) => {
    let {fname} = req.query;
    let data = await mongodb.find(colName, {fname})
    res.send(formatData({data}))
})


module.exports = Router