import axios from 'axios';
// 只是预创建对方接口
// 创建axios实例
const coinidex = axios.create({
    baseURL: 'http://m.coingogo.com/ajax/coin/coin_index.ashx'
});
// 二次封装(简化操作,维护方便)
async function get(params, config = {}) {
    let { datas } = await coinidex.get('', {
        ...config,
        params
    })
    return datas;


}

function post(data = {}, config = {}) {
    return coinidex.post('', datas, config)
}

export default {
    get,
    post
}