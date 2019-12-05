
import localApi from "./local";
import biyuanApi from "./biyuan";
import newsApi from "./news";
import forumApi from "./forum";
import coinindexApi from './coinindex';

export const local = localApi;
export const biyuan = biyuanApi;
export const news = newsApi;
export const fapi = forumApi;
export const coinindex = coinindexApi;

export default {
    local,
    biyuan,

    coinindex,
    news,
    fapi
}




