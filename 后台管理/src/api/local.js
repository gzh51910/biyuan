import axios from 'axios';
// 预创建本地所以暂时还不能用
// 创建axios实例
const local = axios.create({
    baseURL: 'http://localhost:3435'
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