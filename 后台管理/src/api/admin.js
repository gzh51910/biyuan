import axios from 'axios';
// 只是预创建对方接口
// 创建axios实例
const local = axios.create({
    baseURL: 'http://m.coingogo.com/ajax'
});

function get(path,params,config={}){
    return local.get(path,{
        ...config,
        params
    })
}

function post(path,data={},config={}){
    return local.post(path,data,config)
}

export default {
    get,
    post
}