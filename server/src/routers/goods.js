const express = require('express');

const Router = express.Router();

// 引入数据库
const mongodb = require('../db/mongodb');
// const mongodb = require('../db/mongodb.js') ;
const {
    formatData
} = require('../utils')
// 
const colName = 'xihuan';
// @查询所有商品
Router.get('/', async (req, res) => {
    // page     index
    // 1        0
    // 2        10
    // 3        20
    // 推导公式：index = (page-1)*size;
    // 语句：find().skip(index).litmit(size)
    
    let {
        page=1, pagesize = 8, type
    } = req.query;
console.log(type,page,pagesize);
    // 根据分页和每页数量计算跳过的索引值
    let index = (page - 1) * pagesize
    // let type="地板"
    // mongodb查询数据库
    let data = await mongodb.find(colName,{type},{skip:index,limit:pagesize});
    // let data = await mongodb.find(colName,{type});
    res.send(formatData({data}))

})




// 增加商品

Router.post('/',async (req,res)=>{

  let  {type,imgsrc,name,id,desc,level,price}=req.body
    // 写入数据：
   
    let data = await mongodb.create(colName,{type,imgsrc,name,id,desc,level,price});
   
    res.send(formatData({data}))
})

// 删除商品
Router.delete('/:id',async (req,res)=>{
    // let {id} = req.params;
    // // 看数据库的id是否为数字  id=id*1
    // let data = await mongodb.remove(colName,{id});
    // res.send(formatData({data}))
    
    let {id} = req.params;
    console.log(id);

    // console.log(typeof(id));
    // 查询数据：
    //  看数据库的id是否为数字  id=id*1

    let data = await mongodb.remove(colName,{id});
    // if (data.data) {
console.log(data);
if (data.length>0) {
    res.send(formatData({data}))
}else{
    id=id*1
     data = await mongodb.find(colName,{id});
}
res.send(formatData({data}))
})



//  查询单个商品
Router.get('/:id',async(req,res)=>{
    
    let {id} = req.params;
    // console.log(typeof(id));
    // 查询数据：
    //  看数据库的id是否为数字  id=id*1

    let data = await mongodb.find(colName,{id});
    // if (data.data) {
console.log(data);
if (data.length>0) {
    res.send(formatData({data}))
}else{
    id=id*1
     data = await mongodb.find(colName,{id});
}
res.send(formatData({data}))
})


// const colName = 'xixi';

// 更新商品
// 根据id或者名字修改修改
// 只能用谗言字符串传id然后用post 一样从发送数据
// {type,imgsrc,desc,level,price}需要全部传否则没传的值会变null
Router.patch('/id',async (req,res)=>{
    let {id} = req.params;
    let {type,imgsrc,desc,level,price} =req.body 
    let data = await mongodb.update(colName,{id},{type,imgsrc,desc,level,price});
    res.send(formatData({data}))
})









module.exports = Router