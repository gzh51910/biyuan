const express = require('express');

const Router = express.Router();

const proxy = require('http-proxy-middleware')

// 目标地址     ：http://www.egu365.com/head.action
// 前端访问地址 ：http://localhost:1910/proxy/egu/head.action
// 代理步骤：
// 1. http://localhost:1910/proxy/egu/head.action -> http://www.egu365.com/proxy/egu/head.action
// 2. http://www.egu365.com/proxy/egu/head.action -> http://www.egu365.com/head.action
let eguMiddleware = proxy({ 
    target: 'https://www.coingogo.com', 
    changeOrigin: true,
    pathRewrite: {
        '^/proxy/coingogo/': '/', // rewrite path
    },
});


// 实例拿社区的快讯
// 前端格式应为 
// 快讯接口 地址https://www.coingogo.com/flash/default/list

// let data=await biyuan.get('/flash/default/list',{
//     type:2,page:0
// })
// console.log(data);



Router.get('/coingogo/*',eguMiddleware)




module.exports = Router;