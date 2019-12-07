import axios from 'axios';
import { fapi } from '.';

// 创建axios实例
const nsg = axios.create({
  baseURL: 'http://localhost:3435/login/user'
});

// 二次封装(简化操作,维护方便)
async function get(params, config = {}) {
  let { data } = await nsg.get('', {
    ...config,
    params
  });

  return data;
}
function post(data, config = {}) {
  return nsg.post('', data, config);
}

export default {
  get,
  post
}