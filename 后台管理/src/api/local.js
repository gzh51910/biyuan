import axios from 'axios';
// 预创建本地所以暂时还不能用
// 创建axios实例
//  let baseURL='http://182.92.109.17:4564';
 let baseURL='http://localhost:3435';
const local = axios.create({
    baseURL:baseURL
});

function get(path,params,config={}){
    return local.get(path,{
        ...config,
        params
    })
};

function post(path,data={},config={}){
    return local.post(path,data,config)
};

function remove(path,params,config={} ){
    return local.delete(path,{
        ...config,
        params
    })
}
function patch(path,params,config={}){
    return local.patch(path,{
        ...config,
        params
    })
}

export default {
    get,
    post
    ,baseURL,
    remove,
    patch
}