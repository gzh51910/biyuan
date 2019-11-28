import axios from "axios";

// 创建axios实例
const news = axios.create({
    baseURL: "http://m.coingogo.com/ajax/news/cate_top.ashx"
});

// 二次封装(简化操作,维护方便)

function post(data, config = {}) {
    return news.post("", data, config);
}

export default {
    post
};
