import localApi from "./local";
import biyuanApi from "./biyuan";
import newsApi from "./news";
import forumApi from "./forum";

export const local = localApi;
export const biyuan = biyuanApi;
export const news = newsApi;
export const fapi = forumApi;

export default {
    local,
    biyuan,
    news,
    fapi
};
